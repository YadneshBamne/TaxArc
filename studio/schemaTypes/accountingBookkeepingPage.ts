export default {
  name: 'accountingBookkeepingPage',
  title: 'Accounting & Bookkeeping Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal page title (not displayed on site)',
      initialValue: 'Accounting & Bookkeeping Page',
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
          initialValue: 'Accounting & Bookkeeping',
        },
        {
          name: 'subheading',
          title: 'Sub Heading',
          type: 'string',
          initialValue: 'Precision accounting that powers better decisions.',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image URL',
          type: 'string',
          initialValue: 'https://ik.imagekit.io/qxfudjvlf/taxarc/Accounting.jpeg',
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

    // Accounting Services Section
    {
      name: 'servicesSection',
      title: 'Accounting & Bookkeeping Services Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Main Heading',
          type: 'string',
          initialValue: 'Our Accounting & Bookkeeping Services',
        },
        {
          name: 'subheading',
          title: 'Section Description',
          type: 'text',
          rows: 5,
          initialValue: 'We provide full-scope accounting support across QuickBooks Online, QuickBooks Desktop, Xero, and other major software. For accounting firms, we act as a white-label, back-office team handling the bookkeeping work you\'d rather not staff internally. For businesses, we become your outsourced accounting department — managing everything from daily transactions to month-end close.',
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
                  description: 'Lucide icon names: CalendarCheck, Brush, FileText, CheckSquare, RotateCcw, ListTree, etc.',
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
              icon: 'CalendarCheck',
              title: 'Monthly Bookkeeping',
              description: 'Transaction categorization, bank and credit card reconciliation, and ongoing ledger maintenance on a monthly basis.',
            },
            {
              icon: 'Brush',
              title: 'Catch-Up & Clean-Up Accounting',
              description: 'Restoring and organizing months or years of disorganized or incomplete financial records to bring books current.',
            },
            {
              icon: 'FileText',
              title: 'Financial Statement Preparation',
              description: 'Profit & Loss, Balance Sheet, and Cash Flow Statements prepared monthly, quarterly, or annually and ready for your review.',
            },
            {
              icon: 'CheckSquare',
              title: 'Month-End & Year-End Close',
              description: 'Closing procedures including accruals, prepayments, depreciation schedules, and adjusting journal entries.',
            },
            {
              icon: 'RotateCcw',
              title: 'Accounts Payable & Receivable',
              description: 'Invoice processing, aging analysis, collections follow-up, and payment tracking for better cash flow management.',
            },
            {
              icon: 'ListTree',
              title: 'Chart of Accounts Setup & Optimization',
              description: 'Designing and optimizing account structures for QuickBooks, Xero, and other platforms to streamline reporting and compliance.',
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
                  description: 'Lucide icon names: Clock, DollarSign, TrendingUp, BarChart3, Handshake, CheckCircle, etc.',
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
              title: 'Reclaim Your Time',
              description: 'Stop spending hours on bookkeeping and accounting. Focus on growing your business or serving more clients.',
            },
            {
              icon: 'DollarSign',
              title: 'Reduce Costs',
              description: 'Avoid the overhead of hiring and managing in-house accounting staff. Pay only for the services you need.',
            },
            {
              icon: 'TrendingUp',
              title: 'Gain Better Insights',
              description: 'Access clean, organized financial data and timely reports to make informed business decisions.',
            },
            {
              icon: 'BarChart3',
              title: 'Scale with Confidence',
              description: 'As your business grows, your accounting support grows with you without the strain of hiring and training.',
            },
            {
              icon: 'Handshake',
              title: 'Expert Support',
              description: 'Leverage the experience of CPAs and accounting professionals without the full-time cost.',
            },
            {
              icon: 'CheckCircle',
              title: 'Compliance & Accuracy',
              description: 'Ensure your books are maintained to the highest standards, ready for audits, loans, and tax filing.',
            },
          ],
        },
      ],
    },
  ],
}
