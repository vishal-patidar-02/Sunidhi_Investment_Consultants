import {
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  HandCoins,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  Linkedin,
  type LucideIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PieChart,
  PiggyBank,
  ShieldCheck,
  Target,
  Users,
  WalletCards,
} from 'lucide-react';

export type SiteService = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  seoSummary: string;
  ctaLabel: string;
};

export type VerifiedClaim = {
  label: string;
  value: string;
  source: 'professional-profile' | 'business-provided';
  enabled: boolean;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

const contact = {
  phone: {
    display: '+91 98930 91404',
    href: 'tel:+919893091404',
  },
  email: {
    primary: 'smita_tapadia@yahoo.com',
    alternative: 'smitatapadia.sic@gmail.com',
  },
  linkedIn: {
    label: 'linkedin.com/in/smitatapadia',
    href: 'https://linkedin.com/in/smitatapadia',
  },
  address: {
    full: '401-B Kalindi Square Near Lotus Show, AB Road, Indore 452010',
    mapsUrl: 'https://maps.app.goo.gl/AuATn6WkhiWj851w6?g_st=ac',
    shortLabel: 'Indore, Madhya Pradesh',
  },
  whatsapp: {
    href: 'https://wa.me/919893091404',
  },
} as const;

const contactLinks = [
  {
    label: 'Call',
    value: contact.phone.display,
    href: contact.phone.href,
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    value: contact.phone.display,
    href: contact.whatsapp.href,
    icon: MessageCircle,
    external: true,
  },
  {
    label: 'Primary email',
    value: contact.email.primary,
    href: `mailto:${contact.email.primary}`,
    icon: Mail,
  },
  {
    label: 'Visit',
    value: contact.address.full,
    href: contact.address.mapsUrl,
    icon: MapPin,
    external: true,
  },
] satisfies ContactLink[];

const socialLinks = [
  {
    label: 'WhatsApp',
    href: contact.whatsapp.href,
    icon: MessageCircle,
  },
  {
    label: 'Email',
    href: `mailto:${contact.email.primary}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: contact.linkedIn.href,
    icon: Linkedin,
  },
];

export const siteConfig = {
  business: {
    name: 'Sunidhi Investments',
    ownerName: 'Smita Tapadia',
    safeDescription:
      'Sunidhi Investments supports families with investment planning, insurance guidance, retirement preparation, child education planning, tax-saving investments, and loan-related planning conversations.',
    professionalPositioning:
      'Life and Health Insurance Expert | Child Education & Retirement Planning Expert | Helping 1900+ Families Secure Their Financial Future',
  },
  contact,
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact Us', href: '#contact' },
  ],
  services: [
    {
      slug: 'mutual-fund-advisory',
      title: 'Mutual Fund Advisory',
      description:
        'Guidance for fund selection and reviews aligned to goals, time horizon, and risk comfort.',
      icon: LineChart,
      seoSummary:
        'Mutual fund advisory guidance for goal-based family investment planning.',
      ctaLabel: 'Discuss mutual funds',
    },
    {
      slug: 'sip-planning',
      title: 'SIP Planning',
      description:
        'Disciplined monthly investment planning for education, retirement, and family milestones.',
      icon: HandCoins,
      seoSummary:
        'SIP planning support for disciplined long-term investment habits.',
      ctaLabel: 'Plan an SIP',
    },
    {
      slug: 'portfolio-management',
      title: 'Portfolio Management',
      description:
        'Organized portfolio tracking and rebalancing conversations to keep decisions purposeful.',
      icon: PieChart,
      seoSummary:
        'Portfolio management conversations for organized investment tracking and review.',
      ctaLabel: 'Review a portfolio',
    },
    {
      slug: 'wealth-management',
      title: 'Wealth Management',
      description:
        'A holistic view of investments, protection, liquidity, and long-term family priorities.',
      icon: WalletCards,
      seoSummary:
        'Wealth management guidance across investments, protection, and family priorities.',
      ctaLabel: 'Discuss wealth goals',
    },
    {
      slug: 'retirement-planning',
      title: 'Retirement Planning',
      description:
        'Structured planning for income, healthcare needs, and peace of mind after active work.',
      icon: PiggyBank,
      seoSummary:
        'Retirement planning support for future income and healthcare preparedness.',
      ctaLabel: 'Plan retirement',
    },
    {
      slug: 'tax-saving-investments',
      title: 'Tax Saving Investments',
      description:
        'Tax-aware investment options considered in the context of your broader financial plan.',
      icon: FileText,
      seoSummary:
        'Tax saving investment guidance considered alongside broader financial goals.',
      ctaLabel: 'Explore tax saving',
    },
    {
      slug: 'mediclaim-health-insurance',
      title: 'Mediclaim & Health Insurance',
      description:
        'Health cover guidance for individuals and families, with careful attention to needs.',
      icon: HeartPulse,
      seoSummary:
        'Mediclaim and health insurance guidance for individuals and families.',
      ctaLabel: 'Discuss health cover',
    },
    {
      slug: 'loan-assistance',
      title: 'Loan Assistance',
      description:
        'Practical support for understanding loan options, documents, and next steps.',
      icon: Landmark,
      seoSummary:
        'Loan assistance support for understanding options, documents, and next steps.',
      ctaLabel: 'Discuss a loan',
    },
  ] satisfies SiteService[],
  contactLinks,
  socialLinks,
  verifiedClaims: [
    {
      label: 'Families helped',
      value: '1900+',
      source: 'professional-profile',
      enabled: true,
    },
  ] satisfies VerifiedClaim[],
  trustPoints: [
    { title: 'Family-focused guidance', copy: 'Planning that starts with real life', icon: Users },
    { title: 'Insurance and protection lens', copy: 'Health and life priorities included', icon: ShieldCheck },
    { title: 'Education and retirement focus', copy: 'For important long-term milestones', icon: GraduationCap },
    { title: 'Clear conversations', copy: 'Simple, steady, jargon-light advice', icon: Target },
  ],
  whyChooseUs: [
    'Personalized goal-based planning',
    'Life and health insurance guidance',
    'Child education and retirement planning focus',
    'Transparent conversations before recommendations',
    'Service support across investments, insurance, and loans',
  ],
  stats: [
    { label: 'Families helped', value: '1900+', icon: Users, claimKey: 'Families helped' },
    { label: 'Planning areas', value: '8', icon: BriefcaseBusiness },
    { label: 'Primary office', value: 'Indore', icon: MapPin },
    { label: 'Advisor focus', value: 'Family-first', icon: Handshake },
  ],
} as const;
