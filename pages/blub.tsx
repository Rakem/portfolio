import React, { useState, useEffect } from 'react'
import { isPast, differenceInMilliseconds } from 'date-fns'
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
  const calculatePercentage = () => {
    const passed = dates.filter((date) => isPast(date))
    return Math.round((passed.length / dates.length) * 100)
  }
  const calculateTimePercentage = () => {
    const difference = differenceInMilliseconds(
      dates[0],
      dates[dates.length - 1]
    )
    const passedDifference = differenceInMilliseconds(dates[0], new Date())
    return Math.min(Math.round((passedDifference / difference) * 100), 100)
  }
  const calculateDatePercentage = (date) => {
    const difference = differenceInMilliseconds(
      dates[0],
      dates[dates.length - 1]
    )
    const dateDifference = differenceInMilliseconds(dates[0], date)
    return Math.min(Math.round((dateDifference / difference) * 100), 100)
  }
  const [percentage, setPercentage] = useState(calculatePercentage())
  const [timePercentage, setTimePercentage] = useState(
    calculateTimePercentage()
  )
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(calculatePercentage())
      setTimePercentage(calculateTimePercentage())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
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
      <div className="relative w-full max-w-screen-md bg-white rounded-t overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className="h-16 bg-gradient-to-r from-seagreen-500 to-seagreen-800"
        />
        <div className="text-shadow-sm absolute inset-0 flex items-center justify-center text-2xl font-semibold">
          <div>{percentage} %</div>
        </div>
      </div>
      <div className="relative w-full max-w-screen-md bg-gray-200 rounded-b overflow-hidden">
        <div
          style={{ width: `${timePercentage}%` }}
          className="h-3 bg-gradient-to-r from-sepia-300 to-sepia-400"
        />
        {dates.map((date) => (
          <div
            key={date.toISOString()}
            className="absolute top-0 -mx-1 w-2 h-full bg-chocolate-500"
            style={{ left: `${calculateDatePercentage(date)}%` }}
          />
        ))}
      </div>
    </div>
  )
}

export default Blub
