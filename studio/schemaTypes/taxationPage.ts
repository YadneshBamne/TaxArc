export default {
  name: 'taxationPage',
  title: 'Tax Preparation Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal page title (not displayed on site)',
      initialValue: 'Tax Preparation Page',
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
          type: 'string',
          initialValue: 'Tax Preparation',
        },
        {
          name: 'subheading',
          title: 'Sub Heading',
          type: 'string',
          initialValue: 'Reliable Outsourced Tax Preparation. Delivered to Your Standards. On Your Timeline.',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image URL',
          type: 'string',
          initialValue: 'https://ik.imagekit.io/qxfudjvlf/taxarc/Taxation.jpeg',
        },
      ],
    },

    // Who We Serve Section
    {
      name: 'whoWeServeSection',
      title: 'Who We Serve Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Who We Serve',
        },
        {
          name: 'items',
          title: 'Service Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'category',
              title: 'Category',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                  description: 'Choose a Lucide icon: Building, Users, Briefcase, Building2, or any other Lucide icon name',
                  initialValue: 'Building',
                },
                {
                  name: 'title',
                  title: 'Category Title',
                  type: 'string',
                  initialValue: '',
                },
              ],
            },
          ],
          initialValue: [
            { icon: 'Building', title: 'CPA & EA Firms' },
            { icon: 'Building', title: 'Accounting Practices' },
            { icon: 'Building2', title: 'Small & mid-size businesses' },
          ],
        },
      ],
    },

    // Tax Services Section
    {
      name: 'servicesSection',
      title: 'Tax Preparation Services Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Main Heading',
          type: 'string',
          initialValue: 'Our Tax Preparation Services',
        },
        {
          name: 'subheading',
          title: 'Section Description',
          type: 'text',
          rows: 5,
          initialValue: 'We provide comprehensive tax preparation services for individuals, businesses, and high-net-worth clients. Whether you\'re a CPA firm needing to scale capacity during peak season, an accounting practice seeking white-label support, or a business owner looking for reliable tax preparation, we deliver accurate, IRS-compliant returns on your timeline.',
        },
        {
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'service',
              title: 'Service',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                  description: 'Lucide icon names: FileText, RotateCcw, DollarSign, Building, Briefcase, ClipboardList, etc.',
                  initialValue: '',
                },
                {
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  initialValue: '',
                },
                {
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                  rows: 3,
                  initialValue: '',
                },
              ],
            },
          ],
          initialValue: [
            {
              icon: 'FileText',
              title: '1040 Individual Tax Returns',
              description: 'Comprehensive individual tax return preparation including all schedules, deductions, and credits to maximize tax efficiency.',
            },
            {
              icon: 'Building',
              title: 'S-Corp & C-Corp Returns (1120-S, 1120)',
              description: 'Accurate corporate tax preparation with full compliance to IRS regulations and state filing requirements.',
            },
            {
              icon: 'Briefcase',
              title: 'Partnership & LLC Returns (1065, 1040-C)',
              description: 'Entity tax return preparation with detailed schedules and allocation of income, deductions, and credits to members.',
            },
            {
              icon: 'DollarSign',
              title: 'Nonprofit Tax Returns (Form 990)',
              description: 'Preparation of Form 990 series returns with full compliance to nonprofit reporting requirements.',
            },
            {
              icon: 'ClipboardList',
              title: 'Amended Returns',
              description: 'Preparation of Form 1040-X and corresponding entity amended returns for prior-year corrections.',
            },
            {
              icon: 'RotateCcw',
              title: 'Multi-State & International Returns',
              description: 'Multi-state tax returns addressing nexus analysis, apportionment, and compliance across multiple jurisdictions.',
            },
          ],
        },
      ],
    },

    // Key Benefits Section
    {
      name: 'benefitsSection',
      title: 'Key Benefits Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Key Benefits',
        },
        {
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'benefit',
              title: 'Benefit',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                  description: 'Lucide icon names: Clock, CheckCircle, TrendingUp, Users, Zap, Shield, etc.',
                  initialValue: '',
                },
                {
                  name: 'title',
                  title: 'Benefit Title',
                  type: 'string',
                  initialValue: '',
                },
                {
                  name: 'description',
                  title: 'Benefit Description',
                  type: 'text',
                  rows: 3,
                  initialValue: '',
                },
              ],
            },
          ],
          initialValue: [
            {
              icon: 'Clock',
              title: 'Meet Filing Deadlines',
              description: 'Deliver quality tax returns on time, every time — scaling your capacity during peak season without staffing stress.',
            },
            {
              icon: 'CheckCircle',
              title: 'Accuracy & Compliance',
              description: 'IRS-compliant tax returns prepared by experienced professionals, minimizing risk and audit exposure.',
            },
            {
              icon: 'TrendingUp',
              title: 'Tax Optimization',
              description: 'Strategic tax planning and return preparation designed to maximize deductions and minimize client tax liability.',
            },
            {
              icon: 'Users',
              title: 'White-Label Support',
              description: 'Seamless back-office support for your clients, branded under your firm\'s name and standards.',
            },
            {
              icon: 'Zap',
              title: 'Flexible Engagement',
              description: 'Scale support based on your seasonal needs — from project-based to ongoing capacity management.',
            },
            {
              icon: 'Shield',
              title: 'Data Security & Confidentiality',
              description: 'Bank-level security protocols protecting sensitive client tax information at all times.',
            },
          ],
        },
      ],
    },
  ],
}
