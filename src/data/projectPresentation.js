// Concise presentation copy; complete process notes remain in the project records.
const screen = (id, label, image, caption = label) => ({ id, label, image, caption });

export const projectPresentation = {
  vactives: {
    category: 'websites', type: 'Recruitment website', role: 'UI/UX + Development', stage: 'Live website', color: '#e3eadb', ink: '#173c32', logo: '/brands/vactives.png',
    tagline: 'A clearer way to build a remote team.',
    brief: 'Help employers understand the offer, explore roles, and send a useful hiring brief.',
    solution: 'Three public pages connect role discovery to a protected, multi-role enquiry.',
    contribution: ['Website UI/UX & responsive layouts', 'Vue components & GSAP interactions', 'Enquiry API & email integration', 'SEO, deployment & verification'],
    takeaways: ['A focused three-page journey', 'Role discovery before the enquiry', 'Clear success and recovery states'],
    screens: [screen('home', 'Home', '/vactives/home-desktop.jpg', 'A clear offer and a direct next step.'), screen('roles', 'Explore roles', '/vactives/roles-desktop.jpg', 'Filter roles before starting a conversation.'), screen('hiring', 'Hiring enquiry', '/vactives/hiring-desktop.jpg', 'Multiple roles. One focused brief.'), screen('mobile', 'Mobile', '/vactives/home-mobile.jpg', 'The same journey, on a smaller screen.')]
  },
  goldera: {
    category: 'product', type: 'Enterprise CRM', role: 'UI/UX Design', stage: 'Client design', color: '#eee4ca', ink: '#695217', logo: '/brands/goldera.webp',
    tagline: 'One CRM. Three different responsibilities.',
    brief: 'Managers need visibility. Field teams need focused visit entry. One interface has to serve both.',
    solution: 'Three role-specific dashboards share the same components and design foundation.',
    contribution: ['Approximately 50 interface screens', 'Role-based information architecture', 'Reusable Figma component library', 'Developer handoff & edge states'],
    takeaways: ['Three views, one design system', 'Visit entry without losing context'],
    screens: [screen('manager', 'Manager', '/Golderapharm/Manager Dashboard.png', 'Performance and approvals at a glance.'), screen('supervisor', 'Supervisor', '/Golderapharm/Supervisor Dashboard.png', 'Team visibility and field coaching.'), screen('rep', 'Medical rep', '/Golderapharm/Medical Rep Dashboard.png', 'Daily actions, with less distraction.'), screen('target', 'Targets', '/Golderapharm/Target.png', 'Allocate targets across the team.'), screen('map', 'Territory', '/Golderapharm/Territory Map.png', 'Territory coverage in context.'), screen('logging', 'Visit entry', '/Golderapharm/Add new visit-1.png', 'A focused drawer for recording visits.')]
  },
  smartmeet: {
    category: 'product', type: 'AI meeting workspace', role: 'UI/UX + Frontend', stage: 'Graduation prototype', color: '#dce4f1', ink: '#193a6a',
    tagline: 'Turn meeting noise into a clear next step.',
    brief: 'Meeting notes, decisions, and action items are easy to lose across disconnected tools.',
    solution: 'A review workspace keeps generated content in context and gives people the final say.',
    contribution: ['Product UI/UX & Figma prototype', 'Design tokens & reusable components', 'Vue frontend implementation', 'Meeting review & task states'],
    takeaways: ['Review everything in context', 'Confirm tasks before they sync'],
    screens: [screen('review', 'Meeting review', '/smartmeet-pages/Codex Image Aug 17, 2026, 06_29_53 PM.png', 'Summary, decisions, and actions together.'), screen('tasks', 'Task board', '/smartmeet-pages/Codex Image Aug 17, 2026, 06_30_03 PM.png', 'Review actions before they become commitments.'), screen('knowledge', 'Knowledge AI', '/smartmeet-pages/knowledge-ai.jpg', 'Search across meeting knowledge.'), screen('dashboard', 'Dashboard', '/smartmeet-pages/Codex Image Aug 17, 2026, 06_29_59 PM.png', 'A starting point for recent meetings.'), screen('schedule', 'New meeting', '/smartmeet-pages/Codex Image Aug 17, 2026, 06_30_07 PM.png', 'Meeting details, participants, and scheduling.'), screen('archive', 'Archive', '/smartmeet-pages/archive.jpg', 'An intentional archive empty state.')]
  },
  wecare: {
    category: 'product', type: 'Healthcare app', role: 'UI/UX Design', stage: 'UX exploration', color: '#d4ebf7', ink: '#075c7c', mobile: true,
    tagline: 'Less uncertainty. A calmer path to care.',
    brief: 'Choosing a doctor is harder when availability, credentials, and fees are unclear.',
    solution: 'Bring the important details forward, then guide patients through three booking steps.',
    contribution: ['Doctor discovery & booking flows', '20+ mobile interface screens', 'Trust hierarchy & pricing clarity', 'Reusable mobile components'],
    takeaways: ['One decision per booking step', 'Trust before the booking'],
    screens: [screen('discover', 'Discover', '/WeCare/Home.png', 'Specialists and upcoming care in one place.'), screen('schedule', 'Doctor & schedule', '/WeCare/Doctor’s Info.png', 'Credentials, fees, and availability upfront.'), screen('confirm', 'Confirmation', '/WeCare/Checkout.png', 'A clear confirmation and next step.'), screen('search', 'Search', '/WeCare/Search.png', 'Find a relevant specialist.'), screen('details', 'Booking details', '/WeCare/Appointment Details.png', 'Review the appointment before paying.'), screen('payment', 'Payment', '/WeCare/Payment methods.png', 'Choose a payment method.'), screen('chat', 'Telehealth', '/WeCare/Chat option.png', 'Continue the conversation after booking.'), screen('audio', 'Audio call', '/WeCare/Audio call.png', 'Simple in-call controls.'), screen('profile', 'Profile', '/WeCare/Chat option-1.png', 'Appointments and account information.')]
  },
  hmz: {
    category: 'product', type: 'Learning platform', role: 'UI/UX Design', stage: 'Team UX prototype', color: '#eddcd4', ink: '#7a3e28',
    tagline: 'Make the next learning step easier to see.',
    brief: 'Long course lists make it hard to understand progress and know where to continue.',
    solution: 'A clear course structure and learner dashboard make progress visible.',
    contribution: ['User flows & wireframes', '15+ platform pages', 'Learner dashboard & course UI', 'Reusable Figma components'],
    takeaways: ['Progress over endless course lists'],
    screens: [screen('home', 'Home', '/HMZ/Home.png', 'A welcoming entry into the learning journey.'), screen('courses', 'Courses', '/HMZ/Courses.png', 'Compare and discover courses.'), screen('course', 'Course player', '/HMZ/Course Info.png', 'A structured path through each module.'), screen('dashboard', 'Dashboard', '/HMZ/Dashboard.png', 'Progress and active learning at a glance.'), screen('pricing', 'Pricing', '/HMZ/Pricing.png'), screen('services', 'Services', '/HMZ/Services.png')]
  },
  franchise212: {
    category: 'websites', type: 'Franchise discovery', role: 'UI/UX Design', stage: 'Client design', color: '#d9ddd5', ink: '#323d36',
    tagline: 'Give a business idea room to be understood.',
    brief: 'Prospective partners need a clear view of the offer before starting an investment conversation.',
    solution: 'Four destinations give the brand story, product categories, and enquiry a clear place.',
    contribution: ['Responsive website UI/UX', 'Home, About, Products & Contact', 'Mobile navigation & layouts', 'Design handoff'],
    takeaways: ['Build trust before asking for contact'],
    screens: [screen('home', 'Home', '/212/Home.jpg', 'An editorial introduction to the concept.'), screen('products', 'Products', '/212/Products.jpg', 'A visual route into franchise categories.'), screen('about', 'About', '/212/About us.jpg', 'The context behind the business.'), screen('mobile', 'Mobile home', '/212/mob home.jpg'), screen('contact', 'Contact', '/212/Contact us.jpg'), screen('solar', 'Clean energy', '/212/solar.jpg')]
  },
  imdb: {
    category: 'product', type: 'Entertainment discovery', role: 'UI/UX Design', stage: 'UI concept', color: '#232735', ink: '#ffffff',
    tagline: 'Let the film do the talking.',
    brief: 'Dense entertainment pages compete with the artwork and details people came to find.',
    solution: 'A cinematic dark hierarchy brings films, ratings, and cast into focus.',
    contribution: ['Discovery & movie detail concepts', 'Search and filtering layouts', 'Cast and watchlist interfaces', 'Cinematic visual system'],
    takeaways: ['Artwork first. Details within reach.'],
    screens: [screen('details', 'Movie details', '/IMDB Redesign/IMDB 2Redesign.jpg', 'Artwork, ratings, and cast with a clear hierarchy.'), screen('discovery', 'Discovery', '/IMDB Redesign/S6.png'), screen('watchlist', 'Watchlist', '/IMDB Redesign/S7.png'), screen('search', 'Search', '/IMDB Redesign/S8.png'), screen('system', 'System', '/IMDB Redesign/Frame 1948755426.png'), screen('cover', 'Light & dark', '/IMDB Redesign/Cover - Light.jpg')]
  }
};
export function getPresentation(id) { return Object.hasOwn(projectPresentation, id) ? projectPresentation[id] : null; }
export const workFilters = [{ id: 'all', label: 'All work' }, { id: 'product', label: 'Product design' }, { id: 'websites', label: 'Websites' }, { id: 'visual', label: 'Brand & visual' }];
export const archivePresentation = {
  ieee: { category: 'visual', type: 'Community & campaigns', role: 'Media direction', stage: 'Student leadership', color: '#c4d7ed', ink: '#123a64', cover: '/ieee/Branding/Free_Flag_Mockup_1.jpg' },
  cela: { category: 'visual', type: 'Travel & advertising', role: 'Graphic design', stage: 'Brand campaigns', color: '#ebd9c8', ink: '#6b401d', cover: '/Cela/Dahab_22.jpg' },
  moon: { category: 'visual', type: 'Fragrance identity', role: 'Brand & packaging', stage: 'Visual identity', color: '#d4c7ae', ink: '#4d3c22', cover: '/Moon/2.jpg' }
};
