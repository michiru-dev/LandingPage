import React from 'react'
import ProjectGifLink from './ProjectGifLink'
import ProjectDetails from './ProjectDetails'

function Project({ project }: { project: any }) {
  return (
    <div
      className='inline-block mr-4 w-[800px] h-[580px] transition-all ease-in duration-300 cursor-pointer top-0 pr-8 pl-8 
     mb-4 rounded-xl shadow-md border border-white  bg-gray-300/40'
    >
      <div
        className={`flex flex-col gap-5 px-10 py-5 cursor-auto  transition-all duration-200 ease-in-out`}
      >
        <ProjectDetails project={project} />
        <div className='h-[300px] flex justify-center'>
          <ProjectGifLink project={project} />
        </div>

        <div className='text-base whitespace-pre-wrap'>
          {project.description}
        </div>
      </div>
    </div>
  )
}

export default Project
