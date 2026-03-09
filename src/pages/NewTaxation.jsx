import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FileText,ArrowRight, ArrowLeftRight, Settings, Sparkles, CreditCard, TrendingUp, Database, Building2, CheckCircle2, Clock, BarChart3, Layers, Banknote, LandmarkIcon, BookUser, DollarSign, ChartBarBigIcon, SparkleIcon, Zap, LockIcon, HandshakeIcon, Clock10 } from 'lucide-react'

const NewTaxation = () => {
  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center'>
        {/* Background Image with Overlay */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(https://ik.imagekit.io/qxfudjvlf/taxarc/Tax.png)',
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
              Tax Preparation
            </h1>
            <p className='text-xl md:text-2xl text-white font-light'>
              Reliable Outsourced Tax Production. Delivered to Your Standards. On Your Timeline.
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
               Our Tax Preparation <span className='text-[#015482] italic font-inter'>Services</span>
              </h2>
              <p className='text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto'>
                We function as a seamless extension of your practice. You remain the firm of record and client-facing professionals. We work in the background — preparing returns to your specifications, using your preferred software, and delivering review-ready work products. Our process is built around accuracy and reliability, confidentiality.
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
                  Data<br />Gathering
                </p>
              </div>

              {/* Service 2 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <LandmarkIcon className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  Tax Preparation<br />& Review
                </p>
              </div>

              {/* Service 3 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <CheckCircle2 className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                 Adjustments <br />& Reconciliationss
                </p>
              </div>

              {/* Service 4 */}
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <BookUser className='w-8 h-8 text-[#015482]' />
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  Tax Planning <br /> & Advisory
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
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight'>
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

export default NewTaxation
