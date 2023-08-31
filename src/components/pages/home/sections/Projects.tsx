import Project from '@/components/UI/Project'
import React, { useEffect, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import { projectsList } from '@/const/projects'
import { contents } from '@/const/contents'
import { ProjectListProps } from '@/types/projectTypes'
import Section from '@/components/UI/Section'
import SectionTitle from '@/components/UI/SectionTitle'

function Projects() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    centerMode: true,
    centerPadding: '15%',
    swipe: true,
    touchMove: true,
    arrows: true,
    swipeToSlide: true,
    pauseOnFocus: true,
    pauseOnHover: true,
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const mobileLayout = (
    <>
      {projectsList.map((project: ProjectListProps) => (
        <Project key={project.title} project={project} />
      ))}
    </>
  )

  const desktopLayout = (
    <Slider {...settings}>
      {projectsList.map((project: ProjectListProps) => (
        <Project key={project.title} project={project} />
      ))}
    </Slider>
  )
  return (
    <Section id='projects'>
      <SectionTitle title={contents.projects.jp} />
      <div className='flex flex-col lg:block whitespace-nowrap '>
        {isMobile ? mobileLayout : desktopLayout}
      </div>
    </Section>
  )
}

export default Projects
