import React, { ReactNode } from 'react'

function Section({ children, id }: { children: ReactNode; id: string }) {
  return (
    <section className='mb-40 pt-[80px] mt-[-80px]' id={id}>
      {children}
    </section>
  )
}

export default Section
