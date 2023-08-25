import React from 'react'
import Image from 'next/image'
import TechSkills from '@/components/UI/TechSkills'
import { aboutMe } from '@/const/aboutMe'
import { contents } from '@/const/contents'

function About() {
  return (
    <section className='mb-40 font-zen pt-[80px] mt-[-80px]' id='aboutMe'>
      <h1 className='text-2xl font-decol font-bold mb-2'>
        {contents.aboutMe.jp}
      </h1>

      <div className='clearfix lg:flex lg:flex-row-reverse lg:gap-[74px]'>
        <div
          style={{ shapeOutside: 'circle()', clipPath: 'circle()' }}
          className='float-right lg:float-none relative h-[200px] min-w-[200px] lg:h-[450px] lg:min-w-[450px] mb-8 lg:mb-0 ml-8'
        >
          <Image
            src='/profilePic.png'
            alt='profilePic'
            layout='fill'
            className='drop-shadow-2xl'
          />
        </div>

        <div className='lg:grow'>
          <div className='text-base mb-10 whitespace-pre-wrap'>{aboutMe}</div>

          <div>
            <h1 className='text-xl font-bold font-decol mb-2'>スキル</h1>

            <TechSkills category='languages' categoryJp='言語' />

            <TechSkills
              category='frameworks'
              categoryJp='フレームワーク・ライブラリ'
            />

            <TechSkills category='databases' categoryJp='データベース' />

            <TechSkills category='others' categoryJp='その他' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
