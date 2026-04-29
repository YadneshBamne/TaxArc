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

// Import Sanity hooks and queries
import { useSanityData } from "../hooks/useSanityData";
import { HOME_QUERY } from "../sanity/queries";
import { urlFor } from "../hooks/useSanityImage";

const HomeWithSanity = () => {
  const [carouselApi, setCarouselApi] = useState(null);
  
  // Fetch data from Sanity
  const { data: sanityData, loading, error } = useSanityData(HOME_QUERY);

  // Fallback data if Sanity is not configured
  const fallbackServices = [
    {
      title: "TAX\nPREPARATION",
      description:
        "Accurate, IRS-compliant tax preparation for individuals and businesses. Scale your capacity during peak season with support from trained professionals.",
      link: "/new-taxation",
      img: "/6.png",
    },
    {
      title: "ACCOUNTING &\nBOOKKEEPING",
      description:
        "U.S. GAAP-compliant bookkeeping and accounting for firms and businesses. From daily books to year-end reporting, we handle number so you focus on growth.",
      link: "/accounting-bookkeeping",
      img: "/7.png",
    },
    {
      title: "PAYROLL\nSERVICES",
      description:
        "End-to-end payroll management aligned with US federal and state compliance. From processing to filings and year-end reporting, handled seamlessly.",
      link: "/payroll",
      img: "/8.png",
    },
  ];

  const fallbackArcImages = [
    "https://ik.imagekit.io/qxfudjvlf/taxarc/ACCURACY.jpeg",
    "https://ik.imagekit.io/qxfudjvlf/taxarc/RELIABILITY.jpeg",
    "https://ik.imagekit.io/qxfudjvlf/taxarc/PRIVACY.jpeg",
  ];

  const fallbackAccordionItems = [
    {
      title: "Accuracy",
      content:
        "In a compliance-driven and deadline-sensitive environment, precision is non-negotiable. We operate through structured workflows, standardized checklists, and multi-level quality reviews to ensure consistency at every point.",
    },
    {
      title: "Reliability",
      content:
        "We understand that your business depends on consistent and dependable service. Our team is committed to delivering reliable results, meeting deadlines, and being there when you need us most. Your success is our priority, and we work tirelessly to ensure you can count on us.",
    },
    {
      title: "Confidentiality",
      content:
        "Your financial information is sensitive and deserves the highest level of protection. We maintain strict confidentiality protocols and security measures to safeguard your data. Confidentiality is the foundation of our organization, and we take it seriously.",
    },
  ];

  // Use Sanity data if available, otherwise fallback
  const services = sanityData?.services || fallbackServices;
  const arcImages = sanityData?.heroSection?.backgroundImage 
    ? [urlFor(sanityData.heroSection.backgroundImage)]
    : fallbackArcImages;
  const accordionItems = sanityData?.philosophyItems || fallbackAccordionItems;

  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  // Show loading state
  if (loading) {
    return (
      <div className="page-sections w-full bg-white flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#015482] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    console.error("Sanity error:", error);
  }

  return (
    <div className="page-sections w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 md:pt-32 flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <video 
          className='absolute top-0 left-0 bg-[#768286] w-full h-full object-cover '
          autoPlay
          loop
          muted
          playsInline
        >
          <source src='./bannerr.mp4' type='video/mp4' />
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
              {sanityData?.heroSection?.title || "Your Outsourced Professional Team for"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-4xl font-inter italic text-white mb-6 leading-tight"
            >
              {sanityData?.heroSection?.subtitle || "U.S. Tax & Accounting Support"}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-black px-4 py-4 rounded-full hover:bg-cyan-50 transition group font-semibold text-lg shadow-lg"
              >
                Connect with us
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
                  Our Philosophy -{" "}
                  <span className="font-inter text-[#039FA5]">ARC</span>
                </h2>
                <p className="text-3xl font-inter italic mb-6 bg-[#015482] bg-clip-text text-transparent">
                  <span className="text-[#039FA5] text-[2.2rem] font-bold">A</span>ccuracy, <span className="text-[#039FA5] text-[2.2rem] font-bold">R</span>eliability & <span className="text-[#039FA5] text-[2.2rem] font-bold">C</span>onfidentiality
                </p>
                <p className="text-[1.19rem] text-gray-700 mb-8 leading-relaxed">
                  At TaxArc Global, our name reflects the philosophy that guides
                  everything we do - the ARC Framework. This framework defines
                  how we deliver work, manage risk, and build long-term client
                  partnerships. It shapes our processes, ensures accountability,
                  and enables us to deliver the level of reliability and
                  assurance expected by professionally managed organizations.
                </p>
              </motion.div>

              {/* Accordion */}
              <Accordion items={accordionItems} />
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
                        alt="Team working on accounting"
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
                    src={service.image ? urlFor(service.image) : service.img}
                    alt={service.title.replace("\n", " ")}
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
                  aria-label={`View ${service.title.replace("\n", " ")}`}
                  className="mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#015482] transition-colors hover:bg-[#17d3cf] hover:text-white"
                >
                  <ArrowUpRight className="h-7 w-7" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeWithSanity;
