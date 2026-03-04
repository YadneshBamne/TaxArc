import React, { useState } from 'react'
import { motion } from 'motion/react'
import { MapPin, Mail, Phone, Send, ChevronDown, ArrowUpRight } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center'>
        {/* Background Image with Overlay */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070)',
          }}
        >
          <div className='absolute inset-0 bg-black/50'></div>
        </div>

        {/* Content */}
        <div className='container mx-auto px-4 md:px-8 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto text-center  rounded-lg p-12'
          >
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Contact Us
            </h1>
            <p className='text-lg md:text-xl text-white leading-relaxed mb-4'>
              Based in Ahmedabad, India, we collaborate with CPA firms and businesses across the globe. Our systems, communication processes, and delivery frameworks are built to work seamlessly across time zones— ensuring clarity, responsiveness, and consistent turnaround, no matter where you're located.
            </p>
            <p className='text-lg md:text-xl text-white leading-relaxed'>
              Whether you're a CPA firm looking to streamline seasonal workload, or a business owner seeking reliable accounting, taxation, or payroll support, we're here to help you run your operations smoothly and invest more time into growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Map Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>
            {/* Left - Contact Info */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className='space-y-2'   // ← was space-y-8
>
              <div className='p-2 rounded-xl'>
                <div className='flex items-start gap-4 mb-2'>
                  <div className='w-12 h-12 bg-[#17D3CF] rounded-full flex items-center justify-center shrink-0'>
                    <MapPin className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold mb-4 text-gray-900'>TaxArc Global</h3>
                    <p className='text-gray-700 leading-relaxed'>
                      1820, Navratna Corporate Park, Ashok Vatika, Ahmedabad, Gujarat 380058
                    </p>
                  </div>
                </div>
              </div>

              <div className=' p-2 rounded-xl'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-[#17D3CF] rounded-full flex items-center justify-center shrink-0'>
                    <Mail className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-2 text-gray-900'>Email</h3>
                    <a 
                      href="mailto:harshika.vora@gmail.com"
                      className='text-gray-700 hover:text-[#17D3CF] transition-colors'
                    >
                      harshika.vora@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className=' p-2 rounded-xl mt-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-[#17D3CF] rounded-full flex items-center justify-center shrink-0'>
                    <Phone className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-2 text-gray-900'>Phone</h3>
                    <a 
                      href="tel:+919909469067"
                      className='text-gray-700 hover:text-[#17D3CF] transition-colors'
                    >
                      +91 99094 69067
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='h-full min-h-125'
            >
              <div className='w-full h-full rounded-xl overflow-hidden shadow-lg'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.0286402151464!2d72.49073253409586!3d23.029016855453342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2ace83bd07%3A0xbbd544a10ad76e8c!2sTaxArc%20Global!5e0!3m2!1sen!2sin!4v1772642218996!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TaxArc Global Location - Ahmedabad"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Images Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Waiting Room */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='relative rounded-2xl overflow-hidden shadow-lg group'
              >
                <img
                  src='https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069'
                  alt='Waiting Room'
                  className='w-full h-80 object-cover'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-md'>
                    Waiting Room
                  </span>
                </div>
              </motion.div>

              {/* Working Space */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='relative rounded-2xl overflow-hidden shadow-lg group'
              >
                <img
                  src='https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069'
                  alt='Working Space'
                  className='w-full h-80 object-cover'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-[#38373E] backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md'>
                    Working space
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Drop Us a Message Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20'>
              {/* Left - Message Header & Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='w-full lg:w-auto lg:max-w-md space-y-8'
              >
                <div>
                  <p className='text-[#17D3CF] text-sm font-semibold mb-3'>[Contact]</p>
                  <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                    Drop Us a <span className='italic font-serif'>Message</span>
                  </h2>
                  <p className='text-gray-600 leading-relaxed'>
                    We're always happy to hear from you and will get back to you as soon as possible.
                  </p>
                </div>

                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-[#17D3CF]/10 rounded-full flex items-center justify-center'>
                      <Mail className='w-5 h-5 text-[#17D3CF]' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-600 mb-1'>Email</p>
                      <a 
                        href="mailto:harshika.vora@gmail.com"
                        className='text-gray-900 font-medium hover:text-[#17D3CF] transition-colors'
                      >
                        harshika.vora@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-[#17D3CF]/10 rounded-full flex items-center justify-center'>
                      <Phone className='w-5 h-5 text-[#17D3CF]' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-600 mb-1'>Call</p>
                      <a 
                        href="tel:+919909469067"
                        className='text-gray-900 font-medium hover:text-[#17D3CF] transition-colors'
                      >
                        +91 99094 69067
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='w-full lg:w-auto lg:max-w-2xl lg:flex-1'
              >
                <form onSubmit={handleSubmit} className='bg-white p-8 rounded-xl shadow-lg space-y-6'>
                  <div>
                    <label htmlFor='fullName' className='block text-sm font-semibold text-gray-900 mb-2'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder='Enter your name'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17D3CF] focus:border-transparent transition-all'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-sm font-semibold text-gray-900 mb-2'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter email address'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17D3CF] focus:border-transparent transition-all'
                    />
                  </div>

                  <div>
                    <label htmlFor='message' className='block text-sm font-semibold text-gray-900 mb-2'>
                      Write Your Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='I want to collaborate'
                      required
                      rows={5}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17D3CF] focus:border-transparent transition-all resize-none'
                    />
                  </div>

                  <button className="w-full flex items-center justify-between bg-teal-400 hover:bg-teal-500 transition text-white font-medium text-sm px-6 py-3.5 rounded-full">
            <span>Send Message</span>
            <span className="w-8 h-8 bg-opacity-20 rounded-full flex items-center justify-center">
              <ArrowUpRight size={25} className="text-white" />
            </span>
          </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className='py-20 bg-white'>
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
    </div>
  )
}

export default Contact
