import { WorkExperienceType } from '@/types/workExperienceTypes'
import React from 'react'
import { hoverFlowClass } from './NavbarContents'

const dotLineOuterDivClass =
  'flex justify-center items-center absolute right-[30%] py-3'
const dotLineInnerDivClass =
  'h-[65px] border-dotted border-l-4 border-slate-300 mx-4 h-1'

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
    <div className='relative h-[125px] w-fit'>
      <div className='flex gap-10  items-center'>
        <p className='font-decol w-[100px]'>{experience.date}</p>
        <div
          className={` ${hoverFlowClass} flex flex-col justify-center items-center border border-solid border-slate-300 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[2px] rounded-bl-[2px] w-[350px] h-[80px] p-3`}
        >
          <p> {experience.name}</p>
          <p>{experience.moreInfo}</p>
        </div>
      </div>

      {index !== workExperience.length - 1 && (
        <div className={dotLineOuterDivClass}>
          <div className={dotLineInnerDivClass} />
        </div>
      )}
    </div>
  )
}

export default WorkExperience
