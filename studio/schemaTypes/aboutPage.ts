export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal page title (not displayed on site)',
      initialValue: 'About Page',
    },

    // First Section - About Us Hero
    {
      name: 'heroSection',
      title: 'Hero Section (About Us)',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Main Heading',
          type: 'string',
          initialValue: 'About Us',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
          initialValue: 'TaxArc Global is a global professional outsourcing firm providing structured, secure, and dependable support across tax, accounting and bookkeeping operations to businesses and professional organizations.',
        },
        {
          name: 'backgroundVideo',
          title: 'Background Video URL',
          type: 'string',
          description: 'Path or URL to background video',
          initialValue: 'https://ik.imagekit.io/qxfudjvlf/taxarc/About%20Us%20Video.mp4',
        },
      ],
    },

    // Leadership Section
    {
      name: 'leadershipSection',
      title: 'Leadership Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Meet our Leadership Team',
        },
        {
          name: 'teamMembers',
          title: 'Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'teamMember',
              title: 'Team Member',
              fields: [
                {
                  name: 'name',
                  title: 'Full Name',
                  type: 'string',
                  initialValue: '',
                },
                {
                  name: 'title',
                  title: 'Job Title',
                  type: 'string',
                  initialValue: '',
                },
                {
                  name: 'qualifications',
                  title: 'Qualifications',
                  type: 'string',
                  initialValue: '',
                  description: 'e.g., CPA(US) | FCA (India) | B.Com',
                },
                {
                  name: 'otherInfo',
                  title: 'Other Information',
                  type: 'string',
                  initialValue: '',
                  description: 'e.g., Proprietor of...',
                },
                {
                  name: 'description',
                  title: 'Bio/Description',
                  type: 'text',
                  rows: 6,
                  initialValue: '',
                },
                {
                  name: 'image',
                  title: 'Profile Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'linkedinUrl',
                  title: 'LinkedIn URL',
                  type: 'string',
                  initialValue: '',
                },
              ],
            },
          ],
          initialValue: [
            {
              name: 'Harshika Vora',
              title: 'Founder',
              qualifications: 'CPA(US) Exam Qualified | FCA (India) | B.Com',
              otherInfo: 'Proprietor – Harshika & Co.',
              description: 'TaxArc Global is founded and led by a Chartered Accountant (India) and US CPA Exam Qualified professional with nearly 9 years of experience across Indian and US taxation, accounting, audit, and compliance.\n\nHer professional foundation was built within a decades-old family CA practice — an environment where compliance discipline, client confidentiality, and uncompromising attention to detail were never optional. That culture of rigor and accountability is what TaxArc Global is built on.\n\nOver the past years, she has worked directly with US CPA firms on individual and business tax preparation, bookkeeping, accounting, and audit engagements — gaining hands-on familiarity with US firm workflows, review standards, and the software environments her clients rely on.\n\nThis enables TaxArc Global to function as a seamless offshore extension of your in-house team, not just a vendor.',
              linkedinUrl: 'https://www.linkedin.com/in/harshika-vora-ca-cpa-7541a9154/',
            },
            {
              name: 'Hemant R. Vora',
              title: 'Strategic Advisor',
              qualifications: 'FCA (India), Inter CS, LL.B, B.Com',
              otherInfo: 'Proprietor – Hemant R. Vora & Co. (Est. 1981)',
              description: 'TaxArc Global\'s strategic strength is anchored in the mentorship and guidance of CA Hemant R. Vora — a respected Chartered Accountant with over 45 years of professional experience in compliance, advisory, and practice leadership. As the Founder of Hemant R. Vora & Co., established in 1981, he has built a reputation rooted in technical precision, ethical governance, and enduring client trust across diverse industries.\n\nAs Strategic Advisor, he provides TaxArc Global with seasoned judgment, structured thinking, and governance-driven direction. His influence ensures that the firm\'s growth is aligned with strong quality control frameworks, discipline, and uncompromising professional standards. With a multidisciplinary academic foundation, he brings an integrated financial, legal, and regulatory perspective that strengthens decision-making at every level.\n\nBeyond strategy, his mentorship shapes the firm\'s culture. He instills the values of integrity, accountability, and long-term client stewardship—principles that define TaxArc Global\'s approach to serving international partners. His presence adds institutional maturity, reinforces credibility, and ensures that the firm evolves with stability, clarity, and professional conviction.',
              linkedinUrl: '',
            },
          ],
        },
      ],
    },

    // Vision & Mission Section
    {
      name: 'visionMissionSection',
      title: 'Vision & Mission Section',
      type: 'object',
      fields: [
        {
          name: 'vision',
          title: 'Vision',
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Vision Heading',
              type: 'string',
              initialValue: 'Vision',
            },
            {
              name: 'description',
              title: 'Vision Description',
              type: 'text',
              rows: 4,
              initialValue: 'To be a globally trusted professional services partner, recognized for excellence in tax, accounting and bookkeeping operations, precision-driven execution, and uncompromising data security.',
            },
          ],
        },
        {
          name: 'mission',
          title: 'Mission',
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Mission Heading',
              type: 'string',
              initialValue: 'Mission',
            },
            {
              name: 'description',
              title: 'Mission Description',
              type: 'text',
              rows: 4,
              initialValue: 'To deliver reliable, high-quality outsourced accounting and tax support, powered by qualified professionals, structured processes, intelligent technology and strict confidentiality.',
            },
          ],
        },
      ],
    },

    // Infrastructure Section
    {
      name: 'infrastructureSection',
      title: 'IT Infrastructure & Security Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Our IT Infrastructure & Security Measures',
        },
        {
          name: 'items',
          title: 'Infrastructure Items',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'infrastructureItem',
              title: 'Infrastructure Item',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                  description: 'Lucide icon names: Cpu, Key, MonitorCheck, UsbIcon, Building, PrinterX, SlidersHorizontal, Network, Database, ShieldAlert, HardDriveDownload, Lock, Shield, Eye, etc.',
                  initialValue: '',
                },
                {
                  name: 'title',
                  title: 'Item Title',
                  type: 'string',
                  initialValue: '',
                },
              ],
            },
          ],
          initialValue: [
            { icon: 'Cpu', title: 'Latest configuration devices' },
            { icon: 'Key', title: 'Licensed support software' },
            { icon: 'MonitorCheck', title: 'Secured workstations' },
            { icon: 'UsbIcon', title: 'No external devices' },
            { icon: 'Building', title: '100% on-site operations' },
            { icon: 'PrinterX', title: 'Printing restrictions' },
            { icon: 'SlidersHorizontal', title: 'Centralized control' },
            { icon: 'Network', title: 'Multiple LAN networks' },
            { icon: 'Database', title: 'Functional access to data' },
            { icon: 'ShieldAlert', title: 'Harmful website monitoring' },
            { icon: 'HardDriveDownload', title: 'Automated Backups' },
          ],
        },
      ],
    },

    // FAQs Section
    {
      name: 'faqSection',
      title: 'FAQs Section',
      type: 'object',
      fields: [
        {
          name: 'faqs',
          title: 'Frequently Asked Questions',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'faq',
              title: 'FAQ Item',
              fields: [
                {
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                  initialValue: '',
                },
                {
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                  rows: 4,
                  initialValue: '',
                },
              ],
            },
          ],
          initialValue: [
            {
              question: 'What services do you offer?',
              answer: 'We offer comprehensive Tax Preparation, Accounting & Bookkeeping and Payroll Services for CPA firms and businesses. Our services include financial statement preparation, tax compliance, payroll processing, and customized accounting solutions.',
            },
            {
              question: 'How do you ensure data security?',
              answer: 'We implement enterprise-level security measures including encrypted data transmission, secure servers, restricted access controls, and regular security audits. All our systems comply with industry-standard security protocols to protect your sensitive financial information.',
            },
            {
              question: 'What is your typical turnaround time?',
              answer: 'Our turnaround times vary depending on the service and complexity. Generally, we deliver bookkeeping services within 2-3 business days, tax returns within 3-5 business days, and payroll processing within 24 hours. We can accommodate rush requests when needed.',
            },
            {
              question: 'Do you work with international clients?',
              answer: 'Yes, we work with CPA firms and businesses across the globe. Our systems and processes are designed to work seamlessly across different time zones, ensuring consistent communication and timely delivery regardless of your location.',
            },
            {
              question: 'What software platforms do you support?',
              answer: 'We support a wide range of leading accounting and financial platforms including Drake Software, Wave, Xero, TaxAct, QuickBooks, Intuit ProConnect, Cash App, Gusto, ADP, Intuit Lacerte, and CCH Axcess—ensuring seamless integration with the tools you already use.',
            },
            {
              question: 'How do I get started?',
              answer: 'Getting started is simple! Fill out the contact form, send us an email or give us a call. We will schedule a consultation to understand your needs and provide a customized solution with transparent and fair pricing.',
            },
          ],
        },
      ],
    },

    // Workflow Process Section
    {
      name: 'workflowSection',
      title: 'Workflow Process Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Our Workflow Process',
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 4,
          initialValue: 'Our workflow is meticulously designed to ensure every tax and accounting task is handled with absolute clarity. From initial data gathering to the final review, our cyclical process keeps you informed and maintains uncompromising quality at every step.',
        },
        {
          name: 'workflows',
          title: 'Workflow Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'workflowStep',
              title: 'Workflow Step',
              fields: [
                {
                  name: 'title',
                  title: 'Step Title',
                  type: 'string',
                  initialValue: '',
                },
                {
                  name: 'description',
                  title: 'Step Description',
                  type: 'text',
                  rows: 3,
                  initialValue: '',
                },
              ],
            },
          ],
          initialValue: [
            {
              title: 'Client Onboarding',
              description: 'Establishing secure access and gathering essential requirements.',
            },
            {
              title: 'Data Sharing',
              description: 'Securely transferring documents and collecting all necessary information.',
            },
            {
              title: 'Preparation',
              description: 'Experienced tax and accounting professionals prepare returns and financial reports.',
            },
            {
              title: 'Internal Review',
              description: 'A multi-level quality assurance process designed to ensure accuracy and reliability.',
            },
            {
              title: 'Final Delivery',
              description: 'Timely delivery of review-ready work, ensuring all deadlines are met.',
            },
          ],
        },
      ],
    },
  ],
}
