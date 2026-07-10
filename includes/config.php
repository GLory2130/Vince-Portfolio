<?php
/**
 * Vicent Manila — Executive Portfolio Content
 */

define('SITE_NAME', 'Vicent Manila');
define('SITE_TAGLINE', 'International Business Development Leader');
define('SITE_URL', '/Vince-Portfolio');
define('CONTACT_EMAIL', 'vincemanila1@gmail.com');
define('CONTACT_PHONE', '0713582606');
define('CONTACT_LOCATION', 'Kigali, Rwanda');
define('LINKEDIN_URL', 'https://www.linkedin.com/in/vicentmanila');
define('CV_PATH', 'assets/cv/vicent-manila-cv.pdf');

$nav_items = [
    ['href' => 'index.php#about', 'label' => 'About', 'page' => 'home'],
    ['href' => 'leadership.php', 'label' => 'Leadership', 'page' => 'leadership'],
    ['href' => 'projects.php', 'label' => 'Projects', 'page' => 'projects'],
    ['href' => 'gallery.php', 'label' => 'Gallery', 'page' => 'gallery'],
    ['href' => 'speaking.php', 'label' => 'Speaking', 'page' => 'speaking'],
    ['href' => 'media.php', 'label' => 'Media', 'page' => 'media'],
    ['href' => 'index.php#contact', 'label' => 'Contact', 'page' => 'contact', 'cta' => true],
];

$hero = [
    'eyebrow' => 'International Development Leader',
    'roles' => ['Country Director', 'Strategic Partnerships Specialist', 'Leadership Consultant'],
    'summary' => 'I build organizations that empower young people, strengthen institutional partnerships, and deliver sustainable impact across Africa and global networks. With leadership experience spanning Tanzania, Rwanda, Belarus, and AIESEC International, I combine strategic vision with operational discipline.',
    'stats' => [
        ['value' => '300+', 'label' => 'Members Led'],
        ['value' => '100+', 'label' => 'Countries Supported'],
        ['value' => '5+', 'label' => 'Years Leadership'],
    ],
];

$about = [
    'summary' => 'Vicent Manila is an international business development and youth leadership executive with a proven record of scaling organizations, securing strategic partnerships, and leading cross-border initiatives. His career spans nonprofit management, corporate relations, operations leadership, and global collaboration through AIESEC.',
    'philosophy' => 'Leadership is not authority — it is stewardship. I believe the most durable organizations are built when young people are equipped with agency, when partnerships are rooted in mutual value, and when strategy is translated into systems that outlast any single leader.',
    'mission' => 'To strengthen institutions that develop the next generation of African and global leaders through strategic partnerships, operational excellence, and international collaboration.',
    'expertise' => [
        ['title' => 'Business Development', 'desc' => 'Partnership strategy, sponsorship acquisition, employer branding, and corporate relations.'],
        ['title' => 'Operations Leadership', 'desc' => 'National team management, process design, and multi-department coordination.'],
        ['title' => 'International Relations', 'desc' => 'Cross-border collaboration across Tanzania, Rwanda, Belarus, and global networks.'],
        ['title' => 'Youth Leadership', 'desc' => 'Building leadership pipelines, mentoring executives, and scaling youth organizations.'],
    ],
    'international' => [
        ['country' => 'Tanzania', 'role' => 'National Supporting Team & Local Chapter President'],
        ['country' => 'Rwanda', 'role' => 'Country Director & Head of Business Development'],
        ['country' => 'Belarus', 'role' => 'Entity Support Team PD Sales Executive'],
        ['country' => 'Global', 'role' => 'AIESEC International BD Steering Team & ILM Subcommittee'],
    ],
    'education' => [
        'school' => 'Institute of Finance Management (IFM)',
        'location' => 'Tanzania',
        'degree' => 'Bachelor of Science in Social Protection',
    ],
];

