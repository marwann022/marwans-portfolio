export const projects = {
  smartmeet: {
    id: "smartmeet",
    num: "03",
    name: "SmartMeet",
    kind: "AI meeting intelligence & workspace",
    accent: "blue",
    image: "/Thumbnail.png",
    headline: "Meetings that leave<br>something behind.",
    blurb: "AI meeting intelligence and productivity platform transforming live conversations into structured transcripts, action items, decisions, and team knowledge.",
    facts: [
      ["AI", "Meeting intelligence & summaries"],
      ["RAG", "Knowledge search across chats"],
      ["Vue + Node", "Full-stack web application"]
    ],
    overview: {
      client: "ITI Graduation Capstone Project",
      timeframe: "4 Months (2025-2026)",
      team: "4 Engineers & Designers (Marwan: UX/UI Lead & Frontend Engineer)",
      role: "Lead Product Designer & Frontend Developer",
      platforms: "Responsive Web Application",
      tools: "Figma, Vue 3, Vite, TailwindCSS, Express, MongoDB"
    },
    sections: {
      problem: "Teams lose critical context after video meetings finish. Action items get buried in raw recordings or unorganized chat threads, forcing employees to spend hours re-watching meetings.",
      constraints: "Tight 4-month development deadline with a 4-person team. AI API latency (3–5 seconds per summary) required clear loading UI states so users didn't assume the app was broken.",
      research: "Surveyed 28 ITI engineering students and instructors. 82% reported missing assigned follow-ups from project meetings because action items were not centralized.",
      coreInsight: "A transcript is noise; actionable extraction is signal. The interface must highlight generated action items directly alongside speaker timestamps.",
      decisions: [
        {
          title: "Split-Screen Meeting Workspace",
          problem: "Users switched back and forth between video view, transcripts, and task notes.",
          options: "Tabbed sidebar vs. persistent split workspace view.",
          decision: "Created a persistent split view with sync-scrolling transcript and AI highlights.",
          reason: "Keeps context visible at all times without losing video focus.",
          consequence: "Reduced post-meeting task review time significantly during usability testing."
        }
      ],
      outcomes: {
        type: "qualitative",
        measured: "Successfully built and deployed working prototype tested with 3 student project teams.",
        qualitative: "Awarded top grade for UI clarity and frontend execution at ITI graduation evaluation."
      },
      reflection: "Combining product design with frontend coding ensured every UI decision was technically feasible. In future iterations, I would add keyboard shortcuts for transcript bookmarking."
    },
    blocks: [
      ["THE PRODUCT VISION", "SmartMeet transforms passive meetings into actionable knowledge by pairing live transcription with AI summaries, automated task extraction, and organization-level data isolation."],
      ["ENGINEERING & DESIGN ROLE", "I led UI/UX design in Figma and contributed to front-end engineering using Vue 3 & Vite, integrated with Node.js, Express, MongoDB, and REST APIs."],
      ["IMPACT & VALIDATION", "Delivered a functional multi-tenant SaaS platform that simplified post-meeting follow-ups and made organizational knowledge instantly searchable."]
    ],
    roleMap: [
      "Real-time transcription & speaker tagging",
      "Automated AI summary & action item extraction",
      "Cross-meeting knowledge search & task sync"
    ]
  },
  wecare: {
    id: "wecare",
    num: "02",
    name: "WeCare",
    kind: "Healthcare appointment experience",
    accent: "blue",
    image: "https://drive.google.com/thumbnail?id=10ndQUkdxh0OSo-qoMa5XY3AgV-cU1zcE&sz=w1600",
    headline: "Care journeys deserve<br>calm interfaces.",
    blurb: "End-to-end healthcare product experience covering doctor discovery, progressive 3-step scheduling, transparent pricing, and post-care support.",
    facts: [
      ["20+", "Mobile screens designed"],
      ["End-to-end", "Patient care journey"],
      ["UX Focus", "Anxiety-reducing workflows"]
    ],
    overview: {
      client: "Healthcare Mobile App Exploration",
      timeframe: "2 Months (2024)",
      team: "Product Designer (Solo)",
      role: "Mobile UX/UI Designer",
      platforms: "iOS / Android Mobile Native UI",
      tools: "Figma, Mobile Interaction Patterns"
    },
    sections: {
      problem: "Medical booking apps often overwhelm anxious patients with dense clinical jargon, complex calendars, and unclear pricing.",
      constraints: "Designed for small touchscreen interfaces (375px width base) requiring large touch targets and minimum 16px body text for accessibility.",
      research: "Reviewed top telehealth apps and identified key user anxieties: hidden consultation fees and fear of missing appointment details.",
      coreInsight: "Calm visual design and clear step-by-step confirmation loops build patient confidence.",
      decisions: [
        {
          title: "3-Step Wizard Booking Flow",
          problem: "Single-page booking forms resulted in high drop-off on mobile.",
          options: "Long scrolling form vs. progressive 3-step wizard (Doctor → Date/Time → Confirmation).",
          decision: "Implemented progressive 3-step wizard with clear progress indicator.",
          reason: "Reduces cognitive burden when selecting sensitive medical consultations.",
          consequence: "Simplified navigation flow with clear cost breakdowns at each step."
        }
      ],
      outcomes: {
        type: "qualitative",
        measured: "20+ mobile screens designed and linked into a high-fidelity clickable prototype.",
        qualitative: "Praised by peer designers for clear typography and anxiety-reducing aesthetic."
      },
      reflection: "Designing for healthcare demands strict attention to clarity, contrast, and reassuring feedback state design."
    },
    blocks: [
      ["THE PATIENT EXPERIENCE", "Mapped patient touchpoints from onboarding and specialist search through scheduling, payment confirmation, direct chat, and follow-up alerts."],
      ["ACCESSIBLE SYSTEM", "Designed with clear status indicators, supportive UI micro-copy, and accessible decision points to make medical tasks straightforward and reassuring."],
      ["DESIGN OUTCOME", "Created a patient-first healthcare experience that minimizes booking steps and keeps critical care details easily accessible."]
    ],
    roleMap: [
      "Find the right specialist doctor",
      "Book appointment & pay securely",
      "Access post-care support & messaging"
    ]
  },
  goldera: {
    id: "goldera",
    num: "01",
    name: "GolderaPharm",
    kind: "Role-based pharmaceutical CRM",
    accent: "lime",
    image: "/assets/golderapharm-cover.png",
    headline: "One operating system.<br>Three ways through it.",
    blurb: "Enterprise CRM for pharmaceutical field teams managing doctors, visits, planning, performance, and reporting across three operational roles.",
    facts: [
      ["3", "Tailored user roles mapped"],
      ["50+", "High-fidelity UI screens"],
      ["1", "Scalable Figma design system"]
    ],
    overview: {
      client: "GolderaPharm",
      timeframe: "3 Months (2026)",
      team: "Lead Product Designer (Solo) collaborating with 2 Backend Engineers",
      role: "Lead UI/UX Designer & Design Systems Architect",
      platforms: "Web Dashboard & Tablet/Mobile Field Web App",
      tools: "Figma, User Flow Mapping, Design Tokens"
    },
    sections: {
      problem: "Pharmaceutical sales operations were hindered by fragmented tools. Managers lacked high-level revenue and visit metrics; Supervisors struggled with real-time field tracking; and Medical Representatives spent up to 40% of their workday navigating clutter to log doctor visits.",
      constraints: "Strict compliance regulations required immutable audit logs for sample distribution. The development team was limited to standard UI components, requiring high reuse of a lean design system without complex custom charts.",
      research: "Observed 4 field sales representatives during client visits and interviewed 2 sales directors. Identified that representatives needed sub-30-second visit logging on mobile, while managers required aggregated weekly metrics.",
      coreInsight: "A single monolithic interface fails multi-persona operations. Customizing information density per role dramatically reduces cognitive load and field reporting friction.",
      decisions: [
        {
          title: "Role-Tailored Information Density",
          problem: "Overwhelming Medical Reps with Manager-level macro dashboards caused field logging delays.",
          options: "Toggleable widget dashboards vs. dedicated role-scoped view templates.",
          decision: "Built dedicated, role-scoped view templates for Managers, Supervisors, and Reps.",
          reason: "Medical Reps need instant task execution; Managers need analytical aggregation.",
          consequence: "Streamlined field logging to 3 actions while giving management clear weekly visibility."
        },
        {
          title: "Offline-First Mobile Visit Form",
          problem: "Medical Reps frequently enter clinics with poor network connectivity.",
          options: "Blocking modal form vs. progressive auto-saving drawer.",
          decision: "Implemented a lightweight auto-saving drawer with offline local storage queuing.",
          reason: "Ensures Reps never lose visit notes or sample requests due to dropped connection.",
          consequence: "Zero data loss reported during field testing."
        }
      ],
      outcomes: {
        type: "qualitative",
        measured: "Reduced field visit logging time from 4.5 minutes down to ~45 seconds.",
        qualitative: "Approved by leadership for production rollout; adopted by 3 regional sales teams as their standard operating interface."
      },
      reflection: "Designing for enterprise SaaS requires deep empathy for physical operational constraints. Next time, I would spend more initial time defining empty and edge states for sparse data views."
    },
    blocks: [
      ["THE OPERATIONAL CHALLENGE", "Pharma operations involve 3 distinct operational personas: Managers need performance oversight across sales targets, Supervisors require real-time team tracking and visit follow-ups, and Medical Representatives demand a rapid, distraction-free field logging tool."],
      ["THE SYSTEM ARCHITECTURE", "I mapped the role-based experience end-to-end, constructed a modular design system in Figma, created 50+ high-fidelity screens, and established clean component specs for developer handoff."],
      ["THE PRODUCT OUTCOME", "Delivered a unified pharmaceutical CRM operating system that streamlined field representative reporting and provided leadership with real-time operational visibility."]
    ],
    roleMap: [
      "Manager: Macro performance visibility & target tracking",
      "Supervisor: Real-time team activity & visit approvals",
      "Medical Representative: Mobile-first field visit & sample logging"
    ]
  },
  hmz: {
    id: "hmz",
    num: "04",
    name: "HMZ",
    kind: "E-learning UX case study",
    accent: "coral",
    image: "https://drive.google.com/thumbnail?id=1eyyBc02D7vPxCUSO2kxjI38tHjAwJtNt&sz=w1600",
    headline: "Learning flows should feel<br>like progress.",
    blurb: "An E-learning experience designed from deep UX research through a scalable, accessible interface system.",
    facts: [
      ["15+", "Designed platform pages"],
      ["1", "Scalable component system"],
      ["End-to-end", "UX process & prototype"]
    ],
    overview: {
      client: "EdTech UX Exploration",
      timeframe: "2 Months (2025)",
      team: "Product Designer (Solo)",
      role: "UX Researcher & Product Designer",
      platforms: "Web & Mobile Web",
      tools: "Figma, User Interviews, Wireframing, System Design"
    },
    sections: {
      problem: "Online course platforms suffer from high drop-off rates because course navigation is cluttered, progress tracking is ambiguous, and students feel isolated.",
      constraints: "Designed as an independent case study without live analytics, relying on qualitative interviews and heuristic evaluations of existing platforms (Coursera, Udemy).",
      research: "Conducted interviews with 6 university students. Key friction points included difficult module navigation and lack of visual momentum.",
      coreInsight: "Learners stay motivated when progress is tangible. Visual milestones and bite-sized curriculum structures reduce overwhelm.",
      decisions: [
        {
          title: "Structured Course Rhythm Layout",
          problem: "Students felt overwhelmed by long lists of video links.",
          options: "Accordion list vs. visual progress timeline with milestone cards.",
          decision: "Designed a visual milestone timeline showing completed, active, and upcoming units.",
          reason: "Reinforces sense of achievement and provides clear entry points.",
          consequence: "Tested with 4 users; 100% completed mock navigation tasks without getting lost."
        }
      ],
      outcomes: {
        type: "qualitative",
        measured: "Completed end-to-end Figma prototype covering discovery, learning view, dashboard, and leaderboard.",
        qualitative: "Validated through 4 usability test sessions with strong positive feedback on visual progress tracking."
      },
      reflection: "Focusing on information hierarchy before visual aesthetics led to a vastly cleaner student experience."
    },
    blocks: [
      ["THE UX DISCOVERY", "Conducted user research, defined student personas, mapped site navigation, and constructed interactive wireframes to validate core learning journeys before visual design."],
      ["THE PLATFORM EXPERIENCE", "Designed end-to-end platform workflows including course discovery, detailed module views, learner dashboards, gamified leaderboards, and AI tutor chat."],
      ["THE INTERFACE SYSTEM", "Built a reusable design system in Figma with accessible contrast, consistent typography hierarchy, and scalable component patterns."]
    ],
    roleMap: [
      "Course discovery & enrollment",
      "Structured learning rhythm & progress tracking",
      "Gamified leaderboard & achievement rewards"
    ]
  },
  franchise212: {
    id: "franchise212",
    num: "05",
    name: "212° Franchise",
    kind: "Franchise discovery platform",
    accent: "sand",
    image: "https://drive.google.com/thumbnail?id=1yjJZMAehkVqVFZWz0YXZWYp5f52jyRjr&sz=w1600",
    headline: "A franchise journey<br>with room to grow.",
    blurb: "A responsive franchise discovery platform helping prospective partners explore concepts, product categories, and initiate contact.",
    facts: [
      ["Web + Mobile", "Responsive design"],
      ["4", "Core public destinations"],
      ["UI/UX", "Product design & branding"]
    ],
    overview: {
      client: "212° Franchise",
      timeframe: "1.5 Months (2024)",
      team: "UI/UX Designer collaborating with Brand Lead",
      role: "Product & Web UI/UX Designer",
      platforms: "Responsive Desktop & Mobile Web",
      tools: "Figma, Brand Strategy, Layout Grid"
    },
    sections: {
      problem: "Prospective franchisees found traditional franchise brochures dense and difficult to navigate on mobile devices, resulting in low inquiry conversion.",
      constraints: "Brand assets were pre-established; design needed to elevate the visual narrative while adhering strictly to existing brand guidelines.",
      research: "Evaluated 5 franchise discovery portals. Most buried contact details under complex multi-page questionnaires.",
      coreInsight: "Build investor trust through transparent visual storytelling before asking for an inquiry submission.",
      decisions: [
        {
          title: "Direct 4-Destination Information Architecture",
          problem: "Information was fragmented across sub-menus.",
          options: "Multi-level dropdown menu vs. simple 4-page hierarchy (Home, About, Products, Contact).",
          decision: "Structured the site into 4 primary destinations with persistent direct CTAs.",
          reason: "Enables prospective partners to reach key financial and product info within 1 click.",
          consequence: "Dramatically simplified navigation on both mobile and desktop viewports."
        }
      ],
      outcomes: {
        type: "qualitative",
        measured: "Delivered responsive high-fidelity prototypes across Home, About, Product Showcase, and Contact routes.",
        qualitative: "Client approved layout for production build, praising clear mobile presentation."
      },
      reflection: "Restraint in web layout creates a premium feel. Avoiding excessive animations kept the focus on brand credibility."
    },
    blocks: [
      ["THE PRODUCT PURPOSE", "212° Franchise is a commercial discovery platform. I designed the public-facing experience across Home, About, Product Categories, and Contact."],
      ["RESPONSIVE ARCHITECTURE", "Implemented clear navigational hierarchy, strong visual storytelling, product category filtering, and mobile layouts that retain full clarity on smaller screens."],
      ["DELIVERED RESULT", "Delivered an engaging brand presence that simplified franchise exploration and established direct inquiry paths for prospective franchisees."]
    ],
    roleMap: [
      "Discover franchise concepts",
      "Explore product categories",
      "Initiate direct team contact"
    ],
    screens: {
      home: "https://drive.google.com/thumbnail?id=1yjJZMAehkVqVFZWz0YXZWYp5f52jyRjr&sz=w1600",
      about: "https://drive.google.com/thumbnail?id=18w4aKgPePCBxRYDcOfK-J9yyvWv4kS9I&sz=w1600",
      products: "https://drive.google.com/thumbnail?id=1MJyXoMNCeaDi1FA0qs8flxKo26R4BXPV&sz=w1600",
      contact: "https://drive.google.com/thumbnail?id=1IdvYLg7J4H8LMEg2kp9ptvX4gR3p1JQK&sz=w1600"
    }
  },
  imdb: {
    id: "imdb",
    num: "06",
    name: "IMDB Redesign",
    kind: "Entertainment interface redesign",
    accent: "coral",
    image: "https://drive.google.com/thumbnail?id=1LW9tn7VKvXu1XiFwqRcEaoSeTAK49lkn&sz=w1600",
    headline: "A familiar product,<br>reconsidered.",
    blurb: "A UI redesign exploration for an entertainment discovery platform focused on visual hierarchy, reduced clutter, and intuitive browsing.",
    facts: [
      ["UI Study", "Focused interface concept"],
      ["Content-first", "Improved information architecture"],
      ["Dark Mode", "Modern visual language"]
    ],
    overview: {
      client: "UI/UX Redesign Concept",
      timeframe: "1 Month (2024)",
      team: "UI/UX Designer (Solo)",
      role: "Visual & Interaction Designer",
      platforms: "Desktop Web Interface",
      tools: "Figma, Dark Mode Design System"
    },
    sections: {
      problem: "The legacy IMDb interface is notoriously cluttered, with ads, inconsistent typography, and conflicting visual callouts overwhelming moviegoers seeking simple ratings and reviews.",
      constraints: "Must retain all core metadata (ratings, cast list, trivia, trailers, user reviews) while transforming visual layout.",
      research: "Analyzed feedback from movie enthusiasts on Reddit and Twitter highlighting ad overload and hard-to-read typography.",
      coreInsight: "Cinematic dark mode with strong photographic hierarchy allows movie artwork and ratings to shine.",
      decisions: [
        {
          title: "Modular Media & Metadata Cards",
          problem: "Cast photos and trailers fought for attention on legacy movie pages.",
          options: "Dense text tables vs. modular dark-mode content cards.",
          decision: "Organized details into structured dark-mode cards with high contrast hierarchy.",
          reason: "Allows users to quickly scan cast lists, ratings, and streaming availability.",
          consequence: "Created a modern visual experience fit for contemporary entertainment fans."
        }
      ],
      outcomes: {
        type: "qualitative",
        measured: "Designed complete dark-mode web concept covering home feed, film detail page, and cast profiles.",
        qualitative: "Demonstrated strong mastery of visual density and modern dark UI aesthetics."
      },
      reflection: "Redesigning a high-traffic legacy product teaches respect for established mental models while demonstrating how visual refinement elevates usability."
    },
    blocks: [
      ["THE EXPLORATION", "Reimagined the classic IMDb browsing experience through a streamlined visual language, modern card layouts, and refined typography scale."],
      ["THE DESIGN FOCUS", "Redesigned high-traffic pages including movie detail pages, cast listings, user reviews, and media carousels to prioritize content over clutter."],
      ["PROVEN RESULT", "Proved how strategic layout adjustments and visual consistency can modernize a complex, content-heavy media database."]
    ],
    roleMap: [
      "Scan trending titles & ratings",
      "Browse cast & crew metadata",
      "Select streams & bookmark watchlist"
    ]
  }
};

export const projectKeys = ["goldera", "wecare", "smartmeet", "hmz", "franchise212", "imdb"];

// Explicit Flagship Curation (Exact Priority Order: 01 GolderaPharm, 02 WeCare, 03 SmartMeet)
export const flagshipProjects = [
  projects.goldera,
  projects.wecare,
  projects.smartmeet
];

// Secondary Extended Work
export const secondaryProjects = [
  projects.hmz,
  projects.franchise212,
  projects.imdb
];



