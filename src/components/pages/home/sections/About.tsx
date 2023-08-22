import React from 'react'
import Image from 'next/image'
import TechSkills from '@/components/UI/TechSkills'

function About() {
  return (
    <section
      className='mb-40 flex font-zen gap-[100px] pt-[80px] mt-[-80px]'
      id='about'
    >
      <div className='grow'>
        <h1 className='text-2xl font-decol font-bold mb-2'>自己紹介</h1>

        <div className='text-base mb-5'>
          　こんにちは！みちると申します。
          1994年鹿児島県で生まれ幼少期を過ごしました。
          高校時は3年間カナダへ単身留学し現地の公立高校を卒業、その後帰国し関西学院大学へ進学しました。
          大学卒業後は、専門商社の人事採用担当として5年半勤務しました。
          <br />
          退職後は、キャリアチェンジを目指し再度カナダに渡り、2023年1月よりウェブ開発の専門学校に通っています。
          現在は学校＋独学で開発スキルを日々磨いています。
          <br />
          もともとコンピュータが好きだったこともあり、苦戦しながらも開発を楽しんでいます。
        </div>

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
