import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <section>
      <h1 className='text-2xl font-decol font-bold mb-2'>コンタクト</h1>

      <div>
        <p>
          <Link className='font-bold' href='mailto:since_l999@yahoo.co.jp'>
            こちら
          </Link>
          のメールアドレスにご連絡ください。
        </p>
      </div>
    </section>
  )
}

export default Contact
