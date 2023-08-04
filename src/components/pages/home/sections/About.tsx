import React from 'react'
import Image from 'next/image'
import SnsIcon from '@/components/UI/SnsIcon'
import { SiWantedly } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'

function About() {
  return (
    <section className='mt-[-1rem] flex font-zen gap-[100px]' id='about'>
      <div className='grow'>
        <h1 className='text-2xl font-bold'>フロントエンドデベロッパー</h1>

        <div className='text-base'>
          こんにちは！ミチルと申します。
          1994年鹿児島県で生まれ幼少期を過ごしました。
          <br />
          高校時は3年間カナダへ単身留学し現地の公立高校を卒業、その後帰国し関西学院大学へ進学しました。
          <br />
          大学卒業後は、専門商社の人事採用担当として5年半勤務しました。
          <br />
          退職後は、キャリアチェンジを目指し再度カナダに渡り、2023年1月よりウェブ開発の専門学校に通っています。
          現在は学校＋独学で開発スキルを日々磨いています。
          <br />
          もともとコンピュータが好きだったこともあり、苦戦しながらも開発を楽しんでいます。
        </div>
        <div className='flex items-center justify-start gap-[1.2rem] w-[100%] mt-[1rem]'>
          <SnsIcon
            svgIcon={<BsGithub size={25} />}
            snsName='GitHub'
            url='https://github.com/michiru-dev'
          />
          <SnsIcon
            svgIcon={<SiWantedly size={25} />}
            snsName='Wantedly'
            url='https://www.wantedly.com/id/michiru_dev'
          />
          <SnsIcon
            svgIcon={<MdEmail size={25} />}
            snsName='e-mail'
            url='mailto:since_l999@yahoo.co.jp'
          />
        </div>
      </div>

      <div className='relative max-w-[100%] h-[400px] min-w-[400px]'>
        <Image src='/hokori.jpg' alt='profilePic' layout='fill' />
      </div>
    </section>
  )
}

export default About