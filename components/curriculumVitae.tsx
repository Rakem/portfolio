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
  {
    employer: 'Otto-von-Guericke-Universität Magdeburg (Master Informatik)',
    dates: ' 2011 - 2017',
    link: 'https://www.ovgu.de',
  },
]

function CurriculumVitae({ className }: { className?: String }) {
  return (
    <div className={clsx('flex-1 shadow-inner overflow-hidden', className)}>
      <h2 className="p-8 text-2xl font-bold sm:p-12 sm:text-5xl">
        Curriculum Vitae
      </h2>
      {data.map(({ employer, dates, link }, index) => (
        <a href={link} target="_blank" rel="noreferrer" key={employer}>
          <div className="flex flex-row items-center p-5 pl-8 hover:bg-gray-700 border-b hover:border-gray-500 border-gray-700 sm:pl-12">
            {index === 0 && <div className="mr-5 text-xl font-bold">{'>'}</div>}
            <div>
              <h4 className="text-xl">{employer}</h4>
              <span>{dates}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default CurriculumVitae
