import React from 'react'
import ProjectGifLink from './ProjectGifLink'
import ProjectDetails from './ProjectDetails'

function Project({ project, isEven }: { project: any; isEven: boolean }) {
  return (
    <div
      className='transition-all ease-in duration-300 cursor-pointer top-0 pr-8 pl-8 
     mb-4 rounded-xl shadow-md border border-white bg-white/10'
    >
      <div
        className={`flex justify-between gap-20 py-4 cursor-auto  transition-all duration-200 ease-in-out`}
      >
        <ProjectGifLink project={project} />
        <ProjectDetails project={project} />
      </div>
    </div>
  )
}

export default Project
