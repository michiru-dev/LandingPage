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
      {/* <div
        className='transition-all duration-200 ease-in-out w-14 h-14 rounded-full flex items-center justify-center 
      text-lg cursor-pointer shadow-md text-black border border-white bg-white/20 hover:z-10
       hover:duration-300 hover:ease-linear hover:text-2xl hover:shadow-md hover:scale-[1.3]
     hover:backdrop-filter[blur(9.5px)] hover:text-white hover:border-[#0077b5] hover:bg-[#0077b5]'
      > */}
      {svgIcon}
      {/* </div> */}
    </Link>
  )
}

export default SnsIcon
