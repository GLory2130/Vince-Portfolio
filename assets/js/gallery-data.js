/**
 * Vicent Manila — Gallery manifest
 * Source folder: assets/images/Vince/gallery/
 * Thumbs: assets/images/Vince/gallery/thumbs/ (web-optimized)
 *
 * To add images later: place the file in the gallery folder, generate a thumb
 * (or reuse the full path temporarily), and append an entry below.
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM) return;

  const DIR = 'assets/images/Vince/gallery/';
  const THUMBS = DIR + 'thumbs/';

  /**
   * Unique images only. Exact duplicates excluded:
   * - 5.jpeg (duplicate of 3.jpeg)
   * - 6.jpeg and _MG_0350-1.jpg.jpeg (duplicates of 4.jpeg)
   *
   * Intentionally excluded (primary subject not clearly Vicent):
   * - 2.jpeg
   * - _DSC9964.jpg.jpeg
   */
  VM.galleryImages = [
    {
      id: 'mens-circle-2026-vicent',
      src: 'assets/images/Vince/web/events/mens-circle-2026/mens-circle-vicent-manila-host.jpg',
      alt: 'The Men\'s Circle host artwork featuring Vicent Manila',
      category: 'speaking',
      title: 'The Men\'s Circle — Host',
      caption: 'Vicent Manila as host of The Men\'s Circle for AIESEC Alumni Tanzania on 17 September 2026.',
      width: 1080,
      height: 1350,
      featured: true,
    },
    {
      id: '1',
      src: DIR + '1.jpeg',
      thumb: THUMBS + '1.jpg',
      alt: 'Vicent Manila speaking at a podium during a professional event',
      category: 'speaking',
      title: 'Speaking Engagement',
      caption: 'Vicent delivering remarks at a professional leadership event.',
      width: 6000,
      height: 4000,
      featured: true,
    },
    {
      id: '3',
      src: DIR + '3.jpeg',
      thumb: THUMBS + '3.jpg',
      alt: 'Vicent Manila receiving a recognition award at Global Money Week',
      category: 'recognition',
      title: 'Professional Recognition',
      caption: 'Vicent receiving a leadership award during a professional recognition moment.',
      width: 4807,
      height: 3205,
      featured: true,
    },
    {
      id: '4',
      // Original 4.jpeg is stored sideways; use corrected display copy for lightbox
      src: THUMBS + '4-full.jpg',
      thumb: THUMBS + '4.jpg',
      original: DIR + '4.jpeg',
      alt: 'Vicent Manila standing beside an AIESEC leadership banner',
      category: 'leadership',
      title: 'Leadership Engagement',
      caption: 'Vicent during an AIESEC leadership and youth development engagement.',
      width: 3456,
      height: 5184,
      rotate180: true,
      featured: true,
    },
    {
      id: '7',
      src: DIR + '7.jpeg',
      thumb: THUMBS + '7.jpg',
      alt: 'Vicent Manila receiving a certificate at a formal recognition event',
      category: 'recognition',
      title: 'Certificate Presentation',
      caption: 'Vicent at a professional recognition ceremony.',
      width: 3600,
      height: 2400,
      featured: false,
    },
    {
      id: '8',
      src: DIR + '8.jpeg',
      thumb: THUMBS + '8.jpg',
      alt: 'Vicent Manila at a leadership conference in a facilitator shirt',
      category: 'events',
      title: 'Leadership Conference',
      caption: 'Vicent participating in a leadership conference session.',
      width: 4000,
      height: 5328,
      featured: true,
    },
    {
      id: '9',
      src: DIR + '9.jpeg',
      thumb: THUMBS + '9.jpg',
      alt: 'Vicent Manila with colleagues holding a framed certificate of appreciation',
      category: 'recognition',
      title: 'Appreciation Moment',
      caption: 'Vicent during a professional appreciation and partnership moment.',
      width: 6960,
      height: 4640,
      featured: true,
    },
    {
      id: '10',
      src: DIR + '10.jpeg',
      thumb: THUMBS + '10.jpg',
      alt: 'Vicent Manila presenting at a leadership conference',
      category: 'speaking',
      title: 'Conference Presentation',
      caption: 'Vicent facilitating a leadership presentation for participants.',
      width: 3024,
      height: 4032,
      featured: true,
    },
    {
      id: '11',
      src: DIR + '11.jpeg',
      thumb: THUMBS + '11.jpg',
      alt: 'Vicent Manila with a participant at a leadership fellowship event',
      category: 'leadership',
      title: 'Leadership Fellowship',
      caption: 'Vicent engaging with participants at a leadership fellowship gathering.',
      width: 1080,
      height: 720,
      featured: false,
    },
    {
      id: '12',
      src: DIR + '12.jpeg',
      thumb: THUMBS + '12.jpg',
      alt: 'Vicent Manila with a colleague during a partnership document exchange',
      category: 'partnerships',
      title: 'Partnership Engagement',
      caption: 'Vicent during a strategic partnership engagement.',
      width: 960,
      height: 1280,
      featured: true,
    },
    {
      id: '13',
      src: DIR + '13.jpeg',
      thumb: THUMBS + '13.jpg',
      alt: 'Vicent Manila presenting a token of appreciation with colleagues',
      category: 'recognition',
      title: 'Token of Appreciation',
      caption: 'Vicent participating in a professional recognition presentation.',
      width: 1280,
      height: 960,
      featured: false,
    },
    {
      id: '14',
      src: DIR + '14.jpeg',
      thumb: THUMBS + '14.jpg',
      alt: 'Vicent Manila seated at a formal youth empowerment partnership table',
      category: 'partnerships',
      title: 'Partnership Session',
      caption: 'Vicent during a formal partnership and youth empowerment engagement.',
      width: 2560,
      height: 1706,
      featured: false,
    },
    {
      id: '15',
      src: DIR + '15.jpeg',
      thumb: THUMBS + '15.jpg',
      alt: 'Vicent Manila speaking beside a corporate partnership banner',
      category: 'speaking',
      title: 'Partnership Stage Address',
      caption: 'Vicent speaking at a professional partnership engagement.',
      width: 2403,
      height: 3600,
      featured: true,
    },
    {
      id: '16',
      src: DIR + '16.jpeg',
      thumb: THUMBS + '16.jpg',
      alt: 'Vicent Manila at a career fair and institutional anniversary event',
      category: 'events',
      title: 'Career Fair Engagement',
      caption: 'Vicent at a professional career fair and institutional event.',
      width: 3600,
      height: 2403,
      featured: false,
    },
  ];

  VM.galleryFilters = {
    all: 'All',
    speaking: 'Speaking',
    leadership: 'Leadership',
    partnerships: 'Partnerships',
    events: 'Events',
    recognition: 'Recognition',
  };

  VM.galleryFeatured = function (limit) {
    const featured = VM.galleryImages.filter(i => i.featured);
    const pool = featured.length ? featured : VM.galleryImages;
    return pool.slice(0, limit || 6);
  };
})();
