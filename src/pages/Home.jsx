import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle, TrendingUp, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Accordion } from '../components'

const Home = () => {
  const accordionItems = [
    {
      title: 'Accuracy',
      content: 'At TaxArc, our work ethos is built on the bedrock of accuracy. ARC. This is the framework that governs every decision we make, every process, and every piece of advice we tender to our valued clients. In today\'s complex financial landscape, having a partner who prioritizes these fundamental principles is invaluable, and that\'s exactly what we strive to be for every client.'
    },
    {
      title: 'Reliability',
      content: 'We understand that your business depends on consistent, dependable service. Our team is committed to delivering reliable results, meeting deadlines, and being there when you need us most. Your success is our priority, and we work tirelessly to ensure you can count on us.'
    },
    {
      title: 'Confidentiality',
      content: 'Your financial information is sensitive and deserves the highest level of protection. We maintain strict confidentiality protocols and security measures to safeguard your data. Trust is the foundation of our relationship, and we take that responsibility seriously.'
    }
  ]

  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-start'>
        {/* Background Image with Overlay */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073)',
          }}
        >
          <div className='absolute inset-0 bg-linear-to-r from-black/60 via-black/50 to-black/30'></div>
        </div>

        {/* Content */}
        <div className='container mx-auto px-4 md:px-8 relative z-10'>
          <div className='max-w-4xl'>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'
            >
              Strategic Offshore Partner for
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl md:text-6xl font-serif italic text-white mb-10 leading-tight'
            >
              US Tax & Accounting Excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                to="/contact" 
                className='inline-flex items-center bg-white text-black px-4 py-4 rounded-full hover:bg-cyan-50 transition group font-semibold text-lg shadow-lg'
              >
                Connect with us
                <motion.div
                  className='ml-3 w-10 h-10 bg-blue-600 hover:bg-[#04A1A8] rounded-full flex items-center justify-center transition-all ease-in'

                >
                  < ArrowUpRight className='w-5 h-5 text-white' />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Left Column - Text and Accordion */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Our Guiding Philosophy - ARC
                </h2>
                <p className='text-4xl font-serif italic mb-6 bg-[#0141A3] bg-clip-text text-transparent'>
                  Accuracy, Reliability and Confidentiality
                </p>
                <p className='text-gray-700 mb-8 leading-relaxed'>
                  At TaxArc Global, our name reflects our operating philosophy ARC. This is the framework that governs how we deliver work, manage risk, and build long-term client partnerships. It helps us achieve the level of assurance expected by professionally managed organizations.
                </p>
              </motion.div>

              {/* Accordion */}
              <Accordion items={accordionItems} />
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative'
            >
              <img 
                src="./2ndsecphoto.jpg" 
                alt="Team working on accounting" 
                className='rounded-lg shadow-xl w-full'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              Explore Our <span className='font-serif italic text-[#0141A3]'>Services</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Tax Preparation',
                image: './photo2.jpg',
                description: 'Accurate, IRS Compliant, deadline-driven tax preparation outsourcing to US CPAs, Enrolled Agents, and tax practices. Our trained professional teams handle individual and business returns with accuracy, compliance, and comprehensive functionality. Manage peak season workload without stretching your capacity.',
                link: '/new-taxation'
              },
              {
                title: 'Accounting & Bookkeeping',
                image: './photo1.jpg',
                description: 'Precise, US GAAP-compliant accounting and bookkeeping outsourcing to US accounting firms, CPA practices and US businesses. Our dedicated teams manage everything from daily bookkeeping to year-end closing and financial reporting. Reduce administrative work and focus on what matters most: your clients.',
                link: '/bookkeeping-accounting-services'
              },
              {
                title: 'Payroll Management',
                image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=2070',
                description: 'From payroll processing and tax withholdings to quarterly filings and year-end reporting, TaxArc Global provides structured, end-to-end payroll support built around US federal and state compliance requirements. Our team integrates seamlessly into your workflow, handling complexity so your practice doesn\'t have to.',
                link: '/new-payroll'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group'
              >
                {/* Image Card with Overlays */}
                <div className='relative mb-6 overflow-hidden rounded-2xl aspect-4/3'>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  
                  {/* Gradient Overlay */}
                  <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent'></div>
                  
                  {/* Title - Bottom Left */}
                  <div className='absolute bottom-4 left-4'>
                    <h3 className='text-white font-bold text-xl'>
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Arrow Button - Bottom Right */}
                  <Link 
                    to={service.link}
                    className='absolute bottom-4 right-4 w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors group/btn'
                  >
                    <ArrowUpRight className='w-5 h-5 text-white group-hover/btn:scale-110 transition-transform' />
                  </Link>
                </div>

                {/* Description */}
                <p className='text-gray-700 text-sm leading-relaxed text-center'>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work with Experts Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='order-2 lg:order-1'
            >
              <div className='relative w-full max-w-xl mx-auto lg:mx-0'>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088" 
                  alt="Work with experts" 
                  className='rounded-3xl w-full h-auto shadow-lg object-cover'
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='order-1 lg:order-2 flex flex-col justify-center'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight'>
                Work with Experts<br />
                to Grow Faster &<br />
                Run <span className='font-serif italic bg-[#17D3CF] bg-clip-text text-transparent'>Smarter</span>
              </h2>
              
              <Link 
                to="/contact" 
                className='inline-flex items-center bg-white border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:border-blue-700 hover:bg-blue-50 transition group font-semibold w-fit'
              >
                Get Started
                <motion.div
                  className='ml-3 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center'
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowRight className='w-5 h-5 text-white' />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  )
}

export default Home
