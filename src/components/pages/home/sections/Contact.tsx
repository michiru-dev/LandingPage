import SnsIcons from '@/components/UI/SnsIcons'
import { contactText } from '@/const/contactText'
import { contents } from '@/const/contents'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <section id='contact' className='pt-[80px] mt-[-80px]'>
      <h1 className='text-2xl font-decol font-bold mb-2'>
        {contents.contact.jp}
      </h1>

      <div>
        <p className='mb-3'>
          <Link className='font-bold' href={`mailto:${contactText.link.email}`}>
            {contactText.link.text}
          </Link>
          {contactText.text}
        </p>
        <SnsIcons />
      </div>
    </section>
  )
}

export default Contact
