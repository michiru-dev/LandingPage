import Section from '@/components/UI/Section'
import SectionTitle from '@/components/UI/SectionTitle'
import WorkExperience from '@/components/UI/WorkExperience'
import { contents } from '@/const/contents'
import { workExperience } from '@/const/workExperience'
import React from 'react'

function WorkExperiences() {
  return (
    <Section id={contents.workExperience.en}>
      <SectionTitle title={contents.workExperience.jp} />
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
