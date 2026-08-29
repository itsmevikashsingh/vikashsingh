const U = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const CONTACT = {
  phone: "+91 91234 41021",
  whatsapp: "919123441021",
  email: "vikashsinghfilms@gmail.com",
  instagram: "https://instagram.com/vikashsinghfilms",
  instagramHandle: "@vikashsinghfilms",
  address: "Swarnrekha Nagar, Namkum, Ranchi, Jharkhand",
  locations: ["Ranchi", "Bhubneswar", "Jaipur", "Patna", "Delhi"],
};

export const waLink = (msg) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

export const IMAGES = {
  hero: "/vikashsinghfilms/1F666186-209F-42B3-BFAB-9B80CE0C5F17_9665B01E-2C33-4211-8963-ABBE0F0CA2EF.jpg",
  heroAlt: "public/vikashsinghfilms/DSC_8992.jpg",
  weddingDiariesCover: "wedding diaries/Picsart_24-11-25_23-20-06-725.png",
  postHouseCover: U("1607112812619-182cb1c7bb61"),
  founder: "vikashsinghfilms/20250101_072837.jpg",
  editingTimeline: U("1574717024239-25253f4ef40a"),
  sparklers: U("1465495976277-4387d4b0b4c6"),
  aisle: U("1511285560929-80b456fea0bc"),
  bride: U("1520854221256-17451cc331bf"),
  hands: U("1522673607200-164d1b6ce486"),
  venue: U("1469371670807-013ccf25f16a"),
  indianCouple: U("1583939003579-730e3918a45a"),
  mandap: U("1591604466107-ec97de577aff"),
  camera: U("1492691527719-9d1e07e534b4"),
  cinema: U("1485846234645-a62644f84728"),
  table: U("1519225421980-715cb0215aed"),
  palace: U("1532712938310-34cb3982ef74"),
  sparklerNight: U("1523438885200-e635ba2c371e"),
  photographer: U("1554080353-a576cf803bda"),
  event: U("1531058020387-3be344556be6"),
  celebration: U("1511795409834-ef04bbd61622"),
  portraitCamera: U("1542038784456-1ea8e935640e"),
  couple: U("1529634806980-85c3dd6d34ac"),
  royalBride: U("1783495681212-4cdb932e9e1d"),
  tealGoldBride: U("1756483527592-0b715e5bd08c"),
  realWedding1: U("1652950618856-2f19ae98297c"),
  coupleClassic: U("1519741497674-611481863552"),
  ceremony: U("1606800052052-a08af7148866"),
  rings: U("1460978812857-470ed1c77af0"),
};

export const MANIFESTO = [
  {
    no: "01",
    title: "The Art of Observation",
    copy: "We do not stage emotions — we wait for them. The glance a father steals, the tremor in a vow, the laughter between rituals. Our craft begins in patience and ends in frames that feel like memory itself.",
    image: IMAGES.camera,
  },
  {
    no: "02",
    title: "The Discipline of Post",
    copy: "A wedding is shot in a day but built in the edit. Inside The Post House, every frame is colour-graded, every beat is scored, every story is sculpted until it breathes like cinema.",
    image: IMAGES.editingTimeline,
  },
  {
    no: "03",
    title: "The Emotion of Story",
    copy: "Photography freezes a second. Film gives it a pulse. Together, under one roof, they become the only heirloom that grows more valuable with every passing year.",
    image: IMAGES.sparklers,
  },
];

export const BRANDS = [
  {
    id: "wedding-diaries",
    name: "WEDDING DIARIES",
    category: "Wedding Photography & Cinematography",
    description:
      "A wedding storytelling brand focused on authentic emotions, beautiful photography and cinematic wedding films.",
    services: ["Wedding Photography", "Cinematic Films", "Pre-Wedding", "Real Weddings"],
    cover: IMAGES.weddingDiariesCover,
    path: "/wedding-diaries",
    cta: "EXPLORE WEDDING DIARIES",
    status: "live",
  },
  {
    id: "the-post-house",
    name: "THE POST HOUSE",
    category: "Wedding Post Production Studio",
    description:
      "A dedicated post-production house specializing in professional wedding photo and video editing, cinematic storytelling, color grading and album design.",
    services: ["Film Editing", "Color Grading", "Photo Editing", "Album Design"],
    cover: IMAGES.postHouseCover,
    path: "/the-post-house",
    cta: "EXPLORE THE POST HOUSE",
    status: "live",
  },
  {
    id: "vs-commercials",
    name: "VS COMMERCIALS",
    category: "Brand Films & Advertising",
    description: "Cinematic commercial storytelling for luxury brands. Currently in production.",
    services: [],
    cover: IMAGES.cinema,
    path: null,
    cta: null,
    status: "soon",
  },
  {
    id: "vs-fine-art",
    name: "VS FINE ART PRINTS",
    category: "Heirloom Prints & Albums",
    description: "Museum-grade wedding prints and handcrafted albums. Launching soon.",
    services: [],
    cover: IMAGES.rings,
    path: null,
    cta: null,
    status: "soon",
  },
];

