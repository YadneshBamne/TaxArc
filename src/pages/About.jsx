import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { BookOpen, Clock, Shield, Users, DollarSign, TrendingUp, ArrowRight, Gem, Lock, UserCircle2, Key, Home, Printer, Settings, Network, Database, ShieldAlert, HardDrive, ArrowUpRight, ChevronDown,Phone, MonitorCloudIcon, Cpu, MonitorCheck, UsbIcon, Building, PrinterX, SlidersHorizontal, HardDriveDownload, Search, FileText, Wifi, CheckCircle2, Eye, Target } from 'lucide-react'
import LogoLoop from '../components/LogoLoop'

const About = () => {
    const [openFaq, setOpenFaq] = useState(null)
    const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive Tax Preparation, Accounting & Bookkeeping and Payroll Services for CPA firms and businesses. Our services include financial statement preparation, tax compliance, payroll processing, and customized accounting solutions."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement enterprise-level security measures including encrypted data transmission, secure servers, restricted access controls, and regular security audits. All our systems comply with industry-standard security protocols to protect your sensitive financial information."
    },
    {
      question: "What is your typical turnaround time?",
      answer: "Our turnaround times vary depending on the service and complexity. Generally, we deliver bookkeeping services within 2-3 business days, tax returns within 3-5 business days, and payroll processing within 24 hours. We can accommodate rush requests when needed."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with CPA firms and businesses across the globe. Our systems and processes are designed to work seamlessly across different time zones, ensuring consistent communication and timely delivery regardless of your location."
    },
    {
      question: "What software platforms do you support?",
      answer: "We support a wide range of leading accounting and financial platforms including Drake Software, Wave, Xero, TaxAct, QuickBooks, Intuit ProConnect, Cash App, Gusto, ADP, Intuit Lacerte, and CCH Axcess—ensuring seamless integration with the tools you already use."
    },
    {
      question: "How do I get started?",
      answer: <>Getting started is simple! Fill out the <Link to="/contact#contact-form" className="text-[#17D3CF] underline hover:text-[#015482]">contact form</Link>, send us an email or give us a call. We'll schedule a consultation to understand your needs and provide a customized solution with transparent and fair pricing.</>
    }
  ]


  
    const toggleFaq = (index) => {
      setOpenFaq(openFaq === index ? null : index)
    }


  return (
    <div className='page-sections w-full bg-white'>

      {/* About Us Section */}
      <section className='relative py-32 min-h-screen flex items-center justify-center'>
        {/* Background Video with Overlay */}
        <video 
          className='absolute inset-0 w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src='https://ik.imagekit.io/qxfudjvlf/taxarc/About%20Us%20Video.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 '></div>

        {/* Content */}
        <div className='container mx-auto px-4 sm:px-6 md:px-8 relative z-10'>
          <div className="w-full max-w-4xl mx-auto text-center rounded-xl sm:rounded-2xl md:rounded-3xl px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 bg-white/10 backdrop-blur-sm border border-black">
          <div className='max-w-4xl mx-auto text-center'>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-5 sm:mb-8 md:mb-10'
            >
              About Us
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-base sm:text-lg md:text-xl text-black font-light leading-relaxed'
            >
              TaxArc Global is a global professional services outsourcing firm providing structured, 
              secure, and dependable support across tax, accounting and bookkeeping operations to 
              businesses and professional organizations worldwide.
            </motion.p>
          </div>
        </div>
        </div>
      </section>


      {/* Why Choose Us Section */}


      {/* Meet Our CEO Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Meet our <span className='font-inter italic text-[#015482]'><br></br>Leadership Team</span>
            </h2>
          </motion.div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='order-2 lg:order-1'
            >
              <div className='hidden lg:flex items-center gap-3 mb-1'>
                <h3 className='text-3xl md:text-5xl font-inter italic'>
                  <span className='text-[#015482] font-bold'>Harshika Vora</span>
                </h3>
                <a
                  href='https://www.linkedin.com/in/harshika-vora-ca-cpa-7541a9154/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='shrink-0'
                  aria-label='Harshika Vora on LinkedIn'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28' className='w-8 h-8' fill='#0A66C2'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                  </svg>
                </a>
              </div>
              <p className='hidden lg:block text-3xl md:text-5xl italic font-semibold text-gray-700 mb-2'>Founder</p>
              <p className='hidden lg:block text-lg font-semibold text-gray-800'>
                CPA(US) (License Awaited), FCA (India), B. Com
              </p>
              <p className='hidden lg:block text-lg font-semibold text-gray-800 mb-6'>
                Proprietor – Harshika & Co.
              </p>

              <div className='space-y-4 text-gray-700 leading-relaxed'>
                <p>
                  TaxArc Global is led by Harshika Vora, a Chartered Accountant (India) and U.S. CPA (License Awaited) with nearly 9 years of professional experience across Indian and U.S. taxation, accounting, audit, and compliance.
                </p>

                <p>
                  Having qualified as a Chartered Accountant and experience in taxation, accounting, and financial advisory — shaped by years of working within a 45-year-old family-led CA firm where compliance discipline, client confidentiality, and uncompromising attention to detail were never optional and thus bringing strong regulatory discipline and documentation rigor to every engagement.
                </p>

                <p>
                  Over the past years, she has worked with the U.S. CPA firms, supporting U.S. individual and business tax preparation, bookkeeping, accounting, and audit engagements. Her experience with U.S. firm workflows, review standards, and tax and accounting software environments enables TaxArc Global to function as a seamless offshore extension of in-house teams.
                </p>

                <p>
                  The professional values that define her Indian practice — ethics, integrity, accountability, and strict confidentiality — are the foundation on which TaxArc Global is built, making it not just an outsourcing provider, but a reliable back-office partner your firm can trust with bookkeeping, tax preparation, and payroll support — so you can focus on what grows your practice.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='order-1 lg:order-2 flex justify-center lg:justify-end'
            >
              <div className='relative w-full max-w-md lg:max-w-lg'>
                <div className='lg:hidden text-center mb-6'>
                  <div className='flex items-center justify-center gap-3 mb-1'>
                    <h3 className='text-3xl font-inter italic'>
                      <span className='text-[#015482] font-bold'>Harshika Vora</span>
                    </h3>
                    <a
                      href='https://www.linkedin.com/in/harshika-vora-ca-cpa-7541a9154/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='shrink-0'
                      aria-label='Harshika Vora on LinkedIn'
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28' className='w-7 h-7' fill='#0A66C2'>
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                      </svg>
                    </a>
                  </div>
                  <p className='text-3xl italic font-semibold text-gray-700 mb-2'>Founder</p>
                  <p className='text-base font-semibold text-gray-800'>
                    CPA(US) (License Awaited), FCA (India), B. Com
                  </p>
                  <p className='text-base font-semibold text-gray-800 mb-4'>
                    Proprietor – Harshika & Co.
                  </p>
                </div>
                <img
                  src='https://ik.imagekit.io/qxfudjvlf/taxarc/harshika.jpeg'
                  alt='Harshika Vora - CEO of TaxArc Global'
                  className='w-full h-auto rounded-3xl  object-cover'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Strategic Advisor Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto'>
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='order-1 lg:order-1 flex justify-center lg:justify-start'
            >
              <div className='relative w-full max-w-md lg:max-w-lg'>
                <div className='lg:hidden text-center mb-6'>
                  <h3 className='text-3xl font-inter italic mb-1'>
                    <span className='text-[#015482] font-bold'>Hemant R. Vora</span>
                  </h3>
                  <p className='text-3xl italic font-semibold text-gray-700 mb-2'>Strategic Advisor</p>
                  <p className='text-base font-semibold text-gray-800'>
                    FCA (India), Inter CS, LLB, B. Com
                  </p>
                  <p className='text-base font-semibold text-gray-800 mb-4'>
                    Proprietor - Hemant R. Vora & Co. (Est. 1981)
                  </p>
                </div>
                <img
                  src='https://ik.imagekit.io/qxfudjvlf/taxarc/CA%20Hemant%20Vora.jpeg'
                  alt='Hemant R. Vora - Strategic Advisor of TaxArc Global'
                  className='w-full h-auto rounded-3xl  object-cover'
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='order-2 lg:order-2'
            >
              <h3 className='hidden lg:block text-3xl md:text-5xl font-inter italic mb-1'>
                <span className='text-[#015482] font-bold'>Hemant R. Vora</span>
              </h3>
              <p className='hidden lg:block text-3xl md:text-5xl italic font-semibold text-gray-700 mb-2'>Strategic Advisor</p>
              <p className='hidden lg:block text-lg font-semibold text-gray-800'>
                FCA (India), Inter CS, LLB, B. Com
              </p>
              <p className='hidden lg:block text-lg font-semibold text-gray-800 mb-6'>
                Proprietor – Hemant R. Vora & Co. (Est. 1981)
              </p>

              <div className='space-y-4 text-gray-700 leading-relaxed'>
                <p>
                  TaxArc Global's strategic strength is anchored in the mentorship and guidance of CA Hemant R. Vora — a respected Chartered Accountant with over 45 years of professional experience in compliance, advisory, and practice leadership. As the Founder of Hemant R. Vora & Co., established in 1981, he has built a reputation rooted in technical precision, ethical governance, and enduring client trust across diverse industries. His career reflects not only depth of expertise but also the discipline and foresight required to build and sustain a reputable professional institution.
                </p>

                <p>
                  As Strategic Advisor, he provides TaxArc Global with seasoned judgment, structured thinking, and governance-driven direction. His influence ensures that the firm's growth is aligned with strong quality control frameworks, discipline, and uncompromising professional standards. With a multidisciplinary academic foundation, he brings an integrated financial, legal, and regulatory perspective that strengthens decision-making at every level.
                </p>

                <p>
                  Beyond strategy, his mentorship shapes the firm's culture. He instills the values of integrity, accountability, and long-term client stewardship—principles that define TaxArc Global's approach to serving international partners. His presence adds institutional maturity, reinforces credibility, and ensures that the firm evolves with stability, clarity, and professional conviction.
                </p>

                <p className='font-semibold text-gray-900 text-lg mt-6'>
                  Trusted Advisor. Strategic Architect. Mentor Behind the Mission.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className='py-16 md:py-20'>
        <div className='w-full px-4 sm:px-6 md:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='w-full'
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full'>
              <div className='relative pt-12'>
                <div className='absolute left-1/2 top-0 -translate-x-1/2 z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#015482] text-white border-2 border-white flex items-center justify-center'>
                  <Eye className='w-12 h-12 md:w-14 md:h-14' strokeWidth={1.8} />
                </div>
                <div className='h-full bg-white border-2 border-dotted border-[#1f2937] rounded-[2.2rem] px-6 md:px-10 py-14 md:py-16 text-center'>
                  <h3 className='text-[#015482] text-2xl md:text-3xl font-bold tracking-[0.12em] mb-6'>VISION</h3>
                  <p className=' text-black leading-normal max-w-4xl mx-auto'>
                    To be a globally trusted professional services partner, recognized for excellence in tax, accounting and bookkeeping operations, precision-driven execution, and uncompromising data security.
                  </p>
                </div>
              </div>

              <div className='relative pt-12'>
                <div className='absolute left-1/2 top-0 -translate-x-1/2 z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#015482] text-white border-2 border-white flex items-center justify-center'>
                  <Target className='w-12 h-12 md:w-14 md:h-14' strokeWidth={1.8} />
                </div>
                <div className='h-full bg-white border-2 border-dotted border-[#1f2937] rounded-[2.2rem] px-6 md:px-10 py-14 md:py-16 text-center'>
                  <h3 className='text-[#015482] text-2xl md:text-3xl font-bold tracking-[0.12em] mb-6'>MISSION</h3>
                  <p className=' text-black leading-normal max-w-4xl mx-auto'>
                    To deliver reliable, high-quality outsourced accounting and tax support, powered by qualified professionals, structured processes, intelligent technology and strict confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our <span className='italic text-[#015482]'>Workflow Process</span>
            </h2>
            <p className='text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              Our workflow is meticulously designed to ensure every tax and accounting task is handled with absolute clarity. From initial data gathering to the final review, our cyclical process keeps you informed and maintains uncompromising quality at every step.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12'>
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='relative border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#015482]/40 transition-all'
              >
                <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#015482] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg'>01</div>
                <h3 className='text-xl font-bold text-center mb-3 pt-4'>Client Onboarding</h3>
                <p className='text-gray-600 text-center text-sm'>Establishing secure access and gathering essential requirements.</p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='relative border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#015482]/40 transition-all'
              >
                <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#015482] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg'>02</div>
                <h3 className='text-xl font-bold text-center mb-3 pt-4'>Data Sharing</h3>
                <p className='text-gray-600 text-center text-sm'>Securely transferring documents and collecting all necessary information.</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='relative border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#015482]/40 transition-all'
              >
                <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#015482] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg'>03</div>
                <h3 className='text-xl font-bold text-center mb-3 pt-4'>Preparation</h3>
                <p className='text-gray-600 text-center text-sm'>Experienced tax and accounting professionals prepare returns and financial reports.</p>
              </motion.div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto'>
              {/* Step 4 - Left Side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='relative border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#015482]/40 transition-all'
              >
                <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#015482] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg'>04</div>
                <h3 className='text-xl font-bold text-center mb-3 pt-4'>Internal Review</h3>
                <p className='text-gray-600 text-center text-sm'>A multi-level quality assurance process designed to ensure accuracy and reliability.</p>
              </motion.div>

              {/* Step 5 - Left Side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='relative border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#015482]/40 transition-all'
              >
                <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#015482] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg'>05</div>
                <h3 className='text-xl font-bold text-center mb-3 pt-4'>Final Delivery</h3>
                <p className='text-gray-600 text-center text-sm'>Timely delivery of review-ready work, ensuring all deadlines are met.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Infrastructure and Security Measures Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our IT Infrastructure &amp; <span className='font-inter italic text-[#015482]'>Security Measures</span>
            </h2>
          </motion.div>

          <div className='max-w-5xl mx-auto'>
            {/* Row 1 */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='flex flex-col items-center text-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Cpu fill='#CCD9ED' className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>Latest configuration<br />devices</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='flex flex-col items-center text-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Key fill='#CCD9ED' className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>Licensed support<br />software</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex flex-col items-center text-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <MonitorCheck className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>Secured<br />workstations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex flex-col items-center text-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <UsbIcon className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>No external<br />devices</p>
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-col items-center text-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Building className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>100% on-site<br />operations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex flex-col items-center text-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <PrinterX fill='#CCD9ED' className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>Printing<br />restrictions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex flex-col items-center text-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <SlidersHorizontal fill='#CCD9ED' className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>Centralized<br />control</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='flex flex-col items-center text-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Network fill='#CCD9ED' className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>Multiple LAN networks</p>
              </motion.div>
            </div>

            {/* Row 3 - spread left and right icons outward */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 mb-12 max-w-xl md:max-w-2xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='flex flex-col items-center text-center md:justify-self-start'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Database fill='#CCD9ED' className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>Functional access<br />to data</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='flex flex-col items-center text-center md:justify-self-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <ShieldAlert fill='#CCD9ED' className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>Harmful website<br />monitoring</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className='col-span-2 md:col-span-1 flex flex-col items-center text-center md:justify-self-end'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <HardDriveDownload fill='#CCD9ED' className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-semibold'>Automated<br />Backups</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools We Use Section */}


      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
              {/* Left Column - Title & CTA */}
              <div className='lg:col-span-4'>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className='lg:sticky lg:top-8'
                >
                  <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-1'>
                    Frequently Asked
                  </h2>
                  <h3 className='text-4xl md:text-5xl italic font-inter text-[#015482] mb-7'>
                    Questions.
                  </h3>

                  {/* Still have a question box */}
                  <div className=''>
                    <a
                      href='tel:+919909469067'
                      className='inline-flex items-center gap-3 bg-[#015482] hover:bg-[#15c2be] text-white px-6 py-3 rounded-full font-medium transition-colors'
                    >
                      <span>Make A Call</span>
                      <Phone className='w-5 h-5' />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Accordion */}
              <div className='lg:col-span-8'>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className='space-y-4'
                >
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className='bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow'
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                      >
                        <span className='text-base font-medium text-gray-900 pr-4'>
                          {faq.question}
                        </span>
                        <div className='shrink-0'>
                          {openFaq === index ? (
                            <div className='w-8 h-8 flex items-center justify-center text-[#015482]'>
                              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                <line x1='5' y1='12' x2='19' y2='12' />
                              </svg>
                            </div>
                          ) : (
                            <div className='w-8 h-8 bg-[#17D3CF] rounded-full flex items-center justify-center'>
                              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' stroke='white' strokeWidth='2'>
                                <line x1='8' y1='3' x2='8' y2='13' />
                                <line x1='3' y1='8' x2='13' y2='8' />
                              </svg>
                            </div>
                          )}
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openFaq === index ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className='px-6 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100'>
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About

