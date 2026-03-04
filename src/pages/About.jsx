import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { BookOpen, Clock, Shield, Users, DollarSign, TrendingUp, ArrowRight, Eye, Target, Gem, Lock, UserCircle2, Key, Home, Printer, Settings, Network, Database, ShieldAlert, HardDrive, ArrowUpRight } from 'lucide-react'
import LogoLoop from '../components/LogoLoop'

const About = () => {
  const [logoLoopConfig, setLogoLoopConfig] = useState({
    height: 200,
    logoHeight: 80,
    gap: 80,
    speed: 100
  })

  useEffect(() => {
    const updateLogoLoopConfig = () => {
      const width = window.innerWidth
      
      if (width < 640) {
        // Mobile
        setLogoLoopConfig({
          height: 120,
          logoHeight: 50,
          gap: 40,
          speed: 60
        })
      } else if (width < 1024) {
        // Tablet
        setLogoLoopConfig({
          height: 160,
          logoHeight: 65,
          gap: 60,
          speed: 80
        })
      } else {
        // Desktop
        setLogoLoopConfig({
          height: 200,
          logoHeight: 80,
          gap: 80,
          speed: 100
        })
      }
    }

    updateLogoLoopConfig()
    window.addEventListener('resize', updateLogoLoopConfig)
    return () => window.removeEventListener('resize', updateLogoLoopConfig)
  }, [])

  return (
    <div className='w-full bg-white '>

      {/* About Us Section */}
      <section className='relative py-32 min-h-screen'>
        {/* Background Image with Overlay */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069)',
          }}
        >
          <div className='absolute inset-0 bg-black/40'></div>
        </div>

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

      {/* Tools We Work With Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Tools we <span className='italic text-blue-700'>work with</span>.
            </h2>
          </div>
          
          <div style={{ height: `${logoLoopConfig.height}px`, position: 'relative', overflow: 'hidden' }} className='mt-20'>
            <LogoLoop
              logos={[
                { src: "./xero.png", alt: "QuickBooks" },
                { src: "qb.png" },
                { src: "./intuitp.png", },
                { src: "./lacerte.png", },
                { src: "https://www.drakesoftware.com/localassets/images/drake-software-logo.svg", },
                { src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wave_logo_RGB.png",  },
                { src: "https://cdn.brandfetch.io/idAkkC1hF-/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667622115759",  },
                { src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Taxact-lowres-rgb.png",  },
              ]}
              speed={logoLoopConfig.speed}
              direction="left"
              logoHeight={logoLoopConfig.logoHeight}
              gap={logoLoopConfig.gap}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#f9fafb"
              ariaLabel="Tools we work with"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-5 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-4xl md:text-5xl font-bold mb-4'
            >
              Why Choose <span className='italic text-blue-700'>Us?</span>
            </motion.h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                  <BookOpen className='w-6 h-6 text-blue-700' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-3'>Experienced Indian CA & CPA (US)-led firm</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Our teams of CPAs, Chartered Accountants, and experienced tax and accounting professionals bring deep, specialized knowledge of US tax regulations, US GAAP, and federal and state compliance
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                  <Clock className='w-6 h-6 text-blue-700' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-3'>Turnaround You Can Rely On</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Defined timelines, structured workflows, and deadline-driven delivery, especially critical during peak tax season.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                  <Shield className='w-6 h-6 text-blue-700' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-3'>Data Security & Confidentiality</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    NDA-backed engagements, secure file transfer protocols, and strict data privacy practices — your client data is always protected.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                  <DollarSign className='w-6 h-6 text-blue-700' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-3'>Cost Efficiency</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Significant reduction in operational costs compared to in-house staffing — without compromising on quality or accuracy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                  <Users className='w-6 h-6 text-blue-700' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-3'>Scalable Engagement Model</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Flexible team sizing to accommodate seasonal peaks, project expansions, or ongoing support needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                  <TrendingUp className='w-6 h-6 text-blue-700' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-3'>Quality & Continuous Improvement</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Regular internal reviews, quality control checkpoints, and process optimization to ensure excellence in every engagement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              <h3 className='text-4xl md:text-5xl font-serif italic text-blue-700 mb-4'>
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
                  src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376'
                  alt='Harshika Vora - CEO of TaxArc Global'
                  className='w-full h-auto rounded-3xl shadow-2xl object-cover'
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
                  src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374'
                  alt='Hemant R. Vora - Strategic Advisor of TaxArc Global'
                  className='w-full h-auto rounded-3xl shadow-2xl object-cover'
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
              <h3 className='text-4xl md:text-5xl font-serif italic text-blue-700 mb-4'>
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
              Our <span className='italic text-blue-700'>Vision, Mission & Values</span>
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
              <div className='bg-[#0141A3] h-42 flex items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>VISION</h3>
              </div>
              <div className='relative bg-gray-100 pt-20 pb-8 px-6'>
                <div className='absolute -top-10 left-1/2 -translate-x-1/2'>
                  <div className='w-20 h-20 bg-[#0141A3] rotate-45 flex items-center justify-center'>
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
              <div className='bg-[#0141A3] h-42 flex items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>MISSION</h3>
              </div>
              <div className='relative  pt-20 pb-10 px-6'>
                <div className='absolute -top-10 left-1/2 -translate-x-1/2'>
                  <div className='w-20 h-20 bg-[#0141A3] rotate-45 flex items-center justify-center'>
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
              <div className='bg-[#0141A3] h-42 flex items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>VALUES</h3>
              </div>
              <div className='relative  pt-20 pb-10 px-6'>
                <div className='absolute -top-10 left-1/2 -translate-x-1/2'>
                  <div className='w-20 h-20 bg-[#0141A3] rotate-45 flex items-center justify-center'>
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
              Our <span className='italic text-blue-700'>Workflow Process</span>
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
              Our IT Infrastructure and <span className='italic text-blue-700'>Security Measures</span>
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
                <Shield fill='#CCD9ED' className='w-12 h-12 text-blue-700 mb-4' />
                <p className='text-sm font-semibold'>Latest configuration<br />devices</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='flex flex-col items-center text-center'
              >
                <Lock fill='#CCD9ED' className='w-12 h-12 text-blue-700 mb-4' />
                <p className='text-sm font-semibold'>Licensed support<br />software</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex flex-col items-center text-center'
              >
                <UserCircle2  className='w-12 h-12 text-blue-700 mb-4' />
                <p className='text-sm font-semibold'>Secured<br />workstations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex flex-col items-center text-center'
              >
                <Key className='w-12 h-12 text-blue-700 mb-4' />
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
                <Home className='w-12 h-12 text-blue-700 mb-4' />
                <p className='text-sm font-semibold'>100% on-site<br />operations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex flex-col items-center text-center'
              >
                <Printer fill='#CCD9ED' className='w-12 h-12 text-blue-700 mb-4' />
                <p className='text-sm font-semibold'>Printing<br />restrictions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex flex-col items-center text-center'
              >
                <Settings fill='#CCD9ED' className='w-12 h-12 text-blue-700 mb-4' />
                <p className='text-sm font-semibold'>Centralized<br />control</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='flex flex-col items-center text-center'
              >
                <Network fill='#CCD9ED' className='w-12 h-12 text-blue-700 mb-4' />
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
                <Database fill='#CCD9ED' className='w-12 h-12 text-blue-700 mb-4' />
                <p className='text-sm font-semibold'>Functional access<br />to data</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='flex flex-col items-center text-center'
              >
                <ShieldAlert fill='#CCD9ED' className='w-12 h-12 text-blue-700 mb-4' />
                <p className='text-sm font-semibold'>Harmful website<br />monitoring</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className='flex flex-col items-center text-center'
              >
                <HardDrive fill='#CCD9ED' className='w-12 h-12 text-blue-700 mb-4' />
                <p className='text-sm font-semibold'>Automated<br />Backups</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About

