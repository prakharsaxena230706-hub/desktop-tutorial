import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">Sikkim Tourism</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-primary">
              Home
            </Link>
            <Link href="/monasteries" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-primary">
              Monasteries
            </Link>
            <Link href="/culture" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-primary">
              Culture & Heritage
            </Link>
            <Link href="/explore" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-primary">
              Explore
            </Link>
            <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-primary">
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
              Home
            </Link>
            <Link href="/monasteries" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">
              Monasteries
            </Link>
            <Link href="/culture" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">
              Culture & Heritage
            </Link>
            <Link href="/explore" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">
              Explore
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}