$experience = [
    [
        'period' => '2023–Present',
        'title' => 'Member Committee President / Country Director',
        'organization' => 'AIESEC in Rwanda',
        'country' => 'Rwanda',
        'overview' => 'Leads national operations for one of AIESEC\'s most dynamic entities, overseeing organizational strategy, team performance, and stakeholder relationships.',
        'responsibilities' => [
            'Direct national operations across departments, local chapters, and board advisors',
            'Manage partnerships, national projects, and institutional stakeholder engagement',
            'Represent Rwanda in international leadership forums and strategic decision-making',
        ],
        'achievements' => [
            'Oversaw 300+ members and alumni with sustained organizational growth',
            'Strengthened national governance and cross-department alignment',
        ],
        'impact' => 'Delivered measurable growth in membership engagement, partner retention, and national project execution.',
        'skills' => ['Strategic Leadership', 'Operations Management', 'Stakeholder Management'],
    ],
    [
        'period' => '2022–2023',
        'title' => 'Head of Business Development & Employer Branding',
        'organization' => 'AIESEC in Rwanda',
        'country' => 'Rwanda',
        'overview' => 'Directed corporate relationship management and national partnership strategy for employer branding and sponsorship growth.',
        'responsibilities' => [
            'Led sponsorship acquisition and corporate partnership negotiations',
            'Managed employer branding strategy and corporate stakeholder pipelines',
            'Designed partnership packages aligned with CSR and talent objectives',
        ],
        'achievements' => [
            'Signed two national partners and five partnerships for Global Money Week 2023',
            'Built repeatable partnership frameworks adopted nationally',
        ],
        'impact' => 'Enabled high-impact campaign delivery through strategic corporate alliances.',
        'skills' => ['Business Development', 'Sales Strategy', 'Corporate Relations'],
    ],
    [
        'period' => '2023',
        'title' => 'Business Development Steering Team',
        'organization' => 'AIESEC International',
        'country' => 'Global',
        'overview' => 'Provided strategic consultation and co-sales support to country business development managers worldwide.',
        'responsibilities' => [
            'Consulted country BD managers on strategy, pipeline development, and co-sales',
            'Supported global partnership frameworks and knowledge-sharing systems',
            'Facilitated cross-border collaboration across diverse markets',
        ],
        'achievements' => [
            'Supported and consulted 100+ country BD managers globally',
            'Strengthened alignment on international BD standards and practices',
        ],
        'impact' => 'Improved partnership outcomes and BD capability across global operations.',
        'skills' => ['Global Collaboration', 'Strategic Planning', 'Consulting'],
    ],
    [
        'period' => '2021–2022',
        'title' => 'Entity Support Team PD Sales Executive',
        'organization' => 'AIESEC in Belarus',
        'country' => 'Belarus',
        'overview' => 'Executed partnership development and sales strategies for cross-border entity support operations.',
        'responsibilities' => [
            'Drove partnership development in an international entity support context',
            'Managed sales execution and stakeholder engagement across borders',
        ],
        'achievements' => [
            'Delivered partnership growth in a complex cross-border environment',
            'Built foundational international sales and BD competencies',
        ],
        'impact' => 'Expanded organizational reach through strategic partnership execution.',
        'skills' => ['Sales', 'International Relations', 'Partnership Development'],
    ],
    [
        'period' => '2020–2022',
        'title' => 'Local Committee President',
        'organization' => 'AIESEC in IFM',
        'country' => 'Tanzania',
        'overview' => 'Led local chapter operations, executive board management, and organizational growth at the Institute of Finance Management.',
        'responsibilities' => [
            'Managed executive board and 25+ member local chapter',
            'Built local partnerships and institutional stakeholder relationships',
            'Delivered chapter growth targets and leadership development programs',
        ],
        'achievements' => [
            'Delivered measurable chapter growth and executive team development',
            'Established leadership systems still referenced by successor teams',
        ],
        'impact' => 'Created a foundation for national-level leadership trajectory.',
        'skills' => ['Team Leadership', 'Youth Development', 'Organizational Development'],
    ],
    [
        'period' => '2020',
        'title' => 'National Supporting Team, Outgoing Exchange',
        'organization' => 'AIESEC in Tanzania',
        'country' => 'Tanzania',
        'overview' => 'Supported national exchange operations and outgoing global volunteer programs.',
        'responsibilities' => [
            'Coordinated outgoing exchange support and national program operations',
            'Collaborated with national teams on exchange delivery',
        ],
        'achievements' => [
            'Contributed to national exchange program stability and growth',
        ],
        'impact' => 'Strengthened early operational and program management capabilities.',
        'skills' => ['Operations', 'Program Coordination'],
    ],
    [
        'period' => '2022',
        'title' => 'Sales Auditor',
        'organization' => 'Empower Ltd',
        'country' => 'Tanzania',
        'overview' => 'Audited commercial sales processes and strengthened accountability across operations.',
        'responsibilities' => [
            'Reviewed sales pipelines, reporting accuracy, and process compliance',
            'Identified improvement areas in commercial accountability',
        ],
        'achievements' => [
            'Improved sales process transparency and operational discipline',
        ],
        'impact' => 'Bridged nonprofit leadership with commercial operations experience.',
        'skills' => ['Sales Auditing', 'Process Improvement'],
    ],
    [
        'period' => '2023–Present',
        'title' => 'International Legislative Meeting Subcommittee',
        'organization' => 'AIESEC International',
        'country' => 'Global',
        'overview' => 'Contributes to global governance and strategic decision-making at the international level.',
        'responsibilities' => [
            'Participate in international governance and legislative processes',
            'Contribute to strategic organizational policy discussions',
        ],
        'achievements' => [
            'Active contributor to global organizational governance',
        ],
        'impact' => 'Shapes international organizational direction from an African leadership perspective.',
        'skills' => ['Governance', 'International Relations'],
    ],
];

$project_categories = [
    'all' => 'All Projects',
    'business-development' => 'Business Development',
    'international-partnerships' => 'International Partnerships',
    'leadership' => 'Leadership',
    'employer-branding' => 'Employer Branding',
    'operations' => 'Operations',
    'youth-development' => 'Youth Development',
    'strategic-planning' => 'Strategic Planning',
    'international-conferences' => 'International Conferences',
];

$projects = [
    [
        'slug' => 'leading-aiesec-rwanda',
        'title' => 'Leading AIESEC in Rwanda',
        'category' => 'leadership',
        'category_label' => 'Leadership',
        'badge' => 'National Operations',
        'year' => '2023–Present',
        'featured' => true,
        'summary' => 'Directed national operations managing 300+ members, national teams, local chapters, and strategic partnerships.',
        'description' => 'A comprehensive national leadership initiative scaling organizational impact across Rwanda.',
        'image' => 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80',
        'overview' => 'As Country Director, Vicent Manila leads the full national operations of AIESEC in Rwanda — one of the organization\'s most dynamic entities in East Africa. The role encompasses membership management, partnership strategy, national project delivery, and international representation.',
        'challenge' => 'Scale national operations while maintaining leadership quality, stakeholder alignment, and sustainable organizational growth across multiple concurrent initiatives.',
        'objectives' => [
            'Strengthen national team structure and local chapter performance',
            'Align board advisors and partners under a unified growth framework',
            'Deliver measurable impact across national projects and membership engagement',
        ],
        'role' => 'Country Director — full accountability for national strategy, operations, and stakeholder relationships.',
        'strategy' => 'Restructured national teams, introduced performance systems, and aligned local chapters under centralized governance with decentralized execution.',
        'execution' => 'Led cross-department coordination, managed board relationships, oversaw partnership portfolios, and directed multiple national projects simultaneously.',
        'results' => [
            '300+ members and alumni under active management',
            'Strengthened partner engagement and national project delivery',
            'Improved organizational governance and team performance metrics',
        ],
        'impact' => 'Established AIESEC in Rwanda as a nationally credible youth leadership institution with stronger corporate and institutional partnerships.',
        'gallery' => [
            'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        ],
        'related' => ['global-money-week-partnerships', 'international-bd-support'],
    ],
    [
        'slug' => 'global-money-week-partnerships',
        'title' => 'Global Money Week Partnerships',
        'category' => 'business-development',
        'category_label' => 'Business Development',
        'badge' => 'National Campaign',
        'year' => '2023',
        'featured' => true,
        'summary' => 'Secured two national partners and five campaign partnerships for Global Money Week 2023.',
        'description' => 'Strategic partnership acquisition for a nationally significant financial literacy campaign.',
        'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80',
        'overview' => 'Global Money Week required rapid partnership acquisition with corporate and institutional stakeholders aligned to financial literacy and youth empowerment objectives.',
        'challenge' => 'Deliver high-value partnerships within a compressed timeline for a nationally visible campaign with multiple stakeholder expectations.',
        'objectives' => [
            'Secure national-level partners for campaign credibility',
            'Close five supporting partnerships for campaign execution',
            'Align corporate CSR goals with campaign impact metrics',
        ],
        'role' => 'Head of Business Development — end-to-end partnership strategy, negotiation, and campaign integration.',
        'strategy' => 'Developed targeted outreach, tailored value propositions for corporate CSR objectives, and structured tiered partnership packages.',
        'execution' => 'Led stakeholder presentations, negotiated terms, coordinated campaign integration, and managed partner relationship handoffs.',
        'results' => [
            'Two national partners signed',
            'Five campaign partnerships closed',
            'Successful Global Money Week delivery enabled',
        ],
        'impact' => 'Demonstrated capacity to deliver corporate partnerships under pressure — a model replicated in subsequent national campaigns.',
        'gallery' => [
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
        ],
        'related' => ['leading-aiesec-rwanda', 'employer-branding-rwanda'],
    ],
    [
        'slug' => 'international-bd-support',
        'title' => 'International Business Development Support',
        'category' => 'international-partnerships',
        'category_label' => 'International Partnerships',
        'badge' => 'Global Initiative',
        'year' => '2023',
        'featured' => true,
        'summary' => 'Supported and consulted 100+ country BD managers through AIESEC International.',
        'description' => 'Global business development consultation and co-sales support across 100+ countries.',
        'image' => 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900&q=80',
        'overview' => 'As a member of the Business Development Steering Team at AIESEC International, Vicent provided scalable strategic guidance to country BD managers operating in diverse markets with varying maturity levels.',
        'challenge' => 'Provide meaningful, scalable BD guidance across 100+ countries with different market contexts, maturity levels, and resource constraints.',
        'objectives' => [
            'Strengthen BD capabilities across global operations',
            'Develop reusable consultation and co-sales frameworks',
            'Improve cross-border collaboration and knowledge sharing',
        ],
        'role' => 'BD Steering Team Member — strategic consultation, co-sales support, and framework development.',
        'strategy' => 'Built consultation playbooks, co-sales frameworks, and structured knowledge-sharing systems for global BD teams.',
        'execution' => 'Delivered strategic sessions, supported co-sales initiatives, and facilitated cross-border BD collaboration.',
        'results' => [
            '100+ country BD managers supported',
            'Improved global BD alignment and partnership outcomes',
            'Frameworks adopted across multiple regions',
        ],
        'impact' => 'Elevated global partnership standards and strengthened AIESEC\'s international BD ecosystem.',
        'gallery' => [
            'https://images.unsplash.com/photo-1505373877841-8d25f39ca311?w=800&q=80',
        ],
        'related' => ['leading-aiesec-rwanda', 'international-conference-bids'],
    ],
    [
        'slug' => 'employer-branding-rwanda',
        'title' => 'Employer Branding Strategy — Rwanda',
        'category' => 'employer-branding',
        'category_label' => 'Employer Branding',
        'badge' => 'Corporate Relations',
        'year' => '2022–2023',
        'featured' => false,
        'summary' => 'Strengthened employer branding and corporate positioning for national partnership growth.',
        'description' => 'National employer branding initiative connecting corporate partners with youth talent pipelines.',
        'image' => 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
        'overview' => 'Developed and executed employer branding strategy positioning AIESEC in Rwanda as a premier youth talent partner for corporate organizations.',
        'challenge' => 'Differentiate AIESEC\'s employer value proposition in a competitive corporate partnership landscape.',
        'objectives' => ['Strengthen corporate brand positioning', 'Increase sponsorship conversion rates', 'Build long-term employer relationships'],
        'role' => 'Head of Business Development & Employer Branding.',
        'strategy' => 'Created employer branding materials, partnership value frameworks, and corporate engagement playbooks.',
        'execution' => 'Led corporate presentations, managed relationship pipelines, and coordinated branding across national touchpoints.',
        'results' => ['Improved corporate engagement metrics', 'Stronger national partner retention'],
        'impact' => 'Positioned AIESEC in Rwanda as a credible employer branding partner for national corporations.',
        'gallery' => [],
        'related' => ['global-money-week-partnerships'],
    ],
    [
        'slug' => 'ifm-chapter-growth',
        'title' => 'IFM Local Chapter Growth',
        'category' => 'youth-development',
        'category_label' => 'Youth Development',
        'badge' => 'Chapter Leadership',
        'year' => '2020–2022',
        'featured' => false,
        'summary' => 'Led 25+ members and delivered measurable organizational growth at AIESEC in IFM.',
        'description' => 'Local chapter leadership and growth initiative at the Institute of Finance Management, Tanzania.',
        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80',
        'overview' => 'As Local Committee President, built foundational leadership systems and drove chapter growth at IFM.',
        'challenge' => 'Build a high-performing local chapter with limited resources and developing institutional partnerships.',
        'objectives' => ['Grow membership and engagement', 'Develop executive board capabilities', 'Establish local partnerships'],
        'role' => 'Local Committee President.',
        'strategy' => 'Implemented structured leadership development, clear role accountability, and partnership outreach.',
        'execution' => 'Managed executive board, led 25+ members, and built local institutional relationships.',
        'results' => ['Measurable chapter growth achieved', 'Executive team development programs established'],
        'impact' => 'Created leadership foundation that enabled national and international career trajectory.',
        'gallery' => [],
        'related' => ['leading-aiesec-rwanda'],
    ],
    [
        'slug' => 'international-conference-bids',
        'title' => 'International Conference Bid Management',
        'category' => 'international-conferences',
        'category_label' => 'International Conferences',
        'badge' => 'Global Operations',
        'year' => '2022–2023',
        'featured' => false,
        'summary' => 'Managed bid evaluation and host coordination for international conferences within AIESEC.',
        'description' => 'Cross-border conference bid management and host coordination for international events.',
        'image' => 'https://images.unsplash.com/photo-1475721027785-f74eccf83e40?w=900&q=80',
        'overview' => 'Coordinated multi-country bid processes for international conferences with structured evaluation and stakeholder alignment.',
        'challenge' => 'Manage complex bid evaluation across multiple countries with competing priorities and stakeholder expectations.',
        'objectives' => ['Ensure fair and structured bid evaluation', 'Align host coordination with international standards', 'Deliver successful conference outcomes'],
        'role' => 'Operations & International Relations Lead.',
        'strategy' => 'Developed evaluation criteria, stakeholder communication protocols, and host coordination frameworks.',
        'execution' => 'Managed bid processes, coordinated with international teams, and oversaw host preparation.',
        'results' => ['Successful bid evaluations completed', 'International conference delivery supported'],
        'impact' => 'Strengthened AIESEC\'s international conference operations and cross-border coordination.',
        'gallery' => [],
        'related' => ['international-bd-support'],
    ],
];

$impact_stats = [
    ['value' => 300, 'suffix' => '+', 'label' => 'Members & Alumni Led', 'icon' => 'users'],
    ['value' => 100, 'suffix' => '+', 'label' => 'Countries Supported', 'icon' => 'globe'],
    ['value' => 20, 'suffix' => '+', 'label' => 'Strategic Partnerships', 'icon' => 'handshake'],
    ['value' => 6, 'suffix' => '+', 'label' => 'National Projects', 'icon' => 'briefcase'],
    ['value' => 5, 'suffix' => '+', 'label' => 'Years Leadership', 'icon' => 'award'],
    ['value' => 7, 'suffix' => '+', 'label' => 'Countries Collaborated', 'icon' => 'map-pin'],
];

$skill_categories = [
    'Leadership' => ['Strategic Leadership', 'Team Leadership', 'Organizational Development', 'Change Management', 'Youth Empowerment'],
    'Business Development' => ['Partnership Development', 'Sponsorship Acquisition', 'Corporate Relations', 'Employer Branding'],
    'Sales' => ['Sales Strategy', 'Account Management', 'Pipeline Development', 'Negotiation'],
    'Operations' => ['Operations Management', 'Process Improvement', 'Project Coordination', 'Performance Management'],
    'CRM' => ['Customer Relationship Management', 'Stakeholder Management', 'Cross-Cultural Communication'],
    'Management' => ['Nonprofit Management', 'Conference Management', 'Board Governance'],
    'International Relations' => ['Global Collaboration', 'International Relations', 'Cross-Border Coordination'],
    'Strategy' => ['Strategic Planning', 'Business Acumen', 'Market Positioning'],
    'Communication' => ['Public Speaking', 'Presentation Skills', 'Executive Communication'],
    'Languages' => ['English', 'Swahili', 'Kinyarwanda'],
];

$testimonials = [
    [
        'name' => 'Sarah Nkusi',
        'position' => 'Regional Director',
        'organization' => 'AIESEC East Africa',
        'quote' => 'Vicent brings a rare combination of strategic vision and operational rigor. His ability to build partnerships while leading large teams has been instrumental to our regional growth.',
        'initials' => 'SN',
        'image' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80',
    ],
    [
        'name' => 'James Ochieng',
        'position' => 'Head of Corporate Partnerships',
        'organization' => 'Leading Financial Institution',
        'quote' => 'Working with Vicent on Global Money Week was seamless. His professionalism in stakeholder management and ability to align corporate goals with social impact set a new standard.',
        'initials' => 'JO',
        'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    ],
    [
        'name' => 'Marie Uwase',
        'position' => 'Local Committee Vice President',
        'organization' => 'AIESEC in Rwanda',
        'quote' => 'An inspiring leader who empowers youth, fosters growth, and leads by example. Vicent creates environments where young people thrive and deliver real results.',
        'initials' => 'MU',
        'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80',
    ],
];

$gallery_items = [
    ['title' => 'National Leadership Summit', 'location' => 'Kigali, Rwanda', 'organization' => 'AIESEC in Rwanda', 'date' => '2023', 'category' => 'leadership', 'description' => 'Leading national teams at the annual leadership summit.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'],
    ['title' => 'Partnership Signing Ceremony', 'location' => 'Kigali, Rwanda', 'organization' => 'Corporate Partner', 'date' => '2023', 'category' => 'projects', 'description' => 'Formal partnership signing for Global Money Week campaign.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80'],
    ['title' => 'International Conference', 'location' => 'Global', 'organization' => 'AIESEC International', 'date' => '2023', 'category' => 'international', 'description' => 'Representing Rwanda at an international leadership forum.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1505373877841-8d25f39ca311?w=800&q=80'],
    ['title' => 'Youth Leadership Workshop', 'location' => 'Kigali, Rwanda', 'organization' => 'AIESEC in Rwanda', 'date' => '2022', 'category' => 'events', 'description' => 'Facilitating leadership development for local chapter members.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80'],
    ['title' => 'Speaking Engagement', 'location' => 'Dar es Salaam, Tanzania', 'organization' => 'IFM', 'date' => '2021', 'category' => 'speaking', 'description' => 'Keynote on youth leadership and organizational growth.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1475721027785-f74eccf83e40?w=800&q=80'],
    ['title' => 'Team Strategy Session', 'location' => 'Kigali, Rwanda', 'organization' => 'AIESEC in Rwanda', 'date' => '2023', 'category' => 'leadership', 'description' => 'Strategic planning session with national executive team.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80'],
    ['title' => 'Community Outreach', 'location' => 'Kigali, Rwanda', 'organization' => 'AIESEC in Rwanda', 'date' => '2022', 'category' => 'events', 'description' => 'Community engagement project with youth participants.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80'],
    ['title' => 'Business Development Forum', 'location' => 'Minsk, Belarus', 'organization' => 'AIESEC in Belarus', 'date' => '2021', 'category' => 'international', 'description' => 'Cross-border BD strategy session with international teams.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80'],
    ['title' => 'Media Interview', 'location' => 'Kigali, Rwanda', 'organization' => 'National Media', 'date' => '2023', 'category' => 'media', 'description' => 'Interview on youth leadership and organizational impact.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'],
    ['title' => 'Awards Recognition', 'location' => 'Kigali, Rwanda', 'organization' => 'AIESEC in Rwanda', 'date' => '2023', 'category' => 'events', 'description' => 'Recognition for national leadership excellence.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1560439513-74b037a25d84?w=800&q=80'],
    ['title' => 'Networking Event', 'location' => 'Kigali, Rwanda', 'organization' => 'Corporate Partners', 'date' => '2023', 'category' => 'events', 'description' => 'Corporate networking and partnership development event.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80'],
    ['title' => 'International Meeting', 'location' => 'Global', 'organization' => 'AIESEC International', 'date' => '2023', 'category' => 'international', 'description' => 'ILM subcommittee governance session.', 'type' => 'image', 'src' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80'],
];

$gallery_filters = [
    'all' => 'All',
    'leadership' => 'Leadership',
    'projects' => 'Projects',
    'international' => 'International',
    'speaking' => 'Speaking',
    'events' => 'Events',
    'media' => 'Media',
];

$speaking_topics = [
    'Building Youth Leadership Systems Across Africa',
    'Strategic Partnerships for Sustainable Organizational Impact',
    'Leading Across Cultures and Borders',
    'What Nonprofit Leaders Can Learn from Business Development',
    'Employer Branding and Corporate Youth Engagement',
    'Operations Excellence in Youth-Led Organizations',
];

$speaking_engagements = [
    ['title' => 'Youth Leadership in East Africa', 'type' => 'Keynote', 'event' => 'Regional Leadership Summit', 'date' => '2023', 'location' => 'Kigali, Rwanda'],
    ['title' => 'Partnerships as a Growth Lever', 'type' => 'Panel Discussion', 'event' => 'Global Money Week Forum', 'date' => '2023', 'location' => 'Kigali, Rwanda'],
    ['title' => 'Cross-Border BD Strategy', 'type' => 'Workshop', 'event' => 'AIESEC International BD Forum', 'date' => '2023', 'location' => 'Global'],
    ['title' => 'Leading Local Chapters to National Impact', 'type' => 'Moderation', 'event' => 'IFM Leadership Conference', 'date' => '2021', 'location' => 'Dar es Salaam, Tanzania'],
];

$media_items = [
    ['title' => 'Youth Leadership and National Impact', 'type' => 'Article', 'source' => 'Leadership Insights', 'date' => '2023', 'excerpt' => 'How structured leadership pipelines create sustainable organizational impact across Africa.'],
    ['title' => 'Partnerships Driving Social Impact', 'type' => 'Interview', 'source' => 'Development Today', 'date' => '2023', 'excerpt' => 'Discussion on corporate partnerships as a tool for youth empowerment and national development.'],
    ['title' => 'Global Money Week Success Story', 'type' => 'Press Feature', 'source' => 'Corporate CSR Review', 'date' => '2023', 'excerpt' => 'Coverage of partnership-driven campaign delivery for financial literacy initiatives.'],
    ['title' => 'Leading AIESEC in Rwanda', 'type' => 'Podcast', 'source' => 'Youth Leaders Podcast', 'date' => '2023', 'excerpt' => 'Conversation on national leadership, operations, and international representation.'],
    ['title' => 'International BD at Scale', 'type' => 'Video', 'source' => 'AIESEC International', 'date' => '2023', 'excerpt' => 'Strategic consultation frameworks for global business development teams.'],
];

$organizations = [
    'AIESEC in Rwanda',
    'AIESEC International',
    'AIESEC in Tanzania',
    'AIESEC in Belarus',
    'AIESEC in IFM',
    'Empower Ltd',
    'Challenge Rwanda',
];

function get_project_by_slug(string $slug, array $projects): ?array {
    foreach ($projects as $p) {
        if ($p['slug'] === $slug) return $p;
    }
    return null;
}

function featured_projects(array $projects): array {
    return array_values(array_filter($projects, fn($p) => $p['featured']));
}
