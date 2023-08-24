import SnsIcons from '@/components/UI/SnsIcons'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <section id='contact' className='pt-[80px] mt-[-80px]'>
      <h1 className='text-2xl font-decol font-bold mb-2'>コンタクト</h1>

      <div>
        <p className='mb-3'>
          <Link className='font-bold' href='mailto:since_l999@yahoo.co.jp'>
            こちら
          </Link>
          のメールアドレスにご連絡ください。
        </p>
        <SnsIcons />
      </div>
    </section>
  )
}

export default Contact
