import React from 'react'

function WorkExperience() {
  return (
    <section id='workExperience' className='mb-40 pt-[80px] mt-[-80px]'>
      <h1 className='text-2xl font-decol font-bold mb-2'>経歴</h1>
      <div className='flex justify-between font-kaisei'>
        <div>
          <p className='border-b-[1px] w-fit font-decol'>2017年3月</p>
          <p>関西学院大学経済学部 卒業</p>
        </div>

        <div className='flex justify-center items-center'>
          <div className='w-[100px] border-dotted border-t-4 border-black mx-4 h-1' />
        </div>

        <div>
          <p className='border-b-[1px] w-fit font-decol'>2017年4月</p>
          <p>因幡電機産業株式会社　入社</p>
          <p>人事部　採用担当として従事</p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-[100px] border-dotted border-t-4 border-black mx-4 h-1' />
        </div>
        <div>
          <p className='border-b-[1px] w-fit font-decol'>2022年10月</p>
          <p>同社　退社</p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-[100px] border-dotted border-t-4 border-black mx-4 h-1' />
        </div>
        <div>
          <p className='border-b-[1px] w-fit font-decol'>2023年1月</p>
          <p>CICCC(カナダ)　ウェブ開発コース　入学 </p>
          <p>卒業予定：2023年12月</p>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
