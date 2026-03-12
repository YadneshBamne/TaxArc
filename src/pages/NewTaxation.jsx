import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight, ArrowLeftRight, Settings, Sparkles, CreditCard, TrendingUp, Database, Building2, CheckCircle2, Clock, BarChart3, Layers, Banknote, LandmarkIcon, BookUser, DollarSign, ChartBarBigIcon, SparkleIcon, Zap, LockIcon, HandshakeIcon, Clock10, Globe, RotateCcw, ClipboardList, Monitor } from 'lucide-react'

const NewTaxation = () => {
  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center'>
        {/* Background Image with Overlay */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(https://ik.imagekit.io/qxfudjvlf/taxarc/Taxation.jpeg)',
          }}
        >
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        {/* Content */}
        <div  className="max-w-4xl mx-auto text-center rounded-2xl p-12 bg-white/10 backdrop-blur-sm border border-white/20"
          >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              Tax Preparation
            </h1>
            <p className='text-xl md:text-2xl text-white font-light'>
              Reliable Outsourced Tax Production. Delivered to Your Standards. On Your Timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className='py-16 bg-gray-50 border-b border-gray-100'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-10'
          >
            <p className='text-3xl md:text-4xl font-inter font-bold uppercase tracking-widest text-[#015482] mb-2'>Who We Serve</p>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
              Built for Tax Professionals
            </h2>
          </motion.div>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 max-w-4xl mx-auto'>

            {/* CPA & EA Firms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className='flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-10 py-8 w-full sm:w-auto hover:shadow-lg hover:border-[#015482]/40 transition-all duration-300'
            >
              <div className='w-14 h-14 rounded-full bg-[#015482]/10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 text-[#015482]' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className='text-center'>
                <p className='text-base font-bold text-gray-900'>CPA &amp; EA Firms</p>
                <p className='text-xs text-gray-500 mt-1'>Credentialed Tax Professionals</p>
              </div>
            </motion.div>

            <span className='hidden sm:block text-gray-300 text-3xl font-light'>·</span>

            {/* Accounting Practices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-10 py-8 w-full sm:w-auto hover:shadow-lg hover:border-[#015482]/40 transition-all duration-300'
            >
              <div className='w-14 h-14 rounded-full bg-[#015482]/10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 text-[#015482]' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div className='text-center'>
                <p className='text-base font-bold text-gray-900'>Accounting Practices</p>
                <p className='text-xs text-gray-500 mt-1'>Public &amp; Private Firms</p>
              </div>
            </motion.div>

            <span className='hidden sm:block text-gray-300 text-3xl font-light'>·</span>

            {/* Small-to-Mid Businesses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className='flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-10 py-8 w-full sm:w-auto hover:shadow-lg hover:border-[#015482]/40 transition-all duration-300'
            >
              <div className='w-14 h-14 rounded-full bg-[#015482]/10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 text-[#015482]' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <div className='text-center'>
                <p className='text-base font-bold text-gray-900'>Small-to-Mid Businesses</p>
                <p className='text-xs text-gray-500 mt-1'>Across All Industries</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-center mb-12'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
               Our Tax Preparation <span className='text-[#015482] italic font-inter'>Services</span>
              </h2>
              <p className='text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto'>
                We function as a seamless extension of your practice. You remain the firm of record and client-facing professionals. We work in the background — preparing returns to your specifications, using your preferred software, and delivering review-ready work products. Our process is built around accuracy and reliability, confidentiality.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>

              {/* Card 1 - Individual Returns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <FileText className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Individual Returns (Form 1040)</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Including Schedule C, D, E, self-employment income, rental income, K-1 pass-throughs, and foreign income.
                </p>
              </motion.div>

              {/* Card 2 - Business Returns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <Building2 className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Business Returns</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  C-Corporations (Form 1120), S-Corporations (Form 1120S), Partnerships (Form 1065), and single- or multi-member LLCs.
                </p>
              </motion.div>

              {/* Card 3 - State & Multi-State Returns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <Globe className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>State &amp; Multi-State Returns</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Preparation of required state filings including nexus considerations and apportionment schedules.
                </p>
              </motion.div>

              {/* Card 4 - Estimated Tax Projections */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <TrendingUp className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Estimated Tax Projections</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Quarterly tax projection workpapers to support advisory and planning discussions.
                </p>
              </motion.div>

              {/* Card 5 - Tax Extension Preparation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <Clock className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Tax Extension Preparation</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Preparation of extension filings supported by liability estimates.
                </p>
              </motion.div>

              {/* Card 6 - Prior-Year Amendments */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <RotateCcw className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Prior-Year Amendments</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Amended returns including Form 1040-X and Form 1120-X with supporting workpapers.
                </p>
              </motion.div>

              {/* Card 7 - Workpaper Preparation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <ClipboardList className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Workpaper Preparation</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Organized, review-ready workpapers aligned with your firm's internal standards.
                </p>
              </motion.div>

              {/* Card 8 - Software Flexibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <Monitor className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Software Flexibility</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Experience working with UltraTax, Lacerte, Drake, ProConnect, and TaxAct.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className='py-35'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-center mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Key <span className='text-[#015482] italic font-inter'>Benefits</span>
              </h2>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'
            >
              {/* Benefit 1 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Banknote className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Capacity without the cost</h3>
                  <p className='text-sm text-gray-600'>
                    Handle peak-season volume without permanent headcount additions
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <LockIcon className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Confidentiality assured</h3>
                  <p className='text-sm text-gray-600'>
                   Strict data handling protocols and NDA coverage on every engagement.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Clock10 className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Faster turnaround</h3>
                  <p className='text-sm text-gray-600'>
                    Prepared returns delivered within agreed SLAs so your review queue stays manageable.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <HandshakeIcon className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Flexible engagement</h3>
                  <p className='text-sm text-gray-600'>
                    Per-return, monthly retainer, or seasonal block arrangements available.
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <CheckCircle2 className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Consistent quality</h3>
                  <p className='text-sm text-gray-600'>
                    Multi-point internal review before delivery — you receive work that's ready to sign.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Scale Smarter with
                <br />{" "}
                <span className="font-inter italic bg-[#015482] bg-clip-text text-transparent">
                  Tax<span className="text-[#17D3CF]">Arc</span> Global
                </span>
                .
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
    </div>
  )
}

export default NewTaxation
