import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const defaultSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "Services", href: "/services" },
      { name: "About Us", href: "/about" },
    ],
  },
  {
    title: "Get In Touch",
    links: [
      { 
        name: "harshika.vora@gmail.com", 
        href: "mailto:harshika.vora@gmail.com",
        icon: <Mail className="size-4" />
      },
      { 
        name: "+91 9909469067", 
        href: "tel:+919909469067",
        icon: <Phone className="size-4" />
      },
      { 
        name: "1801, Navratna Corporate Park, Ashok Vatika, Ahmedabad, Gujarat 380058", 
        href: "#",
        icon: <MapPin className="size-4" />
      },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Linkedin className="size-5" />, href: "https://www.linkedin.com/company/taxarcglobal/about/?viewAsMember=true", label: "LinkedIn" },
  { icon: <Facebook className="size-5" />, href: "https://www.facebook.com/profile.php?id=61586478143120", label: "Facebook" },
  { icon: <Instagram className="size-5" />, href: "https://www.instagram.com/taxarc_global?igsh=ZnpxbzR1YnN6azdv&utm_source=qr", label: "Instagram" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/terms" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/brand.png",
    alt: "TaxArc Global",
    title: "TaxArc Global",
  },

  sections = defaultSections,
  description = "Strategic Offshore Partner for US Tax & Accounting Excellence",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 TaxArc Global. All rights reserved.",
  legalLinks = defaultLegalLinks
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-3 lg:justify-start">
              <Link to={logo.url}>
                <img src={logo.src} alt={logo.alt} title={logo.title} className="h-12" />
              </Link>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-gray-600">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-[#17D3CF] transition-colors">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 md:grid-cols-3 lg:gap-12">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-gray-900">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-[#17D3CF] transition-colors">
                      {link.icon ? (
                        <a href={link.href} className="flex items-start gap-2" target={link.href.startsWith('http') ? "_blank" : undefined} rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}>
                          <span className="text-[#17D3CF] mt-0.5">{link.icon}</span>
                          <span className="flex-1">{link.name}</span>
                        </a>
                      ) : (
                        <Link to={link.href}>{link.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 pt-8 text-sm font-medium text-gray-600 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-[#17D3CF] transition-colors">
                <Link to={link.href}> {link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