export const POST_HOUSE_SERVICES = [
  { name: "Wedding Film Editing", desc: "Full-length wedding films edited with narrative structure, pacing and emotion." },
  { name: "Cinematic Highlight Films", desc: "3–7 minute signature highlights that distill the celebration into pure cinema." },
  { name: "Full Wedding Film Editing", desc: "Ceremony-to-reception long-form edits with multi-cam sync and clean audio." },
  { name: "Wedding Reels", desc: "Vertical, social-first cuts tuned for Instagram reach and emotion." },
  { name: "Color Grading", desc: "Film-emulation grades, shot matching and skin-tone refinement in 10-bit pipelines." },
  { name: "Photo Editing", desc: "Cull, retouch and grade wedding galleries with a consistent editorial signature." },
  { name: "Album Design", desc: "Editorial album layouts designed to be opened fifty years from now." },
  { name: "Wedding Teaser Films", desc: "30–60 second teasers delivered fast, built to break the internet." },
  { name: "Trailer / Highlight Editing", desc: "Theatrical trailers with sound design, licensed scoring and title craft." },
];

export const SERVICES = [
  { name: "Wedding Photography", desc: "Editorial, candid and traditional coverage by a senior two-shooter team.", price: "From ₹1.5L", img: IMAGES.coupleClassic },
  { name: "Cinematic Wedding Films", desc: "Multi-cam 4K cinematic films with licensed scoring and drone coverage.", price: "From ₹2.5L", img: IMAGES.cinema },
  { name: "Pre-Wedding Photography", desc: "Destination pre-wedding stories — styled, directed and editorially lit.", price: "From ₹60K", img: IMAGES.couple },
  { name: "Pre-Wedding Films", desc: "Concept-led couple films shot like a short movie, graded like a feature.", price: "From ₹85K", img: IMAGES.sparklerNight },
  { name: "Event Photography", desc: "Sangeet, mehndi, engagement and reception coverage with same-week delivery.", price: "From ₹45K", img: IMAGES.celebration },
  { name: "Wedding Editing", desc: "Professional editing of your raw wedding footage by The Post House.", price: "On Request", img: IMAGES.editingTimeline },
  { name: "Color Grading", desc: "High-end film-emulation grading for wedding films and highlight reels.", price: "On Request", img: IMAGES.tealGoldBride },
  { name: "Album Design", desc: "Handcrafted editorial album design and museum-grade print finishing.", price: "From ₹25K", img: IMAGES.rings },
  { name: "Reels & Social Media Films", desc: "Vertical teasers, reels and next-day social cuts for every function.", price: "From ₹30K", img: IMAGES.photographer },
  { name: "Post Production", desc: "Complete post pipeline — edit, grade, sound, master and archive.", price: "On Request", img: IMAGES.postHouseCover },
];

