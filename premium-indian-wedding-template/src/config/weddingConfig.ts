/**
 * ============================================================
 * WEDDING INVITATION CONFIGURATION
 * ============================================================
 * 
 * Edit this single file to customize the entire wedding invitation.
 * No code changes needed — just update the values below.
 * 
 * ============================================================
 */

export const weddingConfig = {
  // ─── COUPLE DETAILS ──────────────────────────────────
  bride: {
    firstName: "Priya",
    lastName: "Sharma",
    fullName: "Priya Sharma",
    parents: "Mr. Rajesh Sharma & Mrs. Sunita Sharma",
    grandparents: "Late Shri Mohan Lal Sharma & Smt. Kamla Sharma",
    description: "A graceful soul with a heart full of love and dreams",
  },
  groom: {
    firstName: "Arjun",
    lastName: "Patel",
    fullName: "Arjun Patel",
    parents: "Mr. Vikram Patel & Mrs. Meena Patel",
    grandparents: "Shri Harilal Patel & Smt. Pushpa Patel",
    description: "A passionate dreamer with a warm and caring spirit",
  },

  // ─── WEDDING DETAILS ─────────────────────────────────
  wedding: {
    date: "2026-02-15",
    time: "7:00 PM onwards",
    muhurat: "9:30 PM - 10:30 PM",
    venue: {
      name: "Taj Lake Palace",
      address: "Pichola, Udaipur, Rajasthan 313001, India",
      city: "Udaipur",
      state: "Rajasthan",
      mapUrl: "https://maps.google.com/?q=Taj+Lake+Palace+Udaipur",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.123!2d73.6774!3d24.5743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967efe5a8a7a0a7%3A0x3c7a3b3c3c3c3c3c!2sTaj+Lake+Palace!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
      phone: "+91-294-242-8800",
    },
    dressCode: "Traditional Indian Attire",
  },

  // ─── EVENTS ───────────────────────────────────────────
  events: [
    {
      name: "Haldi",
      emoji: "🌼",
      date: "2026-02-12",
      time: "10:00 AM - 1:00 PM",
      venue: "Poolside, Taj Lake Palace",
      dressCode: "Yellow Traditional",
      description: "Join us for the auspicious turmeric ceremony as we prepare the couple for their big day with love, laughter, and blessings.",
      image: "https://images.pexels.com/photos/31002035/pexels-photo-31002035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      color: "#F59E0B",
    },
    {
      name: "Mehendi",
      emoji: "🌿",
      date: "2026-02-13",
      time: "4:00 PM - 9:00 PM",
      venue: "Garden Lawn, Taj Lake Palace",
      dressCode: "Green & Colorful Attire",
      description: "An evening of art, music, and celebration as intricate henna designs adorn the bride's hands — a symbol of love and joy.",
      image: "https://images.pexels.com/photos/29623186/pexels-photo-29623186.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      color: "#10B981",
    },
    {
      name: "Sangeet",
      emoji: "🎶",
      date: "2026-02-14",
      time: "7:00 PM onwards",
      venue: "Grand Ballroom, Taj Lake Palace",
      dressCode: "Glamorous Party Wear",
      description: "A night of music, dance, and celebration! Families come together for an unforgettable evening of performances and memories.",
      image: "https://images.pexels.com/photos/14395559/pexels-photo-14395559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      color: "#8B5CF6",
    },
    {
      name: "Wedding",
      emoji: "💍",
      date: "2026-02-15",
      time: "7:00 PM - 12:00 AM",
      venue: "Main Hall, Taj Lake Palace",
      dressCode: "Traditional Indian Attire",
      description: "The most magical moment — witness Priya & Arjun tie the knot in a beautiful traditional ceremony under the stars.",
      image: "https://images.pexels.com/photos/25742763/pexels-photo-25742763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      color: "#DC2626",
    },
    {
      name: "Reception",
      emoji: "🥂",
      date: "2026-02-16",
      time: "7:00 PM onwards",
      venue: "Royal Terrace, Taj Lake Palace",
      dressCode: "Formal / Semi-Formal",
      description: "An elegant evening to celebrate the newlyweds. Join us for dinner, dancing, and toasts to a beautiful future together.",
      image: "https://images.pexels.com/photos/12432503/pexels-photo-12432503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      color: "#EC4899",
    },
  ],

  // ─── OUR STORY TIMELINE ──────────────────────────────
  story: [
    {
      title: "How We Met",
      date: "March 2020",
      description: "Our eyes met across a crowded coffee shop in Mumbai. What started as a shared table during rush hour turned into hours of conversation, laughter, and the beginning of something beautiful.",
      emoji: "☕",
    },
    {
      title: "First Date",
      date: "April 2020",
      description: "A sunset walk along Marine Drive, street food at Juhu Beach, and conversations that lasted until the stars came out. We knew this was the start of forever.",
      emoji: "🌅",
    },
    {
      title: "Falling in Love",
      date: "December 2020",
      description: "From late-night calls to surprise visits, every moment together felt like a movie scene. Our families met and instantly connected — it was destiny.",
      emoji: "💕",
    },
    {
      title: "The Proposal",
      date: "November 2025",
      description: "Under the stars at the City Palace in Udaipur, with the lake shimmering in the moonlight, Arjun got down on one knee. Through tears of joy, Priya said 'Yes!'",
      emoji: "💍",
    },
    {
      title: "And Now... Forever",
      date: "February 2026",
      description: "Two souls, one journey. We invite you to witness and bless the beginning of our forever as we tie the knot in the city where it all began.",
      emoji: "🕊️",
    },
  ],

  // ─── FAMILY ───────────────────────────────────────────
  family: {
    bride: [
      { name: "Mr. Rajesh Sharma", relation: "Father of the Bride", emoji: "👨" },
      { name: "Mrs. Sunita Sharma", relation: "Mother of the Bride", emoji: "👩" },
      { name: "Rahul Sharma", relation: "Brother of the Bride", emoji: "👦" },
      { name: "Neha Sharma", relation: "Sister of the Bride", emoji: "👧" },
    ],
    groom: [
      { name: "Mr. Vikram Patel", relation: "Father of the Groom", emoji: "👨" },
      { name: "Mrs. Meena Patel", relation: "Mother of the Groom", emoji: "👩" },
      { name: "Rohit Patel", relation: "Brother of the Groom", emoji: "👦" },
      { name: "Kavita Patel", relation: "Sister of the Groom", emoji: "👧" },
    ],
  },

  // ─── GALLERY ──────────────────────────────────────────
  gallery: [
    {
      url: "https://images.pexels.com/photos/35069916/pexels-photo-35069916.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Our Love Story",
      aspect: "portrait",
    },
    {
      url: "https://images.pexels.com/photos/25742763/pexels-photo-25742763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: "Together Forever",
      aspect: "landscape",
    },
    {
      url: "https://images.pexels.com/photos/11091448/pexels-photo-11091448.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Exchanging Garlands",
      aspect: "portrait",
    },
    {
      url: "https://images.pexels.com/photos/30184621/pexels-photo-30184621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Floral Mandap",
      aspect: "portrait",
    },
    {
      url: "https://images.pexels.com/photos/36965760/pexels-photo-36965760.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Walking Together",
      aspect: "portrait",
    },
    {
      url: "https://images.pexels.com/photos/28210870/pexels-photo-28210870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Traditional Portrait",
      aspect: "portrait",
    },
    {
      url: "https://images.pexels.com/photos/570031/pexels-photo-570031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: "Udaipur Palace",
      aspect: "landscape",
    },
    {
      url: "https://images.pexels.com/photos/33885307/pexels-photo-33885307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Colorful Celebration",
      aspect: "landscape",
    },
  ],

  // ─── CONTACT & RSVP ──────────────────────────────────
  contact: {
    phone: "+91-98765-43210",
    whatsapp: "+919876543210",
    email: "priyaarjun2026@gmail.com",
    rsvpDeadline: "2026-01-30",
  },

  // ─── TRAVEL & ACCOMMODATION ──────────────────────────
  travel: {
    nearestAirport: "Maharana Pratap Airport, Udaipur (UDR)",
    nearestRailway: "Udaipur City Railway Station",
    hotels: [
      { name: "Taj Lake Palace", type: "5 Star", distance: "Venue", link: "#" },
      { name: "The Oberoi Udaivilas", type: "5 Star", distance: "5 km", link: "#" },
      { name: "Trident Udaipur", type: "5 Star", distance: "3 km", link: "#" },
    ],
  },

  // ─── MUSIC ─────────────────────────────────────────────
  // Provide a direct URL to an MP3 file for background music.
  // Leave empty ("") to use the built-in ambient tanpura drone.
  // Example: "https://your-domain.com/assets/music/shehnai.mp3"
  music: {
    // Put your custom song file inside: public/music/
    // Example file: public/music/wedding-song.mp3
    // Then set url to: "/music/wedding-song.mp3"
    url: "/music/wedding-song.mp3",
    title: "Our Wedding Song",
    fileName: "wedding-song.mp3",
    autoplay: true,
    loop: true,
    volume: 0.4,
  },

  // ─── THEME & STYLING ─────────────────────────────────
  theme: {
    primary: "#8B1A1A",       // Deep Maroon
    secondary: "#D4A853",     // Royal Gold
    accent: "#2D5016",        // Emerald Green
    background: "#FFF8F0",    // Ivory
    text: "#2D1B0E",          // Dark Brown
    darkBg: "#1A0A0A",        // Deep dark
  },

  // ─── QUOTES & BLESSINGS ──────────────────────────────
  quotes: [
    "Two souls with but a single thought, two hearts that beat as one.",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    "Where there is love there is life. — Mahatma Gandhi",
    "The greatest thing you'll ever learn is just to love and be loved in return.",
    "Love is not about how many days, months, or years you have been together. It's about how much you love each other every single day.",
  ],

  blessings: [
    "May your journey together be filled with love, laughter, and endless blessings. 🙏",
    "Wishing you both a lifetime of happiness and togetherness. शुभ विवाह! 💐",
    "May Lord Ganesha bless your union with prosperity and joy. 🙏🏻",
    "Two beautiful souls, one beautiful journey. Congratulations! 🎉",
    "May your love story inspire generations to come. 💕",
  ],

  // ─── SOCIAL MEDIA ─────────────────────────────────────
  social: {
    hashtag: "#PriyaWedsArjun",
    instagram: "@priyaarjun2026",
  },

  // ─── LANGUAGES ────────────────────────────────────────
  defaultLanguage: "en",
  languages: {
    en: {
      heroSubtitle: "Together with our families",
      heroAction: "Open Invitation",
      rsvpTitle: "RSVP",
      eventsTitle: "Wedding Events",
      storyTitle: "Our Love Story",
      galleryTitle: "Gallery",
      familyTitle: "Our Families",
      venueTitle: "Venue",
      countdownTitle: "Counting Down To Forever",
      wishesTitle: "Wishes & Blessings",
      travelTitle: "Travel & Stay",
      footerText: "Made with ❤️ for Priya & Arjun",
    },
    hi: {
      heroSubtitle: "हमारे परिवारों के साथ",
      heroAction: "निमंत्रण खोलें",
      rsvpTitle: "उपस्थिति की पुष्टि",
      eventsTitle: "विवाह कार्यक्रम",
      storyTitle: "हमारी प्रेम कहानी",
      galleryTitle: "गैलरी",
      familyTitle: "हमारे परिवार",
      venueTitle: "स्थान",
      countdownTitle: "हमेशा के लिए उलटी गिनती",
      wishesTitle: "शुभकामनाएं और आशीर्वाद",
      travelTitle: "यात्रा और ठहरना",
      footerText: "प्रिया और अर्जुन के लिए ❤️ से बनाया गया",
    },
  },

  // ─── FAQ ──────────────────────────────────────────────
  faq: [
    {
      question: "What is the dress code?",
      answer: "Traditional Indian attire is preferred. Ladies can wear sarees or lehengas, and gentlemen can wear sherwanis or kurta-pajamas.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, complimentary valet parking is available at Taj Lake Palace for all wedding guests.",
    },
    {
      question: "Can I bring a plus one?",
      answer: "We'd love to have your partner join us! Please mention them in your RSVP so we can make arrangements.",
    },
    {
      question: "Will there be vegetarian food?",
      answer: "Yes! We'll have an extensive vegetarian and non-vegetarian menu curated by the finest chefs.",
    },
    {
      question: "What is the nearest airport?",
      answer: "Maharana Pratap Airport, Udaipur (UDR) is about 25 km from the venue. We can arrange pickup for outstation guests.",
    },
  ],
};

export type WeddingConfig = typeof weddingConfig;
