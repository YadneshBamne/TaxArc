export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal page title (not displayed on site)',
      initialValue: 'Home Page',
    },
    
    // Hero Section
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Main Heading',
          type: 'text',
          rows: 3,
          initialValue: 'Your Outsourced Professional Team for',
        },
        {
          name: 'subheading',
          title: 'Sub Heading (Italic)',
          type: 'text',
          rows: 2,
          initialValue: 'U.S. Tax & Accounting Support',
        },
        {
          name: 'ctaButtonText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Connect with us',
        },
        {
          name: 'ctaButtonLink',
          title: 'CTA Button Link',
          type: 'string',
          initialValue: '/contact',
        },
        {
          name: 'backgroundVideo',
          title: 'Background Video URL',
          type: 'string',
          description: 'Path or URL to background video',
          initialValue: './bannerr.mp4',
        },
      ],
    },

    // Philosophy Section (ARC)
    {
      name: 'philosophySection',
      title: 'Philosophy Section (ARC)',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Our Philosophy',
        },
        {
          name: 'acronym',
          title: 'Acronym (e.g., ARC)',
          type: 'string',
          initialValue: 'ARC',
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 4,
          initialValue: 'At TaxArc Global, our name reflects the philosophy that guides everything we do - the ARC Framework. This framework defines how we deliver work, manage risk, and build long-term client partnerships.',
        },
        {
          name: 'values',
          title: 'ARC Values',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Value Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Value Description',
                  type: 'text',
                  rows: 3,
                },
                {
                  name: 'image',
                  title: 'Value Image',
                  type: 'image',
                  options: { hotspot: true },
                },
              ],
            },
          ],
          initialValue: [
            {
              title: 'Accuracy',
              description: 'In a compliance-driven and deadline-sensitive environment, precision is non-negotiable.',
              image: null,
            },
            {
              title: 'Reliability',
              description: 'We understand that your business depends on consistent and dependable service.',
              image: null,
            },
            {
              title: 'Confidentiality',
              description: 'Your financial information is sensitive and deserves the highest level of protection.',
              image: null,
            },
          ],
        },
      ],
    },

    // Services Section
    {
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Services',
        },
        {
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                  rows: 3,
                },
                {
                  name: 'link',
                  title: 'Service Link',
                  type: 'string',
                },
                {
                  name: 'image',
                  title: 'Service Image',
                  type: 'image',
                  options: { hotspot: true },
                },
              ],
            },
          ],
          initialValue: [
            {
              title: 'TAX\nPREPARATION',
              description: 'Accurate, IRS-compliant tax preparation for individuals and businesses. Scale your capacity during peak season with support from trained professionals.',
              link: '/new-taxation',
              image: null,
            },
            {
              title: 'ACCOUNTING &\nBOOKKEEPING',
              description: 'U.S. GAAP-compliant bookkeeping and accounting for firms and businesses. From daily books to year-end reporting, we handle number so you focus on growth.',
              link: '/accounting-bookkeeping',
              image: null,
            },
            {
              title: 'PAYROLL\nSERVICES',
              description: 'End-to-end payroll management aligned with US federal and state compliance. From processing to filings and year-end reporting, handled seamlessly.',
              link: '/payroll',
              image: null,
            },
          ],
        },
        {
          name: 'showServices',
          title: 'Show All Services',
          type: 'boolean',
          description: 'Check to display all services from the Service collection',
          initialValue: true,
        },
      ],
    },

    // Why Us Section
    {
      name: 'whyUsSection',
      title: 'Why Us Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Why Us?',
        },
        {
          name: 'features',
          title: 'Features/Benefits',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                  description: 'Lucide icon names: BookOpen, Shield, Clock, DollarSign, Handshake, TrendingUp, CheckCircle, Users, Zap, Globe, Heart, Award, etc.',
                },
                {
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                  rows: 3,
                },
              ],
            },
          ],
          initialValue: [
            {
              icon: 'BookOpen',
              title: 'Specialized Professionals, Seamlessly Integrated',
              description: 'Our team of CPAs, Chartered Accountants and experienced tax and accounting professionals integrate seamlessly into your existing software ecosystem, minimizing onboarding time and ensuring a smooth, efficient transition from day one.',
            },
            {
              icon: 'Clock',
              title: 'Turnaround You Can Rely On',
              description: 'Defined timelines, structured workflows, and disciplined execution ensure predictable turnaround on every engagement. Our deadline-driven approach helps firms maintain smooth operations and meet critical filing timelines, especially during peak tax season.',
            },
            {
              icon: 'Shield',
              title: 'Data Security & Confidentiality',
              description: 'NDA-backed engagements, secure file transfer protocols, and strict data privacy practices ensures that your data is always protected.',
            },
            {
              icon: 'DollarSign',
              title: 'Cost Efficiency',
              description: 'Significant reduction in operational costs compared to in-house staffing without compromising on quality or accuracy.',
            },
            {
              icon: 'Handshake',
              title: 'Flexible Engagement Model',
              description: 'We offer flexible engagement structures — project-based, hourly, or dedicated support — allowing firms to scale assistance based on workload, seasonality, and specific engagement needs.',
            },
            {
              icon: 'TrendingUp',
              title: 'Quality & Continuous Improvement',
              description: 'Regular internal reviews, quality control checkpoints, and process optimization to ensure excellence in every engagement.',
            },
          ],
        },
      ],
    },

    // CTA Section
    {
      name: 'ctaSection',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Ready to grow?',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Get Started',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact',
        },
      ],
    },
  ],
}
