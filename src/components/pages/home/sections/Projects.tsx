import Project from '@/components/UI/Project'
import React from 'react'
import { projectsList } from '@/const/projects'
import { contents } from '@/const/contents'

function Projects() {
  return (
    <section id='projects' className='mb-40 pt-[80px] mt-[-80px]'>
      <h1 className='text-2xl font-bold font-decol mb-6'>
        {contents.projects.jp}
      </h1>
      <div className='flex flex-col lg:block lg:overflow-x-scroll whitespace-nowrap '>
        {projectsList.map((project: any) => {
          return <Project key={project.title} project={project} />
        })}
      </div>
    </section>
  )
}

export default Projects
