import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ProjectListProps } from '@/types/projectTypes'

function ProjectGifLink({ project }: { project: ProjectListProps }) {
  return (
    <Link
      href={project.url}
      rel='noreferrer noopener'
      target='_blank'
      className='relative max-w-[500px] h-[200px] min-w-[300px] md:min-w-[400px] min-[960px]:min-w-[500px] md:h-[300px] hover:scale-[1.3] transition-all duration-200 ease-in-out'
    >
      <Image
        src={`/${project.src}.gif`}
        alt={project.src}
        fill
        sizes='(max-width: 1023px) 300px, 500px'
        className='rounded-2xl hover:shadow-lg'
      />
    </Link>
  )
}

export default ProjectGifLink
