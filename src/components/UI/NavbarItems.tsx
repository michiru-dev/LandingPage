import Link from 'next/link'
import React from 'react'

type NavbarItemsProps = {
  svgIcon: React.ReactElement
  text: string
  hrefText: string
}

function NavbarItems({ svgIcon, text, hrefText }: NavbarItemsProps) {
  return (
    <div>
      <Link href={`#${hrefText}`} className='flex items-center'>
        {svgIcon}
        {text}
      </Link>
    </div>
  )
}

export default NavbarItems
