import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'

function ProjectDetails({ project }: { project: any }) {
  return (
    <div className='px-[10px]'>
      <div className='flex align-center font-decol gap-4'>
        <h2 className='text-xl font-bold'>{project.title}</h2>
        <div className='flex gap-2'>
          <Link
            href={project.repoUrl}
            rel='noreferrer noopener'
            target='_blank'
            className='hover:opacity-50  hover:scale-[1.2] transition-all duration-200 ease-in-out '
          >
            <BsGithub size={25} />
          </Link>
          <Link
            href={project.url}
            rel='noreferrer noopener'
            target='_blank'
            className='hover:opacity-50  hover:scale-[1.2] transition-all duration-200 ease-in-out'
          >
            <AiOutlineLink size={25} />
          </Link>
        </div>
      </div>
      <div className='flex gap-2 mt-2 mb-5 flex-wrap'>
        {project.skills.map((skill: string, index: number) => {
          return (
            <div
              key={index}
              className='w-fit rounded-full flex items-center justify-center 
            text-md shadow-md text-black border border-white bg-white/20'
            >
              <p className='px-2'>{skill}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectDetails
