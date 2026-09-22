/**
 * Vicent Manila — Site content
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM) return;

  VM.data = {
    hero: {
      eyebrow: 'Management Consulting',
      headline: 'Management Consultant · Strategy · Partnerships · Research & Evaluation',
      summary: 'Management consultant working across strategy, partnerships, research and evaluation. His experience spans private and public sector programmes, field monitoring and evaluation, and national leadership roles in Tanzania and Rwanda.',
      location: 'Dar es Salaam · Tanzania · East Africa',
      proof: [
        'Management Consultant — INNOVEX Development Consulting Ltd',
        'Field M&E — Tanga Yetu Project Phase 2',
        'Former national leader — AIESEC in Tanzania & Rwanda',
      ],
    },

    about: {
      summary: 'Vicent Manila is a management consultant with experience in strategy, research and evaluation, partnership development and programme delivery. At INNOVEX Development Consulting Ltd, he supports field monitoring and evaluation for Tanga Yetu Project Phase 2. His earlier work spans youth livelihoods, national leadership, international business development and cross-border organizational support.',
      philosophy: 'Leadership is stewardship. Durable organizations are built when people have agency, partnerships create mutual value, and strategy becomes a system that can outlast any one leader.',
      mission: 'To help institutions and partnerships turn complex challenges into practical strategies, measurable programmes and stronger leadership systems.',

      expertise: [
        { title: 'Management & Strategy', desc: 'Organizational problem solving, strategy formulation and practical execution.', competencies: ['Management Consulting', 'Strategic Planning', 'Business Intelligence', 'Strategy Execution'] },
        { title: 'Research & Evaluation', desc: 'Field monitoring, programme evaluation and evidence-informed decision support.', competencies: ['Monitoring & Evaluation', 'Field M&E', 'Research', 'Performance Reporting'] },
        { title: 'Strategic Partnerships', desc: 'Business development, partner engagement and institutional relationship management.', competencies: ['Partnership Development', 'Proposal Development', 'Negotiation', 'Corporate Relations'] },
        { title: 'Programme & Project Leadership', desc: 'Programme coordination, stakeholder management and delivery across multi-stakeholder environments.', competencies: ['Programme Coordination', 'Stakeholder Management', 'Youth Livelihoods', 'Development Programmes'] },
        { title: 'Organizational Leadership', desc: 'National leadership, governance, accountability and team performance systems.', competencies: ['National Leadership', 'Governance', 'Team Leadership', 'Organizational Development'] },
        { title: 'International Collaboration', desc: 'Cross-border work across national entities, global committees and business development portfolios.', competencies: ['Tanzania', 'Rwanda', 'AIESEC International', 'Belarus Entity Support'] },
      ],

      international: [
        { country: 'Tanzania', role: 'Management consulting, field M&E, youth livelihoods and national organizational leadership' },
        { country: 'Rwanda', role: 'Member Committee President and Head of Business Development & Employer Branding, AIESEC in Rwanda' },
        { country: 'AIESEC International', role: 'International Legislative Meeting Subcommittee and Business Development Steering Team, Montreal-based global portfolio' },
        { country: 'Belarus', role: 'Remote entity-support role in product development sales' },
      ],

      education: {
        school: 'Institute of Finance Management (IFM)',
        location: 'Dar es Salaam, Tanzania',
        degree: 'Bachelor of Science in Social Protection',
        period: 'Oct 2019 – Nov 2022',
      },

      training: {
        title: 'Digital Lion Program',
        provider: 'Alibaba Global Initiatives & Africa\'s Business Heroes',
        completed: '17 July 2026',
        focus: 'Strategy formulation and implementation using Alibaba business practices',
        certificate: 'AGI2607170104',
      },

      research: {
        title: 'How Social Protection Systems Respond in Times of Crisis and Emergency',
        period: 'October 2020 – February 2021',
        summary: 'Undergraduate research examining social-protection responses during crisis, using the COVID-19 pandemic as its case study.',
      },

      languages: [
        { name: 'English', level: 'Fluent' },
        { name: 'Swahili', level: 'Fluent' },
      ],
    },

    /**
     * Career chronology — reverse-chronological.
     * Sources: LinkedIn profile (2026-08-30) and CV. Where the two disagree,
     * the conflict is recorded in documentation/CONTENT_NEEDS_VERIFICATION.md
     * and the entry is published at the coarser precision both support.
     */
    experience: [
      {
        period: 'Jul 2026 — Present', current: true,
        title: 'Management Consultant',
        organization: 'INNOVEX Development Consulting Ltd', country: 'Dar es Salaam, Tanzania',
        mandate: 'Supporting management consultancy, research and evaluation work across multi-sectoral programmes.',
        outcomes: [
          'Current assignment: Field Monitoring & Evaluation for Tanga Yetu Project Phase 2 in Tanga, Tanzania',
          'Supporting field-level M&E delivery as part of the project team',
        ],
        skills: ['Management Consulting', 'Research & Evaluation', 'Field M&E'],
      },
      {
        period: 'Sep 2025 — Jun 2026',
        title: 'Sustainable Livelihoods Coordinator',
        organization: 'Mo Dewji Foundation', country: 'Dar es Salaam, Tanzania',
        mandate: 'Supported youth entrepreneurship and livelihood interventions focused on employability and economic inclusion.',
        outcomes: [
          'Conducted market assessments to inform programme design',
          'Engaged private-sector and ecosystem partners',
          'Contributed to programme monitoring, reporting and evaluation',
        ],
        skills: ['Programme Coordination', 'Market Assessment', 'Monitoring & Evaluation'],
      },
      {
        period: 'Aug 2024 — Jul 2025',
        title: 'Country Director',
        organization: 'AIESEC in Tanzania', country: 'Dar es Salaam, Tanzania',
        mandate: 'Directed national strategy, partnerships, stakeholder platforms and organizational leadership.',
        outcomes: [
          'Directed 10+ managers and 300+ members across seven cities',
          'Led partnerships with Barrick Gold and Total Energies',
          'Directed leadership summits and stakeholder platforms with 500+ participants',
          'Initiated the East African Conference Cycle',
        ],
        skills: ['National Leadership', 'Partnership Development', 'Stakeholder Management'],
      },
      {
        period: 'Jul 2023 — Jul 2024',
        title: 'Member Committee President',
        organization: 'AIESEC in Rwanda', country: 'Kigali, Rwanda',
        mandate: 'Led national strategy implementation and organizational performance across local chapters.',
        outcomes: [
          'Managed 300+ members and alumni, five heads of department and three local chapters',
          'Designed national and regional conferences for 500+ delegates',
          'Strengthened monitoring, evaluation, reporting and accountability systems',
        ],
        skills: ['Organizational Leadership', 'Governance', 'Monitoring & Evaluation'],
      },
      {
        period: 'Jul 2023 — Jul 2024 · Concurrent',
        title: 'International Legislative Meeting Subcommittee',
        organization: 'AIESEC International', country: 'Montreal, Canada',
        mandate: 'Supported the global conference bidding and host-entity process during a one-year concurrent term.',
        outcomes: [
          'Managed bids, bid criteria and host-entity tracking for the AIESEC global conference',
        ],
        skills: ['International Operations', 'Bid Management', 'Stakeholder Coordination'],
      },
      {
        period: 'Jan 2023 — Jun 2023 · Concurrent',
        title: 'Business Development Steering Team',
        organization: 'AIESEC International', country: 'Montreal, Canada',
        mandate: 'Worked within the global business portfolio during a six-month concurrent term.',
        outcomes: [
          'Drove co-sales and advised Business Development Managers across 100+ countries',
        ],
        skills: ['Business Development', 'Co-sales', 'International Collaboration'],
      },
      {
        period: 'Jul 2022 — Jul 2023',
        title: 'Head of Business Development and Employer Branding',
        organization: 'AIESEC in Rwanda', country: 'Kigali, Rwanda',
        mandate: 'Led business development, employer branding, market research and client profiling.',
        outcomes: [
          'Secured 7+ high-value partnerships',
          'Signed two new national partners and closed five partnerships for Global Money Week',
          'Contributed to a 60% increase in internship placements',
          'Delivered capacity-building sessions',
        ],
        skills: ['Business Development', 'Employer Branding', 'Partnership Development'],
      },
      {
        period: 'Aug 2022 — Sep 2022',
        title: 'Sales Auditor',
        organization: 'Empower Limited', country: 'Dar es Salaam, Tanzania',
        mandate: 'Conducted field audits and performance assessments for sales teams.',
        outcomes: [
          'Prepared analytical reports and recommendations',
        ],
        skills: ['Sales Auditing', 'Performance Analysis'],
      },
      {
        period: 'Oct 2021 — Mar 2022 · Concurrent',
        title: 'Entity Support Team, PD Sales Executive',
        organization: 'AIESEC in Belarus', country: 'Remote',
        mandate: 'Supported national-level direction as part of an international entity-support portfolio.',
        outcomes: [],
        skills: ['Entity Support', 'Sales', 'Cross-border Collaboration'],
      },
      {
        period: 'Nov 2020 — Feb 2022',
        title: 'Local Chapter President',
        organization: 'AIESEC in IFM', country: 'Dar es Salaam, Tanzania',
        mandate: 'Led a local chapter across leadership development, community engagement and employer partnerships.',
        outcomes: [
          'Led 25+ members and five vice presidents across five departments',
          'Designed community engagement and employer partnership strategies',
          'Organized conferences and leadership events',
        ],
        skills: ['Leadership', 'Community Engagement', 'Employer Partnerships'],
      },
      {
        period: 'Aug 2020 — Dec 2020',
        title: 'National Supporting Team, Outgoing Exchange',
        organization: 'AIESEC in Tanzania', country: 'Dar es Salaam, Tanzania',
        mandate: 'Supported national strategic direction for the outgoing exchange portfolio.',
        outcomes: [],
        skills: ['National Support', 'Exchange Operations'],
      },
    ],

    projectCategories: {
      all: 'All Case Studies',
      'business-development': 'Business Development',
      leadership: 'Leadership',
      'employer-branding': 'Employer Branding',
      'youth-development': 'Youth Development',
      'international-conferences': 'International Operations',
    },

    projects: [
      {
        slug: 'leading-aiesec-rwanda',
        title: 'National Leadership — AIESEC in Rwanda',
        category: 'leadership',
        category_label: 'Leadership',
        badge: 'National Operations',
        year: '2023–2024',
        featured: true,
        summary: 'Led national strategy and organizational performance across three local chapters, working with 300+ members and alumni.',
        description: 'National leadership, governance and organizational performance across AIESEC in Rwanda.',
        image: 'assets/images/Vince/web/7.jpg',
        imagePosition: 'top',
        overview: 'As Member Committee President, Vicent led national strategy implementation and organizational performance across AIESEC in Rwanda. The role covered three local chapters, five heads of department and a network of more than 300 members and alumni.',
        challenge: 'The mandate required consistent national direction across multiple chapters while maintaining reporting, accountability and leadership development systems.',
        objectives: [
          'Coordinate national strategy across three local chapters',
          'Strengthen reporting, accountability and organizational performance',
          'Design national and regional leadership platforms',
        ],
        role: 'Member Committee President, AIESEC in Rwanda.',
        strategy: 'Aligned department heads and local chapters around national priorities. Monitoring, evaluation and reporting were used to strengthen accountability across the organization.',
        execution: 'Managed the national leadership structure, coordinated chapter performance and designed national and regional conferences.',
        results: [
          'Managed 300+ members and alumni',
          'Worked with five heads of department and three local chapters',
          'Designed national and regional conferences for 500+ delegates',
          'Strengthened monitoring, evaluation, reporting and accountability systems',
        ],
        impact: 'The role combined national governance, team leadership and performance management across a multi-chapter organization.',
        resources: [
          { label: 'AIESEC in Rwanda Annual Report 2023/24', href: 'assets/documents/aiesec-rwanda-annual-report-2023-24.pdf', type: 'Annual Report' },
          { label: 'Updated Consultant CV', href: 'assets/cv/vicent-manila-cv.pdf', type: 'CV' },
        ],
        gallery: [
          { src: 'assets/images/Vince/web/gallery/alumni-summit.jpg', alt: 'Vicent Manila at a leadership conference', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/team-3.jpg', alt: 'Leadership team recognition ceremony', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/team-1.jpg', alt: 'National leadership team collaboration', position: 'center' },
          { src: 'assets/images/Vince/web/3.jpg', alt: 'Executive portrait of Vicent Manila', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/event-8.jpg', alt: 'National leadership event', position: 'center' },
        ],
        related: ['global-money-week-partnerships', 'tanzania-national-partnerships'],
      },
      {
        slug: 'global-money-week-partnerships',
        title: 'Global Money Week Partnerships',
        category: 'business-development',
        category_label: 'Business Development',
        badge: 'Partnership Development',
        year: '2022–2023',
        featured: true,
        summary: 'Signed two new national partners and closed five partnerships for Global Money Week while leading business development in Rwanda.',
        description: 'Partnership development, market research and client engagement within AIESEC in Rwanda.',
        image: 'assets/images/Vince/web/gallery/event-11.jpg',
        imagePosition: 'top',
        overview: 'During his term as Head of Business Development and Employer Branding, Vicent led partnership development, market research and client profiling for AIESEC in Rwanda. Global Money Week was one of the partnership portfolios delivered during this period.',
        challenge: 'The business development portfolio needed a structured pipeline for identifying prospects, shaping partner conversations and converting opportunities into signed collaborations.',
        objectives: [
          'Develop and close national partnership opportunities',
          'Support Global Money Week through partner acquisition',
          'Use market research and client profiling to improve business development',
        ],
        role: 'Head of Business Development and Employer Branding, AIESEC in Rwanda.',
        strategy: 'Combined market research, client profiling and direct partnership development to focus outreach on relevant organizations.',
        execution: 'Led partner conversations, supported proposal development and delivered capacity-building sessions for the wider team.',
        results: [
          'Secured 7+ high-value partnerships',
          'Signed two new national partners',
          'Closed five partnerships for Global Money Week',
          'Contributed to a 60% increase in internship placements',
        ],
        impact: 'The work connected partner acquisition with employer branding and internship growth.',
        resources: [
          { label: 'AIESEC in Rwanda Annual Report 2022/23', href: 'assets/documents/aiesec-rwanda-annual-report-2022-23.pdf', type: 'Annual Report' },
          { label: 'Updated Consultant CV', href: 'assets/cv/vicent-manila-cv.pdf', type: 'CV' },
        ],
        gallery: [
          { src: 'assets/images/Vince/web/gallery/1.jpg', alt: 'Partnership engagement', position: 'center' },
          { src: 'assets/images/Vince/web/gallery/3.jpg', alt: 'Corporate partnership event', position: 'center' },
          { src: 'assets/images/Vince/web/gallery/event-9.jpg', alt: 'Campaign stakeholder convening', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/event-10.jpg', alt: 'Partnership presentation', position: 'center' },
          { src: 'assets/images/Vince/web/gallery/event-12.jpg', alt: 'National campaign delivery', position: 'center' },
        ],
        related: ['leading-aiesec-rwanda', 'employer-branding-rwanda'],
      },
      {
        slug: 'tanzania-national-partnerships',
        title: 'National Partnerships — Tanzania',
        category: 'business-development',
        category_label: 'Business Development',
        badge: 'National Partnerships',
        year: '2024–2025',
        featured: true,
        summary: 'Led national partnerships with organizations including Barrick Gold and Total Energies while directing AIESEC in Tanzania.',
        description: 'National partnership development and stakeholder engagement across a seven-city network.',
        image: 'assets/images/Vince/web/2.jpg',
        imagePosition: 'top',
        overview: 'As Country Director of AIESEC in Tanzania, Vicent directed a national team of more than 10 managers and 300 members across seven cities. His responsibilities included national partnerships, stakeholder platforms and external representation.',
        challenge: 'The role required national partnership work to move alongside day-to-day leadership of a distributed organization.',
        objectives: [
          'Develop national corporate and institutional partnerships',
          'Coordinate stakeholder platforms and leadership summits',
          'Maintain strategic direction across seven cities',
        ],
        role: 'Country Director, AIESEC in Tanzania.',
        strategy: 'Partnership development was connected to national programmes and stakeholder platforms so that partner engagement had a clear delivery context.',
        execution: 'Led senior stakeholder engagement, partnership development and national platforms while managing the national leadership team.',
        results: [
          'Led partnerships with Barrick Gold and Total Energies',
          'Directed stakeholder platforms and leadership summits with 500+ participants',
          'Directed 10+ managers and 300+ members across seven cities',
          'Initiated the East African Conference Cycle',
        ],
        impact: 'The portfolio brought partnership development, national leadership and large-scale stakeholder engagement into one operating mandate.',
        resources: [
          { label: 'AIESEC in Tanzania Annual Report 2024/25', href: 'assets/documents/aiesec-tanzania-annual-report-2024-25.pdf', type: 'Annual Report' },
          { label: 'Barrick Gold Programmes Partnership Proposal', href: 'assets/documents/barrick-gold-partnership-proposal.pdf', type: 'Partnership Proposal' },
          { label: 'Career Fair 2025 Programme Overview', href: 'assets/documents/career-fair-2025-overview.pdf', type: 'Programme Overview' },
          { label: 'Barrick Sponsors University Students Conference at UDOM', href: 'https://fullshangweblog.co.tz/2025/04/14/barrick-yadhamini-kongamano-la-wanafunzi-vyuo-vikuu-lililofanyika-chuo-kikuu-dodoma/', type: 'External Article' },
          { label: 'Career Fair — Mzumbe University', href: 'https://www.instagram.com/p/DJhe5fEigiy/?img_index=3&stkn=a3Y5bTdqZmY4Nm0z', type: 'Instagram Post' },
        ],
        gallery: [
          { src: 'assets/images/Vince/web/6.jpg', alt: 'Speaking at a national partnership event', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/4.jpg', alt: 'Corporate stakeholder engagement session', position: 'center' },
          { src: 'assets/images/Vince/web/5.jpg', alt: 'National leadership engagement', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/event-13.jpg', alt: 'National network engagement', position: 'center' },
        ],
        related: ['leading-aiesec-rwanda', 'global-money-week-partnerships'],
      },
      {
        slug: 'employer-branding-rwanda',
        title: 'Employer Branding & Business Development — Rwanda',
        category: 'employer-branding',
        category_label: 'Employer Branding',
        badge: 'Corporate Relations',
        year: '2022–2023',
        featured: false,
        summary: 'Combined employer branding, client profiling and partnership development within the national business development portfolio.',
        description: 'Employer branding and corporate relationship work for AIESEC in Rwanda.',
        image: 'assets/images/Vince/web/8.jpg',
        imagePosition: 'top',
        overview: 'Vicent led Business Development and Employer Branding for AIESEC in Rwanda from July 2022 to July 2023. The work included market research, client profiling, partnership development and team capacity building.',
        challenge: 'The portfolio needed to connect employer-facing positioning with a practical partnership pipeline and internship opportunities.',
        objectives: [
          'Strengthen employer-facing partnership work',
          'Improve market research and client profiling',
          'Build business development capability within the team',
        ],
        role: 'Head of Business Development and Employer Branding, AIESEC in Rwanda.',
        strategy: 'Used market research and client profiling to guide outreach, then connected partnership conversations to employer branding and internship opportunities.',
        execution: 'Led partnership development and delivered capacity-building sessions while managing the national business development portfolio.',
        results: [
          'Secured 7+ high-value partnerships',
          'Signed two new national partners',
          'Contributed to a 60% increase in internship placements',
        ],
        impact: 'Employer branding was treated as part of the broader business development process rather than as a standalone communications activity.',
        resources: [
          { label: 'AIESEC in Rwanda Annual Report 2022/23', href: 'assets/documents/aiesec-rwanda-annual-report-2022-23.pdf', type: 'Annual Report' },
          { label: 'Updated Consultant CV', href: 'assets/cv/vicent-manila-cv.pdf', type: 'CV' },
        ],
        gallery: [
          { src: 'assets/images/Vince/web/gallery/team-2.jpg', alt: 'Corporate partnership and employer branding engagement', position: 'center' },
          { src: 'assets/images/Vince/web/gallery/2.jpg', alt: 'Employer branding activation', position: 'center' },
          { src: 'assets/images/Vince/web/4.jpg', alt: 'Stakeholder workshop participation', position: 'left' },
        ],
        related: ['global-money-week-partnerships'],
      },
      {
        slug: 'ifm-chapter-growth',
        title: 'Local Chapter Leadership — AIESEC in IFM',
        category: 'youth-development',
        category_label: 'Youth Development',
        badge: 'Chapter Leadership',
        year: '2020–2022',
        featured: false,
        summary: 'Led 25+ members and five vice presidents across five departments while developing community and employer partnership strategies.',
        description: 'Local chapter leadership, community engagement and employer partnership development at IFM.',
        image: 'assets/images/Vince/web/9.jpg',
        imagePosition: 'top',
        overview: 'As Local Chapter President of AIESEC in IFM, Vicent led a team of more than 25 members and five vice presidents across five departments.',
        challenge: 'The chapter needed coordinated leadership across multiple departments while continuing community engagement and employer partnership work.',
        objectives: [
          'Coordinate the executive and wider chapter team',
          'Develop community engagement initiatives',
          'Build employer partnership activity',
        ],
        role: 'Local Chapter President, AIESEC in IFM.',
        strategy: 'Set shared direction across five departments and connected team leadership with community and employer engagement priorities.',
        execution: 'Managed the chapter leadership structure, developed engagement strategies and organized conferences and leadership events.',
        results: [
          'Led 25+ members and five vice presidents',
          'Coordinated five functional departments',
          'Designed community engagement and employer partnership strategies',
          'Organized conferences and leadership events',
        ],
        impact: 'The role provided early experience in organizational leadership, partnerships and event delivery.',
        resources: [
          { label: 'Updated Consultant CV', href: 'assets/cv/vicent-manila-cv.pdf', type: 'CV' },
        ],
        gallery: [
          { src: 'assets/images/Vince/web/4.jpg', alt: 'Chapter leadership workshop at IFM', position: 'left' },
          { src: 'assets/images/Vince/web/gallery/team-1.jpg', alt: 'Youth leadership team collaboration', position: 'center' },
          { src: 'assets/images/Vince/web/3.jpg', alt: 'Leadership portrait', position: 'top' },
        ],
        related: ['leading-aiesec-rwanda'],
      },
      {
        slug: 'international-conference-bids',
        title: 'International Conference Bid Management',
        category: 'international-conferences',
        category_label: 'International Operations',
        badge: 'Global Operations',
        year: '2023–2024',
        featured: false,
        summary: 'Managed bids, bid criteria and host-entity tracking for an AIESEC global conference during a one-year international subcommittee term.',
        description: 'International bid management and host-entity tracking for AIESEC International.',
        image: 'assets/images/Vince/web/1.jpg',
        imagePosition: 'top',
        overview: 'Alongside his Rwanda presidency, Vicent served on the AIESEC International Legislative Meeting Subcommittee from July 2023 to July 2024.',
        challenge: 'The assignment required structured handling of conference bids and host-entity information across an international network.',
        objectives: [
          'Manage conference bids and bid criteria',
          'Track host entities through the international process',
          'Support the global conference selection workflow',
        ],
        role: 'International Legislative Meeting Subcommittee, AIESEC International.',
        strategy: 'Applied a structured bid and host-tracking process within the subcommittee mandate.',
        execution: 'Managed bids, bid criteria and host-entity tracking during the one-year concurrent term.',
        results: [
          'Completed a one-year International Legislative Meeting Subcommittee term',
          'Managed conference bids, bid criteria and host-entity tracking',
        ],
        impact: 'The assignment added international governance and bid-management experience to a concurrent national leadership role.',
        resources: [
          { label: 'Updated Consultant CV', href: 'assets/cv/vicent-manila-cv.pdf', type: 'CV' },
        ],
        gallery: [
          { src: 'assets/images/Vince/web/gallery/event-13.jpg', alt: 'International conference engagement', position: 'center' },
          { src: 'assets/images/Vince/web/6.jpg', alt: 'Conference stage address', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/4.jpg', alt: 'Cross-border conference coordination', position: 'center' },
        ],
        related: ['tanzania-national-partnerships'],
      },
    ],

    /**
     * Impact metrics — every figure traceable to the CV or supplied reports.
     * Four only. No count-up animation, no dark band, no cards. See DESIGN.md §8.
     * Figures below are aligned to the updated consultant CV dated 04/09/2026.
     */
    impactStats: [
      { value: '300+', label: 'Members led across seven cities', note: 'AIESEC in Tanzania, 2024–2025' },
      { value: '500+', label: 'Participants and delegates across leadership platforms', note: 'National and regional conferences in Tanzania and Rwanda' },
      { value: '7+', label: 'High-value partnerships secured', note: 'Business Development, AIESEC in Rwanda' },
      { value: '60%', label: 'Increase in internship placements', note: 'Targeted business development initiatives' },
    ],

    /**
     * Organizations and partners.
     * Corporate partners are evidenced by the updated CV and supporting documents held on file.
     */
    organizations: [
      'INNOVEX Development Consulting Ltd',
      'Mo Dewji Foundation',
      'AIESEC in Tanzania',
      'AIESEC in Rwanda',
      'AIESEC International',
      'AIESEC in IFM',
      'AIESEC in Belarus',
      'Empower Limited',
    ],

    corporatePartners: [
      { name: 'Barrick Gold', context: 'Corporate partnership, AIESEC in Tanzania' },
      { name: 'Total Energies', context: 'Corporate partnership, AIESEC in Tanzania' },
      { name: 'I&M Bank', context: 'Memorandum of understanding' },
      { name: 'METL', context: 'Partnership agreement' },
      { name: 'CRDB Bank', context: 'Corporate engagement' },
      { name: 'INCO.org', context: 'Green Digital Skills Partnership, Rwanda' },
    ],

    /**
     * Appendix — primary-source evidence.
     *
     * `documents` are published as downloadable files. Every description is
     * drawn from the document's own contents, not inferred.
     *
     * `onRequest` records evidence that exists but is deliberately NOT
     * published: signed bilateral agreements carry counterparty signatures and
     * are not one party's to publish, and the audit reports are the AIESEC
     * entities' financial records rather than personal credentials.
     * See documentation/CONTENT_VERIFICATION.md.
     */
    appendix: {
      intro: 'The claims made throughout this portfolio are drawn from primary sources. The documents below are published in full. Further evidence — including signed partnership agreements and independently audited financial reports — is available on request.',

      documents: [
        {
          title: 'AIESEC in Tanzania — Annual Report 2024/25',
          role: 'Authored the foreword as President (Country Director)',
          summary: 'The full national report for Vicent’s term leading AIESEC in Tanzania, covering operations, national projects, local chapter performance, the financial report and partner relationships. Published in the entity’s 25th anniversary year.',
          meta: ['22 pages', '2025', 'Annual Report'],
          file: 'assets/documents/aiesec-tanzania-annual-report-2024-25.pdf',
          size: '12 MB',
        },
        {
          title: 'AIESEC in Rwanda — Annual Report 2023/24',
          role: 'Authored the foreword as President (Country Director)',
          summary: 'The "MC Craft" national report for Vicent’s term leading AIESEC in Rwanda: operations, global volunteer and talent programmes, organisational development, national events and the financial report.',
          meta: ['31 pages', '2024', 'Annual Report'],
          file: 'assets/documents/aiesec-rwanda-annual-report-2023-24.pdf',
          size: '11 MB',
        },
        {
          title: 'AIESEC in Rwanda — Annual Report 2022/23',
          role: 'Term served as Vice President, Business Development & Incoming Global Talent',
          summary: 'The national report for the term in which Vicent led the business development portfolio, covering operations, organisational development and national social projects.',
          meta: ['27 pages', '2023', 'Annual Report'],
          file: 'assets/documents/aiesec-rwanda-annual-report-2022-23.pdf',
          size: '2.3 MB',
        },
        {
          title: 'Barrick Gold — Programmes Partnership Proposal',
          role: 'Partnership proposal prepared under his direction as Country Director',
          summary: 'The full corporate partnership proposal presented to Barrick Gold, setting out AIESEC in Tanzania’s programmes, national activities and the partnership structure. An example of the proposal development and corporate negotiation work described in the case studies.',
          meta: ['48 pages', '2024', 'Partnership Proposal'],
          file: 'assets/documents/barrick-gold-partnership-proposal.pdf',
          size: '3.5 MB',
        },
        {
          title: 'Career Fair 2025 — Programme Overview',
          role: 'National programme directed as Country Director',
          summary: 'Overview of AIESEC in Tanzania’s longest-running national programme, which began at the University of Dar es Salaam in 2000 and now runs across seven regions. Records a reach of 16,663 students over two years.',
          meta: ['1 page', '2025', 'Programme Overview'],
          file: 'assets/documents/career-fair-2025-overview.pdf',
          size: '0.4 MB',
        },
      ],

      onRequest: [
        {
          title: 'Signed partnership agreements and memoranda of understanding',
          detail: 'Executed agreements with I&M Bank, METL, CRDB Bank and INCO.org. Not published here: these are bilateral documents carrying counterparty signatures, and are not one party’s to release unilaterally.',
        },
        {
          title: 'Independently audited financial reports',
          detail: 'Audit reports covering AIESEC in Rwanda (Dec 2022 – Nov 2023) and the 2025 audited report. Not published here: these are the organisations’ financial records rather than personal credentials.',
        },
        {
          title: 'Further proposals and concept notes',
          detail: 'Including the Global Money Week concept note, the SDG Innovation concept note, and incoming global talent proposals prepared for AIESEC in Rwanda.',
        },
      ],
    },

    speakingTopics: [
      { title: 'Strategic Partnerships for Sustainable Organizational Impact', desc: 'How partnership frameworks built on mutual value outlast individual relationships.' },
      { title: 'Leading Across Cultures and Borders', desc: 'Lessons from directing national organizations in two countries.' },
      { title: 'Building Youth Leadership Systems Across Africa', desc: 'Designing leadership pipelines that survive annual leadership turnover.' },
      { title: 'What Nonprofit Leaders Can Learn from Business Development', desc: 'Applying commercial pipeline discipline to mission-driven organizations.' },
    ],

    /**
     * Speaking engagements — conference and summit leadership evidenced by the CV
     * and the annual reports held on file.
     */
    speakingEngagements: [
      {
        title: 'The Men\'s Circle',
        role: 'Host',
        organization: 'AIESEC Alumni Tanzania · 21.25 Cluster',
        date: '17 Sep 2026',
        location: 'Virtual',
        note: 'Hosted a virtual conversation on men, purpose and leadership for AIESEC Alumni Tanzania.',
        url: 'https://themenscircle.rsvpify.com',
        external: true,
      },
      { title: 'East African Conference Cycle', role: 'Initiator & Coordinator', organization: 'AIESEC in Tanzania', date: '2024–2025', location: 'East Africa' },
      { title: 'National Career Fair & Leadership Summits', role: 'Director', organization: 'AIESEC in Tanzania', date: '2024–2025', location: 'Tanzania', note: 'Over 500 participants and multiple corporate partners' },
      { title: 'National & Regional Conferences', role: 'Designer & Facilitator', organization: 'AIESEC in Rwanda', date: '2023–2024', location: 'Rwanda', note: 'Over 500 delegates' },
    ],

    featuredEvent: {
      title: 'The Men\'s Circle',
      eyebrow: 'Recent Engagement',
      date: '17 September 2026',
      time: '7 PM EAT',
      format: 'Virtual',
      role: 'Host',
      organization: 'AIESEC Alumni Tanzania · 21.25 Cluster',
      summary: 'Vicent Manila hosted a virtual conversation on men, purpose and leadership for AIESEC Alumni Tanzania.',
      image: 'assets/images/Vince/web/events/mens-circle-2026/mens-circle-vicent-manila-host.jpg',
      url: 'https://themenscircle.rsvpify.com',
      linkLabel: 'View event page',
    },

    /**
     * External articles, newsletters and interviews. Only publish owner-supplied
     * or verified public URLs; never use placeholders.
     */
    externalResources: [
      {
        title: 'Barrick Yadhamini Kongamano la Wanafunzi Vyuo Vikuu Lililofanyika Chuo Kikuu Dodoma',
        source: 'Full Shangwe Blog · 14 Apr 2025',
        type: 'Article',
        url: 'https://fullshangweblog.co.tz/2025/04/14/barrick-yadhamini-kongamano-la-wanafunzi-vyuo-vikuu-lililofanyika-chuo-kikuu-dodoma/',
        image: 'assets/images/Vince/web/gallery/event-11.jpg',
        imageAlt: 'Vicent Manila at a Barrick-supported university engagement',
        imagePosition: 'center',
      },
      {
        title: 'Career Fair — Mzumbe University',
        source: 'Instagram',
        type: 'Event Post',
        url: 'https://www.instagram.com/p/DJhe5fEigiy/?img_index=3&stkn=a3Y5bTdqZmY4Nm0z',
        image: 'assets/images/Vince/gallery/16.jpeg',
        imageAlt: 'Vicent Manila at a university career fair engagement',
        imagePosition: 'center',
      },
    ],

  };

  VM.getProject = function (slug) {
    return VM.data.projects.find(p => p.slug === slug) || null;
  };

  VM.featuredProjects = function () {
    return VM.data.projects.filter(p => p.featured);
  };
})();
