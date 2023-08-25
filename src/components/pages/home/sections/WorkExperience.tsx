import { contents } from '@/const/contents'
import { workExperience } from '@/const/workExperience'
import React from 'react'

const dotLineOuterDivClass = 'hidden lg:flex justify-center items-center'
const dotLineInnerDivClass =
  'w-[100px] border-dotted border-t-4 border-black mx-4 h-1'

function WorkExperience() {
  return (
    <section id='workExperience' className='mb-40 pt-[80px] mt-[-80px]'>
      <h1 className='text-2xl font-decol font-bold mb-2'>
        {contents.workExperience.jp}
      </h1>
      <div className='flex flex-col lg:flex-row justify-between font-kaisei'>
        {workExperience.map((ex, index) => {
          return (
            <React.Fragment key={index}>
              <div className='mb-5 lg:mb-0'>
                <p className='border-b-[1px] w-fit font-decol'>{ex.date}</p>
                <p> {ex.name}</p>
              </div>
              {index !== workExperience.length - 1 && (
                <div className={dotLineOuterDivClass}>
                  <div className={dotLineInnerDivClass} />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default WorkExperience
