import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { BookOpen, Clock, Shield, Users, DollarSign, TrendingUp, ArrowRight, Gem, Lock, UserCircle2, Key, Home, Printer, Settings, Network, Database, ShieldAlert, HardDrive, ArrowUpRight, ChevronDown,Phone, MonitorCloudIcon, Cpu, MonitorCheck, UsbIcon, Building, PrinterX, SlidersHorizontal, HardDriveDownload, Search, FileText, Wifi, CheckCircle2, Eye, Target, Plus, User } from 'lucide-react'
import LogoLoop from '../components/LogoLoop'
import { useSanityData } from '../hooks/useSanityData'
import { ABOUT_QUERY } from '../sanity/queries'

const About = () => {
    const [openFaq, setOpenFaq] = useState(null)
    
    // Icon mapping function
    const getIcon = (iconName) => {
      const icons = {
        Cpu,
        Key,
        MonitorCheck,
        UsbIcon,
        Building,
        PrinterX,
        SlidersHorizontal,
        Network,
        Database,
        ShieldAlert,
        HardDriveDownload,
      }
      return icons[iconName] || null
    }
    
    // Fetch About page data from Sanity
    const { data: aboutData } = useSanityData(ABOUT_QUERY)
    
    // About hero section with fallback
    const heroAboutData = aboutData?.heroSection || {
      heading: 'About Us',
      description: 'TaxArc Global is a global professional outsourcing firm providing structured, secure, and dependable support across tax, accounting and bookkeeping operations to businesses and professional organizations.',
      backgroundVideo: 'https://ik.imagekit.io/qxfudjvlf/taxarc/About%20Us%20Video.mp4',
    }

    // Leadership section with fallback
    const leadershipData = aboutData?.leadershipSection || {
      heading: 'Meet our Leadership Team',
      teamMembers: [
        {
          name: 'Harshika Vora',
          title: 'Founder',
          qualifications: 'CPA(US) Exam Qualified | FCA (India) | B.Com',
          otherInfo: 'Proprietor – Harshika & Co.',
          description: 'TaxArc Global is founded and led by a Chartered Accountant (India) and US CPA Exam Qualified professional with nearly 9 years of experience across Indian and US taxation, accounting, audit, and compliance.\n\nHer professional foundation was built within a decades-old family CA practice — an environment where compliance discipline, client confidentiality, and uncompromising attention to detail were never optional. That culture of rigor and accountability is what TaxArc Global is built on.\n\nOver the past years, she has worked directly with US CPA firms on individual and business tax preparation, bookkeeping, accounting, and audit engagements — gaining hands-on familiarity with US firm workflows, review standards, and the software environments her clients rely on.\n\nThis enables TaxArc Global to function as a seamless offshore extension of your in-house team, not just a vendor.',
          image: { asset: { url: 'https://ik.imagekit.io/qxfudjvlf/taxarc/harshika.jpeg?updatedAt=1775736540181' } },
          linkedinUrl: 'https://www.linkedin.com/in/harshika-vora-ca-cpa-7541a9154/',
        },
        {
          name: 'Hemant R. Vora',
          title: 'Strategic Advisor',
          qualifications: 'FCA (India), Inter CS, LL.B, B.Com',
          otherInfo: 'Proprietor – Hemant R. Vora & Co. (Est. 1981)',
          description: 'TaxArc Global\'s strategic strength is anchored in the mentorship and guidance of CA Hemant R. Vora — a respected Chartered Accountant with over 45 years of professional experience in compliance, advisory, and practice leadership. As the Founder of Hemant R. Vora & Co., established in 1981, he has built a reputation rooted in technical precision, ethical governance, and enduring client trust across diverse industries.\n\nAs Strategic Advisor, he provides TaxArc Global with seasoned judgment, structured thinking, and governance-driven direction. His influence ensures that the firm\'s growth is aligned with strong quality control frameworks, discipline, and uncompromising professional standards. With a multidisciplinary academic foundation, he brings an integrated financial, legal, and regulatory perspective that strengthens decision-making at every level.\n\nBeyond strategy, his mentorship shapes the firm\'s culture. He instills the values of integrity, accountability, and long-term client stewardship—principles that define TaxArc Global\'s approach to serving international partners. His presence adds institutional maturity, reinforces credibility, and ensures that the firm evolves with stability, clarity, and professional conviction.',
          image: { asset: { url: 'https://ik.imagekit.io/qxfudjvlf/taxarc/CA%20Hemant%20Vora.jpeg' } },
          linkedinUrl: '',
        },
      ],
    }
    
    // Vision & Mission section with fallback
    const visionMissionData = aboutData?.visionMissionSection || {
      vision: {
        heading: 'Vision',
        description: 'To be a globally trusted professional services partner, recognized for excellence in tax, accounting and bookkeeping operations, precision-driven execution, and uncompromising data security.',
      },
      mission: {
        heading: 'Mission',
        description: 'To deliver reliable, high-quality outsourced accounting and tax support, powered by qualified professionals, structured processes, intelligent technology and strict confidentiality.',
      },
    }

    // Infrastructure section with fallback
    const infrastructureData = aboutData?.infrastructureSection || {
      heading: 'Our IT Infrastructure & Security Measures',
      items: [
        { icon: 'Cpu', title: 'Latest configuration devices' },
        { icon: 'Key', title: 'Licensed support software' },
        { icon: 'MonitorCheck', title: 'Secured workstations' },
        { icon: 'UsbIcon', title: 'No external devices' },
        { icon: 'Building', title: '100% on-site operations' },
        { icon: 'PrinterX', title: 'Printing restrictions' },
        { icon: 'SlidersHorizontal', title: 'Centralized control' },
        { icon: 'Network', title: 'Multiple LAN networks' },
        { icon: 'Database', title: 'Functional access to data' },
        { icon: 'ShieldAlert', title: 'Harmful website monitoring' },
        { icon: 'HardDriveDownload', title: 'Automated Backups' },
      ],
    }

    // FAQs section with fallback
    const faqsData = aboutData?.faqSection?.faqs || [
      {
        question: 'What services do you offer?',
        answer: 'We offer comprehensive Tax Preparation, Accounting & Bookkeeping and Payroll Services for CPA firms and businesses. Our services include financial statement preparation, tax compliance, payroll processing, and customized accounting solutions.',
      },
      {
        question: 'How do you ensure data security?',
        answer: 'We implement enterprise-level security measures including encrypted data transmission, secure servers, restricted access controls, and regular security audits. All our systems comply with industry-standard security protocols to protect your sensitive financial information.',
      },
      {
        question: 'What is your typical turnaround time?',
        answer: 'Our turnaround times vary depending on the service and complexity. Generally, we deliver bookkeeping services within 2-3 business days, tax returns within 3-5 business days, and payroll processing within 24 hours. We can accommodate rush requests when needed.',
      },
      {
        question: 'Do you work with international clients?',
        answer: 'Yes, we work with CPA firms and businesses across the globe. Our systems and processes are designed to work seamlessly across different time zones, ensuring consistent communication and timely delivery regardless of your location.',
      },
      {
        question: 'What software platforms do you support?',
        answer: 'We support a wide range of leading accounting and financial platforms including Drake Software, Wave, Xero, TaxAct, QuickBooks, Intuit ProConnect, Cash App, Gusto, ADP, Intuit Lacerte, and CCH Axcess—ensuring seamless integration with the tools you already use.',
      },
      {
        question: 'How do I get started?',
        answer: <>Getting started is simple! Fill out the <Link to="/contact#contact-form" className="text-[#17D3CF] underline hover:text-[#015482]">contact form</Link>, send us an email or give us a call. We'll schedule a consultation to understand your needs and provide a customized solution with transparent and fair pricing.</>,
      },
    ]

    // Workflow Process section with fallback
    const workflowData = aboutData?.workflowSection || {
      heading: 'Our Workflow Process',
      description: 'Our workflow is meticulously designed to ensure every tax and accounting task is handled with absolute clarity. From initial data gathering to the final review, our cyclical process keeps you informed and maintains uncompromising quality at every step.',
      workflows: [
        {
          title: 'Client Onboarding',
          description: 'Establishing secure access and gathering essential requirements.',
        },
        {
          title: 'Data Sharing',
          description: 'Securely transferring documents and collecting all necessary information.',
        },
        {
          title: 'Preparation',
          description: 'Experienced tax and accounting professionals prepare returns and financial reports.',
        },
        {
          title: 'Internal Review',
          description: 'A multi-level quality assurance process designed to ensure accuracy and reliability.',
        },
        {
          title: 'Final Delivery',
          description: 'Timely delivery of review-ready work, ensuring all deadlines are met.',
        },
      ],
    }
    
    const faqs = faqsData
    
    const toggleFaq = (index) => {
      setOpenFaq(openFaq === index ? null : index)
    }


  return (
    <div className='page-sections w-full bg-white'>

      {/* About Us Section */}
 <section className='relative py-16 md:py-18 min-h-screen flex items-center justify-center'>
  <video
    className='absolute inset-0 w-full h-full object-cover'
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={heroAboutData.backgroundVideo} type='video/mp4' />
  </video>

  {/* Cyan dim overlay */}
  <div className='absolute inset-0 bg-[#1878AB]/30' />

  <div className='container mx-auto px-4 sm:px-6 md:px-8 relative z-10'>
    <div className='max-w-4xl mx-auto text-center'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=' px-6 sm:px-8 md:px-12 py-8 md:py-12 rounded-2xl'
      >
        <h2 className='text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-2 sm:mb-4 md:mb-6'>
          {heroAboutData.heading}
        </h2>
        <div className='w-16 h-px bg-white/60 mx-auto mb-2' />
        <p className='text-[1.19rem] text-white font-semibold leading-relaxed'>
          {heroAboutData.description}
        </p>
      </motion.div>
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}


      {/* Meet Our CEO Section */}
      {/* Meet Our Leadership Section */}
      <section className='py-6 md:py-7'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Meet our <span className='font-inter italic text-[#015482]'><br></br>{leadershipData.heading?.split(' ').slice(-2).join(' ') || 'Leadership Team'}</span>
            </h2>
          </motion.div>

          {/* Map through team members */}
          {leadershipData.teamMembers?.map((member, index) => (
            <div key={index} className='mb-16'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto'>
                {/* Content - alternates position based on index */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}
                >
                  <div className='hidden lg:flex items-center gap-3 mb-1'>
                    <h3 className='text-3xl md:text-5xl font-inter italic'>
                      <span className='text-[#015482] font-bold'>{member.name}</span>
                    </h3>
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='shrink-0'
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28' className='w-8 h-8' fill='#0A66C2'>
                          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className='hidden lg:block text-3xl md:text-5xl italic font-semibold text-gray-700 mb-2'>{member.title}</p>
                  <p className='hidden lg:block text-[1.19rem] font-semibold text-gray-800'>
                    {member.qualifications}
                  </p>
                  <p className='hidden lg:block text-[1.19rem] font-semibold text-gray-800 mb-6'>
                    {member.otherInfo}
                  </p>

                  <div className='space-y-4 text-gray-700 text-[1.19rem] leading-relaxed'>
                    {member.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph.trim()}</p>
                    ))}
                  </div>
                </motion.div>

                {/* Image - alternates position based on index */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 0 ? 'order-1 lg:order-2 flex justify-center lg:justify-end' : 'order-1 lg:order-1 flex justify-center lg:justify-start'}
                >
                  <div className='relative w-full max-w-md lg:max-w-lg'>
                    <div className='lg:hidden text-center mb-6'>
                      <div className='flex items-center justify-center gap-3 mb-1'>
                        <h3 className='text-3xl font-inter italic'>
                          <span className='text-[#015482] font-bold'>{member.name}</span>
                        </h3>
                        {member.linkedinUrl && (
                          <a
                            href={member.linkedinUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='shrink-0'
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28' className='w-7 h-7' fill='#0A66C2'>
                              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className='text-3xl italic font-semibold text-gray-700 mb-2'>{member.title}</p>
                      <p className='text-[1.19rem] font-semibold text-gray-800'>
                        {member.qualifications}
                      </p>
                      <p className='text-[1.19rem] font-semibold text-gray-800 mb-4'>
                        {member.otherInfo}
                      </p>
                    </div>
                    <img
                      src={member.image?.asset?.url}
                      alt={`${member.name} - ${member.title} of TaxArc Global`}
                      className='w-full h-auto rounded-3xl object-cover'
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className='md:py-4 bg-gray-50'>
        <div className='w-full px-4 sm:px-6 md:px-8 flex justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='w-full'
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full max-w-7xl mx-auto'>
              <div className='relative pt-12'>
                <div className='absolute left-1/2 top-0 -translate-x-1/2 z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#015482] text-white border-2 border-white flex items-center justify-center'>
                  <Eye className='w-12 h-12 md:w-14 md:h-14' strokeWidth={1.8} />
                </div>
                <div className='h-96 bg-white border-2 border-dotted border-[#1f2937] rounded-[2.2rem] px-6 md:px-10 py-14 md:py-16 text-center flex flex-col items-center justify-center'>
                  <h3 className='text-[#015482] text-4xl md:text-5xl font-bold mb-6'>{visionMissionData?.vision?.heading || 'Vision'}</h3>
                  <p className=' text-black leading-normal max-w-4xl text-[1.19rem] mx-auto'>
                    {visionMissionData?.vision?.description || 'To be a globally trusted professional services partner, recognized for excellence in tax, accounting and bookkeeping operations, precision-driven execution, and uncompromising data security.'}
                  </p>
                </div>
              </div>

              <div className='relative pt-12'>
                <div className='absolute left-1/2 top-0 -translate-x-1/2 z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#015482] text-white border-2 border-white flex items-center justify-center'>
                  <Target className='w-12 h-12 md:w-14 md:h-14' strokeWidth={1.8} />
                </div>
                <div className='h-96 bg-white border-2 border-dotted border-[#1f2937] rounded-[2.2rem] px-6 md:px-10 py-14 md:py-16 text-center flex flex-col items-center justify-center'>
                  <h3 className='text-[#015482] text-4xl md:text-5xl font-bold mb-6'>{visionMissionData?.mission?.heading || 'Mission'}</h3>
                  <p className=' text-black leading-normal text-[1.19rem] max-w-4xl mx-auto'>
                    {visionMissionData?.mission?.description || 'To deliver reliable, high-quality outsourced accounting and tax support, powered by qualified professionals, structured processes, intelligent technology and strict confidentiality.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className='md:py-4'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our <span className='italic text-[#015482]'>{workflowData?.heading?.split(' ').slice(1).join(' ') || 'Workflow Process'}</span>
            </h2>
            <p className='text-gray-600 pb-10 text-[1.19rem] leading-relaxed max-w-3xl mx-auto'>
              {workflowData?.description || 'Our workflow is meticulously designed to ensure every tax and accounting task is handled with absolute clarity. From initial data gathering to the final review, our cyclical process keeps you informed and maintains uncompromising quality at every step.'}
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className='max-w-6xl mx-auto'>
            {workflowData?.workflows && workflowData.workflows.length > 0 && (
              <>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8'>
                  {workflowData.workflows.slice(0, 3).map((workflow, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className='relative border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#015482]/40 transition-all'
                    >
                      <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#015482] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg'>{String(index + 1).padStart(2, '0')}</div>
                      <h3 className='text-xl font-bold text-center mb-3 pt-4'>{workflow?.title}</h3>
                      <p className='text-gray-600 text-center  text-[1.19rem]'>{workflow?.description}</p>
                    </motion.div>
                  ))}
                </div>

                {workflowData.workflows.length > 3 && (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto'>
                    {workflowData.workflows.slice(3).map((workflow, index) => (
                      <motion.div
                        key={index + 3}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                        className='relative border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#015482]/40 transition-all'
                      >
                        <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#015482] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg'>{String(index + 4).padStart(2, '0')}</div>
                        <h3 className='text-xl font-bold text-center mb-3 pt-4'>{workflow?.title}</h3>
                        <p className='text-gray-600 text-center text-[1.19rem]'>{workflow?.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* IT Infrastructure and Security Measures Section */}
      <section className='md:mb-4 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our IT Infrastructure &amp; <span className='font-inter italic text-[#015482]'>Security Measures</span>
            </h2>
          </motion.div>

          <div className='max-w-5xl mx-auto'>
            {infrastructureData?.items && infrastructureData.items.length > 0 && (
              <>
                {/* First 4 items - 4 columns */}
                {infrastructureData.items.length > 0 && (
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
                    {infrastructureData.items.slice(0, 4).map((item, index) => {
                      const IconComponent = getIcon(item?.icon)
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className='flex flex-col items-center text-center'
                        >
                          <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                            {IconComponent ? <IconComponent fill='#CCD9ED' className='w-8 h-8 text-[#015482]' /> : <div className='w-8 h-8' />}
                          </div>
                          <p className='text-[1.19rem] font-semibold'>{item?.title}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                )}

                {/* Next 4 items - 4 columns */}
                {infrastructureData.items.length > 4 && (
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
                    {infrastructureData.items.slice(4, 8).map((item, index) => {
                      const IconComponent = getIcon(item?.icon)
                      return (
                        <motion.div
                          key={index + 4}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                          className='flex flex-col items-center text-center'
                        >
                          <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                            {IconComponent ? <IconComponent fill='#CCD9ED' className='w-8 h-8 text-[#015482]' /> : <div className='w-8 h-8' />}
                          </div>
                          <p className='text-[1.19rem] font-semibold'>{item?.title}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                )}

                {/* Remaining items - 3 columns centered */}
                {infrastructureData.items.length > 8 && (
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 mb-12 max-w-xl md:max-w-2xl mx-auto'>
                    {infrastructureData.items.slice(8).map((item, index) => {
                      const IconComponent = getIcon(item?.icon)
                      return (
                        <motion.div
                          key={index + 8}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: (index + 8) * 0.1 }}
                          className={`flex flex-col items-center text-center ${index === 0 ? 'md:justify-self-start' : index === 1 ? 'md:justify-self-center' : 'col-span-2 md:col-span-1 md:justify-self-end'}`}
                        >
                          <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
                            {IconComponent ? <IconComponent fill='#CCD9ED' className='w-8 h-8 text-[#015482]' /> : <div className='w-8 h-8' />}
                          </div>
                          <p className='text-[1.19rem] font-semibold'>{item?.title}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Tools We Use Section */}


      <section className='py-16 md:py-20 bg-gray-50'>
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
                    Frequently Asked
                  </h2>
                  <h3 className='text-4xl md:text-5xl italic font-inter text-[#015482] mb-7'>
                    Questions.
                  </h3>

                  {/* Still have a question box */}
<div className="flex gap-4">

    <a
    href="/contact#contact-form"
    className="inline-flex items-center gap-3 bg-[#015482] hover:bg-[#15c2be] text-white px-6 py-3 rounded-full font-medium transition-colors"
  >
    <span>Contact Us</span>
    <User className="w-5 h-5" />
  </a>
  <a
    href="tel:+919909469067"
    className="inline-flex items-center gap-3 bg-[#015482] hover:bg-[#15c2be] text-white px-6 py-3 rounded-full font-medium transition-colors"
  >
    <span>Make A Call</span>
    <Phone className="w-5 h-5" />
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
                      onMouseEnter={() => setOpenFaq(index)}
                      onMouseLeave={() => setOpenFaq(null)}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                      >
                        <span className='text-base font-medium text-gray-900 pr-4'>
                          {faq.question}
                        </span>
                        <div className='shrink-0'>
                          <motion.div
                            animate={{ 
                              backgroundColor: openFaq === index ? '#17D3CF' : '#015482',
                              rotate: openFaq === index ? 45 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className='w-8 h-8 bg-[#015482] rounded-full flex items-center justify-center'
                          >
                            <Plus className='w-5 h-5 text-white' strokeWidth={2.5} />
                          </motion.div>
                        </div>
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='overflow-hidden'
                          >
                            <div className='px-6 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100'>
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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

