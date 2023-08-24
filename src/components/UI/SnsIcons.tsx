import React from 'react'
import SnsIcon from './SnsIcon'
import { SiWantedly } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { hoverFlowClass } from './NavbarContents'

function SnsIcons({
  showOrHiddenClassName,
}: {
  showOrHiddenClassName: string
}) {
  return (
    <ul
      className={`${showOrHiddenClassName} flex items-center justify-start gap-[1.2rem] mr-3`}
    >
      <li className={hoverFlowClass}>
        <SnsIcon
          svgIcon={<BsGithub size={25} />}
          snsName='GitHub'
          url='https://github.com/michiru-dev'
        />
      </li>

      <li className={hoverFlowClass}>
        <SnsIcon
          svgIcon={<SiWantedly size={25} />}
          snsName='Wantedly'
          url='https://www.wantedly.com/id/michiru_dev'
        />
      </li>

      <li className={hoverFlowClass}>
        <SnsIcon
          svgIcon={<MdEmail size={25} />}
          snsName='e-mail'
          url='mailto:since_l999@yahoo.co.jp'
        />
      </li>
    </ul>
  )
}

export default SnsIcons
