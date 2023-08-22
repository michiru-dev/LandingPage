import Link from 'next/link'
import React from 'react'

type SnsIconProps = {
  svgIcon: React.ReactElement
  snsName: string
  url: string
}

function SnsIcon({ svgIcon, snsName, url }: SnsIconProps) {
  return (
    <Link href={url} title={snsName} rel='noreferrer noopener' target='_blank'>
      {svgIcon}
    </Link>
  )
}

export default SnsIcon
