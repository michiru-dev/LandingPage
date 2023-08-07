import React from 'react'
import NavbarItems from './NavbarItems'
import { BsFillPersonFill, BsGithub } from 'react-icons/bs'
import { PiProjectorScreenChartDuotone } from 'react-icons/pi'
import { GiStrong } from 'react-icons/gi'
import { MdEmail, MdWorkHistory } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { FaDog } from 'react-icons/fa'
import Link from 'next/link'
import SnsIcon from './SnsIcon'
import { SiWantedly } from 'react-icons/si'

function Navbar() {
  return (
    <nav className='font-decol sticky z-10 top-[5px] w-full my-4 px-3 rounded-full shadow-nav-bar bg-white/40 backdrop-blur border border-white border-opacity-50'>
      <div className='relative py-3 px-1 mx-[-0.5rem] flex items-center justify-between h-16'>
        <Link href='#home' className='ml-2'>
          <FaDog className='text-3xl' />
        </Link>
        <div className='flex flex-row justify-center items-center flex-grow ml-4 gap-x-10 text-[17px]'>
          <NavbarItems
            text={'自己紹介'}
            hrefText={'about'}
            svgIcon={<BsFillPersonFill />}
          />
          <NavbarItems
            text={'プロジェクト'}
            hrefText={'projects'}
            svgIcon={<PiProjectorScreenChartDuotone />}
          />
          {/* <NavbarItems
            text={'スキル'}
            hrefText={'skills'}
            svgIcon={<GiStrong />}
          /> */}
          <NavbarItems
            text={'経歴'}
            hrefText={'workExperience'}
            svgIcon={<MdWorkHistory />}
          />
          <NavbarItems
            text={'コンタクト'}
            hrefText={'contact'}
            svgIcon={<HiOutlineMail />}
          />
        </div>

        <div className='flex items-center justify-start gap-[1.2rem] '>
          <SnsIcon
            svgIcon={<BsGithub size={25} />}
            snsName='GitHub'
            url='https://github.com/michiru-dev'
          />
          <SnsIcon
            svgIcon={<SiWantedly size={25} />}
            snsName='Wantedly'
            url='https://www.wantedly.com/id/michiru_dev'
          />
          <SnsIcon
            svgIcon={<MdEmail size={25} />}
            snsName='e-mail'
            url='mailto:since_l999@yahoo.co.jp'
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
