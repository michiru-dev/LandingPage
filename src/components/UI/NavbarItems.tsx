import Link from 'next/link'
import React from 'react'
import { hoverFlowClass } from './NavbarContents'
import { NavbarItemsProps } from '@/types/navbarTypes'

function NavbarItems({ svgIcon, text, hrefText }: NavbarItemsProps) {
  return (
    <div className={`${hoverFlowClass} pb-3 lg:pb-0`}>
      <Link href={`#${hrefText}`} className='flex items-center'>
        {svgIcon}
        {text}
      </Link>
    </div>
  )
}

export default NavbarItems
