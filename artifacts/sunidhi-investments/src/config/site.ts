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
  metaTitle: string;
  metaDescription: string;
  description: string;
  pageIntro: string;
  whoFor: string[];
  problems: string[];
  howWeHelp: string[];
  considerations: string[];
  process: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedSlugs: string[];
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
      '401-B Kalindi Square',
      'Near Lotus Show',
      'AB Road',
      'Indore 452010',
      'Madhya Pradesh, India',
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
      metaTitle: 'Mutual Fund Advisor in Indore | Sunidhi Investments',
      metaDescription:
        'Goal-oriented mutual fund advisory in Indore with guidance based on time horizon, risk profile, diversification and family financial goals.',
      description:
        'Goal-oriented mutual fund guidance based on time horizon and risk profile.',
      pageIntro:
        'Mutual fund decisions work best when they are connected to real goals, time horizon, liquidity needs and risk comfort. Sunidhi Investments helps families in Indore review mutual fund choices with context and care.',
      whoFor: [
        'Families starting goal-based investments',
        'Investors reviewing existing mutual fund holdings',
        'People planning education, retirement or long-term milestones',
      ],
      problems: [
        'Too many fund options and confusing categories',
        'Portfolios that no longer match the original goal',
        'Unclear risk exposure across schemes',
      ],
      howWeHelp: [
        'Understand your goals, time horizon and risk profile before discussing options',
        'Review existing holdings for overlap, diversification and alignment',
        'Support periodic conversations so decisions remain purposeful',
      ],
      considerations: [
        'Mutual fund investments are subject to market risks',
        'Past performance does not guarantee future results',
        'Asset allocation should reflect your own needs and comfort with volatility',
      ],
      process: [
        'Goal and risk discussion',
        'Current portfolio review where applicable',
        'Option comparison and suitability conversation',
        'Follow-up review as life or market conditions change',
      ],
      faqs: [
        {
          question: 'How does mutual fund advisory begin?',
          answer:
            'It begins with a discussion about goals, time horizon, existing investments and risk comfort before any fund conversation.',
        },
        {
          question: 'Do you promise returns from mutual funds?',
          answer:
            'No. Mutual funds are market-linked and returns are not guaranteed. Guidance focuses on suitability, diversification and review.',
        },
      ],
      relatedSlugs: ['sip-planning', 'portfolio-management', 'wealth-management'],
      icon: LineChart,
      seoSummary:
        'Goal-oriented mutual fund guidance based on time horizon and risk profile.',
      ctaLabel: 'Discuss mutual funds',
    },
    {
      slug: 'sip-planning',
      title: contactServiceTitles[1],
      metaTitle: 'SIP Planning in Indore | Sunidhi Investments',
      metaDescription:
        'Structured SIP planning in Indore for disciplined long-term investing toward education, retirement and family financial goals.',
      description:
        'Structured systematic investment planning for disciplined long-term investing.',
      pageIntro:
        'SIP planning helps turn long-term goals into a disciplined monthly investment habit. Sunidhi Investments helps you think through amount, time horizon and review discipline.',
      whoFor: [
        'First-time investors who want to start systematically',
        'Families planning education or retirement goals',
        'Investors who prefer disciplined monthly investing',
      ],
      problems: [
        'Starting without clarity on goal or time horizon',
        'Stopping SIPs during volatility without a review conversation',
        'Choosing amounts that do not match future needs',
      ],
      howWeHelp: [
        'Connect SIP planning to a specific goal where possible',
        'Discuss suitable time horizon and risk comfort',
        'Review SIPs periodically as income and priorities change',
      ],
      considerations: [
        'SIPs do not remove market risk',
        'Investment amount should fit cash flow comfortably',
        'Long-term discipline matters more than short-term noise',
      ],
      process: [
        'Goal and monthly cash-flow discussion',
        'Time horizon and risk assessment',
        'SIP amount and option conversation',
        'Periodic review and adjustment',
      ],
      faqs: [
        {
          question: 'Is SIP planning only for large investors?',
          answer:
            'No. SIP planning can be useful for many investors because it supports disciplined investing based on available monthly cash flow.',
        },
        {
          question: 'Can SIP returns be guaranteed?',
          answer:
            'No. SIPs invest in market-linked instruments, so returns are not guaranteed.',
        },
      ],
      relatedSlugs: ['mutual-fund-advisory', 'retirement-planning', 'tax-saving-investments'],
      icon: HandCoins,
      seoSummary:
        'Structured SIP planning for disciplined long-term investing.',
      ctaLabel: 'Plan an SIP',
    },
    {
      slug: 'portfolio-management',
      title: contactServiceTitles[2],
      metaTitle: 'Portfolio Management Guidance in Indore | Sunidhi Investments',
      metaDescription:
        'Portfolio management guidance in Indore for review, diversification, risk alignment and goal-based investment organization.',
      description:
        'Review, diversification and portfolio-alignment guidance.',
      pageIntro:
        'A portfolio can drift over time as goals, markets and family priorities change. Sunidhi Investments helps review holdings and bring investment decisions back to purpose.',
      whoFor: [
        'Investors with multiple schemes or investment accounts',
        'Families unsure if current holdings match goals',
        'People who want periodic review conversations',
      ],
      problems: [
        'Overlapping holdings across similar categories',
        'Risk levels that no longer match the goal',
        'Lack of review after major life changes',
      ],
      howWeHelp: [
        'Review the current portfolio in relation to goals',
        'Discuss diversification, concentration and liquidity',
        'Support alignment conversations without return promises',
      ],
      considerations: [
        'Portfolio changes should be based on purpose, not panic',
        'Tax and exit implications may apply and should be considered',
        'Review frequency should be practical and not excessive',
      ],
      process: [
        'Collect current investment details',
        'Map holdings to goals and time horizon',
        'Discuss alignment and possible next steps',
        'Set a sensible review rhythm',
      ],
      faqs: [
        {
          question: 'Why review a portfolio?',
          answer:
            'A review helps identify whether holdings still match goals, time horizon, risk comfort and diversification needs.',
        },
      ],
      relatedSlugs: ['mutual-fund-advisory', 'wealth-management', 'tax-saving-investments'],
      icon: PieChart,
      seoSummary:
        'Portfolio review, diversification and alignment guidance.',
      ctaLabel: 'Review a portfolio',
    },
    {
      slug: 'wealth-management',
      title: contactServiceTitles[3],
      metaTitle: 'Wealth Management in Indore | Sunidhi Investments',
      metaDescription:
        'Wealth management guidance in Indore for coordinated long-term planning across investment, protection, liquidity and family goals.',
      description:
        'Coordinated long-term financial planning across major goals.',
      pageIntro:
        'Wealth management is about coordinating major financial decisions instead of treating each product separately. Sunidhi Investments helps families connect investments, protection and future goals.',
      whoFor: [
        'Families with multiple financial priorities',
        'Professionals planning long-term milestones',
        'Investors who want coordinated financial conversations',
      ],
      problems: [
        'Disconnected decisions across investments, insurance and loans',
        'Unclear priority between short-term and long-term goals',
        'Lack of protection planning alongside investment planning',
      ],
      howWeHelp: [
        'Create a coordinated view of financial goals',
        'Discuss investments, protection and liquidity together',
        'Keep communication clear and practical',
      ],
      considerations: [
        'Wealth planning should be reviewed as life changes',
        'Protection and liquidity are important alongside growth goals',
        'No single product solves every financial need',
      ],
      process: [
        'Family goal discovery',
        'Investment and protection review',
        'Priority setting and planning discussion',
        'Ongoing review conversations',
      ],
      faqs: [
        {
          question: 'What does wealth management include?',
          answer:
            'It includes coordinated planning conversations across investments, protection, liquidity, retirement and other major family goals.',
        },
      ],
      relatedSlugs: ['portfolio-management', 'retirement-planning', 'mutual-fund-advisory'],
      icon: WalletCards,
      seoSummary:
        'Coordinated wealth management across long-term family goals.',
      ctaLabel: 'Discuss wealth goals',
    },
    {
      slug: 'retirement-planning',
      title: contactServiceTitles[4],
      metaTitle: 'Retirement Planning in Indore | Sunidhi Investments',
      metaDescription:
        'Retirement planning in Indore for corpus planning, future cash-flow needs, healthcare considerations and long-term financial independence.',
      description:
        'Planning for retirement corpus, cash-flow needs and long-term financial independence.',
      pageIntro:
        'Retirement planning needs a careful view of future income, expenses, healthcare and family responsibilities. Sunidhi Investments helps you prepare with structured conversations.',
      whoFor: [
        'Professionals planning for future retirement income',
        'Families reviewing retirement readiness',
        'People balancing current responsibilities with future independence',
      ],
      problems: [
        'Unclear retirement corpus requirement',
        'Ignoring healthcare and inflation considerations',
        'Starting late or investing without a retirement goal',
      ],
      howWeHelp: [
        'Discuss retirement lifestyle, expenses and time horizon',
        'Review current savings and investment direction',
        'Support disciplined planning and periodic review',
      ],
      considerations: [
        'Inflation and healthcare needs should be considered',
        'Retirement planning should avoid unrealistic return assumptions',
        'Cash-flow needs may change over time',
      ],
      process: [
        'Retirement goal discussion',
        'Current corpus and savings review',
        'Planning options and gap conversation',
        'Periodic retirement readiness review',
      ],
      faqs: [
        {
          question: 'When should retirement planning start?',
          answer:
            'Earlier planning gives more time for disciplined investing, but a review can be useful at any stage.',
        },
      ],
      relatedSlugs: ['sip-planning', 'wealth-management', 'mediclaim-health-insurance'],
      icon: PiggyBank,
      seoSummary:
        'Retirement planning for corpus, cash-flow needs and long-term independence.',
      ctaLabel: 'Plan retirement',
    },
    {
      slug: 'tax-saving-investments',
      title: contactServiceTitles[5],
      metaTitle: 'Tax Saving Investment Guidance in Indore | Sunidhi Investments',
      metaDescription:
        'Tax-saving investment guidance in Indore aligned with applicable options, broader goals and responsible financial planning.',
      description:
        'Tax-efficient financial planning aligned with applicable investment options, without promising tax outcomes.',
      pageIntro:
        'Tax-saving investments should fit your wider financial plan, not only a last-minute deduction target. Sunidhi Investments helps discuss applicable options responsibly.',
      whoFor: [
        'Individuals reviewing tax-saving investment options',
        'Families wanting tax-aware financial planning',
        'Investors balancing tax saving with long-term goals',
      ],
      problems: [
        'Last-minute tax-saving decisions without suitability checks',
        'Products chosen only for deduction without understanding lock-in or risk',
        'Tax planning disconnected from long-term goals',
      ],
      howWeHelp: [
        'Discuss tax-saving options in the context of your goals',
        'Explain broad considerations such as lock-in, liquidity and risk',
        'Encourage timely planning and documentation review',
      ],
      considerations: [
        'Tax outcomes depend on applicable law and individual circumstances',
        'Consult a tax professional for personal tax advice where needed',
        'Investment suitability should not be ignored for tax benefit alone',
      ],
      process: [
        'Understand income, goals and time horizon',
        'Discuss applicable tax-saving investment categories',
        'Compare fit, liquidity and risk',
        'Review annually as rules and needs change',
      ],
      faqs: [
        {
          question: 'Do you promise tax savings?',
          answer:
            'No. Tax treatment depends on applicable law and personal circumstances. Guidance is aligned with available options and broader planning needs.',
        },
      ],
      relatedSlugs: ['sip-planning', 'mutual-fund-advisory', 'portfolio-management'],
      icon: FileText,
      seoSummary:
        'Tax-efficient planning aligned with applicable investment options without promised tax outcomes.',
      ctaLabel: 'Explore tax saving',
    },
    {
      slug: 'mediclaim-health-insurance',
      title: contactServiceTitles[6],
      metaTitle: 'Mediclaim & Health Insurance Guidance in Indore',
      metaDescription:
        'Mediclaim and health insurance guidance in Indore for coverage needs, family requirements, exclusions, waiting periods and renewal considerations.',
      description:
        'Help clients understand health insurance and Mediclaim requirements, coverage considerations and appropriate protection.',
      pageIntro:
        'Health insurance and Mediclaim decisions need careful attention to family needs, coverage, exclusions, waiting periods and renewals. Sunidhi Investments helps clients understand these considerations.',
      whoFor: [
        'Families reviewing Mediclaim or health insurance needs',
        'Individuals comparing health cover options',
        'People who want to understand policy terms before choosing',
      ],
      problems: [
        'Not understanding exclusions and waiting periods',
        'Choosing cover without considering family medical needs',
        'Missing renewal, portability or documentation considerations',
      ],
      howWeHelp: [
        'Explain coverage considerations in simple language',
        'Discuss family requirements and affordability',
        'Help compare policy features without claiming to be the insurer',
      ],
      considerations: [
        'Coverage, exclusions, eligibility and claims are governed by insurer and policy terms',
        'Claim settlement cannot be promised by an advisor',
        'Renewal and waiting-period details should be reviewed carefully',
      ],
      process: [
        'Understand family and health cover requirements',
        'Discuss sum insured and coverage considerations',
        'Review exclusions, waiting periods and renewal points',
        'Support documentation and policy understanding',
      ],
      faqs: [
        {
          question: 'Is Sunidhi Investments the insurer?',
          answer:
            'No. Sunidhi Investments provides guidance. Coverage, eligibility and claims are governed by the insurer and policy terms.',
        },
        {
          question: 'Can claim settlement be guaranteed?',
          answer:
            'No. Claim decisions are governed by insurer and policy terms, documentation and eligibility.',
        },
      ],
      relatedSlugs: ['retirement-planning', 'wealth-management', 'loan-assistance'],
      icon: HeartPulse,
      seoSummary:
        'Mediclaim and health insurance guidance for coverage needs and protection planning.',
      ctaLabel: 'Discuss health cover',
    },
    {
      slug: 'loan-assistance',
      title: contactServiceTitles[7],
      metaTitle: 'Loan Assistance in Indore | Sunidhi Investments',
      metaDescription:
        'Loan assistance in Indore for understanding loan options, eligibility preparation, documentation and application support without promising approval.',
      description:
        'Guidance through loan options, documentation and the application process, without implying guaranteed loan sanction.',
      pageIntro:
        'Loan decisions involve eligibility, documentation, affordability and lender policies. Sunidhi Investments helps clients prepare and understand the process clearly.',
      whoFor: [
        'Individuals comparing loan options',
        'Families preparing documentation for a loan application',
        'Borrowers who want clarity before applying',
      ],
      problems: [
        'Unclear eligibility and documentation requirements',
        'Comparing loan options only by one headline number',
        'Assuming approval before lender assessment',
      ],
      howWeHelp: [
        'Explain application steps and documentation needs',
        'Discuss broad eligibility and affordability considerations',
        'Support preparation while keeping expectations realistic',
      ],
      considerations: [
        'Loan approval, eligibility and interest rates are determined by the respective lender',
        'Documentation requirements vary by lender and loan type',
        'Assistance does not guarantee loan sanction',
      ],
      process: [
        'Understand loan purpose and basic profile',
        'Discuss documentation and lender process',
        'Help organize application readiness',
        'Support next-step communication where appropriate',
      ],
      faqs: [
        {
          question: 'Does loan assistance guarantee approval?',
          answer:
            'No. Final loan approval, eligibility and interest rates are determined by the respective lender.',
        },
      ],
      relatedSlugs: ['wealth-management', 'tax-saving-investments', 'mediclaim-health-insurance'],
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
