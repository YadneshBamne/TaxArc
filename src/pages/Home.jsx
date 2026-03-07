import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle,BookOpen,Clock,DollarSign,Users, TrendingUp, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Accordion } from '../components'
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel'


const arcImages = [
  'https://ik.imagekit.io/qxfudjvlf/taxarc/2ndsecphoto.jpg',
  'https://ik.imagekit.io/qxfudjvlf/taxarc/photo1.jpg',
  'https://ik.imagekit.io/qxfudjvlf/taxarc/photo2.jpg',
]

const Home = () => {
  const [carouselApi, setCarouselApi] = useState(null)

  useEffect(() => {
    if (!carouselApi) return
    const interval = setInterval(() => {
      carouselApi.scrollNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [carouselApi])

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
            backgroundImage: 'url(https://ik.imagekit.io/qxfudjvlf/taxarc/unnamed%202.jpg.jpeg)',
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
              className='text-5xl md:text-6xl font-bold text-white mb-6 leading-tight'
            >
               Outsourced Team for 
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl md:text-4xl font-inter italic text-white mb-10 leading-tight'
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
                  className='ml-3 w-10 h-10 bg-[#015482] hover:bg-[#17d3cf] rounded-full flex items-center justify-center transition-all ease-in'

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
                  Our Philosophy - ARC
                </h2>
                <p className='text-3xl font-inter italic mb-6 bg-[#015482] bg-clip-text text-transparent'>
                  Accurate. Relibility. Confidentiality
                </p>
                <p className='text-gray-700 mb-8 leading-relaxed'>
                  This is the framework at TaxArc Global, our name reflects our operating philosophy A-R-C. This is the framework that governs how we deliver work, manage risk, and build long-term client partnerships. It helps us achieve the level of assurance expected by professionally managed organizations.
                </p>
              </motion.div>

              {/* Accordion */}
              <Accordion items={accordionItems} />
            </div>

            {/* Right Column - Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative'
            >
              <Carousel opts={{ loop: true }} setApi={setCarouselApi} className='w-full'>
                <CarouselContent>
                  {arcImages.map((src, i) => (
                    <CarouselItem key={i}>
                      <img
                        src={src}
                        alt="Team working on accounting"
                        className='rounded-lg shadow-xl w-full'
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
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
            <h2 className='text-3xl md:text-4xl  font-bold text-gray-900'>
              Explore Our <span className='font-inter italic  text-[#015482]'>Services</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Tax Preparation',
                image: 'https://ik.imagekit.io/qxfudjvlf/taxarc/photo2.jpg',
                description: 'Accurate, IRS Compliant, deadline-driven tax preparation outsourcing to US CPAs, Enrolled Agents, and tax practices. Our trained professional teams handle individual and business returns with accuracy, compliance, and comprehensive functionality. Manage peak season workload without stretching your capacity.',
                link: '/new-taxation'
              },
              {
                title: 'Accounting & Bookkeeping',
                image: 'https://ik.imagekit.io/qxfudjvlf/taxarc/photo1.jpg',
                description: 'Precise, US GAAP-compliant accounting and bookkeeping outsourcing to US accounting firms, CPA practices and US businesses. Our dedicated teams manage everything from daily bookkeeping to year-end closing and financial reporting. Reduce administrative work and focus on what matters most: your clients.',
                link: '/accounting-bookkeeping'
              },
              {
                title: 'Payroll Management',
                image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=2070',
                description: 'From payroll processing and tax withholdings to quarterly filings and year-end reporting, TaxArc Global provides structured, end-to-end payroll support built around US federal and state compliance requirements. Our team integrates seamlessly into your workflow, handling complexity so your practice doesn\'t have to.',
                link: '/payroll'
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
                    className='absolute bottom-4 right-4 w-10 h-10 bg-[#015482] rounded-full flex items-center justify-center hover:bg-[#17d3cf] transition-colors group/btn'
                  >
                    <ArrowUpRight className='w-5 h-5 text-white group-hover/btn:scale-110 transition-transform' />
                  </Link>
                </div>

                {/* Description */}
                <p className='text-gray-700 leading-relaxed text-center'>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            <section className='py-20 bg-white'>
              <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-4xl md:text-5xl font-bold mb-4'
                  >
                    Why <span className='font-inter italic text-[#015482]'>Us?</span>
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className='mt-6'
                  >
                    <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                      Specialized Professionals, Seamlessly Integrated
                    </h3>
                    <p className='text-gray-700 leading-relaxed max-w-3xl mx-auto'>
                      Our teams of CPAs, Chartered Accountants, and experienced tax and accounting professionals integrate seamlessly into your existing software ecosystem, minimizing onboarding time and ensuring a smooth, efficient transition from day one.
                    </p>
                  </motion.div>
                </div>
      
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                  {/* Card 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                        <BookOpen className='w-6 h-6 text-[#015482]' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold mb-3'>Experienced Indian CA & CPA (US)-led firm</h3>
                        <p className='text-gray-600 leading-relaxed'>
                          Our teams of CPAs, Chartered Accountants, and experienced tax and accounting professionals bring deep, specialized knowledge of US tax regulations, US GAAP, and federal and state compliance
                        </p>
                      </div>
                    </div>
                  </motion.div>
      
                  {/* Card 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                        <Clock className='w-6 h-6 text-[#015482]' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold mb-3'>Turnaround You Can Rely On</h3>
                        <p className='text-gray-600 leading-relaxed'>
                          Defined timelines, structured workflows, and deadline-driven delivery, especially critical during peak tax season.
                        </p>
                      </div>
                    </div>
                  </motion.div>
      
                  {/* Card 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                        <Shield className='w-6 h-6 text-[#015482]' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold mb-3'>Data Security & Confidentiality</h3>
                        <p className='text-gray-600 leading-relaxed'>
                          NDA-backed engagements, secure file transfer protocols, and strict data privacy practices — your client data is always protected.
                        </p>
                      </div>
                    </div>
                  </motion.div>
      
                  {/* Card 4 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                        <DollarSign className='w-6 h-6 text-[#015482]' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold mb-3'>Cost Efficiency</h3>
                        <p className='text-gray-600 leading-relaxed'>
                          Significant reduction in operational costs compared to in-house staffing — without compromising on quality or accuracy.
                        </p>
                      </div>
                    </div>
                  </motion.div>
      
                  {/* Card 5 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                        <Users className='w-6 h-6 text-[#015482]' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold mb-3'>Flexible Engagement Model</h3>
                        <p className='text-gray-600 leading-relaxed'>
                          Flexible team sizing to accommodate seasonal peaks, project expansions, or ongoing support needs.
                        </p>
                      </div>
                    </div>
                  </motion.div>
      
                  {/* Card 6 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                        <TrendingUp className='w-6 h-6 text-[#015482]' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold mb-3'>Quality & Continuous Improvement</h3>
                        <p className='text-gray-600 leading-relaxed'>
                          Regular internal reviews, quality control checkpoints, and process optimization to ensure excellence in every engagement.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

                  <section className='py-20'>
                    <div className='container mx-auto px-4'>
                      <div className='text-center mb-12'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                          Tools we <span className='italic text-[#015482]'>work with</span>.
                        </h2>
                      </div>
                      
                      <div className='mt-10 flex justify-center'>
                        <img src='https://ik.imagekit.io/qxfudjvlf/taxarc/allogos.png' alt='Tools we work with' className='w-full max-w-4xl h-auto' />
                      </div>
                    </div>
                  </section>

      {/* Work with Experts Section */}
      <section className='mb-30 bg-white'>
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
                  src="https://ik.imagekit.io/qxfudjvlf/taxarc/homepageleft.jpeg" 
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
                Your Business Deserves Better.<br />
                Scale Smarter with<br /> <span className='font-inter italic bg-[#015482] bg-clip-text text-transparent'>TaxArc Global</span>.
              </h2>
              
              <Link 
                to="/contact" 
                className='inline-flex items-center bg-white border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:border[#015482] hover:bg-blue-50 transition group font-semibold w-fit'
              >
                Get Started
                <motion.div
                  className='ml-3 w-8 h-8 bg-[#015482] hover:bg-[#17d3cf] rounded-full flex items-center justify-center'
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
