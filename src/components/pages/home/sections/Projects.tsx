import Project from '@/components/UI/Project'
import React from 'react'
import { projectsList } from '@/const/projects'
import { contents } from '@/const/contents'
import { ProjectListProps } from '@/types/projectTypes'
import Section from '@/components/UI/Section'

function Projects() {
  return (
    <Section id='projects'>
      <h1 className='text-2xl font-bold font-decol mb-6'>
        {contents.projects.jp}
      </h1>
      <div className='flex flex-col lg:block lg:overflow-x-scroll whitespace-nowrap '>
        {projectsList.map((project: ProjectListProps) => {
          return <Project key={project.title} project={project} />
        })}
      </div>
    </Section>
  )
}

export default Projects
