import React, { useState } from 'react'
import NavbarContents from './NavbarContents'
import { RxHamburgerMenu } from 'react-icons/rx'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className='font-decol  sticky z-20 top-[5px] w-full my-4 px-3 rounded-full shadow-nav-bar bg-white/40 backdrop-blur border border-white border-opacity-50'>
        <NavbarContents
          divClassName='lg:flex hidden relative py-3 px-1 mx-[-0.5rem] items-center justify-between h-16'
          itemClassName='flex-row items-right'
        />
        <button
          onClick={toggleMenu}
          className='lg:hidden absolute top-0 right-0 '
        >
          <RxHamburgerMenu />
        </button>
      </nav>
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-[150px]'
        } lg:hidden z-10 fixed top-0 right-0 pt-10 w-[150px] transform transition-transform duration-300 ease-out bg-white/40 backdrop-blur border border-white border-opacity-50`}
      >
        <NavbarContents divClassName='' itemClassName='flex-col items-left' />
      </div>
    </>
  )
}

export default Navbar
