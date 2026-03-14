import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight, ArrowLeftRight, Settings, Sparkles, CreditCard, TrendingUp, Database, Building2, CheckCircle2, Clock, BarChart3, Layers, Banknote, LandmarkIcon, BookUser, DollarSign, ChartBarBigIcon, SparkleIcon, Zap, Globe, UserPlus, Receipt, Briefcase, Handshake, DatabaseIcon, GlobeX, Globe2, UserIcon } from 'lucide-react'

const NewPayroll = () => {
  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center'>
        {/* Background Image with Overlay */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(https://ik.imagekit.io/qxfudjvlf/taxarc/Payroll%20Services.jpeg)',
          }}
        >
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        {/* Content */}
        <div className='container mx-auto px-4 sm:px-6 md:px-8 relative z-10'>
        <div className="w-full max-w-4xl mx-auto text-center rounded-xl sm:rounded-2xl md:rounded-3xl px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 bg-white/10 backdrop-blur-sm border border-white/20"
          >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6'>
              Payroll Services
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed'>
             Every Employee Paid Right.<br/>Every Obligation Met.
            </p>
          </motion.div>
        </div>
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
              <p className='text-3xl md:text-4xl font-inter  font-bold mb-2'>Who We <span className='text-[#015482] italic'>Serve</span></p>
          </motion.div>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 max-w-5xl mx-auto'>

            {/* HR Managers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className='flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-8 py-8 w-full sm:w-auto hover:shadow-lg hover:border-[#015482]/40 transition-all duration-300'
            >
              <div className='w-14 h-14 rounded-full bg-[#015482]/10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 text-[#015482]' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className='text-center'>
                <p className='text-base font-bold text-gray-900'>HR Managers</p>
                <p className='text-xs text-gray-500 mt-1'>In-House HR Teams</p>
              </div>
            </motion.div>

            <span className='hidden sm:block text-gray-300 text-3xl font-light'>·</span>

            {/* Business Owners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-8 py-8 w-full sm:w-auto hover:shadow-lg hover:border-[#015482]/40 transition-all duration-300'
            >
              <div className='w-14 h-14 rounded-full bg-[#015482]/10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 text-[#015482]' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div className='text-center'>
                <p className='text-base font-bold text-gray-900'>Business Owners</p>
                <p className='text-xs text-gray-500 mt-1'>SMBs &amp; Entrepreneurs</p>
              </div>
            </motion.div>

            <span className='hidden sm:block text-gray-300 text-3xl font-light'>·</span>

            {/* Startups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className='flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-8 py-8 w-full sm:w-auto hover:shadow-lg hover:border-[#015482]/40 transition-all duration-300'
            >
              <div className='w-14 h-14 rounded-full bg-[#015482]/10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 text-[#015482]' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
              </div>
              <div className='text-center'>
                <p className='text-base font-bold text-gray-900'>Startups</p>
                <p className='text-xs text-gray-500 mt-1'>Early-Stage &amp; Scaling Teams</p>
              </div>
            </motion.div>

            <span className='hidden sm:block text-gray-300 text-3xl font-light'>·</span>

            {/* Multi-State Employers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-8 py-8 w-full sm:w-auto hover:shadow-lg hover:border-[#015482]/40 transition-all duration-300'
            >
              <div className='w-14 h-14 rounded-full bg-[#015482]/10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 text-[#015482]' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div className='text-center'>
                <p className='text-base font-bold text-gray-900'>Multi-State Employers</p>
                <p className='text-xs text-gray-500 mt-1'>Cross-Jurisdiction Operations</p>
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
               Our Payroll<span className='text-[#015482] italic font-inter'> Services</span>
              </h2>
              <p className='text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto'>
                We provide comprehensive payroll processing for businesses of all sizes and white-label payroll management for accounting firms serving business clients. Whether you need end-to-end outsourced payroll or a dependable back-office partner to handle the processing behind your client-facing service, we deliver accuracy, compliance, and efficiency at every pay cycle.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>

              {/* Card 1 - Full-Cycle Payroll Processing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <Briefcase className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-sm font-bold text-gray-900 mb-2 leading-snug'>Full-Cycle Payroll Processing</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Weekly, bi-weekly, semi-monthly, or monthly payroll runs for hourly, salaried, and contractor payments.
                </p>
              </motion.div>

              {/* Card 2 - Federal Payroll Tax Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <FileText className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-sm font-bold text-gray-900 mb-2 leading-snug'>Federal Payroll Tax Compliance</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Preparation and filing of Form 941 (quarterly) and Form 940 (annual FUTA), along with federal deposit management.
                </p>
              </motion.div>

              {/* Card 3 - State & Local Payroll Tax Filings */}
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
                <h3 className='text-sm font-bold text-gray-900 mb-2 leading-snug'>State &amp; Local Payroll Tax Filings</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  SUTA filings and compliance across all applicable state and local jurisdictions.
                </p>
              </motion.div>

              {/* Card 4 - Direct Deposit Management */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <LandmarkIcon className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-sm font-bold text-gray-900 mb-2 leading-snug'>Direct Deposit Management</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Secure and timely electronic payments for employees and contractors.
                </p>
              </motion.div>

              {/* Card 5 - New Hire Reporting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <UserPlus className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-sm font-bold text-gray-900 mb-2 leading-snug'>New Hire Reporting</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Automated compliance with federal and state new hire reporting requirements.
                </p>
              </motion.div>

              {/* Card 6 - W-2 & 1099 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <Database className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-sm font-bold text-gray-900 mb-2 leading-snug'>W-2 &amp; 1099 Preparation and Filing</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Year-end reporting forms prepared, electronically filed, and distributed.
                </p>
              </motion.div>

              {/* Card 7 - Sales Tax Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <Receipt className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-sm font-bold text-gray-900 mb-2 leading-snug'>Sales Tax Compliance</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Multi-state sales tax calculation, filing, and remittance.
                </p>
              </motion.div>

              {/* Card 8 - Payroll Reporting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <BarChart3 className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-sm font-bold text-gray-900 mb-2 leading-snug'>Payroll Reporting</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Detailed payroll registers, labor cost summaries, and departmental breakdowns for management review.
                </p>
              </motion.div>

              {/* Card 9 - White-Label Payroll for Firms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300'
              >
                <div className='w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300'>
                  <Handshake className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-sm font-bold text-gray-900 mb-2 leading-snug'>White-Label Payroll for Firms</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Payroll reports, employee communications, and year-end forms branded under your firm's identity for seamless client experience.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className='py-35 '>
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
                  <Clock className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Timely compliance</h3>
                  <p className='text-sm text-gray-600'>
                    Every federal and state deposit and filing submitted accurately and on time
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <DatabaseIcon className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Seamless GL integration</h3>
                  <p className='text-sm text-gray-600'>
                    Payroll journal entries post directly to your accounting system, eliminating duplicate data entry
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <CheckCircle2 className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Operational efficiency</h3>
                  <p className='text-sm text-gray-600'>
                    Eliminate hours of manual processing per pay cycle — for your team or your clients
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Globe2 className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Multi-state capability</h3>
                  <p className='text-sm text-gray-600'>
                   We handle nexus analysis, state registration guidance, and multi-jurisdiction tax management
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <UserIcon className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Employee and client confidence</h3>
                  <p className='text-sm text-gray-600'>
                    Reliable, on-time payroll builds trust at every level
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Building2 className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Scalable for growth</h3>
                  <p className='text-sm text-gray-600'>
                    From a 3-person start up to a 150-employee business, our process scales without disruption
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

export default NewPayroll
