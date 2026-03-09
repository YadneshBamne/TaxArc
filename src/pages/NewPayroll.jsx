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
            backgroundImage: 'url(https://ik.imagekit.io/qxfudjvlf/taxarc/Payrollnew.jpeg?updatedAt=1773041276167)',
          }}
        >
          <div className='absolute inset-0 bg-black/40'></div>
        </div>

        {/* Content */}
        <div className='container mx-auto px-4 md:px-8 relative z-10 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              Payroll
            </h1>
            <p className='text-xl md:text-2xl text-white font-light'>
             Every Employee Paid Right.<br/>Every Obligation Met.
            </p>
          </motion.div>
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

            {/* Row 1 - 4 items */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='flex flex-col items-center text-center'
              >
                <Briefcase fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Full-Cycle<br />Payroll Processing</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='flex flex-col items-center text-center'
              >
                <FileText fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Federal Payroll<br />Tax Compliance</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex flex-col items-center text-center'
              >
                <Globe className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>State & Local<br />Payroll Tax Filings</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex flex-col items-center text-center'
              >
                <LandmarkIcon fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Direct Deposit<br />Management</p>
              </motion.div>
            </div>

            {/* Row 2 - 3 items */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-col items-center text-center'
              >
                <UserPlus className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>New Hire<br />Reporting</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex flex-col items-center text-center'
              >
                <Database fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>W-2 & 1099<br />Preparation & Filing</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='col-span-2 md:col-span-1 flex flex-col items-center text-center'
              >
                <Receipt className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Sales Tax<br />Compliance</p>
              </motion.div>
            </div>

            {/* Row 3 - 2 items */}
            <div className='grid grid-cols-2 gap-8 max-w-xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='flex flex-col items-center text-center'
              >
                <Handshake className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>White-Label<br />Payroll for Firms</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='flex flex-col items-center text-center'
              >
                <BarChart3 className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Payroll<br />Reporting</p>
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
              <h2 className='text-4xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight'>
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
    </div>
  )
}

export default NewPayroll
