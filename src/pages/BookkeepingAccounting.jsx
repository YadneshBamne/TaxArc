import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FileText,ArrowRight, ArrowLeftRight, Settings, Sparkles, CreditCard, TrendingUp, Database, Building2, CheckCircle2, Clock, BarChart3, Layers, Banknote, LandmarkIcon, BookUser, DollarSign, ChartBarBigIcon, SparkleIcon, Zap } from 'lucide-react'

const BookkeepingAccounting = () => {
  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center'>
        {/* Background Image with Overlay */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(./photo1.jpg)',
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
             Accounting & Bookkeeping
            </h1>
            <p className='text-xl md:text-2xl text-white font-light'>
              Clean Books. Clear Insights. Confident Decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}


      {/* Main Content Section */}


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
                Our Accounting & Bookkeeping <span className='text-[#015482] italic font-inter'>Services</span>
              </h2>
              <p className='text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto'>
                We provide full-scope accounting support across QuickBooks Online, QuickBooks Desktop, Xero, and other major software. For accounting firms, we act as a white-label, back-office team handling the bookkeeping work you'd rather not staff internally. For businesses, we become your outsourced accounting department — managing everything from daily transactions to month-end close.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8'
            >
              {/* Service 1 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <FileText className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  Monthly<br />Bookkeeping
                </p>
              </div>

              {/* Service 2 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <LandmarkIcon className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  Accounts Payable<br />& Receivable
                </p>
              </div>

              {/* Service 3 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <CheckCircle2 className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  Chart of Accounts<br />Setup & Restructuring
                </p>
              </div>

              {/* Service 4 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <BookUser className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  Catch-up & Clean-Up<br /> Accounting
                </p>
              </div>

              {/* Service 5 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <DollarSign className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  Financial Statement<br />Preparation
                </p>
              </div>

              {/* Service 6 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <ChartBarBigIcon className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  White-Label<br />Bookkeeping
                </p>
              </div>

              {/* Service 7 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Database className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  QuickBooks & Xero <br/>Setup / Migration
                </p>
              </div>

              {/* Service 8 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Zap className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  Month End &<br />Year-End Close
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className='py-20'>
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
                  <CheckCircle2 className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Audit-Ready Records</h3>
                  <p className='text-sm text-gray-600'>
                    Well-maintained books that hold up under any compliance or due diligence review.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Clock className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Time-recovered</h3>
                  <p className='text-sm text-gray-600'>
                    Daily tasks done efficiently so leadership can focus on strategy, not spreadsheets.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <FileText className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Tax-season efficiency</h3>
                  <p className='text-sm text-gray-600'>
                    Organized records significantly reduce the time and cost of year-end tax preparation.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <BarChart3 className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Decision-grade reporting</h3>
                  <p className='text-sm text-gray-600'>
                    Management reports built for financial review — not just compliance.
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Layers className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Scalable processes</h3>
                  <p className='text-sm text-gray-600'>
                    We put in place the right structure so accounting doesn't slow down your own business.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
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
                  src="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
                className='inline-flex items-center bg-white border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:border-[#17d3cf] hover:bg-blue-50 transition group font-semibold w-fit'
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

export default BookkeepingAccounting
