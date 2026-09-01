# Sunidhi Investments Consultancy SEO Content Architecture

Date: 2026-09-01

## SERP Research Summary

Fresh web research for Indore financial-service searches showed repeated ranking patterns:

- Local NAP is visible on pages: phone, office address, email, WhatsApp/contact action.
- Strong competitors use service-specific pages for mutual funds, SIP, financial planning, retirement planning and insurance.
- Several ranking competitors display verified registrations such as AMFI ARN or IRDAI codes. Sunidhi should not display those until confirmed.
- Useful FAQs appear on commercial pages, especially SIP amount, portfolio review, retirement timing, health-insurance considerations and advisor-vs-distributor distinctions.
- Compliance language matters: competitors that look more trustworthy include market-risk disclaimers and avoid guaranteed-return copy.
- Local signals are practical: Indore/Madhya Pradesh address, advisor identity, testimonials, working hours where verified, and Google Business consistency.

Sources reviewed: Myfolios, Inbestors, ICI MFD LLP, Shri Investment, Artha Investment, FinCircle, Compass Capital and related Indore search results.

## Keyword Matrix

| Cluster | Keyword | Intent | Local intent | Competition observation | Target URL | Priority | Compliance status |
| ------- | ------- | ------ | ------------ | ----------------------- | ---------- | -------- | ----------------- |
| Umbrella | financial planning Indore | Commercial | High | Service pages and homepage intros commonly target planning language | / | P0 | VERIFIED SAFE |
| Umbrella | financial services Indore | Commercial | High | Broad service pages use this safely when services are real | / | P0 | VERIFIED SAFE |
| Mutual funds | mutual fund distributor Indore | Commercial | High | Competitors show AMFI ARN prominently | /services/mutual-fund-advisory | P0 | NEEDS BUSINESS VERIFICATION |
| Mutual funds | mutual fund consultant Indore | Commercial | High | Common user language; less precise than registration status | /services/mutual-fund-advisory | P0 | NEEDS BUSINESS VERIFICATION |
| Mutual funds | mutual fund investment Indore | Commercial | High | Pages explain goal, risk profile and process | /services/mutual-fund-advisory | P1 | VERIFIED SAFE |
| SIP | SIP planning Indore | Commercial | High | Strong fit for goal-based investing pages | /services/sip-planning | P0 | VERIFIED SAFE |
| SIP | SIP mutual fund Indore | Commercial | High | Competitors pair SIP with mutual fund guidance | /services/sip-planning | P1 | VERIFIED SAFE |
| Portfolio | portfolio review Indore | Commercial | Medium | Competitors use portfolio x-ray/review positioning | /services/portfolio-management | P1 | VERIFIED SAFE |
| Retirement | retirement planning Indore | Commercial | High | Common standalone service intent | /services/retirement-planning | P0 | VERIFIED SAFE |
| Education | child education planning Indore | Commercial | Medium | Good family-goal search intent | /services/child-education-planning | P1 | VERIFIED SAFE |
| Tax | tax saving investment Indore | Commercial | Medium | ELSS and 80C need current-year care | /services/tax-saving-investments | P1 | VERIFIED SAFE |
| Tax | ELSS investment Indore | Commercial | Medium | Use only with up-to-date tax context | /services/tax-saving-investments | P2 | NEEDS BUSINESS VERIFICATION |
| Insurance | term insurance consultant Indore | Commercial | High | Insurance pages should avoid settlement/issuance promises | /services/term-insurance | P1 | VERIFIED SAFE |
| Insurance | life insurance consultant Indore | Commercial | High | Good fit with supplied professional positioning | /services/term-insurance | P1 | VERIFIED SAFE |
| Insurance | health insurance consultant Indore | Commercial | High | FAQ should cover exclusions/waiting periods | /services/mediclaim-health-insurance | P1 | VERIFIED SAFE |
| Insurance | mediclaim consultant Indore | Commercial | High | Local health-insurance pages rank with practical contact CTAs | /services/mediclaim-health-insurance | P1 | VERIFIED SAFE |
| Wealth | wealth management Indore | Commercial | Medium | Often used by competitors, but can imply regulated advisory if overstated | /services/wealth-management | P1 | NEEDS BUSINESS VERIFICATION |
| Loans | loan assistance Indore | Transactional | Medium | Must avoid guaranteed approval | /services/loan-assistance | P2 | VERIFIED SAFE |
| Broad | investment advisor Indore | Commercial | High | Regulated terminology risk unless SEBI RIA verified | none | P3 | DO NOT USE UNTIL VERIFIED |
| Broad | SEBI registered investment advisor Indore | Commercial | High | Requires verified SEBI registration | none | P3 | DO NOT USE UNTIL VERIFIED |

## Final URL Architecture

/
├── #about
├── #services
├── #testimonials
├── #faqs
├── #contact
├── services/
│   ├── portfolio-management
│   ├── wealth-management
│   ├── term-insurance
│   ├── mediclaim-health-insurance
│   ├── personal-accident-insurance-claims-assistance
│   ├── mutual-fund-advisory
│   ├── sip-planning
│   ├── retirement-planning
│   ├── child-education-planning
│   ├── tax-saving-investments
│   ├── warehouse-other-general-insurance-solutions
│   └── loan-assistance
├── privacy-policy
└── terms-disclaimer

Homepage remains primary one-page UX. Service URLs are supporting SEO landing pages and are not promoted as a large multi-page navigation system.

## Content Roadmap

P0:
- Strengthen homepage around compliant umbrella intent: financial planning and investment services in Indore.
- Build/maintain Mutual Fund, SIP and Retirement pages with clear risk disclaimers.
- Verify AMFI/IRDAI/SEBI status before using registration-led terms.

P1:
- Add deeper child education, tax-saving, term insurance and health insurance FAQ depth.
- Add verified Google Business review link when available.
- Add opening hours and geo coordinates after owner confirmation.

P2:
- Create insight/article foundation for SIP amount planning, step-up SIP, retirement corpus, health insurance checklist and portfolio review.
- Consider calculators only with clear assumptions and no guaranteed-return framing.

P3:
- Build local authority through legitimate citations, professional profiles, financial-literacy content and local business presence.

## Google Business Profile Handoff

Owner/admin should confirm or update:

- Business verification status
- Public business name consistency
- Primary and secondary categories
- Address, phone, website and email
- Opening hours
- Business description
- Services list
- Logo, cover image, advisor photo and office photos
- Real Google review URL
- Review response process
- Q&A content

Website must match verified Google Business Profile NAP exactly.

## Search Console Handoff

Manual setup:

1. Add domain or URL-prefix property.
2. Verify ownership.
3. Submit `/sitemap.xml`.
4. Inspect `/` and each `/services/...` URL.
5. Request indexing only after final production deployment.
6. Review Page Indexing and Enhancements after crawl.
7. After impressions arrive, review queries containing Indore, mutual fund, SIP, retirement, insurance, investment and wealth.

## Blocked External Items

- Google Business Profile editing: blocked without authenticated owner access.
- Search Console data: blocked without verified property access.
- Exact geo coordinates: blocked until owner confirms coordinates.
- Opening hours: blocked until owner confirms hours.
- Registration claims: blocked until SEBI/AMFI/IRDAI or other official documentation is supplied.
- Review URL: blocked until verified Google Business Profile review URL is supplied.


