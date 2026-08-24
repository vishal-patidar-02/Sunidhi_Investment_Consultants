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
import { contactServiceTitles } from '@workspace/api-zod/contact';

export type SiteService = {
  slug: string;
  title: string;
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
  selectable?: boolean;
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

export type Testimonial = {
  organizationName: string;
  logoText: string;
  personName: string;
  serviceTaken: string;
  feedback: string;
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
    mapsUrl: 'https://maps.app.goo.gl/EvfFWq1bEbsQ1DY27',
    shortLabel: 'Indore, Madhya Pradesh',
  },
  whatsapp: {
    href: 'https://wa.me/919893091404',
  },
  googleReviews: {
    href: 'https://www.google.com/search?q=Sunidhi+Investments+Smita+Tapadia+Indore+reviews',
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
    name: 'Sunidhi Investments Consultants',
    ownerName: 'Smita Tapadia',
    safeDescription:
      'Sunidhi Investments Consultants supports families and businesses with portfolio planning, wealth management, insurance guidance, retirement preparation, child education planning, tax-saving investments, general insurance solutions, and loan-related planning conversations.',
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
      qualifications: [
        'MBA in Finance from Devi Ahilya Vishwavidyalaya (DAVV), Indore',
        'Executive Programme in Marketing Strategy from IIM Lucknow',
      ],
    },
  },
  metadata: {
    title: 'Sunidhi Investments Consultants | Smita Tapadia',
    description:
      'Sunidhi Investments Consultants, led by Smita Tapadia in Indore, offers portfolio management, wealth management, insurance guidance, mutual fund advisory, retirement planning, child education planning, tax-saving investments, general insurance solutions, and loan assistance.',
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
      slug: 'portfolio-management',
      title: contactServiceTitles[0],
      metaTitle: 'Portfolio Management Guidance in Indore | Sunidhi Investments Consultants',
      metaDescription:
        'Portfolio management guidance in Indore for review, diversification, risk alignment and goal-based investment organization.',
      description:
        'Review, diversification and portfolio-alignment guidance for existing and new investments.',
      pageIntro:
        'A portfolio can drift over time as goals, markets and family priorities change. Sunidhi Investments Consultants helps review holdings and bring investment decisions back to purpose.',
      whoFor: ['Investors with multiple holdings', 'Families unsure if current investments match goals', 'People who want periodic review conversations'],
      problems: ['Overlapping holdings', 'Risk levels that no longer match the goal', 'Lack of review after major life changes'],
      howWeHelp: ['Review the current portfolio in relation to goals', 'Discuss diversification and liquidity', 'Support alignment conversations without return promises'],
      considerations: ['Portfolio changes should be based on purpose, not panic', 'Tax and exit implications may apply', 'Review frequency should remain practical'],
      process: ['Collect current investment details', 'Map holdings to goals', 'Discuss alignment and next steps', 'Set a sensible review rhythm'],
      faqs: [
        {
          question: 'Why review a portfolio?',
          answer:
            'A review helps identify whether holdings still match goals, time horizon, risk comfort and diversification needs.',
        },
      ],
      relatedSlugs: ['wealth-management', 'mutual-fund-advisory', 'tax-saving-investments'],
      icon: PieChart,
      seoSummary:
        'Portfolio review, diversification and alignment guidance.',
      ctaLabel: 'Review a portfolio',
    },
    {
      slug: 'wealth-management',
      title: contactServiceTitles[1],
      metaTitle: 'Wealth Management in Indore | Sunidhi Investments Consultants',
      metaDescription:
        'Wealth management guidance in Indore for coordinated long-term planning across investment, protection, liquidity and family goals.',
      description:
        'Coordinated long-term financial planning across investments, protection and major goals.',
      pageIntro:
        'Wealth management is about coordinating major financial decisions instead of treating each product separately. Sunidhi Investments Consultants helps families connect investments, protection and future goals.',
      whoFor: ['Families with multiple financial priorities', 'Professionals planning long-term milestones', 'Investors who want coordinated financial conversations'],
      problems: ['Disconnected decisions across investments, insurance and loans', 'Unclear priority between short-term and long-term goals', 'Lack of protection planning alongside investment planning'],
      howWeHelp: ['Create a coordinated view of financial goals', 'Discuss investments, protection and liquidity together', 'Keep communication clear and practical'],
      considerations: ['Wealth planning should be reviewed as life changes', 'Protection and liquidity are important alongside growth goals', 'No single product solves every financial need'],
      process: ['Family goal discovery', 'Investment and protection review', 'Priority setting and planning discussion', 'Ongoing review conversations'],
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
      slug: 'term-insurance',
      title: contactServiceTitles[2],
      metaTitle: 'Term Insurance Guidance in Indore | Sunidhi Investments Consultants',
      metaDescription:
        'Term insurance guidance in Indore for family protection, coverage needs, affordability and policy comparison discussions.',
      description:
        'Protection-focused term insurance guidance for family responsibilities and future security.',
      pageIntro:
        'Term insurance decisions should be connected to family income needs, liabilities, dependents and affordability. Sunidhi Investments Consultants helps clients understand protection choices clearly.',
      whoFor: ['Families with dependents', 'People with income responsibilities or loans', 'Clients reviewing life cover adequacy'],
      problems: ['Unclear coverage amount', 'Confusing policy comparisons', 'Protection planning left until late'],
      howWeHelp: ['Discuss family protection needs', 'Explain coverage and affordability considerations', 'Support policy comparison without promising insurer outcomes'],
      considerations: ['Eligibility and issuance depend on insurer underwriting', 'Policy terms should be reviewed carefully', 'Claims are governed by insurer and policy terms'],
      process: ['Protection need discussion', 'Coverage and affordability review', 'Policy feature comparison', 'Documentation support where appropriate'],
      faqs: [
        {
          question: 'Can term insurance issuance be guaranteed?',
          answer:
            'No. Issuance depends on insurer underwriting, documents, disclosures and policy terms.',
        },
      ],
      relatedSlugs: ['mediclaim-health-insurance', 'personal-accident-insurance-claims-assistance', 'wealth-management'],
      icon: ShieldCheck,
      seoSummary:
        'Term insurance guidance for family protection planning.',
      ctaLabel: 'Discuss term cover',
    },
    {
      slug: 'mediclaim-health-insurance',
      title: contactServiceTitles[3],
      metaTitle: 'Mediclaim & Health Insurance Guidance in Indore',
      metaDescription:
        'Mediclaim and health insurance guidance in Indore for coverage needs, family requirements, exclusions, waiting periods and renewal considerations.',
      description:
        'Health insurance and Mediclaim guidance for coverage needs and family protection.',
      pageIntro:
        'Health insurance and Mediclaim decisions need careful attention to family needs, coverage, exclusions, waiting periods and renewals. Sunidhi Investments Consultants helps clients understand these considerations.',
      whoFor: ['Families reviewing Mediclaim or health insurance needs', 'Individuals comparing health cover options', 'People who want to understand policy terms before choosing'],
      problems: ['Not understanding exclusions and waiting periods', 'Choosing cover without considering family medical needs', 'Missing renewal, portability or documentation considerations'],
      howWeHelp: ['Explain coverage considerations in simple language', 'Discuss family requirements and affordability', 'Help compare policy features without claiming to be the insurer'],
      considerations: ['Coverage, exclusions, eligibility and claims are governed by insurer and policy terms', 'Claim settlement cannot be promised by an advisor', 'Renewal and waiting-period details should be reviewed carefully'],
      process: ['Understand family and health cover requirements', 'Discuss sum insured and coverage considerations', 'Review exclusions, waiting periods and renewal points', 'Support documentation and policy understanding'],
      faqs: [
        {
          question: 'Can claim settlement be guaranteed?',
          answer:
            'No. Claim decisions are governed by insurer and policy terms, documentation and eligibility.',
        },
      ],
      relatedSlugs: ['term-insurance', 'personal-accident-insurance-claims-assistance', 'retirement-planning'],
      icon: HeartPulse,
      seoSummary:
        'Mediclaim and health insurance guidance for coverage needs and protection planning.',
      ctaLabel: 'Discuss health cover',
    },
    {
      slug: 'personal-accident-insurance-claims-assistance',
      title: contactServiceTitles[4],
      metaTitle: 'Personal Accident Insurance & Claims Assistance in Indore',
      metaDescription:
        'Personal accident insurance and claims assistance guidance in Indore for protection planning and documentation support.',
      description:
        'Accident cover guidance and claims documentation support, subject to insurer terms.',
      pageIntro:
        'Personal accident insurance can support financial protection after accidental injury or disability. Sunidhi Investments Consultants helps clients understand cover and organize claim-related documentation where applicable.',
      whoFor: ['Individuals seeking accident protection', 'Families reviewing protection gaps', 'Clients needing claim documentation guidance'],
      problems: ['Unclear policy benefits', 'Incomplete claim documentation', 'Assuming every claim is automatically payable'],
      howWeHelp: ['Explain broad cover considerations', 'Discuss documentation requirements', 'Support claim process understanding without promising settlement'],
      considerations: ['Claims are governed by insurer and policy terms', 'Documentation and eligibility matter', 'Settlement cannot be guaranteed'],
      process: ['Protection need discussion', 'Policy feature review', 'Documentation checklist', 'Claim process guidance'],
      faqs: [
        {
          question: 'Do you guarantee accident claim settlement?',
          answer:
            'No. Claims are decided by the insurer according to policy terms, documentation and eligibility.',
        },
      ],
      relatedSlugs: ['term-insurance', 'mediclaim-health-insurance', 'warehouse-other-general-insurance-solutions'],
      icon: Handshake,
      seoSummary:
        'Personal accident insurance and claims assistance guidance.',
      ctaLabel: 'Discuss accident cover',
    },
    {
      slug: 'mutual-fund-advisory',
      title: contactServiceTitles[5],
      metaTitle: 'Mutual Fund Advisor in Indore | Sunidhi Investments Consultants',
      metaDescription:
        'Goal-oriented mutual fund advisory in Indore with guidance based on time horizon, risk profile, diversification and family financial goals.',
      description:
        'Goal-oriented mutual fund guidance based on time horizon and risk profile.',
      pageIntro:
        'Mutual fund decisions work best when they are connected to real goals, time horizon, liquidity needs and risk comfort. Sunidhi Investments Consultants helps families in Indore review mutual fund choices with context and care.',
      whoFor: ['Families starting goal-based investments', 'Investors reviewing existing mutual fund holdings', 'People planning education, retirement or long-term milestones'],
      problems: ['Too many fund options and confusing categories', 'Portfolios that no longer match the original goal', 'Unclear risk exposure across schemes'],
      howWeHelp: ['Understand your goals, time horizon and risk profile before discussing options', 'Review existing holdings for overlap, diversification and alignment', 'Support periodic conversations so decisions remain purposeful'],
      considerations: ['Mutual fund investments are subject to market risks', 'Past performance does not guarantee future results', 'Asset allocation should reflect your own needs and comfort with volatility'],
      process: ['Goal and risk discussion', 'Current portfolio review where applicable', 'Option comparison and suitability conversation', 'Follow-up review as life or market conditions change'],
      faqs: [
        {
          question: 'Do you promise returns from mutual funds?',
          answer:
            'No. Mutual funds are market-linked and returns are not guaranteed. Guidance focuses on suitability, diversification and review.',
        },
      ],
      relatedSlugs: ['portfolio-management', 'retirement-planning', 'tax-saving-investments'],
      icon: LineChart,
      seoSummary:
        'Goal-oriented mutual fund guidance based on time horizon and risk profile.',
      ctaLabel: 'Discuss mutual funds',
    },
    {
      slug: 'retirement-planning',
      title: contactServiceTitles[6],
      metaTitle: 'Retirement Planning in Indore | Sunidhi Investments Consultants',
      metaDescription:
        'Retirement planning in Indore for corpus planning, future cash-flow needs, healthcare considerations and long-term financial independence.',
      description:
        'Planning for retirement corpus, cash-flow needs and long-term financial independence.',
      pageIntro:
        'Retirement planning needs a careful view of future income, expenses, healthcare and family responsibilities. Sunidhi Investments Consultants helps you prepare with structured conversations.',
      whoFor: ['Professionals planning for future retirement income', 'Families reviewing retirement readiness', 'People balancing current responsibilities with future independence'],
      problems: ['Unclear retirement corpus requirement', 'Ignoring healthcare and inflation considerations', 'Starting late or investing without a retirement goal'],
      howWeHelp: ['Discuss retirement lifestyle, expenses and time horizon', 'Review current savings and investment direction', 'Support disciplined planning and periodic review'],
      considerations: ['Inflation and healthcare needs should be considered', 'Retirement planning should avoid unrealistic return assumptions', 'Cash-flow needs may change over time'],
      process: ['Retirement goal discussion', 'Current corpus and savings review', 'Planning options and gap conversation', 'Periodic retirement readiness review'],
      faqs: [
        {
          question: 'When should retirement planning start?',
          answer:
            'Earlier planning gives more time for disciplined investing, but a review can be useful at any stage.',
        },
      ],
      relatedSlugs: ['mutual-fund-advisory', 'wealth-management', 'mediclaim-health-insurance'],
      icon: PiggyBank,
      seoSummary:
        'Retirement planning for corpus, cash-flow needs and long-term independence.',
      ctaLabel: 'Plan retirement',
    },
    {
      slug: 'child-education-planning',
      title: contactServiceTitles[7],
      metaTitle: 'Child Education Planning in Indore | Sunidhi Investments Consultants',
      metaDescription:
        'Child education planning in Indore for future education goals, disciplined investing and family financial preparation.',
      description:
        'Structured planning for education goals, timelines and family cash-flow readiness.',
      pageIntro:
        'Education planning can help families prepare for future fees, timelines and major milestones with disciplined financial conversations.',
      whoFor: ['Parents planning future education needs', 'Families balancing education and retirement goals', 'People wanting disciplined goal-based investing'],
      problems: ['Unclear future education target', 'Investments not linked to timelines', 'Late planning for large education expenses'],
      howWeHelp: ['Discuss education timelines and expected needs', 'Connect investing approach to goal horizon', 'Review progress as circumstances change'],
      considerations: ['Education costs can change over time', 'Market-linked investments carry risk', 'Planning should be reviewed periodically'],
      process: ['Goal and timeline discussion', 'Cash-flow review', 'Investment planning conversation', 'Periodic review'],
      faqs: [
        {
          question: 'Is child education planning only about one product?',
          answer:
            'No. It is a goal-based planning conversation across time horizon, cash flow and suitable options.',
        },
      ],
      relatedSlugs: ['mutual-fund-advisory', 'retirement-planning', 'wealth-management'],
      icon: GraduationCap,
      seoSummary:
        'Child education planning for future goals and disciplined preparation.',
      ctaLabel: 'Plan education',
    },
    {
      slug: 'tax-saving-investments',
      title: contactServiceTitles[8],
      metaTitle: 'Tax Saving Investment Guidance in Indore | Sunidhi Investments Consultants',
      metaDescription:
        'Tax-saving investment guidance in Indore aligned with applicable options, broader goals and responsible financial planning.',
      description:
        'Tax-efficient financial planning aligned with applicable investment options, without promising tax outcomes.',
      pageIntro:
        'Tax-saving investments should fit your wider financial plan, not only a last-minute deduction target. Sunidhi Investments Consultants helps discuss applicable options responsibly.',
      whoFor: ['Individuals reviewing tax-saving investment options', 'Families wanting tax-aware financial planning', 'Investors balancing tax saving with long-term goals'],
      problems: ['Last-minute tax-saving decisions without suitability checks', 'Products chosen only for deduction without understanding lock-in or risk', 'Tax planning disconnected from long-term goals'],
      howWeHelp: ['Discuss tax-saving options in the context of your goals', 'Explain broad considerations such as lock-in, liquidity and risk', 'Encourage timely planning and documentation review'],
      considerations: ['Tax outcomes depend on applicable law and individual circumstances', 'Consult a tax professional for personal tax advice where needed', 'Investment suitability should not be ignored for tax benefit alone'],
      process: ['Understand income, goals and time horizon', 'Discuss applicable tax-saving investment categories', 'Compare fit, liquidity and risk', 'Review annually as rules and needs change'],
      faqs: [
        {
          question: 'Do you promise tax savings?',
          answer:
            'No. Tax treatment depends on applicable law and personal circumstances. Guidance is aligned with available options and broader planning needs.',
        },
      ],
      relatedSlugs: ['mutual-fund-advisory', 'portfolio-management', 'retirement-planning'],
      icon: FileText,
      seoSummary:
        'Tax-efficient planning aligned with applicable investment options without promised tax outcomes.',
      ctaLabel: 'Explore tax saving',
    },
    {
      slug: 'warehouse-other-general-insurance-solutions',
      title: contactServiceTitles[9],
      metaTitle: 'Warehouse & General Insurance Solutions in Indore',
      metaDescription:
        'Warehouse and other general insurance guidance in Indore for risk protection, coverage considerations and documentation support.',
      description:
        'General insurance guidance for warehouse, business and other non-life protection needs.',
      pageIntro:
        'General insurance needs vary by asset, business activity and risk exposure. Sunidhi Investments Consultants helps clients understand broad coverage considerations and documentation needs.',
      whoFor: ['Business owners reviewing asset protection', 'Clients with warehouse or commercial insurance needs', 'People comparing general insurance options'],
      problems: ['Unclear coverage requirements', 'Missing documentation', 'Policy terms that are hard to compare'],
      howWeHelp: ['Discuss risk and asset protection needs', 'Explain coverage considerations', 'Support documentation and comparison conversations'],
      considerations: ['Coverage and claims depend on insurer and policy terms', 'Risk details must be disclosed accurately', 'Settlement cannot be guaranteed'],
      process: ['Risk and asset discussion', 'Coverage requirement review', 'Documentation preparation', 'Policy feature comparison'],
      faqs: [
        {
          question: 'Can general insurance claims be guaranteed?',
          answer:
            'No. Claims are governed by insurer assessment, policy terms, documentation and eligibility.',
        },
      ],
      relatedSlugs: ['personal-accident-insurance-claims-assistance', 'term-insurance', 'loan-assistance'],
      icon: BriefcaseBusiness,
      seoSummary:
        'Warehouse and general insurance guidance for risk protection needs.',
      ctaLabel: 'Discuss insurance',
    },
    {
      slug: 'loan-assistance',
      title: contactServiceTitles[10],
      metaTitle: 'Loan Assistance in Indore | Sunidhi Investments Consultants',
      metaDescription:
        'Loan assistance in Indore for understanding loan options, eligibility preparation, documentation and application support without promising approval.',
      description:
        'Guidance through loan options, documentation and the application process, without implying guaranteed loan sanction.',
      pageIntro:
        'Loan decisions involve eligibility, documentation, affordability and lender policies. Sunidhi Investments Consultants helps clients prepare and understand the process clearly.',
      whoFor: ['Individuals comparing loan options', 'Families preparing documentation for a loan application', 'Borrowers who want clarity before applying'],
      problems: ['Unclear eligibility and documentation requirements', 'Comparing loan options only by one headline number', 'Assuming approval before lender assessment'],
      howWeHelp: ['Explain application steps and documentation needs', 'Discuss broad eligibility and affordability considerations', 'Support preparation while keeping expectations realistic'],
      considerations: ['Loan approval, eligibility and interest rates are determined by the respective lender', 'Documentation requirements vary by lender and loan type', 'Assistance does not guarantee loan sanction'],
      process: ['Understand loan purpose and basic profile', 'Discuss documentation and lender process', 'Help organize application readiness', 'Support next-step communication where appropriate'],
      faqs: [
        {
          question: 'Does loan assistance guarantee approval?',
          answer:
            'No. Final loan approval, eligibility and interest rates are determined by the respective lender.',
        },
      ],
      relatedSlugs: ['wealth-management', 'tax-saving-investments', 'warehouse-other-general-insurance-solutions'],
      icon: Landmark,
      seoSummary:
        'Loan assistance for understanding options, documentation and application steps without guaranteed sanction.',
      ctaLabel: 'Discuss a loan',
    },
    {
      slug: 'explore-all-financial-services',
      title: 'Explore All Financial Services',
      metaTitle: 'Explore All Financial Services | Sunidhi Investments Consultants',
      metaDescription:
        'Speak with Sunidhi Investments Consultants about broader finance-related planning, investment, insurance, tax-saving and loan needs.',
      description:
        'Need something beyond these categories? Start a conversation about broader finance-related service needs.',
      pageIntro:
        'Sunidhi Investments Consultants supports a broad range of finance-related conversations. If your need does not fit one card, use this option to start with context.',
      whoFor: ['Clients with broader finance-related questions', 'Families unsure which service fits', 'People seeking a starting point'],
      problems: ['Not knowing which category applies', 'Multiple financial needs at once', 'Needing a general consultation first'],
      howWeHelp: ['Understand your requirement first', 'Guide you to the relevant service area', 'Keep the first conversation practical and clear'],
      considerations: ['Specific outcomes depend on products, providers and eligibility', 'No guarantee of returns, approvals or claim settlements is implied', 'Some needs may require specialist third-party advice'],
      process: ['Share your requirement', 'Clarify the service area', 'Discuss possible next steps', 'Connect to the right support path'],
      faqs: [
        {
          question: 'What if my requirement is not listed?',
          answer:
            'Use this option to start a general conversation. Sunidhi Investments Consultants can help identify the relevant financial service area.',
        },
      ],
      relatedSlugs: ['wealth-management', 'portfolio-management', 'loan-assistance'],
      icon: Target,
      seoSummary:
        'A general starting point for broader finance-related service needs.',
      ctaLabel: 'Explore all services',
      selectable: false,
    },
  ] satisfies SiteService[],
  contactLinks,
  socialLinks,
  testimonials: [
    {
      organizationName: 'Placeholder Advisory Client',
      logoText: 'PA',
      personName: 'Client Name 1',
      serviceTaken: 'Portfolio Management',
      feedback:
        'Placeholder feedback: the consultation helped us review priorities clearly and understand the next steps with more confidence.',
    },
    {
      organizationName: 'Placeholder Family Office',
      logoText: 'PF',
      personName: 'Client Name 2',
      serviceTaken: 'Mediclaim & Health Insurance',
      feedback:
        'Placeholder feedback: the discussion made policy features, coverage needs and documentation points easier to understand.',
    },
    {
      organizationName: 'Placeholder Enterprise',
      logoText: 'PE',
      personName: 'Client Name 3',
      serviceTaken: 'Warehouse & Other General Insurance Solutions',
      feedback:
        'Placeholder feedback: the guidance was structured, practical and useful for comparing broader insurance requirements.',
    },
    {
      organizationName: 'Placeholder Wealth Client',
      logoText: 'PW',
      personName: 'Client Name 4',
      serviceTaken: 'Wealth Management',
      feedback:
        'Placeholder feedback: the conversation connected investment, protection and long-term goals in a simple way.',
    },
    {
      organizationName: 'Placeholder Education Planning Client',
      logoText: 'EC',
      personName: 'Client Name 5',
      serviceTaken: 'Child Education Planning',
      feedback:
        'Placeholder feedback: the planning discussion helped us think through timelines, cash flow and family goals.',
    },
  ] satisfies Testimonial[],
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
    'Service support across investments, insurance, general insurance, and loans',
  ],
  stats: [
    { label: 'Families helped', value: '1900+', icon: Users, claimKey: 'Families helped' },
    { label: 'Planning areas', value: '11+', icon: BriefcaseBusiness },
    { label: 'Since 2003', value: '23+ years', icon: MapPin },
    { label: 'Advisor focus', value: 'Family-first', icon: Handshake },
  ],
  team: [],
} as const;
