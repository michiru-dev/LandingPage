import React from 'react'
import TechSkills from './TechSkills'
import { techSkills } from '@/const/skills'
import { CategoryType } from '@/types/techSkillsTypes'

function Skills() {
  const cateogoryArr = Object.keys(techSkills) as CategoryType[]

  return (
    <div>
      <h1 className='text-xl font-bold font-decol mb-2'>スキル</h1>
      {cateogoryArr.map((category) => (
        <TechSkills key={category} category={techSkills[category]} />
      ))}
    </div>
  )
}

export default Skills
