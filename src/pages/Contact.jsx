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

const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const location = useLocation();
  
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

  // Track Calendly booking events using the official React hook
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
      
      // Show success toast
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

  const faqs = [
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
        "We work with all major accounting software including QuickBooks, Xero, CCH Axcess, Intuit Lacerte, and other popular platforms. Our team is trained to adapt to your preferred software to ensure seamless integration.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple! Fill out the contact form above, send us an email, or give us a call. We'll schedule a consultation to understand your needs and provide a customized solution with transparent pricing.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const services = [
    "Tax Preparation",
    "Accounting and Bookkeeping",
    "Payroll",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.", {
        style: {
          backgroundColor: "#015482",
          color: "white",
          border: "1px solid #17D3CF",
        },
      });
      return;
    }

    setLoading(true);

    try {
      // Get reCAPTCHA token
      if (!executeRecaptcha) {
        toast.error("reCAPTCHA not ready. Please try again.", {
          style: {
            backgroundColor: "#015482",
            color: "white",
            border: "1px solid #17D3CF",
          },
        });
        setLoading(false);
        return;
      }

      const token = await executeRecaptcha("contactForm");

      const servicesText = formData.services.length > 0 
        ? formData.services.join(", ") 
        : "None selected";

      // Format email body according to template
      const emailBody = `Hi Harshika,

You've received a new inquiry through the website.

Here are the details:

Name: ${formData.fullName}
Email: ${formData.email}
Message: ${formData.message}

Services Interested In:
${servicesText}`;

      const emailData = {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        from_name: formData.fullName,
        email: formData.email,
        subject: "New Inquiry from Contact Form | TaxArc Global",
        message: emailBody,
        to_email: "yadneshbamne05@gmail.com",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Thank you! We'll get back to you soon", {
          style: {
            backgroundColor: "#015482",
            color: "white",
            border: "1px solid #17D3CF",
          },
        });
        setFormData({
          fullName: "",
          email: "",
          message: "",
          services: [],
        });
      } else {
        toast.error(result.message || "Failed to send message. Please try again.", {
          style: {
            backgroundColor: "#015482",
            color: "white",
            border: "1px solid #17D3CF",
          },
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.", {
        style: {
          backgroundColor: "#015482",
          color: "white",
          border: "1px solid #17D3CF",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-sections w-full bg-white">
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          duration: 4000,
          style: {
            backgroundColor: "#015482",
            color: "white",
            border: "1px solid #17D3CF",
            borderRadius: "8px",
          },
        }}
      />
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url(https://ik.imagekit.io/qxfudjvlf/navratna?updatedAt=1773260906125)",
    }}
  />

  {/* Gradient band — transparent top & bottom, dark only in the middle */}
  <div
    className="absolute inset-0"
    style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.60) 30%, rgba(0,0,0,0.60) 70%, transparent 100%)" }}
  />

  <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-2 sm:mb-4">
        Contact Us
      </h1>
      <div className="w-16 h-px bg-white/50 mx-auto mb-2" />
      <p className="text-base sm:text-lg md:text-xl text-white/90 font-bold leading-relaxed">
        We collaborate with CPA firms and businesses across the globe. Our systems, communication
        processes, and delivery frameworks are built to work seamlessly across time zones — ensuring
        clarity, responsiveness, and consistent turnaround, no matter where you're located.
      </p>
    </motion.div>
  </div>
