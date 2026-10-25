// Scope grounded in the shipped website and its implementation, rather than unmeasured business impact.
export const vactivesProject = {
  id: 'vactives',
  num: '01',
  name: 'VActives Agency',
  kind: 'Recruitment agency website & hiring enquiries',
  accent: 'green',
  image: '/vactives/home-desktop.jpg',
  liveUrl: 'https://www.vactives.com/',
  headline: 'From a recruitment agency’s first impression to a clear, working hiring enquiry.',
  blurb: 'A live recruitment website that helps businesses explore remote roles, compare support options, and send a focused hiring brief.',
  meta: {
    context: 'Client website · Latest project',
    roleTitle: 'UI/UX Design & Web Development',
    statusShort: 'Live website',
    techStack: 'Vue 3 · GSAP · Vercel · Resend',
    period: 'Aug–Oct 2026',
    deliverables: 'Responsive Home, Services & Pricing, and Contact pages; multi-role hiring enquiries; server-side email delivery; production deployment.'
  },
  thesis: 'Make the recruitment offer easy to understand, then give employers a direct route from role exploration to a useful enquiry.',
  facts: [
    ['3 Pages', 'Home, Services & Pricing, Contact'],
    ['10 Roles', 'Filterable recruitment catalogue'],
    ['Live', 'Deployed on vactives.com']
  ],
  screenTabs: [
    { id: 'home', label: '01 Home', image: '/vactives/home-desktop.jpg', caption: 'A clear recruitment proposition, human imagery, and a direct Start Hiring action.' },
    { id: 'roles', label: '02 Explore Roles', image: '/vactives/roles-desktop.jpg', caption: 'Filterable roles with responsibilities, schedules, and indicative pricing.' },
    { id: 'hiring', label: '03 Hiring Enquiry', image: '/vactives/hiring-desktop.jpg', caption: 'An employer brief with multiple roles and full-time or part-time preference.' },
    { id: 'mobile', label: '04 Mobile Home', image: '/vactives/home-mobile.jpg', caption: 'The same offer and primary actions adapted for a small screen.' }
  ],
  story: {
    headline: 'UNDERSTAND THE OFFER. FIND THE ROLE. START THE CONVERSATION.',
    problem: 'Employers need to understand what an agency provides and which roles fit their team before they are ready to make contact.',
    solution: 'A three-page journey pairs a clear agency introduction with role discovery, indicative pricing, and a concise hiring brief.'
  },
  journey: [
    { title: 'Establish the offer', detail: 'Lead with the recruitment proposition, markets served, and support beyond the hire.' },
    { title: 'Explore a relevant role', detail: 'Filter ten roles by category, then open responsibilities and practical expectations.' },
    { title: 'Send a useful brief', detail: 'Select one or more roles and an employment preference before submitting the enquiry.' },
    { title: 'Confirm the next step', detail: 'Show a clear submission result and send a separate confirmation to the visitor.' }
  ],
  decisions: [
    {
      title: 'A focused public website instead of a hiring portal',
      problem: 'The agency needs a useful initial brief before it can recommend suitable remote professionals.',
      options: 'An account-based recruitment portal versus a concise public discovery and enquiry flow.',
      decision: 'Built three public pages with Start Hiring links leading to a single employer brief.',
      why: 'Keeps the initial conversation accessible without introducing accounts or application management.',
      tradeoff: 'Candidate matching and the recruitment process continue with the agency after the enquiry.',
      result: 'Visitors can move from the agency offer to role exploration and contact without creating an account.'
    },
    {
      title: 'Capture hiring intent without a long application',
      problem: 'A business may need several roles with different working-hour expectations.',
      options: 'One generic message box versus a structured brief with role and employment choices.',
      decision: 'Combined multi-role selection, Full-time / Part-time choices, and a short free-text brief.',
      why: 'Gives the team concrete context while leaving room for an employer to explain their needs.',
      tradeoff: 'Detailed scope and final pricing still need a follow-up conversation.',
      result: 'The agency notification includes the selected roles, employment type, and the visitor’s brief.'
    },
    {
      title: 'Treat submission as a complete interaction',
      problem: 'An enquiry can fail, be clicked twice, or reach the agency while its confirmation email fails.',
      options: 'A frontend-only success message versus server-confirmed delivery and recoverable states.',
      decision: 'Added server validation, Turnstile verification, idempotency, and separate team and visitor emails.',
      why: 'The interface needs to reflect the actual submission result and allow recovery.',
      tradeoff: 'Requires server configuration and external email and anti-spam services.',
      result: 'The implemented flow distinguishes submission success, delivery failure, and a missing visitor confirmation.'
    }
  ],
  outcomes: {
    delivered: 'A deployed three-page website, responsive role catalogue, protected hiring and contact forms, branded email notifications, share metadata, and production routing.',
    hypothesized: 'Help employers understand the agency’s offer and submit a brief with enough context for a focused follow-up.',
    validationPlan: 'Observe employers finding a suitable role and completing a hiring brief; measure successful submissions and enquiry quality after launch.'
  },
  ownershipBreakdown: {
    iOwned: [
      'Website UI/UX, page hierarchy, responsive layouts, and interaction states',
      'Vue 3 components, role filters, form controls, and GSAP motion',
      'Server-side enquiry validation and Resend email integration',
      'SEO, sharing metadata, Vercel deployment, and browser verification'
    ],
    collaboratedOn: 'The agency’s service offer, official brand assets, role information, and business contact requirements.',
    outOfScope: 'Recruitment operations, candidate selection, a candidate portal, and the agency’s inbox management.'
  },
  reflections: [
    'A strong first impression needs an equally clear next step: role discovery, pricing context, and the enquiry should read as one journey.',
    'After launch, real employer feedback and enquiry quality should guide the next iteration; visual polish alone does not establish conversion impact.'
  ]
};
