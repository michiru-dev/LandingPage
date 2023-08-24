import Link from 'next/link'
import React from 'react'
import { FaDog } from 'react-icons/fa'
import NavbarItems from './NavbarItems'
import { BsFillPersonFill, BsGithub } from 'react-icons/bs'
import { MdEmail, MdWorkHistory } from 'react-icons/md'
import { PiProjectorScreenChartDuotone } from 'react-icons/pi'
import { HiOutlineMail } from 'react-icons/hi'
import SnsIcon from './SnsIcon'
import { SiWantedly } from 'react-icons/si'

export const hoverFlowClass =
  'transform hover:translate-y-[-0.25rem] duration-[0.3s]'

function NavbarContents({
  divClassName,
  itemClassName,
}: {
  divClassName: string
  itemClassName: string
}) {
  return (
    <div className={`${divClassName}`}>
      <Link href='#home' className={`${hoverFlowClass} ml-2 hidden lg:flex`}>
        <FaDog className='text-xl lg:text-3xl' />
      </Link>
      <div
        className={`${itemClassName} flex justify-center  flex-grow ml-4 gap-x-3 md:gap-x-5 lg:gap-x-10 text-[11px] md:text-[13px] lg:text-[17px]`}
      >
        <NavbarItems
          text={'自己紹介'}
          hrefText={'about'}
          svgIcon={<BsFillPersonFill />}
        />
        <NavbarItems
          text={'経歴'}
          hrefText={'workExperience'}
          svgIcon={<MdWorkHistory />}
        />
        <NavbarItems
          text={'プロジェクト'}
          hrefText={'projects'}
          svgIcon={<PiProjectorScreenChartDuotone />}
        />

        <NavbarItems
          text={'コンタクト'}
          hrefText={'contact'}
          svgIcon={<HiOutlineMail />}
        />
      </div>

      <ul
        className={`${itemClassName} hidden lg:flex items-center justify-start gap-[1.2rem] mr-3`}
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
    </div>
  )
}

export default NavbarContents
