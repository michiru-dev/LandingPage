import { WorkExperienceType } from '@/types/workExperienceTypes'
import React from 'react'

const dotLineOuterDivClass = 'hidden xl:flex justify-center items-center'
const dotLineInnerDivClass =
  'w-[65px] border-dotted border-t-4 border-black mx-4 h-1'

type WorkExperienceProps = {
  experience: WorkExperienceType
  index: number
  workExperience: WorkExperienceType[]
}

function WorkExperience({
  experience,
  index,
  workExperience,
}: WorkExperienceProps) {
  return (
    <React.Fragment key={index}>
      <div className='mb-5 lg:mb-0'>
        <p className='border-b-[1px] w-fit font-decol'>{experience.date}</p>
        <p> {experience.name}</p>
        <p>{experience.moreInfo}</p>
      </div>
      {index !== workExperience.length - 1 && (
        <div className={dotLineOuterDivClass}>
          <div className={dotLineInnerDivClass} />
        </div>
      )}
    </React.Fragment>
  )
}

export default WorkExperience
