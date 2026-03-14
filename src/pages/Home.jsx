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
} from "lucide-react";
import { motion } from "motion/react";
import { Accordion } from "../components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { LogoLoop } from "../components/LogoLoop";

const arcImages = [
  "https://ik.imagekit.io/qxfudjvlf/taxarc/ACCURACY.jpeg",
  "https://ik.imagekit.io/qxfudjvlf/taxarc/RELIABILITY.jpeg",
  "https://ik.imagekit.io/qxfudjvlf/taxarc/PRIVACY.jpeg",
];

const services = [
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
      "US GAAP-compliant bookkeeping and accounting for firms and businesses. From daily books to year-end reporting, we handle the numbers so you focus on clients.",
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

const Home = () => {
  const [carouselApi, setCarouselApi] = useState(null);

  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  const accordionItems = [
    {
      title: "Accuracy",
      content:
        "In a compliance-driven and deadline-sensitive environment, precision is non-negotiable. We operate through structured workflows, standardized checklists, and multi-level quality reviews to ensure consistency at every point.",
    },
    {
      title: "Reliability",
      content:
        "We understand that your business depends on consistent, dependable service. Our team is committed to delivering reliable results, meeting deadlines, and being there when you need us most. Your success is our priority, and we work tirelessly to ensure you can count on us.",
    },
    {
      title: "Confidentiality",
      content:
        "Your financial information is sensitive and deserves the highest level of protection. We maintain strict confidentiality protocols and security measures to safeguard your data. Trust is the foundation of our relationship, and we take that responsibility seriously.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start">
        {/* Background Image with Overlay */}
        <video 
          className='absolute bg-[#768286] inset-0 w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src='https://ik.imagekit.io/qxfudjvlf/taxarc/4.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/40'></div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-5xl font-bold text-white mb-2 leading-tight"
            >
              Outsourced Professional Team for
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-4xl font-inter italic text-white mb-6 leading-tight"
            >
              U.S. Tax & Accounting Support
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
      <section className="py-20 bg-white">
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
                  <span className="font-inter text-[#015482]">ARC</span>
                </h2>
                <p className="text-3xl font-inter italic mb-6 bg-[#015482] bg-clip-text text-transparent">
                  Accuracy, Reliability & Confidentiality
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
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

      {/*    Section */}
      <section className="py-20 bg-white">
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

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-14 mt-25">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative flex min-h-112 flex-col rounded-[2.25rem] border border-dashed border-[#ffffff] bg-[#015482] px-8 pb-10 pt-24 shadow-[0_22px_60px_rgba(1,84,130,0.14)]"
              >
                <div className="absolute left-8 top-0 h-16 w-11 -translate-y-10 rounded-b-full bg-white"></div>

                <div className="absolute left-0.5 top-0 -translate-y-1/2 rounded-full shadow-lg">
                  <img
                    src={service.img}
                    alt={service.title.replace("\n", " ")}
                    className="h-30 w-30"
                  />
                </div>

                <h3 className="max-w-48 whitespace-pre-line text-left text-3xl font-extrabold leading-[1.05] text-white sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-10 max-w-[18rem] flex-1 text-left text-base leading-7 text-white/95">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Why <span className="font-inter italic text-[#015482]">Us?</span>
            </motion.h2>

            {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className='mt-6'
                  >
                    <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                      Specialized Professionals, Seamlessly Integrated
                    </h3>
                    <p className='text-gray-700 leading-relaxed max-w-3xl mx-auto'>
                      Our teams of CPAs, Chartered Accountants, and experienced tax and accounting professionals integrate seamlessly into your existing software ecosystem, minimizing onboarding time and ensuring a smooth, efficient transition from day one.
                    </p>
                  </motion.div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-[#015482]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Specialized Professionals, Seamlessly Integrated
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our teams of CPAs, Chartered Accountants, and experienced
                    tax and accounting professionals integrate seamlessly into
                    your existing software ecosystem, minimizing onboarding time
                    and ensuring a smooth, efficient transition from day one.
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
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#015482]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Turnaround You Can Rely On
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Defined timelines, structured workflows, and disciplined execution ensure predictable turnaround on every engagement. Our deadline-driven approach helps firms maintain smooth operations and meet critical filing timelines, especially during peak tax season.
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
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-[#015482]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Data Security & Confidentiality
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    NDA-backed engagements, secure file transfer protocols, and
                    strict data privacy practices — your client data is always
                    protected.
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
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <DollarSign className="w-6 h-6 text-[#015482]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Cost Efficiency</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Significant reduction in operational costs compared to
                    in-house staffing — without compromising on quality or
                    accuracy.
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
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#015482]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Flexible Engagement Model
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Flexible team sizing to accommodate seasonal peaks, project
                    expansions, or ongoing support needs.
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
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#015482]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Quality & Continuous Improvement
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Regular internal reviews, quality control checkpoints, and
                    process optimization to ensure excellence in every
                    engagement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Tools we <span className="italic text-[#015482] ">work with</span>.
            </h2>
          </div>

          <div className="mt-14">
            <LogoLoop
              logos={[
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/1.png",
                  alt: "Tool 1",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/2.png",
                  alt: "Tool 2",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/3.png",
                  alt: "Tool 3",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/4.png",
                  alt: "Tool 4",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/5.png",
                  alt: "Tool 5",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/6.png",
                  alt: "Tool 6",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/7.png",
                  alt: "Tool 7",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/8.png",
                  alt: "Tool 8",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/9.png",
                  alt: "Tool 9",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/10.png",
                  alt: "Tool 10",
                },
                {
                  src: "https://ik.imagekit.io/qxfudjvlf/taxarc/11.png",
                  alt: "Tool 11",
                },
              ]}
              speed={80}
              logoHeight={60}
              gap={48}
              pauseOnHover
              fadeOut
              fadeOutColor="#ffffff"
            />
          </div>
        </div>
      </section>

      {/* Work with Experts Section */}
      <section className="mb-30 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative w-full max-w-xl mx-auto lg:mx-0">
                <img
                  src="https://ik.imagekit.io/qxfudjvlf/taxarc/homepageleft.jpeg"
                  alt="Work with experts"
                  className="rounded-3xl w-full h-auto shadow-lg object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Scale Smarter with
                <br />{" "}
                <span className="font-inter italic bg-[#015482] bg-clip-text text-transparent">
                  Tax<span className="text-[#17D3CF]">Arc</span> Global
                </span>
                .
              </h2>

              <Link
                to="/contact"
                className="inline-flex items-center bg-white border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:border[#015482] hover:bg-blue-50 transition group font-semibold w-fit"
              >
                Get Started
                <motion.div
                  className="ml-3 w-8 h-8 bg-[#015482] hover:bg-[#17d3cf] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default Home;
