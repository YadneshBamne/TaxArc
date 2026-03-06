import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

const LegalModal = ({ isOpen, onClose, type }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const termsContent = (
    <div className='space-y-6'>
      <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Terms & Conditions</h1>
      
      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>1. Acceptance of Terms</h2>
        <p className='text-gray-700 leading-relaxed'>
          By accessing and using TaxArc Global's services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>2. Services Provided</h2>
        <p className='text-gray-700 leading-relaxed'>
          TaxArc Global provides professional accounting, bookkeeping, taxation, and payroll services to CPA firms and businesses. All services are provided on a professional basis with appropriate qualifications and experience.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>3. Client Responsibilities</h2>
        <p className='text-gray-700 leading-relaxed'>
          Clients are responsible for providing accurate, complete, and timely information necessary for the completion of services. TaxArc Global is not liable for errors or issues arising from incomplete or inaccurate information provided by the client.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>4. Confidentiality</h2>
        <p className='text-gray-700 leading-relaxed'>
          We maintain strict confidentiality of all client information and data. All information obtained during the course of our services will be kept strictly confidential and will not be disclosed to third parties without client consent, except as required by law.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>5. Limitation of Liability</h2>
        <p className='text-gray-700 leading-relaxed'>
          TaxArc Global's liability is limited to the fees paid for the specific services in question. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>6. Payment Terms</h2>
        <p className='text-gray-700 leading-relaxed'>
          Payment terms are established in individual service agreements. Invoices are typically due within 30 days of receipt. Late payments may be subject to interest charges or suspension of services.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>7. Modifications to Terms</h2>
        <p className='text-gray-700 leading-relaxed'>
          TaxArc Global reserves the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of those changes.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>8. Contact Information</h2>
        <p className='text-gray-700 leading-relaxed'>
          For questions regarding these Terms & Conditions, please contact us at harshika.vora@gmail.com or +91 99094 69067.
        </p>
      </section>
    </div>
  )

  const privacyContent = (
    <div className='space-y-6'>
      <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Privacy Policy</h1>
      
      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>1. Information We Collect</h2>
        <p className='text-gray-700 leading-relaxed mb-3'>
          We collect information necessary to provide our professional services, including:
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
          <li>Personal identification information (Name, email address, phone number)</li>
          <li>Business information and financial data</li>
          <li>Tax and accounting records</li>
          <li>Communication preferences</li>
        </ul>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>2. How We Use Your Information</h2>
        <p className='text-gray-700 leading-relaxed mb-3'>
          Your information is used exclusively for:
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
          <li>Providing accounting, bookkeeping, taxation, and payroll services</li>
          <li>Communicating with you about services and updates</li>
          <li>Improving our service delivery and customer experience</li>
          <li>Complying with legal and regulatory requirements</li>
        </ul>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>3. Data Security</h2>
        <p className='text-gray-700 leading-relaxed'>
          We implement enterprise-level security measures to protect your data, including encrypted data transmission, secure servers, restricted access controls, and regular security audits. All systems comply with industry-standard security protocols.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>4. Data Sharing and Disclosure</h2>
        <p className='text-gray-700 leading-relaxed'>
          We do not sell, trade, or rent your personal information to third parties. Information may only be disclosed when required by law, to protect our rights, or with your explicit consent.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>5. Data Retention</h2>
        <p className='text-gray-700 leading-relaxed'>
          We retain client data for the duration necessary to provide services and comply with legal obligations. Retention periods may vary based on the type of data and regulatory requirements.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>6. Your Rights</h2>
        <p className='text-gray-700 leading-relaxed mb-3'>
          You have the right to:
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
          <li>Access your personal information</li>
          <li>Request corrections to your data</li>
          <li>Request deletion of your data (subject to legal requirements)</li>
          <li>Withdraw consent for data processing</li>
        </ul>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>7. Cookies and Tracking</h2>
        <p className='text-gray-700 leading-relaxed'>
          Our website may use cookies to enhance user experience and analyze website traffic. You can control cookie preferences through your browser settings.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>8. Changes to Privacy Policy</h2>
        <p className='text-gray-700 leading-relaxed'>
          We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-gray-900 mb-3'>9. Contact Us</h2>
        <p className='text-gray-700 leading-relaxed'>
          For privacy-related questions or concerns, contact us at harshika.vora@gmail.com or +91 99094 69067.
        </p>
      </section>
    </div>
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 bg-black/60 backdrop-blur-sm'
            style={{ zIndex: 99999 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className='fixed inset-0 flex items-center justify-center p-4' style={{ zIndex: 100000 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 relative max-h-[90vh] flex flex-col'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className='absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors bg-white/80 backdrop-blur-sm'
                style={{ zIndex: 100001 }}
              >
                <X className='w-6 h-6 text-gray-600' />
              </button>

              {/* Content */}
              <div className='p-6 md:p-10 overflow-y-auto'>
                {type === 'terms' ? termsContent : privacyContent}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default LegalModal
