import React from 'react'
import { isPast } from 'date-fns'
import Confetti from 'react-confetti'

function Blub() {
  const dates = [
    new Date(2021, 6, 5, 15),
    new Date(2021, 6, 7, 16),
    new Date(2021, 6, 9, 15),
    new Date(2021, 6, 12, 14),
    new Date(2021, 6, 14, 9),
    new Date(2021, 6, 16, 12),
    new Date(2021, 6, 21, 10),
    new Date(2021, 6, 23, 10),
    new Date(2021, 6, 26, 15),
  ]
  const passed = dates.filter((date) => isPast(date))
  const percentage = Math.round((passed.length / dates.length) * 100)
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-b from-gray-700 to-gray-900">
      {percentage > 99 && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 1000}
          height={1000}
        />
      )}
      <div className="mb-10 text-white text-2xl">
        Wie viel hast du schon geschafft?
      </div>
      <div className="relative w-full max-w-screen-md h-16 bg-white rounded">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full bg-gradient-to-r from-seagreen-500 to-seagreen-800"
        />
        <div className="text-shadow-sm absolute inset-0 flex items-center justify-center text-2xl font-semibold">
          <div>{percentage} %</div>
        </div>
      </div>
    </div>
  )
}

export default Blub
