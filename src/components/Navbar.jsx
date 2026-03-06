import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isAboutPage = location.pathname === '/about'
  const isTransparentPage = isHomePage || isAboutPage

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      
      // Determine if scrolled past threshold
      setIsScrolled(currentScrollPos > 50)
      
      // Determine visibility based on scroll direction
      // Show navbar when scrolling up or at the top
      // Hide navbar when scrolling down (and not at the top)
      const shouldBeVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10
      
      setVisible(shouldBeVisible)
      setPrevScrollPos(currentScrollPos)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const navBgClass = isTransparentPage
    ? isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-lg' 
      : 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md shadow-lg'

  const textColorClass = isTransparentPage && !isScrolled ? 'text-white' : 'text-gray-800'
  const hoverColorClass = isTransparentPage && !isScrolled ? 'hover:text-cyan-400' : 'hover:text-blue-600'

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgClass} ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link to="/" className='flex items-center'>
            <img 
              src="/logo.svg" 
              alt="TaxArc Global" 
              className='h-12 w-auto'
            />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link to="/" className={`${textColorClass} ${hoverColorClass} transition font-medium`}>
              Home
            </Link>
            <Link to="/about" className={`${textColorClass} ${hoverColorClass} transition font-medium`}>
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className='relative'
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`${textColorClass} ${hoverColorClass} transition flex items-center font-medium`}>
                Services
                <ChevronDown className='w-4 h-4 ml-1' />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className='absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-64'
                  >
                    <Link to="/new-taxation" className='block px-4 py-2 text-gray-800 hover:bg-cyan-50 hover:text-blue-600 transition'>
                      Tax Preparation
                    </Link>
                    <Link to="/bookkeeping-accounting-services" className='block px-4 py-2 text-gray-800 hover:bg-cyan-50 hover:text-blue-600 transition'>
                      Bookkeeping & Accounting
                    </Link>
                    <Link to="/payroll" className='block px-4 py-2 text-gray-800 hover:bg-cyan-50 hover:text-blue-600 transition'>
                      Payroll Services
                    </Link>
                    <Link to="/new-payroll" className='block px-4 py-2 text-gray-800 hover:bg-cyan-50 hover:text-blue-600 transition'>
                      New Payroll
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className={`${textColorClass} ${hoverColorClass} transition font-medium`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden ${textColorClass}`}
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden mt-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg p-4'
            >
              <Link to="/" className='block py-2 text-gray-800 hover:text-blue-600'>
                Home
              </Link>
              <Link to="/about" className='block py-2 text-gray-800 hover:text-blue-600'>
                About Us
              </Link>
              <Link to="/services" className='block py-2 text-gray-800 hover:text-blue-600'>
                Services
              </Link>
              <Link to="/contact" className='block py-2 text-gray-800 hover:text-blue-600'>
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
