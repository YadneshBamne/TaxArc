import React, { useState } from 'react'
import { motion } from 'motion/react'
import { FileText, ShieldCheck, ArrowUpRight, Landmark, Lightbulb, Rocket, ChevronDown, Briefcase, Users, TrendingUp, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive accounting, bookkeeping, taxation, and payroll services for CPA firms and businesses. Our services include financial statement preparation, tax compliance, payroll processing, and customized accounting solutions."
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
      answer: "We work with all major accounting software including QuickBooks, Xero, CCH Axcess, Intuit Lacerte, and other popular platforms. Our team is trained to adapt to your preferred software to ensure seamless integration."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple! Fill out the contact form above, send us an email, or give us a call. We'll schedule a consultation to understand your needs and provide a customized solution with transparent pricing."
    }
  ]

  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-12'
            >
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 leading-tight'>
                Innovative Solutions<br />
                That Drive <span className='text-[#17D3CF] italic font-serif'>Success</span>
              </h1>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative rounded-2xl  overflow-hidden shadow-xl'
            >
              <img 
                src="./photo1.jpg" 
                alt="Innovative business solutions" 
                className='w-full h-auto'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Our Services Section */}
      <section className='py-20 '>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='mb-12'
            >
              <p className='text-[#17D3CF] text-sm font-semibold mb-3'>[Core Services]</p>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Explore Our <span className='italic font-serif'>Services</span>
              </h2>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            >
              {/* Service 1 */}
              <div className='bg-white p-6 rounded-xl hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4'>
                  <FileText className='w-6 h-6 text-[#1e40af]' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Monthly & Year-end<br />Bookkeeping
                </h3>
              </div>

              {/* Service 2 */}
              <div className='bg-white p-6 rounded-xl hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4'>
                  <ShieldCheck className='w-6 h-6 text-[#1e40af]' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Catch-up & Clean-up
                </h3>
              </div>

              {/* Service 3 */}
              <div className='bg-white p-6 rounded-xl hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4'>
                  <Landmark className='w-6 h-6 text-[#1e40af]' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Bank Reconciliation
                </h3>
              </div>

              {/* Service 4 */}
              <div className='bg-white p-6 rounded-xl hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4'>
                  <Lightbulb className='w-6 h-6 text-[#1e40af]' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Accounts Receivable /<br />Payable
                </h3>
              </div>

              {/* Service 5 */}
              <div className='bg-white p-6 rounded-xl hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4'>
                  <Rocket className='w-6 h-6 text-[#1e40af]' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Financial Statement<br />Analysis
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-center mb-12'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                With a 98% client <span className='italic font-serif'>satisfaction</span>,<br />
                our strategies have led to<br />
                $50M+ in revenue
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Our strategic approach is designed to align with your business goals, helping you scale faster
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='grid grid-cols-2 md:grid-cols-4 gap-8'
            >
              {/* Stat 1 */}
              <div className='text-center'>
                <div className='w-12 h-12 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Briefcase className='w-6 h-6 text-[#17D3CF]' />
                </div>
                <div className='text-4xl font-bold text-gray-900 mb-2'>0+</div>
                <p className='text-sm text-gray-600'>
                  Over 300+ clients complete high-impact projects.
                </p>
              </div>

              {/* Stat 2 */}
              <div className='text-center'>
                <div className='w-12 h-12 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Sparkles className='w-6 h-6 text-[#17D3CF]' />
                </div>
                <div className='text-4xl font-bold text-gray-900 mb-2'>0%</div>
                <p className='text-sm text-gray-600'>
                  Trusted by a diverse clientele of clients who rely with highly.
                </p>
              </div>

              {/* Stat 3 */}
              <div className='text-center'>
                <div className='w-12 h-12 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Users className='w-6 h-6 text-[#17D3CF]' />
                </div>
                <div className='text-4xl font-bold text-gray-900 mb-2'>0+</div>
                <p className='text-sm text-gray-600'>
                  Our ability to adapt and deliver impactful solutions across.
                </p>
              </div>

              {/* Stat 4 */}
              <div className='text-center'>
                <div className='w-12 h-12 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <TrendingUp className='w-6 h-6 text-[#17D3CF]' />
                </div>
                <div className='text-4xl font-bold text-gray-900 mb-2'>0+</div>
                <p className='text-sm text-gray-600'>
                  Building on years of experience, we provide trusted guidance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-center mb-12'
            >
              <p className='text-[#029F9E] text-sm font-semibold mb-3'>[FAQs]</p>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                Frequently Asked <span className='italic font-serif'>Questions</span>
              </h2>
              <p className='text-gray-600 leading-relaxed max-w-2xl mx-auto'>
                Have questions? We've got answers. Browse our FAQs or reach out to us directly.
              </p>
            </motion.div>

            {/* Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='space-y-4'
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className='border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow'
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                  >
                    <span className='text-lg font-semibold text-gray-900 pr-4'>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#029F9E] shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className='px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100'>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
            <section className='py-20 bg-white'>
              <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden shadow-xl'>
                    {/* Left Column - Content with Cyan Background */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className='bg-[#17D3CF] p-8 md:p-12 flex flex-col justify-center'
                    >
                      <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
                        Work with Experts to Grow Faster & Run <span className='font-serif italic'>Smarter</span>
                      </h2>
                      
                      <ul className='space-y-3 mb-8 text-white'>
                        <li className='text-base md:text-lg'>Schedule a Free Consultation</li>
                        <li className='text-base md:text-lg'>Discover Custom Solutions</li>
                        <li className='text-base md:text-lg'>Start Building Your Competitive Advantage</li>
                      </ul>
                      
                      <Link 
                        to="/contact" 
                        className='inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition font-semibold w-fit group'
                      >
                        Get Started
                        <div className='ml-2 w-6 h-6 bg-[#1e40af] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                          <ArrowUpRight className='w-4 h-4 text-white' />
                        </div>
                      </Link>
                    </motion.div>
      
                    {/* Right Column - Image */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className='relative min-h-96'
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088" 
                        alt="Work with experts" 
                        className='w-full h-full object-cover'
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default Services
