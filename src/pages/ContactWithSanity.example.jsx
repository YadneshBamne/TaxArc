import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Toaster, toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useLocation } from "react-router-dom";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  ChevronDown,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import { trackCalendlyEvent, trackCalendlyBooking, getUserTimezone } from "../lib/ga4";

// Import Sanity hooks and queries
import { useSanityData } from "../hooks/useSanityData";
import { CONTACT_PAGE_QUERY, FAQS_QUERY } from "../sanity/queries";

const ContactWithSanity = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const location = useLocation();

  // Fetch Sanity data
  const { data: contactData, loading: contactLoading } = useSanityData(CONTACT_PAGE_QUERY);
  const { data: faqsData, loading: faqsLoading } = useSanityData(FAQS_QUERY);

  // Fallback contact info
  const fallbackContactInfo = {
    email: "hello@taxarcglobal.com",
    phone: "+1 (XXX) XXX-XXXX",
    address: "Your Address Here",
    timezone: "EST",
  };

  // Fallback FAQs
  const fallbackFaqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive accounting, bookkeeping, taxation, and payroll services for CPA firms and businesses. Our services include financial statement preparation, tax compliance, payroll processing, and customized accounting solutions.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We implement enterprise-level security measures including encrypted data transmission, secure servers, restricted access controls, and regular security audits. All our systems comply with industry-standard security protocols to protect your sensitive financial information.",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Our turnaround times vary depending on the service and complexity. Generally, we deliver bookkeeping services within 2-3 business days, tax returns within 3-5 business days, and payroll processing within 24 hours. We can accommodate rush requests when needed.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we work with CPA firms and businesses across the globe. Our systems and processes are designed to work seamlessly across different time zones, ensuring consistent communication and timely delivery regardless of your location.",
    },
    {
      question: "What software platforms do you support?",
      answer:
        "We support a wide range of leading accounting and financial platforms including Drake Software, Wave, Xero, TaxAct, QuickBooks, Intuit ProConnect, Cash App, Gusto, ADP, Intuit Lacerte, and CCH Axcess—ensuring seamless integration with the tools you already use.",
    },
  ];

  // Scroll to contact form if hash is present
  useEffect(() => {
    if (location.hash === "#contact-form") {
      const element = document.getElementById("contact-form");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  // Track Calendly booking events
  useCalendlyEventListener({
    onProfilePageViewed: () => {
      trackCalendlyEvent({
        timezone: getUserTimezone(),
        action: 'booking_page_viewed',
      });
    },
    onEventScheduled: (e) => {
      if (window.gtag) {
        trackCalendlyBooking({
          timezone: getUserTimezone(),
          event_name: 'consultation_booked',
          timestamp: new Date().toISOString(),
        });
      }

      toast.success("Booking confirmed! Check your email for details and Google Meet link.", {
        style: {
          backgroundColor: "#015482",
          color: "white",
          border: "1px solid #17D3CF",
        },
        duration: 5000,
      });
    },
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    services: [],
  });

  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Use Sanity data or fallback
  const contactInfo = contactData?.contactInfo || fallbackContactInfo;
  const faqs = faqsData || fallbackFaqs;

  if (faqsLoading || contactLoading) {
    return (
      <div className="w-full bg-white flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#015482] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading contact information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-sections w-full bg-white">
      <Toaster />

      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#015482] to-[#0a3a5c]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Have questions? We'd love to hear from you. Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 rounded-lg bg-gray-50"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#015482] mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">{contactInfo.email}</p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 rounded-lg bg-gray-50"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#015482] mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">{contactInfo.phone}</p>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-gray-50"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#015482] mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Widget */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#015482]/10 to-[#17D3CF]/10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Book a Consultation
            </h2>
            <p className="text-center text-gray-600 text-lg">
              Schedule a time that works best for you. We'll discuss your needs and provide a customized solution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <InlineWidget url="https://calendly.com/taxarcglobal" />
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 text-lg">
              Find answers to common questions about our services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#015482] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#015482] to-[#0a3a5c]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with us today and let's discuss how we can support your business.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 bg-white text-[#015482] px-8 py-4 rounded-full font-semibold hover:bg-[#17D3CF] hover:text-white transition-all"
            >
              Contact Us Now
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactWithSanity;
