import React from 'react'
import { TechSkillType } from '@/types/techSkillsTypes'
import Skills from './SkillIconsSet'

function TechSkills({ category }: { category: TechSkillType[] }) {
  return (
    <div className='flex'>
      <div className='flex flex-wrap gap-3 mb-3'>
        {category.map((item: TechSkillType) => {
          return <Skills key={item.name} {...item} />
        })}
      </div>
    </div>
  )
}

export default TechSkills
