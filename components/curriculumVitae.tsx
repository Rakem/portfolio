import React from 'react'
import clsx from 'clsx'

const data = [
  {
    employer: 'UniNow GmbH',
    dates: 'Januar 2020 - jetzt',
    link: 'https://uninow.de',
  },
  {
    employer: 'IBM CIC Germany GmbH',
    dates: 'Dezember 2017 - Dezember 2019',
    link: 'https://www.ibm.com/employment/ciceurope/de-de',
  },
  {
    employer: 'Volkswagen AG',
    dates: 'August 2016 - September 2017',
    link: 'https://www.volkswagen.de/de.html',
  },
]

function CurriculumVitae({ className }: { className?: String }) {
  return (
    <div
      className={clsx(
        'bg-white rounded-md shadow-inner overflow-hidden ',
        className
      )}
    >
      {data.map(({ employer, dates, link }) => (
        <a href={link} target="_blank" rel="noreferrer">
          <div className="p-5 hover:bg-gray-100 border-b">
            <h4 className="text-xl">{employer}</h4>
            <span>{dates}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default CurriculumVitae
