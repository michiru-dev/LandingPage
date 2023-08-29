import Section from '@/components/UI/Section'
import WorkExperience from '@/components/UI/WorkExperience'
import { contents } from '@/const/contents'
import { workExperience } from '@/const/workExperience'
import React from 'react'

function WorkExperiences() {
  return (
    <Section id='workExperience'>
      <h1 className='text-2xl font-decol font-bold mb-2'>
        {contents.workExperience.jp}
      </h1>
      <div className='flex flex-col lg:flex-row justify-between font-kaisei'>
        {workExperience.map((ex, index) => {
          return (
            <WorkExperience
              key={index}
              experience={ex}
              index={index}
              workExperience={workExperience}
            />
          )
        })}
      </div>
    </Section>
  )
}

export default WorkExperiences
