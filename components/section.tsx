import React, { ReactNode } from 'react'
import clsx from 'clsx'

function Section({
  className,
  children,
}: {
  className: String
  children: ReactNode
}) {
  return (
    <section
      className={clsx(
        'sm:scroll-child relative p-8 min-h-screen sm:p-12',
        className
      )}
    >
      {children}
      <div className="absolute bottom-12 left-0 right-0 mx-auto w-12 h-12 border-b-8 border-l-8 border-white transform -rotate-45" />
    </section>
  )
}

export default Section
