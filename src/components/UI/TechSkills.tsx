import React from 'react'
import Image from 'next/image'
import { techSkills } from '@/const/skills'

type CategoryProps = 'languages' | 'frameworks' | 'databases' | 'others'

function TechSkills({
  category,
}: {
  category: CategoryProps
  categoryJp: string
}) {
  return (
    <div className='flex'>
      <div className='flex flex-wrap gap-3 mb-3'>
        {techSkills[category].map((item: any) => {
          return (
            <div
              className='flex gap-1 justify-center items-center align-middle px-3 font-syne font-medium w-fit rounded-full  
          text-md shadow-md text-black border border-white bg-white/20'
              key={item.name}
            >
              <Image src={item.icon} width={18} height={18} alt={item.name} />
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechSkills
