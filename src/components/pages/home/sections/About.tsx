import React from 'react'
import Image from 'next/image'
import { aboutMe, profilePic } from '@/const/aboutMe'
import { contents } from '@/const/contents'
import Skills from '@/components/UI/Skills'
import Section from '@/components/UI/Section'
import SectionTitle from '@/components/UI/SectionTitle'

function About() {
  return (
    <Section id='aboutMe'>
      <SectionTitle title={contents.aboutMe.jp} />
      <div className='clearfix lg:flex lg:flex-row-reverse lg:gap-[74px]'>
        <div
          style={{ shapeOutside: 'circle()', clipPath: 'circle()' }}
          className='float-none min-[425px]:float-right lg:float-none relative h-[200px] w-[200px] lg:h-[450px] lg:min-w-[450px] mb-8 lg:mb-0 ml-8'
        >
          <Image
            src={profilePic.src}
            alt={profilePic.alt}
            layout='fill'
            className='drop-shadow-2xl'
          />
        </div>

        <div className='lg:grow'>
          <div className='text-base mb-10 whitespace-pre-wrap'>{aboutMe}</div>
          <Skills />
        </div>
      </div>
    </Section>
  )
}

export default About
