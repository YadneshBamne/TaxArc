import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsScrolled(currentScrollPos > 50)
      const shouldBeVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10
      setVisible(shouldBeVisible)
      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const navBgClass = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
    : 'bg-transparent'

  const textColorClass = !isScrolled ? 'text-white' : 'text-gray-800'
  const hoverColorClass = !isScrolled ? 'hover:text-cyan-400' : 'hover:text-blue-600'

  // Mobile menu rendered as a portal to body — escapes the nav's transform stacking context
  const mobileMenu = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 99990 }}
          />
          
          {/* Slide Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            className=' rounded-l-[2em]'
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            style={{ position: 'fixed', top: 0, right: 0, height: '100%', width: '18rem', background: 'white', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', zIndex: 99991, overflowY: 'auto' }}
          >
            <div className='p-6 pt-20 space-y-4'>
              <Link to="/" className='block py-3 text-gray-800 hover:text-[#17D3CF] font-medium text-lg border-b border-gray-100' onClick={toggleMenu}>Home</Link>
              <Link to="/about" className='block py-3 text-gray-800 hover:text-[#17D3CF] font-medium text-lg border-b border-gray-100' onClick={toggleMenu}>About Us</Link>
              <Link to="/new-taxation" className='block py-3 text-gray-800 hover:text-[#17D3CF] font-medium text-lg border-b border-gray-100' onClick={toggleMenu}>Tax Preparation</Link>
              <Link to="/accounting-bookkeeping" className='block py-3 text-gray-800 hover:text-[#17D3CF] font-medium text-lg border-b border-gray-100' onClick={toggleMenu}>Accounting & Bookkeeping</Link>
              <Link to="/payroll" className='block py-3 text-gray-800 hover:text-[#17D3CF] font-medium text-lg border-b border-gray-100' onClick={toggleMenu}>Payroll</Link>
              <Link to="/contact" className='block py-3 text-gray-800 hover:text-[#17D3CF] font-medium text-lg' onClick={toggleMenu}>Contact Us</Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${navBgClass} ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ zIndex: 9998 }}
      >
        <div className='container mx-auto px-4 py-4'>
          <div className='flex justify-between items-center'>
            {/* Logo */}
            <Link to="/" className='flex items-center'>
              <img 
                src="/brand1.png" 
                alt="TaxArc Global" 
                className='h-18 w-auto mb-1'
              />
            </Link>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center space-x-8'>
              <Link to="/" className={`${textColorClass} ${hoverColorClass} transition font-medium text-lg`}>Home</Link>
              <Link to="/about" className={`${textColorClass} ${hoverColorClass} transition font-medium text-lg`}>About Us</Link>
              
              {/* Services Dropdown */}
              <div 
                className='relative'
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`${textColorClass} ${hoverColorClass} transition flex items-center font-medium text-lg`}>
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
                      <Link to="/new-taxation" className='block px-4 py-2 text-gray-800 hover:bg-cyan-50 hover:text-[#17D3CF] transition'>Tax Preparation</Link>
                      <Link to="/accounting-bookkeeping" className='block px-4 py-2 text-gray-800 hover:bg-cyan-50 hover:text-[#17D3CF] transition'>Accounting & Bookkeeping</Link>
                      <Link to="/payroll" className='block px-4 py-2 text-gray-800 hover:bg-cyan-50 hover:text-[#17D3CF] transition'>Payroll</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/contact" className={`${textColorClass} ${hoverColorClass} transition font-medium text-lg`}>Contact Us</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className={`md:hidden ${textColorClass}`}
              style={{ zIndex: 99992 }}
            >
              {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu portalled to body to escape nav's transform stacking context */}
      {ReactDOM.createPortal(mobileMenu, document.body)}
    </>
  )
}

export default Navbar
