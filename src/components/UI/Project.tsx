import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'

function Project({ project }: { project: any }) {
  return (
    <div
      className='transition-all ease-in duration-300 cursor-pointer top-0 pr-8 pl-8 
     mb-4 rounded-xl shadow-md border border-white bg-white/10'
    >
      <div className='cursor-auto flex justify-between gap-10 py-3  transition-all duration-200 ease-in-out'>
        <Link
          href={project.url}
          rel='noreferrer noopener'
          target='_blank'
          className='relative max-w-[100%] h-[300px] min-w-[500px] hover:scale-[1.3] transition-all duration-200 ease-in-out'
        >
          <Image
            src={`/${project.src}.gif`}
            alt={project.src}
            layout='fill'
            className='rounded-2xl '
          />
        </Link>
        <div>
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
          <div className='flex gap-2'>
            {project.skills.map((skill: string, index: number) => {
              return <p key={index}>{skill}</p>
            })}
          </div>
          <p className='text-base '>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Project
