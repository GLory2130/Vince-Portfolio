/**
 * Vicent Manila — Site configuration
 * Portfolio version: see VM.version
 */
window.VM = window.VM || {};

/** Semantic version of this portfolio codebase */
VM.version = '5.5.1';

VM.site = {
  name: 'Vicent Manila',
  tagline: 'Management Consultant · Research & Evaluation · Strategic Partnerships',
  brandLine: 'Consulting • Research & Evaluation • Partnerships',
  email: 'manilavicent@gmail.com',
  phone: '+255 713 582 606',
  phoneIntl: '+255713582606',
  location: 'Dar es Salaam, Tanzania',
  linkedin: 'https://www.linkedin.com/in/vicent-manila',
  cv: 'assets/cv/vicent-manila-cv.pdf',
  logo: 'assets/images/vincelogo.png',
  contact: {
    whatsapp: 'https://wa.me/255713582606',
    tel: 'tel:+255713582606',
    mailto: 'mailto:manilavicent@gmail.com',
    email: 'manilavicent@gmail.com',
    phone: '+255 713 582 606',
  },
  /**
   * Six destinations maximum (DESIGN.md §8). The former 'Insights' / media.html
   * route was removed: all five media items were unverifiable placeholders with
   * no source URLs. See documentation/CONTENT_VERIFICATION.md.
   */
  nav: [
    { href: 'index.html#profile', label: 'Profile', page: 'home' },
    { href: 'leadership.html', label: 'Leadership', page: 'leadership' },
    { href: 'projects.html', label: 'Selected Work', page: 'projects' },
    { href: 'gallery.html', label: 'Gallery', page: 'gallery' },
    { href: 'speaking.html', label: 'Speaking', page: 'speaking' },
    { href: 'index.html#contact', label: 'Contact', page: 'contact', cta: true },
  ],
};

/** Centralized local image paths (web-optimized). Originals remain in assets/images/Vince/. */
VM.images = {
  logo: 'assets/images/vincelogo.png',
  hero: 'assets/images/Vince/web/3.jpg',
  profile: 'assets/images/Vince/web/9.jpg',
  contact: 'assets/images/Vince/web/8.jpg',
  og: 'assets/images/Vince/web/og.jpg',
  speakingSuit: 'assets/images/Vince/web/2.jpg',
  speakingForum: 'assets/images/Vince/web/1.jpg',
  speakingGala: 'assets/images/Vince/web/6.jpg',
  conference: 'assets/images/Vince/web/4.jpg',
  executive: 'assets/images/Vince/web/7.jpg',
  podium: 'assets/images/Vince/web/gallery/1.jpg',
  dynamicConference: 'assets/images/Vince/web/gallery/alumni-summit.jpg',
  speakingBarrick: 'assets/images/Vince/web/gallery/event-11.jpg',
  recognition: 'assets/images/Vince/web/gallery/team-3.jpg',
  partnership: 'assets/images/Vince/web/gallery/3.jpg',
  eventStage: 'assets/images/Vince/web/gallery/4.jpg',
  eventTeam: 'assets/images/Vince/web/gallery/event-9.jpg',
  eventNetwork: 'assets/images/Vince/web/gallery/event-10.jpg',
  eventForum: 'assets/images/Vince/web/gallery/event-12.jpg',
  eventWorkshop: 'assets/images/Vince/web/gallery/event-8.jpg',
};
