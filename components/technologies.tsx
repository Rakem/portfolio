import React from 'react'
import clsx from 'clsx'

const data = [
  { icon: 'javascript', label: 'javascript' },
  { icon: 'typescript', label: 'typescript' },
  { icon: 'nextjs', label: 'nextjs' },
  { icon: 'react', label: 'react' },
  { icon: 'react', label: 'react-native' },
  { icon: 'git', label: 'git' },
  { icon: 'mongodb', label: 'mongodb' },
  { icon: 'postgresql', label: 'postgres' },
  { icon: 'github', label: 'github' },
  { icon: 'graphql', label: 'graphql' },
  { icon: 'apple', label: 'apple' },
  { icon: 'android', label: 'android' },
  { icon: 'swift', label: 'swift' },
  { icon: 'kubernetes', label: 'kubernetes' },
]

function Technologies({ className }: { className?: String }) {
  return (
    <div
      className={clsx(
        ' space-between flex flex-row flex-wrap items-center justify-center pt-10',
        className
      )}
    >
      {data.map(({ icon, label }) => (
        <div
          className="flex flex-col items-center mb-10 w-20 text-white transform hover:scale-110 transition-transform duration-200 sm:w-1/4 lg:w-32"
          key={icon}
        >
          <i className={`devicon-${icon}-plain  text-4xl sm:text-6xl`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export default Technologies
