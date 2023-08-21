import Project from '@/components/UI/Project'
import React from 'react'
import { projectsList } from '@/const/projects'

function Projects() {
  return (
    <section id='projects' className='mt-[1rem] mb-20'>
      <h1 className='text-2xl font-bold font-decol mb-6'>プロジェクト</h1>
      <div className='overflow-x-scroll whitespace-nowrap '>
        {projectsList.map((project: any) => {
          return <Project key={project.title} project={project} />
        })}
      </div>
    </section>
  )
}

export default Projects
