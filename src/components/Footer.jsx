import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'
import LegalModal from './LegalModal'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('terms')

  const openModal = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <footer className='bg-gray-900 text-white'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Logo & Description */}
          <div className='lg:col-span-1'>
            <img 
              src="/logo.svg" 
              alt="TaxArc Global" 
              className='h-14 w-auto mb-6 brightness-0 invert'
            />
            <p className='text-gray-400 text-sm leading-relaxed'>
              Strategic Offshore Partner for US Tax & Accounting Excellence
            </p>
          </div>

          {/* Main Pages */}
          <div>
            <h3 className='text-lg font-bold mb-5 text-white'>Main Pages</h3>
            <ul className='space-y-3'>
              <li>
                <Link to="/" className='text-gray-400 hover:text-[#17D3CF] transition-colors text-sm'>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className='text-gray-400 hover:text-[#17D3CF] transition-colors text-sm'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-lg font-bold mb-5 text-white'>Company</h3>
            <ul className='space-y-3'>
              <li>
                <Link to="/contact" className='text-gray-400 hover:text-[#17D3CF] transition-colors text-sm'>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services" className='text-gray-400 hover:text-[#17D3CF] transition-colors text-sm'>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className='text-gray-400 hover:text-[#17D3CF] transition-colors text-sm'>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-bold mb-5 text-white'>Get In Touch</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <Mail className='w-5 h-5 text-[#17D3CF] shrink-0 mt-0.5' />
                <a href="mailto:harshika.vora@gmail.com" className='text-gray-400 hover:text-[#17D3CF] transition-colors text-sm'>
                  harshika.vora@gmail.com
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <Phone className='w-5 h-5 text-[#17D3CF] shrink-0 mt-0.5' />
                <a href="tel:+919909469067" className='text-gray-400 hover:text-[#17D3CF] transition-colors text-sm'>
                  +91 9909469067
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-[#17D3CF] shrink-0 mt-0.5' />
                <p className='text-gray-400 text-sm leading-relaxed'>
                  1801, Navratna Corporate Park,<br />
                  Ashok Vatika, Ahmedabad,<br />
                  Gujarat 380058
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Social Links */}
            <div className='flex items-center gap-6'>
              <a 
                href="https://www.linkedin.com/company/taxarcglobal/about/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-400 hover:text-[#17D3CF] transition-colors'
              >
                <Linkedin className='w-5 h-5' />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61586478143120" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-400 hover:text-[#17D3CF] transition-colors'
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a 
                href="https://www.instagram.com/taxarc_global?igsh=ZnpxbzR1YnN6azdv&utm_source=qr " 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-400 hover:text-[#17D3CF] transition-colors'
              >
                <Instagram className='w-5 h-5' />
              </a>
            </div>

            {/* Copyright */}
            <p className='text-gray-400 text-sm'>
              © 2026 TaxArc Global. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className='flex items-center gap-6'>
              <button 
                onClick={() => openModal('terms')} 
                className='text-gray-400 hover:text-[#17D3CF] text-sm transition-colors cursor-pointer'
              >
                Terms & Conditions
              </button>
              <button 
                onClick={() => openModal('privacy')} 
                className='text-gray-400 hover:text-[#17D3CF] text-sm transition-colors cursor-pointer'
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal isOpen={isModalOpen} onClose={closeModal} type={modalType} />
    </>
  )
}

export default Footer
