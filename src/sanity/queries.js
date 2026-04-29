// GROQ Queries for TaxArc CMS

// ============== HOMEPAGE ==============
export const HOME_QUERY = `
*[_type == "homePage"][0] {
  _id,
  title,
  heroSection {
    heading,
    subheading,
    ctaButtonText,
    ctaButtonLink,
    backgroundVideo
  },
  philosophySection {
    heading,
    acronym,
    description,
    values[] {
      title,
      description,
      image {
        asset -> { url }
      }
    }
  },
  servicesSection {
    heading,
    services[] {
      title,
      description,
      link,
      image {
        asset -> { url }
      }
    },
    showServices
  },
  whyUsSection {
    heading,
    features[] {
      icon,
      title,
      description
    }
  },
  ctaSection
}
`

// ============== ABOUT PAGE ==============
export const ABOUT_QUERY = `
*[_type == "aboutPage"][0] {
  _id,
  title,
  heroSection {
    heading,
    description,
    backgroundVideo
  },
  leadershipSection {
    heading,
    teamMembers[] {
      name,
      title,
      qualifications,
      otherInfo,
      description,
      image {
        asset -> { url }
      },
      linkedinUrl
    }
  },
  visionMissionSection {
    vision {
      heading,
      description
    },
    mission {
      heading,
      description
    }
  },
  workflowSection {
    heading,
    description,
    workflows[] {
      title,
      description
    }
  },
  infrastructureSection {
    heading,
    items[] {
      icon,
      title
    }
  },
  faqSection {
    faqs[] {
      question,
      answer
    }
  }
}
`

// ============== PAYROLL PAGE ==============
export const PAYROLL_QUERY = `
*[_type == "payrollPage"][0] {
  _id,
  title,
  heroSection {
    heading,
    subheading,
    backgroundImage
  },
  whoWeServeSection {
    heading,
    items[] {
      icon,
      title
    }
  },
  servicesSection {
    heading,
    subheading,
    services[] {
      icon,
      title,
      description
    }
  },
  benefitsSection {
    heading,
    benefits[] {
      icon,
      title,
      description
    }
  }
}
`

// ============== ACCOUNTING & BOOKKEEPING PAGE ==============
export const ACCOUNTING_BOOKKEEPING_QUERY = `
*[_type == "accountingBookkeepingPage"][0] {
  _id,
  title,
  heroSection {
    heading,
    subheading,
    backgroundImage
  },
  whoWeServeSection {
    heading,
    items[] {
      icon,
      title
    }
  },
  servicesSection {
    heading,
    subheading,
    services[] {
      icon,
      title,
      description
    }
  },
  benefitsSection {
    heading,
    benefits[] {
      icon,
      title,
      description
    }
  }
}
`

// ============== TAXATION PAGE ==============
export const TAXATION_QUERY = `
*[_type == "taxationPage"][0] {
  _id,
  title,
  heroSection {
    heading,
    subheading,
    backgroundImage
  },
  whoWeServeSection {
    heading,
    items[] {
      icon,
      title
    }
  },
  servicesSection {
    heading,
    subheading,
    services[] {
      icon,
      title,
      description
    }
  },
  benefitsSection {
    heading,
    benefits[] {
      icon,
      title,
      description
    }
  }
}
`

// Get all services for homepage display
export const ALL_SERVICES_QUERY = `
*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  link,
  order,
  image {
    asset -> { url }
  }
}
`

// ============== SERVICES PAGE ==============
export const SERVICES_PAGE_QUERY = `
{
  "heroSection": *[_type == "servicesPage"][0] {
    title,
    subtitle,
    heroImage {
      asset -> { url }
    }
  },
  "services": *[_type == "serviceDetail"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    features[] {
      title,
      description
    },
    order,
    image {
      asset -> { url }
    }
  }
}
`

// ============== ABOUT PAGE ==============
export const ABOUT_PAGE_QUERY = `
{
  "heroSection": *[_type == "aboutPage"][0] {
    title,
    subtitle,
    videoUrl,
    description
  },
  "team": *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    order,
    image {
      asset -> { url }
    }
  },
  "values": *[_type == "companyValue"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
}
`

// ============== CONTACT PAGE ==============
export const CONTACT_PAGE_QUERY = `
{
  "contactInfo": *[_type == "contactInfo"][0] {
    email,
    phone,
    address,
    timezone
  },
  "faqs": *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
}
`

// ============== SPECIFIC SERVICE PAGES ==============
export const SERVICE_PAGE_QUERY = (slug) => `
*[_type == "servicePage" && slug.current == "${slug}"][0] {
  _id,
  title,
  slug,
  description,
  heroImage {
    asset -> { url }
  },
  features[] {
    title,
    description,
    icon
  },
  benefits[] {
    title,
    description
  },
  faqs[] {
    question,
    answer
  },
  cta {
    text,
    link
  }
}
`

// ============== GLOBAL SETTINGS ==============
export const GLOBAL_SETTINGS_QUERY = `
*[_type == "globalSettings"][0] {
  companyName,
  companyDescription,
  companyLogo {
    asset -> { url }
  },
  favicon {
    asset -> { url }
  },
  navLinks[] {
    label,
    href,
    order
  },
  footer {
    description,
    socialLinks[] {
      platform,
      url
    }
  },
  seoDefaults {
    title,
    description,
    keywords[]
  }
}
`

// ============== FOOTER ==============
export const FOOTER_QUERY = `
*[_type == "footer"][0] {
  companyDescription,
  socialLinks[] {
    platform,
    url,
    icon
  },
  quickLinks[] {
    label,
    href
  },
  legalLinks[] {
    label,
    href
  },
  contactEmail,
  copyright
}
`

// ============== FAQ ==============
export const FAQS_QUERY = `
*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  category,
  order
}
`

// ============== PAGES ==============
export const PAGES_QUERY = `
*[_type == "page"] {
  _id,
  title,
  slug,
  content[] {
    ...,
    _type == "image" => {
      asset -> { url }
    }
  },
  seo {
    title,
    description,
    keywords[]
  }
}
`

// ============== SINGLE PAGE ==============
export const PAGE_BY_SLUG_QUERY = (slug) => `
*[_type == "page" && slug.current == "${slug}"][0] {
  _id,
  title,
  slug,
  content[] {
    ...,
    _type == "image" => {
      asset -> { url }
    }
  },
  seo {
    title,
    description,
    keywords[]
  }
}
`
