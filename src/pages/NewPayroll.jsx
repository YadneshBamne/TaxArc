import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FileText, ArrowUpRight, ArrowLeftRight, Settings, Sparkles, CreditCard, TrendingUp, Database, Building2, CheckCircle2, Clock, BarChart3, Layers, Banknote, LandmarkIcon, BookUser, DollarSign, ChartBarBigIcon, SparkleIcon, Zap, Globe, UserPlus, Receipt, Briefcase, Handshake, DatabaseIcon, GlobeX, Globe2, UserIcon, RefreshCcw, ShieldCheck, MapPinned, FileBadge, EyeOff, BadgeCheck, CheckCircle, GitMerge, Gauge, Smile, SlidersVertical } from 'lucide-react'

const NewPayroll = () => {
  return (
    <div className='page-sections w-full bg-white'>
      {/* Hero Section */}
<section className='relative min-h-screen flex items-center justify-center'>
  <div
    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
    style={{ backgroundImage: 'url(https://ik.imagekit.io/qxfudjvlf/taxarc/Payroll%20Services.jpeg)' }}
  />

  {/* Cyan dim overlay */}
  <div className='absolute inset-0 bg-[#1878AB]/30' />

  <div className='relative z-10 text-center px-4'>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className=' px-6 sm:px-8 md:px-12 py-8 md:py-12 rounded-2xl inline-block max-w-2xl'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4'>
          Payroll Services
        </h1>
        <div className='w-16 h-px bg-white/60 mx-auto mb-2' />
        <p className='text-[1.19rem] text-white font-bold leading-relaxed'>
          Every Employee Paid Right. Every Obligation Met.
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
                  <p className='text-[1.19rem] font-bold text-gray-900'>Small and midsized <br/> business</p>
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
              <p className='text-[1.19rem] text-gray-700 leading-relaxed max-w-4xl mx-auto'>
                We provide comprehensive payroll processing for businesses of all sizes and white-label payroll management for accounting firms serving business clients. Whether you need end-to-end outsourced payroll or a dependable back-office partner to handle the processing behind your client-facing service,<br/> we deliver accuracy, compliance, and efficiency at every pay cycle.
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
                  <RefreshCcw className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>Full-Cycle Payroll Processing</h3>
                <p className='text-lg text-gray-500 leading-relaxed'>
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
                  <ShieldCheck className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>Federal Payroll Tax Compliance</h3>
                <p className='text-lg text-gray-500 leading-relaxed'>
                 Preparation of Form 941 and Form 940, with payroll tax deposit tracking and reconciliation.
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
                  <MapPinned className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>State & Local Payroll Tax Filings</h3>
                <p className='text-lg text-gray-500 leading-relaxed'>
                 SUTA and state payroll tax preparation across applicable jurisdictions.
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
                  <FileBadge className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>W-2 & 1099 Preparation</h3>
                <p className='text-lg text-gray-500 leading-relaxed'>
                  Year-end wage and contractor forms prepared and review-ready for filing.
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
                  <BarChart3 className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>Payroll Reporting</h3>
                <p className='text-lg text-gray-500 leading-relaxed'>
Payroll registers, liability summaries, and reconciliation reports delivered ready for your review.
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
                  <EyeOff className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>White-Label Payroll Support</h3>
                <p className='text-lg text-gray-500 leading-relaxed'>
                  All work prepared within your workflow and delivered under your firm's brand — invisible to your clients.
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
                  <BadgeCheck className='w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug'>White-Label Payroll for Firms</h3>
                <p className='text-lg text-gray-500 leading-relaxed'>
                  Payroll reports, employee communications, and year-end forms branded under your firm's identity for seamless client experience.
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
                  <CheckCircle className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2'>Timely compliance</h3>
                  <p className='text-lg text-gray-600'>
                    Every federal and state deposit and filing submitted accurately and on time
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <GitMerge className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2'>Seamless GL integration</h3>
                  <p className='text-lg text-gray-600'>
                    Payroll journal entries post directly to your accounting system, eliminating duplicate data entry
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Gauge className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2'>Operational efficiency</h3>
                  <p className='text-lg text-gray-600'>
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
                  <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2'>Multi-state capability</h3>
                  <p className='text-lg text-gray-600'>
                   We handle nexus analysis, state registration guidance, and multi-jurisdiction tax management
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                  <Smile className='w-6 h-6 text-[#015482]' />
                </div>
                <div>
                  <h3 className='text-[1.19rem] font-bold text-gray-900 mb-2'>Employee and client confidence</h3>
                  <p className='text-lg text-gray-600'>
                    Reliable, on-time payroll builds trust at every level
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center">
                  <SlidersVertical className="w-6 h-6 text-[#015482]" />
                </div>
                <div>
                  <h3 className="text-[1.19rem] font-bold text-gray-900 mb-2">
                    Flexible Engagement Models
                  </h3>
                  <p className="text-lg text-gray-600">
                    We offer flexible engagement structures — project-based, hourly, or dedicated support —
allowing firms to scale assistance based on workload, seasonality, and specific engagement
needs.
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
                  <li className="text-white/90 text-[1.19rem]">Schedule a free consultation to discover custom solutions for your business.</li>
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

export default NewPayroll
