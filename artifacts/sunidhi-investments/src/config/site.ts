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
import { contactServiceTitles, type ContactService } from '@workspace/api-zod/contact';

export type SiteService = {
  slug: string;
  title: ContactService;
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
    recipient: 'Smita Tapadia',
    full: 'Smita Tapadia, 401-B Kalindi Square Near Lotus Show, AB Road, Indore 452010',
    lines: [
      'Smita Tapadia',
      '401-B Kalindi Square Near Lotus Show',
      'AB Road, Indore 452010',
    ],
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
    advisorProfile: {
      name: 'Smita Tapadia',
      photo: '/smita-tapadia-portrait.png',
      roles: [
        'Life and Health Insurance Expert',
        'Child Education & Retirement Planning Expert',
      ],
      profileStatement:
        'Helping 1900+ Families Secure Their Financial Future',
    },
  },
  metadata: {
    title: 'Sunidhi Investments | Smita Tapadia',
    description:
      'Sunidhi Investments, led by Smita Tapadia in Indore, offers mutual fund advisory, SIP planning, portfolio management, wealth management, retirement planning, tax saving investments, Mediclaim and health insurance guidance, and loan assistance.',
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
      title: contactServiceTitles[0],
      description:
        'Goal-oriented mutual fund guidance based on time horizon and risk profile.',
      icon: LineChart,
      seoSummary:
        'Goal-oriented mutual fund guidance based on time horizon and risk profile.',
      ctaLabel: 'Discuss mutual funds',
    },
    {
      slug: 'sip-planning',
      title: contactServiceTitles[1],
      description:
        'Structured systematic investment planning for disciplined long-term investing.',
      icon: HandCoins,
      seoSummary:
        'Structured SIP planning for disciplined long-term investing.',
      ctaLabel: 'Plan an SIP',
    },
    {
      slug: 'portfolio-management',
      title: contactServiceTitles[2],
      description:
        'Review, diversification and portfolio-alignment guidance.',
      icon: PieChart,
      seoSummary:
        'Portfolio review, diversification and alignment guidance.',
      ctaLabel: 'Review a portfolio',
    },
    {
      slug: 'wealth-management',
      title: contactServiceTitles[3],
      description:
        'Coordinated long-term financial planning across major goals.',
      icon: WalletCards,
      seoSummary:
        'Coordinated wealth management across long-term family goals.',
      ctaLabel: 'Discuss wealth goals',
    },
    {
      slug: 'retirement-planning',
      title: contactServiceTitles[4],
      description:
        'Planning for retirement corpus, cash-flow needs and long-term financial independence.',
      icon: PiggyBank,
      seoSummary:
        'Retirement planning for corpus, cash-flow needs and long-term independence.',
      ctaLabel: 'Plan retirement',
    },
    {
      slug: 'tax-saving-investments',
      title: contactServiceTitles[5],
      description:
        'Tax-efficient financial planning aligned with applicable investment options, without promising tax outcomes.',
      icon: FileText,
      seoSummary:
        'Tax-efficient planning aligned with applicable investment options without promised tax outcomes.',
      ctaLabel: 'Explore tax saving',
    },
    {
      slug: 'mediclaim-health-insurance',
      title: contactServiceTitles[6],
      description:
        'Help clients understand health insurance and Mediclaim requirements, coverage considerations and appropriate protection.',
      icon: HeartPulse,
      seoSummary:
        'Mediclaim and health insurance guidance for coverage needs and protection planning.',
      ctaLabel: 'Discuss health cover',
    },
    {
      slug: 'loan-assistance',
      title: contactServiceTitles[7],
      description:
        'Guidance through loan options, documentation and the application process, without implying guaranteed loan sanction.',
      icon: Landmark,
      seoSummary:
        'Loan assistance for understanding options, documentation and application steps without guaranteed sanction.',
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
  team: [],
} as const;
