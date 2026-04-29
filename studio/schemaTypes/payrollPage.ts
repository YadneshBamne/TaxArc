export default {
  name: 'payrollPage',
  title: 'Payroll Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal page title (not displayed on site)',
      initialValue: 'Payroll Page',
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
          initialValue: 'Payroll Services',
        },
        {
          name: 'subheading',
          title: 'Sub Heading',
          type: 'string',
          initialValue: 'Every Employee Paid Right. Every Obligation Met.',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image URL',
          type: 'string',
          initialValue: 'https://ik.imagekit.io/qxfudjvlf/taxarc/Payroll%20Services.jpeg',
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
            { icon: 'Building', title: 'Building2' },
          ],
        },
      ],
    },

    // Payroll Services Section
    {
      name: 'servicesSection',
      title: 'Payroll Services Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Main Heading',
          type: 'string',
          initialValue: 'Our Payroll Services',
        },
        {
          name: 'subheading',
          title: 'Section Description',
          type: 'text',
          rows: 5,
          initialValue: 'We provide comprehensive payroll processing for businesses of all sizes and white-label payroll management for accounting firms serving business clients. Whether you need end-to-end outsourced payroll or a dependable back-office partner to handle the processing behind your client-facing service, we deliver accuracy, compliance, and efficiency at every pay cycle.',
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
                  description: 'Lucide icon names: RefreshCcw, ShieldCheck, MapPinned, FileBadge, BarChart3, BadgeCheck, CheckCircle, GitMerge, Gauge, Globe2, Smile, Handshake, etc.',
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
              icon: 'RefreshCcw',
              title: 'Full-Cycle Payroll Processing',
              description: 'Weekly, bi-weekly, semi-monthly, or monthly payroll runs for hourly, salaried, and contractor payments.',
            },
            {
              icon: 'ShieldCheck',
              title: 'Federal Payroll Tax Compliance',
              description: 'Preparation of Form 941 and Form 940, with payroll tax deposit tracking and reconciliation.',
            },
            {
              icon: 'MapPinned',
              title: 'State & Local Payroll Tax Filings',
              description: 'SUTA and state payroll tax preparation across applicable jurisdictions.',
            },
            {
              icon: 'FileBadge',
              title: 'W-2 & 1099 Preparation',
              description: 'Year-end wage and contractor forms prepared and review-ready for filing.',
            },
            {
              icon: 'BarChart3',
              title: 'Payroll Reporting',
              description: 'Payroll registers, liability summaries, and reconciliation reports delivered ready for your review.',
            },
            {
              icon: 'BadgeCheck',
              title: 'White-Label Payroll for Firms',
              description: 'Payroll reports, employee communications, and year-end forms branded under your firm\'s identity for seamless client experience.',
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
                  description: 'Lucide icon names: CheckCircle, GitMerge, Gauge, Globe2, Smile, Handshake, etc.',
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
              icon: 'CheckCircle',
              title: 'Timely compliance',
              description: 'Every federal and state deposit and filing submitted accurately and on time',
            },
            {
              icon: 'GitMerge',
              title: 'Seamless GL integration',
              description: 'Payroll journal entries post directly to your accounting system, eliminating duplicate data entry',
            },
            {
              icon: 'Gauge',
              title: 'Operational efficiency',
              description: 'Eliminate hours of manual processing per pay cycle — for your team or your clients',
            },
            {
              icon: 'Globe2',
              title: 'Multi-state capability',
              description: 'We handle nexus analysis, state registration guidance, and multi-jurisdiction tax management',
            },
            {
              icon: 'Smile',
              title: 'Employee and client confidence',
              description: 'Reliable, on-time payroll builds trust at every level',
            },
            {
              icon: 'Handshake',
              title: 'Flexible Engagement Models',
              description: 'We offer flexible engagement structures — project-based, hourly, or dedicated support — allowing firms to scale assistance based on workload, seasonality, and specific engagement needs.',
            },
          ],
        },
      ],
    },
  ],
}