export const PORTFOLIO = [
  { src: IMAGES.coupleClassic, cat: "Weddings", title: "Aisha & Rehan", loc: "Udaipur" },
  { src: IMAGES.bride, cat: "Brides", title: "Meher", loc: "New Delhi" },
  { src: IMAGES.sparklers, cat: "Events", title: "The Send-Off", loc: "Mumbai" },
  { src: IMAGES.couple, cat: "Pre-Weddings", title: "Sanya & Kabir", loc: "Goa" },
  { src: IMAGES.cinema, cat: "Cinematic Films", title: "The Kapoor Film", loc: "Jaipur" },
  { src: IMAGES.royalBride, cat: "Brides", title: "Noor", loc: "Lucknow" },
  { src: IMAGES.mandap, cat: "Weddings", title: "Meera & Arjun", loc: "Jaipur" },
  { src: IMAGES.tealGoldBride, cat: "Post Production", title: "Grade Study IV", loc: "The Post House" },
  { src: IMAGES.venue, cat: "Weddings", title: "Sofia & Advait", loc: "Amalfi Coast" },
  { src: IMAGES.hands, cat: "Details", title: "The Vow", loc: "Udaipur" },
  { src: IMAGES.celebration, cat: "Events", title: "Sangeet Night", loc: "Dubai" },
  { src: IMAGES.indianCouple, cat: "Weddings", title: "Ananya & Dev", loc: "Jodhpur" },
  { src: IMAGES.table, cat: "Details", title: "The Table", loc: "London" },
  { src: IMAGES.sparklerNight, cat: "Pre-Weddings", title: "Rhea & Vikram", loc: "Alibaug" },
  { src: IMAGES.photographer, cat: "Grooms", title: "The Groom's Hour", loc: "Mumbai" },
  { src: IMAGES.editingTimeline, cat: "Post Production", title: "Timeline 47", loc: "The Post House" },
  { src: IMAGES.rings, cat: "Details", title: "Heirlooms", loc: "Jaipur" },
  { src: IMAGES.ceremony, cat: "Weddings", title: "Ishita & Rohan", loc: "Kerala" },
];

export const PORTFOLIO_CATEGORIES = [
  "All", "Weddings", "Pre-Weddings", "Cinematic Films", "Brides", "Grooms", "Details", "Events", "Post Production",
];

export const WEDDINGS = [
  {
    couple: "Aisha & Rehan",
    location: "Udaipur City Palace",
    date: "14 February 2026",
    story: "Three days inside a palace on the lake — a nikkah at dawn, a sangeet under chandeliers, and a farewell that nobody wanted to end. We shot it like a period film and graded it like memory.",
    cover: IMAGES.coupleClassic,
    gallery: [IMAGES.venue, IMAGES.hands, IMAGES.sparklers],
    film: "Aisha & Rehan — The Udaipur Film",
  },
  {
    couple: "Meera & Arjun",
    location: "Rambagh Palace, Jaipur",
    date: "02 December 2025",
    story: "A royal Rajasthani wedding where every ritual was a frame waiting to happen. Marigold mornings, a baraat through the old city, and a pheras ceremony lit only by fire and dusk.",
    cover: IMAGES.mandap,
    gallery: [IMAGES.palace, IMAGES.indianCouple, IMAGES.rings],
    film: "Meera & Arjun — The Jaipur Film",
  },
  {
    couple: "Sofia & Advait",
    location: "Amalfi Coast, Italy",
    date: "21 September 2025",
    story: "An intimate destination wedding above the Mediterranean. Forty guests, one cliffside villa, and golden hour that lasted the entire evening. Shot on digital and 35mm.",
    cover: IMAGES.venue,
    gallery: [IMAGES.table, IMAGES.couple, IMAGES.sparklerNight],
    film: "Sofia & Advait — The Amalfi Film",
  },
];

export const TESTIMONIALS = [
  { quote: "They didn't photograph our wedding. They understood it. Every time we watch the film, we discover a moment we never saw on the day.", name: "Aisha & Rehan", detail: "Udaipur, 2026" },
  { quote: "The Post House took our raw footage and returned cinema. Our photographer could not believe it was the same wedding.", name: "Studio Meraki", detail: "Post Production Client, Mumbai" },
  { quote: "Worth every rupee and every minute of waiting. The album is the first thing guests ask to see.", name: "Meera & Arjun", detail: "Jaipur, 2025" },
];

export const TEAM = [
  { name: "Vikash Singh", role: "Founder & Creative Director", img: IMAGES.founder },
  { name: "Aarav Mehta", role: "Director of Photography", img: IMAGES.portraitCamera },
  { name: "Ira Kapoor", role: "Head Colorist, The Post House", img: IMAGES.photographer },
  { name: "Zoya Sheikh", role: "Senior Editor & Album Designer", img: IMAGES.tealGoldBride },
];

export const MARQUEE_ITEMS = [
  "Udaipur City", "Jaipur", "Ranchi", "Delhi",
  "Odisha", "Chenai", "Goa", "The Post House",
  "Wedding Diaries", "Vikash Singh Films",
];
