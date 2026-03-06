import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { BookOpen, Clock, Shield, Users, DollarSign, TrendingUp, ArrowRight, Eye, Target, Gem, Lock, UserCircle2, Key, Home, Printer, Settings, Network, Database, ShieldAlert, HardDrive, ArrowUpRight, ChevronDown,Phone } from 'lucide-react'
import LogoLoop from '../components/LogoLoop'

const About = () => {

      const [openFaq, setOpenFaq] = useState(null)
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


  
    const toggleFaq = (index) => {
      setOpenFaq(openFaq === index ? null : index)
    }


  return (
    <div className='w-full bg-white '>

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
          <source src='/C0027.MP4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/40'></div>

        {/* Content */}
        <div className='container mx-auto px-4 md:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-5xl md:text-6xl font-bold text-white mb-12'
            >
              About Us
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-lg md:text-xl text-white leading-relaxed mb-8'
            >
              TaxArc Global is a global professional services outsourcing firm providing structured, 
              secure, and dependable support across tax, accounting and bookkeeping operations to 
              businesses and professional organizations worldwide.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-lg md:text-xl text-white leading-relaxed'
            >
              We operate on a foundation of ARC—Accuracy, Reliability, and Confidentiality. These 
              principles guide how we deliver services, manage risk, and build long-term partnerships, 
              ensuring consistent outcomes and the level of assurance expected by professionally 
              managed organizations.
            </motion.p>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}


      {/* Meet Our CEO Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='order-2 lg:order-1'
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-2'>
                Meet our CEO
              </h2>
              <h3 className='text-4xl md:text-5xl font-serif italic text-[#17d3cf] mb-4'>
                Harshika Vora.
              </h3>
              <p className='text-lg font-semibold text-gray-800 mb-6'>
                CA (India) and U.S. CPA (License Awaited)
              </p>

              <div className='space-y-4 text-gray-700 leading-relaxed'>
                <p>
                  TaxArc Global is led by Harshika Vora, a Chartered Accountant (India) and U.S. CPA (License Awaited) with nearly 9years of professional experience across Indian and U.S. taxation, accounting, audit, and compliance.
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

                <p>
                  TaxArc Global operates under her direction as a process-driven, compliance-first delivery organization, emphasizing SOP adherence, audit-ready workpapers, confidentiality, and consistent quality.
                </p>

                <p>
                  Every engagement is structured for partner-level review, reduced rework, and predictable delivery, supporting CPA firms in scaling capacity without compromising professional standards.
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
                <img
                  src='./harshika.jpeg'
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
                <img
                  src='./hemant.jpeg'
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
              <h2 className='text-4xl md:text-5xl font-bold mb-2'>
                Meet our Strategic Advisor
              </h2>
              <h3 className='text-4xl md:text-5xl font-serif italic text-[#17d3cf] mb-4'>
                Hemant R. Vora.
              </h3>
              <p className='text-lg font-semibold text-gray-800 mb-6'>
                CA (India), FCA, Inter CS, LLB, B.Com<br />
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

      {/* Vision, Mission & Values Section */}
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
              Our <span className='italic text-[#015482]'>Vision, Mission & Values</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='rounded-2xl overflow-hidden shadow-2xl'
            >
              <div className='bg-[#015482] h-42 flex items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>VISION</h3>
              </div>
              <div className='relative bg-gray-100 pt-20 pb-8 px-6'>
                <div className='absolute -top-10 left-1/2 -translate-x-1/2'>
                  <div className='w-20 h-20 bg-[#015482] rotate-45 flex items-center justify-center'>
                    <Eye className='w-20 h-20 text-white -rotate-45' />
                  </div>
                </div>
                <p className='text-center text-gray-700 text-sm leading-relaxed mt-4'>
                  To be a globally trusted professional services partner, recognized for excellence in tax, accounting and bookkeeping operations, precision-driven execution, and uncompromising data security.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className=' rounded-2xl overflow-hidden shadow-2xl'
            >
              <div className='bg-[#015482] h-42 flex items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>MISSION</h3>
              </div>
              <div className='relative  pt-20 pb-10 px-6'>
                <div className='absolute -top-10 left-1/2 -translate-x-1/2'>
                  <div className='w-20 h-20 bg-[#015482] rotate-45 flex items-center justify-center'>
                    <Target className='w-20 h-20 pb-2 text-white -rotate-45' />
                  </div>
                </div>
                <p className='text-center text-gray-700 text-sm leading-relaxed mt-4'>
                  To deliver reliable, high-quality outsourced accounting and tax support, powered by qualified professionals, structured processes, intelligent technology and strict confidentiality.
                </p>
              </div>
            </motion.div>

            {/* Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=' rounded-2xl overflow-hidden shadow-2xl'
            >
              <div className='bg-[#015482] h-42 flex items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>VALUES</h3>
              </div>
              <div className='relative  pt-20 pb-10 px-6'>
                <div className='absolute -top-10 left-1/2 -translate-x-1/2'>
                  <div className='w-20 h-20 bg-[#015482] rotate-45 flex items-center justify-center'>
                    <Gem className='w-20 h-20 text-white -rotate-45' />
                  </div>
                </div>
                <p className='text-center text-gray-700 text-sm leading-relaxed mt-4'>
                  Simple text inserted<br />
                  outsourced accounting and tax support,<br />
                  powered by qualified professionals,<br />
                  structured processes, intelligent<br />
                  technology and strict confidentiality.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className='py-20 bg-gray-50'>
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
          </motion.div>

          <div className='max-w-6xl mx-auto'>
            {/* Row 1 */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-white border-2 border-[#17D3CF] rounded-2xl p-6 text-center relative'
              >
                <h3 className='text-xl font-bold mb-3'>Task<br />Initiation</h3>
                <p className='text-sm text-gray-600'>Job assigned<br />by client</p>
                <ArrowRight className='hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400' />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='bg-white border-2 border-[#17D3CF] rounded-2xl p-6 text-center relative'
              >
                <h3 className='text-xl font-bold mb-3'>Deadline<br />Setting</h3>
                <p className='text-sm text-gray-600'>Agreement on task<br />completion time</p>
                <ArrowRight className='hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400' />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-white border-2 border-[#17D3CF] rounded-2xl p-6 text-center relative'
              >
                <h3 className='text-xl font-bold mb-3'>Data<br />Exchange</h3>
                <p className='text-sm text-gray-600'>Sharing of<br />necessary documents</p>
                <ArrowRight className='hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400' />
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='bg-white border-2 border-[#17D3CF] rounded-2xl p-6 text-center'
              >
                <h3 className='text-xl font-bold mb-3'>Client<br />Review</h3>
                <p className='text-sm text-gray-600'>Client reviews and<br />responds to queries</p>
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {/* Card 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='bg-white border-2 border-[#17D3CF] rounded-2xl p-6 text-center relative'
              >
                <h3 className='text-xl font-bold mb-3'>Query<br />Compilation</h3>
                <p className='text-sm text-gray-600'>List of queries<br />prepared by client</p>
                <ArrowRight className='hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400' />
              </motion.div>

              {/* Card 6 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='bg-white border-2 border-[#17D3CF] rounded-2xl p-6 text-center relative'
              >
                <h3 className='text-xl font-bold mb-3'>Task<br />Preparation</h3>
                <p className='text-sm text-gray-600'>Arrow assigns<br />processes data</p>
                <ArrowRight className='hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400' />
              </motion.div>

              {/* Card 7 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='bg-white border-2 border-[#17D3CF] rounded-2xl p-6 text-center relative'
              >
                <h3 className='text-xl font-bold mb-3'>Final<br />Review</h3>
                <p className='text-sm text-gray-600'>Senior manager<br />checks for accuracy</p>
                <ArrowRight className='hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400' />
              </motion.div>

              {/* Card 8 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='bg-white border-2 border-[#17D3CF] rounded-2xl p-6 text-center'
              >
                <h3 className='text-xl font-bold mb-3'>Delivery &<br />Feedback</h3>
                <p className='text-sm text-gray-600'>Task is delivered &<br />feedback is taken for<br />scope of improvement</p>
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
              Our IT Infrastructure and <span className='italic text-[#015482]'>Security Measures</span>
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
                <Shield fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Latest configuration<br />devices</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='flex flex-col items-center text-center'
              >
                <Lock fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Licensed support<br />software</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex flex-col items-center text-center'
              >
                <UserCircle2  className='w-12 h-12 text-[#015482]  mb-4' />
                <p className='text-sm font-semibold'>Secured<br />workstations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex flex-col items-center text-center'
              >
                <Key className='w-12 h-12 text-[#015482] mb-4' />
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
                <Home className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>100% on-site<br />operations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex flex-col items-center text-center'
              >
                <Printer fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Printing<br />restrictions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex flex-col items-center text-center'
              >
                <Settings fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Centralized<br />control</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='flex flex-col items-center text-center'
              >
                <Network fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Multiple LAN networks</p>
              </motion.div>
            </div>

            {/* Row 3 */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='flex flex-col items-center text-center'
              >
                <Database fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Functional access<br />to data</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='flex flex-col items-center text-center'
              >
                <ShieldAlert fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Harmful website<br />monitoring</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className='flex flex-col items-center text-center'
              >
                <HardDrive fill='#CCD9ED' className='w-12 h-12 text-[#015482] mb-4' />
                <p className='text-sm font-semibold'>Automated<br />Backups</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
                    Friendly Asked
                  </h2>
                  <h3 className='text-4xl md:text-5xl italic font-serif text-gray-900 mb-12'>
                    Questions.
                  </h3>

                  {/* Still have a question box */}
                  <div className=''>
                    <h4 className='text-xl font-bold text-gray-900 mb-3'>
                      Still have a question?
                    </h4>
                    <p className='text-gray-600 text-sm mb-6 leading-relaxed'>
                      Our team is ready to assist you with anything you need.
                    </p>
                    <a
                      href='tel:+919909469067'
                      className='inline-flex items-center gap-3 bg-[#17D3CF] hover:bg-[#15c2be] text-white px-6 py-3 rounded-full font-medium transition-colors'
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
                            <div className='w-8 h-8 flex items-center justify-center text-gray-400'>
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

