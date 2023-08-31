import React from 'react'
import { hoverFlowClass } from './NavbarContents'
import { NavbarItemsProps } from '@/types/navbarTypes'
import { scrollToTargetId } from '@/utils/utils'

function NavbarItems({ svgIcon, text, hrefText }: NavbarItemsProps) {
  const handleClick = () => {
    scrollToTargetId(`#${hrefText}`)
  }
  return (
    <button onClick={handleClick} className={`${hoverFlowClass} pb-3 lg:pb-0`}>
      {svgIcon}
      {text}
    </button>
  )
}

export default NavbarItems
