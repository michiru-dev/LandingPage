import React from 'react'
import Image from 'next/image'
import TechSkills from '@/components/UI/TechSkills'
import { aboutMe } from '@/const/aboutMe'

function About() {
  return (
    <section
      className='mb-40 flex font-zen gap-[100px] pt-[80px] mt-[-80px]'
      id='about'
    >
      <div className='grow'>
        <h1 className='text-2xl font-decol font-bold mb-2'>自己紹介</h1>

        <div className='text-base mb-11'>{aboutMe}</div>

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

      <div className='relative max-w-[100%] h-[450px] min-w-[450px]'>
        <Image
          src='/profile.png'
          alt='profilePic'
          layout='fill'
          className='drop-shadow-2xl'
        />
      </div>
    </section>
  )
}

export default About
