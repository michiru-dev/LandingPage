import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'
import { ProjectListProps } from '@/types/projectTypes'
import Skills from './SkillIconsSet'

function ProjectDetails({ project }: { project: ProjectListProps }) {
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
          return <Skills key={index} name={skill} className='font-thin' />
        })}
      </div>
    </div>
  )
}

export default ProjectDetails
