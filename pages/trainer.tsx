import React, { useEffect, useState } from 'react'
import Timeout = NodeJS.Timeout

const scales = [
  { key: 'C', modifiers: ['#'] },
  { key: 'D', modifiers: ['#', 'b'] },
  { key: 'E', modifiers: ['b'] },
  { key: 'F', modifiers: ['#'] },
  { key: 'G', modifiers: ['#', 'b'] },
  { key: 'A', modifiers: ['#', 'b'] },
  { key: 'B', modifiers: ['b'] },
]
const types = ['maj', 'm', '']

const randomInt = (max) => Math.floor(Math.random() * max)
function Trainer() {
  const [scale, setScale] = useState<string>()
  const [modifier, setModifier] = useState<string>()
  const [type, setType] = useState<string>()
  const [frequency, setFrequency] = useState(2)
  const loadNext = () => {
    const nextScaleIndex = randomInt(scales.length)
    const nextScale = scales[nextScaleIndex]
    const nextModifierIndex = randomInt(nextScale.modifiers.length + 1)

    const nextTypeIndex = randomInt(types.length)
    setScale(nextScale.key)
    setModifier(nextScale.modifiers[nextModifierIndex] ?? '')
    setType(types[nextTypeIndex])
  }
  useEffect(() => {
    let interval: Timeout = null
    if (frequency > 0) {
      interval = setInterval(loadNext, frequency * 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [frequency])
  return (
    <div className="h-100vh flex flex-col items-center justify-center mt-32">
      <h1 className="text-seagreen-900 text-8xl">
        <span className="font-bold">{scale}</span>
        {modifier}
        {(modifier || type) && ' '}
        {type}
        <sup className="">7</sup>
      </h1>
      <div className="flex flex-col items-center mt-32 p-16 bg-white rounded shadow-md">
        <span className="mb-6 text-xl">{frequency}s</span>
        <input
          type="range"
          min="0"
          max="15"
          value={frequency}
          step="1"
          onChange={(event) => setFrequency(parseInt(event.target.value, 10))}
        />
        <button
          onClick={() => loadNext()}
          type="button"
          className="mt-8 px-16 py-8 text-seagreen-800 text-2xl font-bold bg-seagreen-100 rounded"
        >
          next
        </button>
      </div>
    </div>
  )
}

export default Trainer
