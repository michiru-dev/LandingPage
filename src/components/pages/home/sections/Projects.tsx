import Project from '@/components/UI/Project'
import Slider, { Settings } from 'react-slick'
import { projectsList } from '@/const/projects'
import { contents } from '@/const/contents'
import { ProjectListProps } from '@/types/projectTypes'
import Section from '@/components/UI/Section'
import SectionTitle from '@/components/UI/SectionTitle'
import { useWindowSize } from '@/hooks/useWindowSize'

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'ease-in',
  centerMode: true,
  centerPadding: '15%',
  focusOnSelect: true,
  swipe: true,
  touchMove: true,
  arrows: true,
  swipeToSlide: true,
  pauseOnFocus: true,
  pauseOnHover: true,
}

function Projects() {
  const isMobile = useWindowSize()

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
      <div className='flex flex-col  whitespace-nowrap '>
        {isMobile ? mobileLayout : desktopLayout}
      </div>
    </Section>
  )
}

export default Projects

// function Projects() {
//   const isMobile = useWindowSize()

//   const mobileLayout = (
//     <>
//       {projectsList.map((project: ProjectListProps) => (
//         <Project key={project.title} project={project} />
//       ))}
//     </>
//   )
//
//   const desktopLayout = (
//     <Slider {...settings}>
//       {/* {projectsList.map((project: ProjectListProps) => (
//         <Project key={project.title} project={project} />
//       ))} */}

//       <div className='w-[200px]'>asdfa</div>
//       <div className='w-[200px]'>asdfa</div>
//       <div className='w-[200px]'>asdfa</div>
//     </Slider>
//   )
//   return (
//     <Section id='projects'>
//       <SectionTitle title={contents.projects.jp} />
//       {/* <div className='flex flex-col  whitespace-nowrap '> */}
//       {isMobile ? mobileLayout : desktopLayout}
//       {/* </div> */}
//     </Section>
//   )
// }
