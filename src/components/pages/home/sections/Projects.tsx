import Project from '@/components/UI/Project'
import React from 'react'
import Image from 'next/image'
import { projectsList } from '@/const/projects'

function Projects() {
  return (
    <section id='projects' className='mt-[1rem]'>
      <h1 className='text-2xl font-bold font-decol'>プロジェクト</h1>
      {projectsList.map((project: any) => {
        return <Project key={project.title} project={project} />
      })}
    </section>
  )
}

export default Projects
