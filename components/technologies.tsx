import React from 'react'
import clsx from 'clsx'

const data = [
  { icon: 'javascript', label: 'javascript' },
  { icon: 'typescript', label: 'typescript' },
  { icon: 'nextjs', label: 'nextjs' },
  { icon: 'react', label: 'react' },
  { icon: 'mongodb', label: 'mongodb' },
  { icon: 'git', label: 'git' },
  { icon: 'github', label: 'github' },
  { icon: 'graphql', label: 'graphql' },
  { icon: 'apple', label: 'apple' },
  { icon: 'android', label: 'android' },
  { icon: 'swift', label: 'swift' },
  { icon: 'java', label: 'java' },
]

function Technologies({ className }: { className?: String }) {
  return (
    <div
      className={clsx(
        ' space-between flex flex-row flex-wrap items-center ',
        className
      )}
    >
      {data.map(({ icon, label }) => (
        <div
          className="flex flex-col items-center mb-10 w-1/3 text-white transform hover:scale-110 transition-transform duration-200 sm:w-1/4 lg:w-1/6"
          key={icon}
        >
          <i className={`devicon-${icon}-plain  text-4xl sm:text-8xl`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export default Technologies
