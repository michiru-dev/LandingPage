import React from 'react'
import ProjectGifLink from './ProjectGifLink'
import ProjectDetails from './ProjectDetails'

function Project({ project }: { project: any }) {
  return (
    <div
      className='inline-block lg:mr-4 lg:w-[800px] lg:h-[580px] transition-all ease-in duration-300 cursor-pointer top-0 lg:pr-8 lg:pl-8 
     mb-4 rounded-xl shadow-md border border-white  bg-gray-300/40'
    >
      <div className='flex flex-col gap-5 lg:px-10 py-5 cursor-auto transition-all duration-200 ease-in-out'>
        <ProjectDetails project={project} />
        <div className='h-[200px] lg:h-[300px] flex justify-center'>
          <ProjectGifLink project={project} />
        </div>

        <div className='text-sm lg:text-base whitespace-pre-wrap mx-[10px] lg:mx-0'>
          {project.description}
        </div>
      </div>
    </div>
  )
}

export default Project

{
  /* <Link
className='font-bold'
rel='noreferrer noopener'
target='_blank'
href='https://github.com/michiru-dev/HR-App-MySQL'
>
こちら
</Link> */
}
