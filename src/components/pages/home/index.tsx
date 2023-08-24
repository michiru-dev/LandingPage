import Header from '@/components/UI/Header'
import React from 'react'
import About from './sections/About'
import Projects from './sections/Projects'
import WorkExperience from './sections/WorkExperience'
import Contact from './sections/Contact'
import Footer from '@/components/UI/Footer'

function Home() {
  return (
    <div>
      <section
        className='grid grid-cols-outerTb lg:grid-cols-outerPc gap-y-36'
        id='home'
      >
        <div className='col-2-auto grid grid-cols-inner grid-flow-dense'>
          <div className='col-start-1 col-end-13'>
            <div>
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
        </div>
      </section>
    </div>
  )
}

export default Home
