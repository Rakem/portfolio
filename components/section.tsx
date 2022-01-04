import React, { ReactNode } from 'react'
import clsx from 'clsx'

function Section({
  className,
  children,
  arrow,
}: {
  className: String
  children: ReactNode
  arrow?: boolean
}) {
  return (
    <section
      className={clsx(
        'sm:scroll-child relative mx-auto px-8 py-12 max-w-screen-xl min-h-screen sm:px-12 sm:py-32',
        className
      )}
    >
      {children}
      {arrow && (
        <div className="absolute bottom-12 left-0 right-0 mx-auto w-12 h-12 border-b-8 border-l-8 border-white transform -rotate-45" />
      )}
    </section>
  )
}

export default Section
