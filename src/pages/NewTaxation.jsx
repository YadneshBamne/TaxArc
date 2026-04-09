import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
  import { FileText, ArrowUpRight, ArrowLeftRight, Settings, Sparkles, CreditCard, TrendingUp, Database, Building2, CheckCircle2, Clock, BarChart3, Layers, Banknote, LandmarkIcon, BookUser, DollarSign, ChartBarBigIcon, SparkleIcon, Zap, LockIcon, HandshakeIcon, Clock10, Globe, RotateCcw, ClipboardList, Monitor } from 'lucide-react'

const NewTaxation = () => {
  return (
    <div className='page-sections w-full bg-white'>
      {/* Hero Section */}
<section className='relative min-h-screen flex items-center justify-center'>
  <div
    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
    style={{ backgroundImage: 'url(https://ik.imagekit.io/qxfudjvlf/taxarc/Taxation.jpeg)' }}
  />

  {/* Gradient band — transparent top & bottom, dark only in the middle */}
  {/* Removed: Gradient overlay for frosted glass effect */}

  <div className='relative z-10 text-center px-4'>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='bg-black/50 backdrop-blur-lg border border-white/30 px-6 sm:px-8 md:px-12 py-8 md:py-12 rounded-2xl shadow-lg inline-block max-w-2xl'>
        <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6'>
          Tax Preparation
        </h1>
        <div className='w-16 h-px bg-white/60 mx-auto mb-2' />
        <p className='text-xl sm:text-lg md:text-xl lg:text-xl text-white font-bold leading-relaxed'>
          Reliable Outsourced Tax Preparation. Delivered to Your Standards. On Your Timeline.
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* Who We Serve Section */}
      <section className='py-20 bg-gray-50 border-b border-gray-100'>
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
                <p className='text-[1.19rem] font-bold text-gray-900'>CPA &amp; EA Firms</p>
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
                <p className='text-[1.19rem] font-bold text-gray-900'>Accounting Practices</p>
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
                <p className='text-[1.19rem] font-bold text-gray-900'>Small and midsized <br/>business</p>
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
              <p className='text-[1.19rem] md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto'>
                Our process is built around accuracy, reliability, and confidentiality. You remain the
firm of record —client-facing and in control. We work in the background, preparing
returns to your specifications, using your preferred software, and delivering work that
is ready for your review.
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
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>Individual Tax Returns (Form 1040)</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                 Preparation of federal individual returns including
Schedules A, B, C, D, and E, delivered review-ready
for your sign-off.
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
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>S-Corporation Returns (Form 1120-S)</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                 Full preparation of S-Corp returns including K-1
schedules, ready for partner or shareholder
distribution.
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
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>Partnership Returns (Form 1065)</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Partnership return preparation with K-1 allocations
prepared to your firm's specifications.
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
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>C-Corporation
Returns (Form 1120)</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Corporate return preparation including depreciation
schedules and supporting workpapers.
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
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Payroll Tax Returns</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Preparation of Form 941, Form 940, and supporting
payroll tax reconciliations on a quarterly and annual
basis.
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
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Year-End Reporting</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  W-2 and 1099-NEC preparation for your clients'
employees and contractors, review-ready for filing.
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
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Extensions &
Estimates</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Preparation of Form 4868, Form 7004, and quarterly
estimated tax calculations as needed.
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
                <h3 className='text-md font-bold text-gray-900 mb-2 leading-snug'>Bookkeeping & Trial
Balance Support</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Cleanup and preparation of books to trial balance
stage, ready for tax return preparation.
                </p>
              </motion.div>

            </div>
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

                            <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <CheckCircle2 className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Software Flexibility</h3>
                  <p className='text-sm text-gray-600'>
                    Works within your existing software environment — UltraTax CS, Lacerte, Drake,
ProConnect, TaxAct, and other major tax software.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#015482] rounded-3xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left: Text Content */}
            <div className="relative flex-1 px-8 py-10 md:px-12 md:py-12 flex flex-col justify-center overflow-hidden">
              {/* Grid overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Scale Smarter with
                  <br />{" "}
                  <span className="font-inter italic bg-white bg-clip-text text-transparent">
                    Tax<span className="text-[#17D3CF]">Arc</span> Global
                  </span>
                  .
                </h2>

                <ul className="space-y-2 mb-10">
                  <li className="text-white/90 text-sm md:text-base">Schedule a free consultation to discover custom solutions for your business.</li>
                </ul>
                <div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors w-fit"
                  >
                    Get Started
                    <span className="w-8 h-8 bg-[#17D3CF] rounded-full flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:w-[45%] shrink-0">
              <img
                src="https://ik.imagekit.io/qxfudjvlf/taxarc/homepageleft.jpeg"
                alt="Experts working together"
                className="w-full h-64 lg:h-full object-cover lg:rounded-r-3xl"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default NewTaxation
