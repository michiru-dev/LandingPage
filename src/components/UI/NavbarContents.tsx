import Link from 'next/link'
import React from 'react'
import { FaDog } from 'react-icons/fa'
import NavbarItems from './NavbarItems'
import { PiProjectorScreenChartDuotone } from 'react-icons/pi'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdWorkHistory } from 'react-icons/md'
import SnsIcons from './SnsIcons'
import { contents } from '@/const/contents'

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
          text={contents.aboutMe.jp}
          hrefText={contents.aboutMe.en}
          svgIcon={<BsFillPersonFill />}
        />
        <NavbarItems
          text={contents.workExperience.jp}
          hrefText={contents.workExperience.en}
          svgIcon={<MdWorkHistory />}
        />
        <NavbarItems
          text={contents.projects.jp}
          hrefText={contents.projects.en}
          svgIcon={<PiProjectorScreenChartDuotone />}
        />

        <NavbarItems
          text={contents.contact.jp}
          hrefText={contents.contact.en}
          svgIcon={<HiOutlineMail />}
        />
      </div>
      <SnsIcons showOrHiddenClassName='hidden lg:flex' />
    </div>
  )
}

export default NavbarContents
