import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function ProjectGifLink({ project }: { project: any }) {
  return (
    <Link
      href={project.url}
      rel='noreferrer noopener'
      target='_blank'
      className='relative max-w-[500px] h-[200px] min-w-[300px] lg:min-w-[500px] lg:h-[300px] hover:scale-[1.3] transition-all duration-200 ease-in-out'
    >
      <Image
        src={`/${project.src}.gif`}
        alt={project.src}
        layout='fill'
        className='rounded-2xl hover:shadow-lg'
      />
    </Link>
  )
}

export default ProjectGifLink
