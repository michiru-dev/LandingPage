import React from 'react'
import ProjectGifLink from './ProjectGifLink'
import ProjectDetails from './ProjectDetails'

import { ProjectListProps } from '@/types/projectTypes'
import { sanitizer } from '@/const/sanitizer'

function Project({ project }: { project: ProjectListProps }) {
  const sanitizedHTML = sanitizer(project.description)

  return (
    <div className='w-full flex justify-center'>
      <div
        className='inline-block md:h-[650px] min-[1210px]:h-[600px] md:w-[95%] min-[1360px]:h-[580px] transition-all ease-in duration-300 cursor-pointer top-0 lg:pr-8 lg:pl-8
     mb-4 rounded-xl shadow-md border border-white  bg-gray-300/40'
      >
        <div className='flex flex-col gap-5 lg:px-10 py-5 cursor-auto transition-all duration-200 ease-in-out'>
          <ProjectDetails project={project} />
          <div className='h-[200px] md:h-[300px] flex justify-center'>
            <ProjectGifLink project={project} />
          </div>

          <p
            className='text-sm md:text-base whitespace-pre-wrap mx-[10px] lg:mx-0'
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          ></p>
        </div>
      </div>
    </div>
  )
}

export default Project
