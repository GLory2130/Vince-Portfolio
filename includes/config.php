<?php
/**
 * Portfolio configuration — Vicent Manila
 */

define('SITE_NAME', 'Vicent Manila');
define('SITE_TAGLINE', 'International Youth Leader & Business Development Strategist');
define('SITE_DESCRIPTION', 'Accomplished international youth leader, business development strategist, and nonprofit executive with a proven record of managing teams, building partnerships, and creating impact across Africa.');
define('SITE_URL', 'http://localhost/Vince_portfolio');

// Contact info (update with real details)
define('CONTACT_EMAIL', 'vicent.manila@email.com');
define('CONTACT_PHONE', '+250 000 000 000');
define('CONTACT_LOCATION', 'Kigali, Rwanda');
define('LINKEDIN_URL', 'https://linkedin.com/in/vicentmanila');

// SEO keywords
define('SEO_KEYWORDS', 'Country Director, Business Development Expert, Youth Leadership, International Relations, Nonprofit Management, Strategic Partnerships, Operations Management, Leadership Development, Tanzania, Rwanda, AIESEC Leader');

// Color palette (design guidelines)
define('COLOR_NAVY', '#0A2540');
define('COLOR_GOLD', '#D4AF37');
define('COLOR_WHITE', '#FFFFFF');
define('COLOR_LIGHT_GRAY', '#F5F7FA');

$experience = [
    [
        'title' => 'Country Director',
        'company' => 'AIESEC in Rwanda',
        'bullets' => [
            'Managed 300+ members and alumni',
            'Led national operations',
            'Oversaw multiple departments',
            'Managed national projects',
            'Represented the organization internationally',
        ],
    ],
    [
        'title' => 'Head of Business Development & Employer Branding',
        'company' => 'AIESEC in Rwanda',
        'bullets' => [
            'Secured national partnerships',
            'Managed corporate relationships',
            'Led sponsorship acquisition',
            'Strengthened employer branding',
        ],
    ],
    [
        'title' => 'Local Committee President',
        'company' => 'AIESEC in IFM',
        'bullets' => [
            'Led 25+ members',
            'Managed executive board',
            'Delivered organizational growth',
            'Built local partnerships',
        ],
    ],
    [
        'title' => 'Business Development Steering Team',
        'company' => 'AIESEC International',
        'bullets' => [
            'Supported over 100 countries',
            'Co-sales initiatives',
            'Strategic consultation',
            'International collaboration',
        ],
    ],
];

$projects = [
    [
        'title' => 'Global Money Week Partnerships',
        'description' => 'Led partnership acquisition and stakeholder engagement initiatives that enabled successful event delivery.',
    ],
    [
        'title' => 'International Conference Bid Management',
        'description' => 'Managed bid evaluation and host coordination for international conferences within AIESEC.',
    ],
    [
        'title' => 'International Relations Expansion',
        'description' => 'Developed and strengthened multiple international partnerships to improve exchange opportunities and organizational collaboration.',
    ],
];

$skills = [
    'Strategic Leadership', 'Business Development', 'International Relations',
    'Operations Management', 'Youth Development', 'Nonprofit Management',
    'Partnership Building', 'Global Collaboration', 'Partnership Development',
    'Sales Strategy', 'Corporate Relations', 'Sponsorship Acquisition',
    'Account Management', 'Team Leadership', 'Organizational Development',
    'Change Management', 'Strategic Planning', 'Stakeholder Management',
    'Process Improvement', 'Performance Management', 'Project Coordination',
    'Cross-Cultural Communication', 'Global Networking', 'Conference Management',
];

$certifications = [
    'National Service (JKT)',
    'Self Awareness & Positive Self Esteem',
    'Leadership Development Programs',
    'AIESEC Leadership Experiences',
];

$impact_stats = [
    ['value' => '300+', 'label' => 'Members Managed'],
    ['value' => '100+', 'label' => 'Countries Supported'],
    ['value' => '10+', 'label' => 'Strategic Partnerships Closed'],
    ['value' => '6+', 'label' => 'National Projects Managed'],
    ['value' => '5+', 'label' => 'Years Leadership Experience'],
    ['value' => 'Multiple', 'label' => 'International Conferences Supported'],
];

$languages = ['English', 'Swahili', 'Kinyarwanda'];

$testimonials = [
    [
        'name' => 'Country Leader',
        'position' => 'Executive Director',
        'organization' => 'AIESEC Partner Organization',
        'quote' => 'Vicent demonstrates exceptional strategic vision and the ability to build meaningful partnerships that drive real organizational impact.',
    ],
    [
        'name' => 'Corporate Partner',
        'position' => 'Head of CSR',
        'organization' => 'Leading Corporate Partner',
        'quote' => 'His professionalism in sponsorship acquisition and stakeholder management made our collaboration seamless and highly productive.',
    ],
    [
        'name' => 'Team Member',
        'position' => 'Local Committee Vice President',
        'organization' => 'AIESEC in Rwanda',
        'quote' => 'An inspiring leader who empowers youth, fosters growth, and leads by example with integrity and dedication.',
    ],
];

$gallery_items = [
    ['title' => 'Conference Leadership', 'category' => 'Speaking Engagements'],
    ['title' => 'Partnership Signing', 'category' => 'Corporate Relations'],
    ['title' => 'Team Management', 'category' => 'Leadership Events'],
    ['title' => 'Community Project', 'category' => 'Youth Empowerment'],
    ['title' => 'International Summit', 'category' => 'Global Collaboration'],
    ['title' => 'National Operations', 'category' => 'Operations Management'],
];

$target_audience = [
    'International Organizations',
    'NGOs and Development Agencies',
    'Corporate Partners',
    'Potential Employers',
    'Investors and Donors',
    'Youth Leadership Networks',
    'Conference Organizers',
    'Government Institutions',
    'AIESEC Alumni and Stakeholders',
];
