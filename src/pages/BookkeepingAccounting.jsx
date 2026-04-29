import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FileText,
  ArrowUpRight,
  CalendarCheck,
  Brush,
  CheckSquare,
  RotateCcw,
  ListTree,
  Clock,
  DollarSign,
  TrendingUp,
  BarChart3,
  Handshake,
  CheckCircle,
  Building,
  Building2,
} from "lucide-react";
import { useSanityData } from "../hooks/useSanityData";
import { ACCOUNTING_BOOKKEEPING_QUERY } from "../sanity/queries";

const BookkeepingAccounting = () => {
  // Fetch Accounting & Bookkeeping page data from Sanity
  const { data: accountingData } = useSanityData(ACCOUNTING_BOOKKEEPING_QUERY);

  // Icon mapping function
  const getIcon = (iconName) => {
    const icons = {
      CalendarCheck,
      Brush,
      FileText,
      CheckSquare,
      RotateCcw,
      ListTree,
      Clock,
      DollarSign,
      TrendingUp,
      BarChart3,
      Handshake,
      CheckCircle,
      Building,
      Building2,
    };
    return icons[iconName] || null;
  };

  // Hero section with fallback
  const heroData = accountingData?.heroSection || {
    heading: "Accounting & Bookkeeping",
    subheading: "Precision accounting that powers better decisions.",
    backgroundImage: "https://ik.imagekit.io/qxfudjvlf/taxarc/Accounting.jpeg",
  };

  // Who We Serve section with fallback
  const whoWeServeData = accountingData?.whoWeServeSection || {
    heading: "Who We Serve",
    items: [
      { icon: "Building", title: "CPA & EA Firms" },
      { icon: "Building", title: "Accounting Practices" },
      { icon: "Building2", title: "Small & mid-size businesses" },
    ],
  };

  // Services section with fallback
  const servicesData = accountingData?.servicesSection || {
    heading: "Our Accounting & Bookkeeping Services",
    subheading:
      "We provide full-scope accounting support across QuickBooks Online, QuickBooks Desktop, Xero, and other major software. For accounting firms, we act as a white-label, back-office team handling the bookkeeping work you'd rather not staff internally. For businesses, we become your outsourced accounting department — managing everything from daily transactions to month-end close.",
    services: [
      {
        icon: "CalendarCheck",
        title: "Monthly Bookkeeping",
        description:
          "Transaction categorization, bank and credit card reconciliation, and ongoing ledger maintenance on a monthly basis.",
      },
      {
        icon: "Brush",
        title: "Catch-Up & Clean-Up Accounting",
        description:
          "Restoring and organizing months or years of disorganized or incomplete financial records to bring books current.",
      },
      {
        icon: "FileText",
        title: "Financial Statement Preparation",
        description:
          "Profit & Loss, Balance Sheet, and Cash Flow Statements prepared monthly, quarterly, or annually and ready for your review.",
      },
      {
        icon: "CheckSquare",
        title: "Month-End & Year-End Close",
        description:
          "Closing procedures including accruals, prepayments, depreciation schedules, and adjusting journal entries.",
      },
      {
        icon: "RotateCcw",
        title: "Accounts Payable & Receivable",
        description:
          "Invoice processing, aging analysis, collections follow-up, and payment tracking for better cash flow management.",
      },
      {
        icon: "ListTree",
        title: "Chart of Accounts Setup & Optimization",
        description:
          "Designing and optimizing account structures for QuickBooks, Xero, and other platforms to streamline reporting and compliance.",
      },
    ],
  };

  // Benefits section with fallback
  const benefitsData = accountingData?.benefitsSection || {
    heading: "Key Benefits",
    benefits: [
      {
        icon: "Clock",
        title: "Reclaim Your Time",
        description:
          "Stop spending hours on bookkeeping and accounting. Focus on growing your business or serving more clients.",
      },
      {
        icon: "DollarSign",
        title: "Reduce Costs",
        description:
          "Avoid the overhead of hiring and managing in-house accounting staff. Pay only for the services you need.",
      },
      {
        icon: "TrendingUp",
        title: "Gain Better Insights",
        description:
          "Access clean, organized financial data and timely reports to make informed business decisions.",
      },
      {
        icon: "BarChart3",
        title: "Scale with Confidence",
        description:
          "As your business grows, your accounting support grows with you without the strain of hiring and training.",
      },
      {
        icon: "Handshake",
        title: "Expert Support",
        description:
          "Leverage the experience of CPAs and accounting professionals without the full-time cost.",
      },
      {
        icon: "CheckCircle",
        title: "Compliance & Accuracy",
        description:
          "Ensure your books are maintained to the highest standards, ready for audits, loans, and tax filing.",
      },
    ],
  };

  return (
    <div className="page-sections w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroData?.backgroundImage})`,
          }}
        />

        {/* Cyan dim overlay */}
        <div className="absolute inset-0 bg-[#1878AB]/30" />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="px-6 sm:px-8 md:px-12 py-8 md:py-12 rounded-2xl inline-block max-w-6xl">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 md:whitespace-nowrap text-center">
                {heroData?.heading}
              </h1>
              <div className="w-16 h-px bg-white/60 mx-auto mb-2" />
              <p className="text-[1.19rem] text-white font-bold leading-relaxed">
                {heroData?.subheading}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-3xl md:text-4xl font-inter  font-bold mb-2">
              {whoWeServeData?.heading?.split(" ")[0]} {whoWeServeData?.heading?.split(" ").slice(1).join(" ") && <span className="text-[#015482] italic">{whoWeServeData.heading.split(" ").slice(1).join(" ")}</span>}
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 flex-wrap max-w-6xl mx-auto">
            {whoWeServeData?.items?.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="hidden sm:block text-gray-300 text-3xl font-light">·</span>}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-10 py-8 w-64 h-48 hover:shadow-lg hover:border-[#015482]/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[#015482]/10 flex items-center justify-center">
                    {getIcon(item?.icon) ? React.createElement(getIcon(item?.icon), { className: "w-7 h-7 text-[#015482]" }) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#015482]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                      </svg>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-[1.19rem] font-bold text-gray-900">{item?.title}</p>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {servicesData?.heading?.split(" ")[0]} {servicesData?.heading?.split(" ").slice(1).join(" ") && <span className="text-[#015482] italic font-inter">{servicesData.heading.split(" ").slice(1).join(" ")}</span>}
              </h2>
              <p className="text-[1.19rem] text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {servicesData?.subheading}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicesData?.services?.map((service, index) => {
                const IconComponent = getIcon(service?.icon);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#015482]/40 transition-all duration-300"
                  >
                    <div className="w-11 h-11 mb-4 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300">
                      {IconComponent ? <IconComponent className="w-5 h-5 text-[#015482] group-hover:text-white transition-colors duration-300" /> : <div className="w-5 h-5" />}
                    </div>
                    <h3 className="text-[1.19rem] font-bold text-gray-900 mb-2 leading-snug">{service?.title}</h3>
                    <p className="text-lg text-gray-500 leading-relaxed">
                      {service?.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {benefitsData?.heading?.split(" ")[0]} {benefitsData?.heading?.split(" ").slice(1).join(" ") && <span className="text-[#015482] italic font-inter">{benefitsData.heading.split(" ").slice(1).join(" ")}</span>}
              </h2>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitsData?.benefits?.map((benefit, index) => {
                const IconComponent = getIcon(benefit?.icon);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#015482]/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 mb-5 bg-[#015482]/10 rounded-xl flex items-center justify-center group-hover:bg-[#015482] transition-colors duration-300">
                      {IconComponent ? <IconComponent className="w-6 h-6 text-[#015482] group-hover:text-white transition-colors duration-300" /> : <div className="w-6 h-6" />}
                    </div>
                    <h3 className="text-[1.19rem] font-bold text-gray-900 mb-3">{benefit?.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {benefit?.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Scale Smarter with
                  <br /> <span className="font-inter italic bg-white bg-clip-text text-transparent">
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
  );
};

export default BookkeepingAccounting;
