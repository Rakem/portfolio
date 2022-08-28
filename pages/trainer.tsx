import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
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
  const [scale, setScale] = useState<string>('C')
  const [modifier, setModifier] = useState<string>()
  const [type, setType] = useState<string>()
  const [frequency, setFrequency] = useState(2)
  const [big, setBig] = useState(true)
  const loadNext = () => {
    setBig(true)
    const nextScaleIndex = randomInt(scales.length)
    const nextScale = scales[nextScaleIndex]
    const nextModifierIndex = randomInt(nextScale.modifiers.length + 1)

    const nextTypeIndex = randomInt(types.length)
    setScale(nextScale.key)
    setModifier(nextScale.modifiers[nextModifierIndex] ?? '')
    setType(types[nextTypeIndex])
    setTimeout(() => setBig(false), 1)
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
    <div className="h-100vh mt-32 flex flex-col items-center justify-center">
      <div className="relative h-32 w-96">
        <div
          style={
            !big ? { transitionDuration: `${frequency * 1000 - 100}ms` } : {}
          }
          className={clsx(
            'absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200 opacity-50 ',
            !big && 'scale-[0.1] transition-all ease-linear'
          )}
        />
        <div className="absolute left-1/2  top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
          <h1 className=" white block whitespace-nowrap text-8xl text-seagreen-900">
            <span className="font-bold">{scale}</span>
            {modifier}
            {(modifier || type) && ' '}
            {type}
            <sup className="">7</sup>
          </h1>
        </div>
      </div>
      <div className="mt-32 flex flex-col items-center rounded bg-white p-16 shadow-md">
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
          className="mt-8 rounded bg-seagreen-100 px-16 py-8 text-2xl font-bold text-seagreen-800"
        >
          next
        </button>
      </div>
    </div>
  )
}

export default Trainer
