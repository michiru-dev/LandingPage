import Header from '@/components/UI/Header'
import React from 'react'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import WorkExperience from './sections/WorkExperience'
import Contact from './sections/Contact'

function Home() {
  return (
    <div>
      <div
        className='fixed bg top--16 left-0 right-0 z-[-99] pointer-events-none 
       flex justify-center items-center blur-[6rem] w-full h-[15rem] opacity-90 rotate-180 bg-[linear-gradient(90deg,#5700ff_0%,#7900ff_19%,#fd1d72_46%,#fd9931_73%,#fcb045_100%)]'
      ></div>

      <section className='grid grid-cols-outer gap-y-36'>
        <div className='col-2-auto grid grid-cols-inner gap-12 grid-flow-dense'>
          <div className='col-start-1 col-end-13'>
            <div>
              <Header />
              <About />
              <Projects />
              <Skills />
              <WorkExperience />
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
