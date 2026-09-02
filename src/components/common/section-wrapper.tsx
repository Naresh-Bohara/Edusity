import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const SectionWrapper = ({ children, className = '', id }: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper