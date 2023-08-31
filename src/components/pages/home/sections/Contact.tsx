import Section from '@/components/UI/Section'
import SectionTitle from '@/components/UI/SectionTitle'
import SnsIcons from '@/components/UI/SnsIcons'
import { contactText } from '@/const/contactText'
import { contents } from '@/const/contents'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <Section id={contents.contact.en}>
      <SectionTitle title={contents.contact.jp} />
      <div>
        <p className='mb-6'>
          <Link className='font-bold' href={`mailto:${contactText.link.email}`}>
            {contactText.link.text}
          </Link>
          {contactText.text}
        </p>
        <SnsIcons />
      </div>
    </Section>
  )
}

export default Contact
