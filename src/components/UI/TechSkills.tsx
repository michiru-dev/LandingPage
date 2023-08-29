import React from 'react'
import { techSkills } from '@/const/skills'
import { CategoryType, TechSkillType } from '@/types/techSkillsTypes'
import Skills from './Skills'

function TechSkills({ category }: { category: CategoryType }) {
  return (
    <div className='flex'>
      <div className='flex flex-wrap gap-3 mb-3'>
        {techSkills[category].map((item: TechSkillType) => {
          return <Skills key={item.name} {...item} />
        })}
      </div>
    </div>
  )
}

export default TechSkills
