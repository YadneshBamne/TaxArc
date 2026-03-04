import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Calculator, Clock, Building2, Notebook, FileCheck, FileText, ShieldCheck, UserCheck, ArrowUpRight } from 'lucide-react'

const Payroll = () => {
  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center'>
        {/* Background Image with Overlay */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015)',
          }}
        >
          <div className='absolute inset-0 bg-black/50'></div>
        </div>

        {/* Content */}
        <div className='container mx-auto px-4 md:px-8 relative z-10 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              <span className='text-[#17D3CF]'>Payroll</span>
            </h1>
            <p className='text-xl md:text-2xl text-white font-light'>
              Reliable Payroll management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='max-w-5xl mx-auto text-center'
          >
            <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
              We understand the operational pressures businesses face, especially during peak reporting periods. Our payroll systems are structured, automated, and scalable,  helping you reduce administrative burden while ensuring accuracy, transparency, and peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Payroll Services Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-center mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Our Payroll Services
              </h2>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'
            >
              {/* Service 1 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Calculator className='w-8 h-8 text-[#17D3CF]' />
                </div>
                <p className='text-sm font-medium text-gray-900 leading-snug'>
                  Stack<br />
                  Payroll Calculation &<br />
                  Processing
                </p>
              </div>

              {/* Service 2 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Clock className='w-8 h-8 text-[#17D3CF]' />
                </div>
                <p className='text-sm font-medium text-gray-900 leading-snug'>
                  Multi-Schedule Payroll<br />
                  Processing
                </p>
              </div>

              {/* Service 3 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Building2 className='w-8 h-8 text-[#17D3CF]' />
                </div>
                <p className='text-sm font-medium text-gray-900 leading-snug'>
                  Direct Deposit & Paycheck<br />
                  Issuances
                </p>
              </div>

              {/* Service 4 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Notebook className='w-8 h-8 text-[#17D3CF]' />
                </div>
                <p className='text-sm font-medium text-gray-900 leading-snug'>
                  Record-Keeping & Reporting
                </p>
              </div>

              {/* Service 5 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <FileCheck className='w-8 h-8 text-[#17D3CF]' />
                </div>
                <p className='text-sm font-medium text-gray-900 leading-snug'>
                  Payroll Tax Compliance
                </p>
              </div>

              {/* Service 6 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <FileText className='w-8 h-8 text-[#17D3CF]' />
                </div>
                <p className='text-sm font-medium text-gray-900 leading-snug'>
                  Payroll Tax Filings &<br />
                  Payments
                </p>
              </div>

              {/* Service 7 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <ShieldCheck className='w-8 h-8 text-[#17D3CF]' />
                </div>
                <p className='text-sm font-medium text-gray-900 leading-snug'>
                  IRS Payroll Compliance<br />
                  Assistance
                </p>
              </div>

              {/* Service 8 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <UserCheck className='w-8 h-8 text-[#17D3CF]' />
                </div>
                <p className='text-sm font-medium text-gray-900 leading-snug'>
                  Payroll Compliance<br />
                  Consulting
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work with Experts Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden shadow-xl'>
              {/* Left Column - Content with Cyan Background */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='bg-[#17D3CF] p-8 md:p-12 flex flex-col justify-center'
              >
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
                  Work with Experts to Grow Faster & Run <span className='font-serif italic'>Smarter</span>
                </h2>
                
                <ul className='space-y-3 mb-8 text-white'>
                  <li className='text-base md:text-lg'>Schedule a Free Consultation</li>
                  <li className='text-base md:text-lg'>Discover Custom Solutions</li>
                  <li className='text-base md:text-lg'>Start Building Your Competitive Advantage</li>
                </ul>
                
                <Link 
                  to="/contact" 
                  className='inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition font-semibold w-fit group'
                >
                  Get Started
                  <div className='ml-2 w-6 h-6 bg-[#1e40af] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <ArrowUpRight className='w-4 h-4 text-white' />
                  </div>
                </Link>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='relative min-h-96'
              >
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088" 
                  alt="Work with experts" 
                  className='w-full h-full object-cover'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Payroll
