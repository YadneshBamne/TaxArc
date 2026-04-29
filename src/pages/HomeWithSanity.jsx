import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  BookOpen,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  ArrowUpRight,
  Handshake,
} from "lucide-react";
import { motion } from "motion/react";
import { Accordion } from "../components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { LogoLoop } from "../components/LogoLoop";
import { useSanityData } from "../hooks/useSanityData";
import { useSanityImage } from "../hooks/useSanityImage";
import { HOME_QUERY, ALL_SERVICES_QUERY } from "../sanity/queries";

// Icon map for dynamic icon rendering
const iconMap = {
  BookOpen: BookOpen,
  Clock: Clock,
  Shield: Shield,
  CheckCircle: CheckCircle,
  DollarSign: DollarSign,
  Users: Users,
  TrendingUp: TrendingUp,
  ArrowRight: ArrowRight,
  Handshake: Handshake,
};

const Home = () => {
  const [carouselApi, setCarouselApi] = useState(null);
  
  // Fetch homepage data from Sanity
  const { data: homeData, loading: homeLoading, error: homeError } = useSanityData(HOME_QUERY);
  
  // Fetch services from Sanity
  const { data: servicesData, loading: servicesLoading, error: servicesError } = useSanityData(ALL_SERVICES_QUERY);
  
  const { urlFor } = useSanityImage();

  // Auto-scroll carousel
  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  // Fallback values if data isn't loaded
  const heroSection = homeData?.heroSection || {
    heading: "Your Outsourced Professional Team for",
    subheading: "U.S. Tax & Accounting Support",
    ctaButtonText: "Connect with us",
    ctaButtonLink: "/contact",
    backgroundVideo: "./bannerr.mp4",
  };

  const philosophySection = homeData?.philosophySection || {
    heading: "Our Philosophy",
    acronym: "ARC",
    description: "At TaxArc Global, our name reflects the philosophy that guides everything we do - the ARC Framework.",
    values: [
      {
        title: "Accuracy",
        description: "In a compliance-driven and deadline-sensitive environment, precision is non-negotiable.",
      },
      {
        title: "Reliability",
        description: "We understand that your business depends on consistent and dependable service.",
      },
      {
        title: "Confidentiality",
        description: "Your financial information is sensitive and deserves the highest level of protection.",
      },
    ],
  };

  const whyUsSection = homeData?.whyUsSection || {
    heading: "Why Us?",
    features: [
      {
        icon: "BookOpen",
        title: "Specialized Professionals, Seamlessly Integrated",
        description: "Our team of CPAs, Chartered Accountants and experienced tax and accounting professionals integrate seamlessly into your existing software ecosystem.",
      },
      {
        icon: "Clock",
        title: "Turnaround You Can Rely On",
        description: "Defined timelines, structured workflows, and disciplined execution ensure predictable turnaround on every engagement.",
      },
      {
        icon: "Shield",
        title: "Security & Compliance",
        description: "Industry-leading security standards and compliance protocols protect your sensitive financial data.",
      },
      {
        icon: "CheckCircle",
        title: "Quality Assurance",
        description: "Multi-level quality reviews and standardized checklists ensure consistency and accuracy at every point.",
      },
    ],
  };

  const ctaSection = homeData?.ctaSection || {
    heading: "Ready to grow?",
    description: "Let's connect and discuss how we can support your business growth.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  // Convert values to accordion items
  const accordionItems = philosophySection.values?.map(v => ({
    title: v.title,
    content: v.description,
  })) || [];

  // Fallback services if Sanity services not loaded
  const services = servicesData || [
    {
      _id: "1",
      title: "TAX PREPARATION",
      description: "Accurate, IRS-compliant tax preparation for individuals and businesses.",
      link: "/new-taxation",
      image: { asset: { url: "/6.png" } },
    },
    {
      _id: "2",
      title: "ACCOUNTING & BOOKKEEPING",
      description: "U.S. GAAP-compliant bookkeeping and accounting for firms and businesses.",
      link: "/accounting-bookkeeping",
      image: { asset: { url: "/7.png" } },
    },
    {
      _id: "3",
      title: "PAYROLL SERVICES",
      description: "End-to-end payroll management aligned with US federal and state compliance.",
      link: "/payroll",
      image: { asset: { url: "/8.png" } },
    },
  ];

  // Arc images for carousel
  const arcImages = philosophySection.values?.map(v => v.image?.asset?.url).filter(Boolean) || [
    "https://ik.imagekit.io/qxfudjvlf/taxarc/ACCURACY.jpeg",
    "https://ik.imagekit.io/qxfudjvlf/taxarc/RELIABILITY.jpeg",
    "https://ik.imagekit.io/qxfudjvlf/taxarc/PRIVACY.jpeg",
  ];

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || BookOpen;
    return IconComponent;
  };

  return (
    <div className="page-sections w-full bg-white">
      {/* Loading State */}
      {homeLoading && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#015482]"></div>
            <p className="mt-4 text-gray-600">Loading homepage...</p>
          </div>
        </div>
      )}

      {!homeLoading && (
        <>
          {/* Hero Section */}
          <section className="relative min-h-screen pt-24 md:pt-32 flex items-center justify-start overflow-hidden">
            {/* Background Video with Overlay */}
            <video 
              className='absolute top-0 left-0 bg-[#768286] w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={heroSection.backgroundVideo} type='video/mp4' />
            </video>
            <div className='absolute inset-0 bg-black/30'></div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-5xl font-bold text-white mb-2 leading-tight"
                >
                  {heroSection.heading}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-4xl font-inter italic text-white mb-6 leading-tight"
                >
                  {heroSection.subheading}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Link
                    to={heroSection.ctaButtonLink}
                    className="inline-flex items-center bg-white text-black px-4 py-4 rounded-full hover:bg-cyan-50 transition group font-semibold text-lg shadow-lg"
                  >
                    {heroSection.ctaButtonText}
                    <motion.div className="ml-3 w-10 h-10 bg-[#015482] hover:bg-[#17d3cf] rounded-full flex items-center justify-center transition-all ease-in">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Text and Accordion */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      {philosophySection.heading} -{" "}
                      <span className="font-inter text-[#039FA5]">{philosophySection.acronym}</span>
                    </h2>
                    <p className="text-3xl font-inter italic mb-6 bg-[#015482] bg-clip-text text-transparent">
                      {philosophySection.values?.map((v, i) => (
                        <span key={i}>
                          <span className="text-[#039FA5] text-[2.2rem] font-bold">
                            {v.title[0]}
                          </span>
                          {v.title.slice(1)}
                          {i < philosophySection.values.length - 1 ? ", " : " "}
                        </span>
                      ))}
                    </p>
                    <p className="text-[1.19rem] text-gray-700 mb-8 leading-relaxed">
                      {philosophySection.description}
                    </p>
                  </motion.div>

                  {/* Accordion */}
                  {accordionItems.length > 0 && <Accordion items={accordionItems} />}
                </div>

                {/* Right Column - Image Carousel */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Carousel
                    opts={{ loop: true }}
                    setApi={setCarouselApi}
                    className="w-full"
                  >
                    <CarouselContent>
                      {arcImages.map((src, i) => (
                        <CarouselItem key={i}>
                          <img
                            src={src}
                            alt={`${philosophySection.values?.[i]?.title || 'ARC'} image`}
                            className="rounded-lg shadow-xl w-full"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Our{" "}
                  <span className="font-inter italic text-[#015482]">
                    Services
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-22 md:grid-cols-2 xl:grid-cols-3 xl:gap-14 mt-25">
                {services.map((service, index) => (
                  <motion.div
                    key={service._id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    viewport={{ once: true }}
                    className="relative flex min-h-112 flex-col rounded-[2.25rem] border border-dashed border-[#ffffff] bg-[#015482] px-8 pb-10 pt-24 shadow-[0_22px_60px_rgba(1,84,130,0.14)]"
                  >
                    <div className="absolute left-8 top-0 h-16 w-11 -translate-y-10 rounded-b-full bg-white"></div>

                    <div className="absolute left-0.5 top-0 -translate-y-1/2 rounded-full shadow-lg">
                      <img
                        src={service.image?.asset?.url || "/6.png"}
                        alt={service.title}
                        className="h-30 w-30"
                      />
                    </div>

                    <h3 className="max-w-48 whitespace-pre-line text-left text-3xl font-extrabold leading-[1.05] text-white sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-10 max-w-[18rem] text-[1.19rem] flex-1 text-left text-base leading-7 text-white/95">
                      {service.description}
                    </p>

                    <Link
                      to={service.link}
                      aria-label={`View ${service.title}`}
                      className="mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#015482] transition-colors hover:bg-[#17d3cf] hover:text-white"
                    >
                      <ArrowUpRight className="h-7 w-7" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  {whyUsSection.heading.split(" ").map((word, i, arr) => (
                    i === arr.length - 1 ? (
                      <span key={i}>
                        {" "}<span className="font-inter italic text-[#015482]">{word}</span>
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  ))}
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {whyUsSection.features?.map((feature, index) => {
                  const IconComponent = getIcon(feature.icon);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                          <IconComponent className="w-6 h-6 text-[#015482]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-[1.19rem] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-[#015482] to-[#17d3cf]">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {ctaSection.heading}
                </h2>
                {ctaSection.description && (
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    {ctaSection.description}
                  </p>
                )}
                <Link
                  to={ctaSection.buttonLink}
                  className="inline-flex items-center bg-white text-[#015482] px-6 py-4 rounded-full hover:bg-gray-100 transition font-semibold text-lg shadow-lg"
                >
                  {ctaSection.buttonText}
                  <ArrowUpRight className="ml-3 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Logo Loop - if available */}
          <LogoLoop />
        </>
      )}
    </div>
  );
};

export default Home;
