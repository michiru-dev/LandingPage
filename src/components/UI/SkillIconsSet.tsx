import { TechSkillType } from '@/types/techSkillsTypes'
import React from 'react'
import Image from 'next/image'

function SkillIconsSet({ name, icon, className }: TechSkillType) {
  return (
    <div
      className={`${className} flex gap-1 justify-center items-center align-middle px-3 font-syne font-medium w-fit rounded-full  
text-md shadow-md text-black border border-white bg-white/20`}
      key={name}
    >
      {typeof icon !== 'undefined' && (
        <Image src={icon} width={18} height={18} alt={name} />
      )}
      <p>{name}</p>
    </div>
  )
}

export default SkillIconsSet
