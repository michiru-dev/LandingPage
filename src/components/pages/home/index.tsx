import Header from '@/components/UI/Header'
import React from 'react'
import About from './sections/About'
import Projects from './sections/Projects'
import WorkExperience from './sections/WorkExperiences'
import Contact from './sections/Contact'
import Footer from '@/components/UI/Footer'

function Home() {
  return (
    <div>
      <div
        className='fixed bottom-0 z-[-99] pointer-events-none
   flex justify-center items-center blur-[6rem] w-full h-full opacity-90
   bg-[linear-gradient(-30deg,#ec6d6f_0%,#e8adae_19%,#eba2a37d_25%,white_63%,white_100%)]'
      ></div>
      <section
        className='grid grid-cols-outerTb lg:grid-cols-outerPc gap-y-36'
        id='home'
      >
        <div className='col-2-auto grid grid-cols-inner grid-flow-dense'>
          <div className='relative col-start-1 col-end-13'>
            <Header />
            <main className='my-20 mx-auto max-w-[75rem] w-full'>
              <div className='relative w-full max-w-[80rem] my-[0px] mx-auto'>
                <About />
                <WorkExperience />
                <Projects />
                <Contact />
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
