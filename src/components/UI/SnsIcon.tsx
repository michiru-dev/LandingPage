import { SnsIconProps } from '@/types/navbarTypes'
import Link from 'next/link'
import React from 'react'

function SnsIcon({ svgIcon, snsName, url }: SnsIconProps) {
  return (
    <Link
      href={url}
      title={snsName}
      rel='noreferrer noopener'
      target='_blank'
      className='text-xl'
    >
      {svgIcon}
    </Link>
  )
}

export default SnsIcon
