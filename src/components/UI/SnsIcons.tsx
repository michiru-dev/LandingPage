import React from 'react'
import SnsIcon from './SnsIcon'
import { hoverFlowClass } from './NavbarContents'
import { snsIcons } from '@/const/snsIcons'

function SnsIcons({
  showOrHiddenClassName = '',
}: {
  showOrHiddenClassName?: string
}) {
  return (
    <ul
      className={`${showOrHiddenClassName} flex items-center justify-start gap-[1.2rem] mr-3`}
    >
      {snsIcons.map((icon) => (
        <li className={hoverFlowClass} key={icon.snsName}>
          <SnsIcon
            svgIcon={<icon.IconComponent size={25} />}
            snsName={icon.snsName}
            url={icon.url}
          />
        </li>
      ))}
    </ul>
  )
}

export default SnsIcons
