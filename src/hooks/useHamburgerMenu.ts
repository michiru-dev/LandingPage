import { useState } from 'react'

export const useHamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return { toggleMenu, isMenuOpen }
}