</section>

      {/* Contact Information & Map Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
      
      {/* Left - Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center space-y-8"
      >
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Let’s Connect</h2>
          <p className="text-gray-500 leading-relaxed">
            We’d love to hear from you.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-[#015482] rounded-full" />

        {/* Contact Cards */}
        <div className="space-y-4">

          {/* Address */}

          {/* Email */}
          <div className="flex items-start gap-5 p-5 rounded-2xl border border-gray-100 hover:border-[#015482]/40 hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#015482]/10 group-hover:bg-[#015482] rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300">
              <Mail className="w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Email Us</p>
              <h3 className="text-base font-bold text-gray-900 mb-1">Send a Message</h3>
              
                <a href="mailto:harshika.vora@gmail.com"
                className="text-sm text-gray-600 hover:text-[#17D3CF] transition-colors"
              >
                harshika@taxarcglobal.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-5 p-5 rounded-2xl border border-gray-100 hover:border-[#015482]/40 hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#015482]/10 group-hover:bg-[#015482] rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300">
              <Phone className="w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Call Us</p>
              <h3 className="text-base font-bold text-gray-900 mb-1">Speak Directly</h3>
              
               <a href="tel:+919909469067"
                className="text-sm text-gray-600 hover:text-[#17D3CF] transition-colors"
              >
                +91 99094 69067
              </a>
            </div>
          </div>

        </div>
          <div className="flex items-start gap-5 p-5 rounded-2xl border border-gray-100 hover:border-[#015482]/40 hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#015482]/10 group-hover:bg-[#015482] rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300">
              <MapPin className="w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Office Address</p>
              <h3 className="text-base font-bold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tower B, 1801-1802, 1819-1820, Navratna Corporate Park, Ambli Road, Ashok Vatika, Bopal, Ahmedabad, Gujarat 380058
              </p>
            </div>
          </div>
      </motion.div>

      {/* Right - Map */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-full min-h-125"
      >
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.0286402151464!2d72.49073253409586!3d23.029016855453342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2ace83bd07%3A0xbbd544a10ad76e8c!2sTaxArc%20Global!5e0!3m2!1sen!2sin!4v1772642218996!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "500px" }}
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



      {/* <section className=" bg-white">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=""
          >

            <div className="text-center">

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
                Book Your 30-Minute <span className="text-[#015482]">Consultation</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Ready to discuss your tax, accounting, or payroll needs? Select a time that works for you. 
                We'll set up a Google Meet link and send you all the details.
              </p>
            </div>

            <div className="w-full max-w-[100vw] mx-auto relative min-h-125 flex items-center justify-center">
              <InlineWidget 
                url="https://calendly.com/yadnesh2105/30min" 
                styles={{
                  minHeight: '750px',
                  width: '100%',
                }}
                pageSettings={{
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '015482',
                  textColor: '111827',
                }}
              />
            </div>


          </motion.div>
        </div>
      </section> */}



      {/* Drop Us a Message Section */}
      <section className="mt-10 ">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div className='flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-20'>
              {/* Left - Message Header & Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full lg:flex-1 overflow-hidden rounded-xl p-8 md:px-12 md:py-12 bg-[#015482] flex flex-col justify-center"
              >
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  }}
                />
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl mt-4 font-bold text-white mb-4">
                    Drop Us a <br/> <span className="italic text-[#17D3CF] font-inter">Message</span>
                  </h2>
                  <p className="text-white leading-relaxed">
                    We're always happy to hear from you <br/>and will get back to you<br/>
                    as soon as possible.
                  </p>
                </div>


              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-auto lg:max-w-2xl lg:flex-1"
                id="contact-form"
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-xl shadow-lg space-y-6"
                >
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#015482] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#015482] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Write Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I want to collaborate"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#015482] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Remote Services */}
                  <div className="border border-gray-200 rounded-lg p-5">
                    <p className="text-sm font-bold text-gray-900 mb-1">
                      Remote Services of Interest
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      You can select more than one service.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
                      {services.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="sr-only"
                          />
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              border: "2px solid #015482",
                              backgroundColor: "white",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            {formData.services.includes(service) && (
                              <div
                                style={{
                                  width: "10px",
                                  height: "10px",
                                  borderRadius: "50%",
                                  backgroundColor: "#015482",
                                }}
                              />
                            )}
                          </div>
                          <span className="text-sm text-gray-900">{service}</span>
                        </label>
                      ))}
                    </div>

                    {/* Selected Services Badges */}
                    {formData.services.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Selected
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {formData.services.map((service) => (
                            <span
                              key={service}
                              className="inline-flex items-center gap-1.5 bg-[#015482] text-white text-xs font-medium px-3 py-1.5 rounded-full"
                            >
                              {service}
                              <button
                                type="button"
                                onClick={() => handleServiceToggle(service)}
                                className="hover:text-gray-300 transition-colors ml-1"
                              >
                                ✕
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-between bg-[#015482] hover:bg-[#17D3CF] disabled:opacity-70 disabled:cursor-not-allowed transition text-white font-medium text-sm px-6 py-3.5 rounded-full"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
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
    </div>
  );
};

export default Contact;
