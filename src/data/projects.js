export const projects = {
  smartmeet: {
    id: "smartmeet",
    num: "01",
    name: "SmartMeet",
    kind: "AI meeting intelligence & workspace",
    accent: "blue",
    image: "/Thumbnail.png",
    headline: "Turning live meeting audio into structured, actionable team knowledge.",
    blurb: "AI meeting intelligence and productivity platform transforming live conversations into structured transcripts, action items, decisions, and team knowledge.",
    
    // Recruiter 20-Second Overview Metadata
    meta: {
      product: "AI Meeting Workspace & Knowledge Platform",
      users: "Engineering, Product & Operations Teams",
      ownership: "Lead Product Designer & Frontend Developer (UI/UX + Vue 3 Code)",
      context: "ITI Graduation Capstone Project",
      timeframe: "4 Months (2025 – 2026)",
      status: "Fully Developed Prototype (Evaluated & Tested)",
      team: "4 Engineering & Design Students (Marwan: Design Lead & Frontend)"
    },

    thesis: "A raw transcript is noise; actionable extraction is signal. SmartMeet transforms passive meetings into verifiable, searchable team context.",

    facts: [
      ["AI Engine", "Speech-to-Text & Summarization"],
      ["RAG Search", "Cross-meeting knowledge retrieval"],
      ["Vue 3 + Node", "Full-stack web application"]
    ],

    overview: {
      client: "ITI Graduation Capstone Project",
      timeframe: "4 Months (2025–2026)",
      team: "4 Engineers & Designers (Marwan: UX/UI Lead & Frontend Engineer)",
      role: "Lead Product Designer & Frontend Developer",
      platforms: "Responsive Web Application",
      tools: "Figma, Vue 3, Vite, TailwindCSS, Express, MongoDB"
    },

    constraints: [
      "AI API Latency: Summarization calls took 3–5 seconds per payload, requiring distinct non-blocking loading states so users didn't assume the app froze.",
      "4-Month Capstone Scope: Required strict prioritization of core meeting workflows over secondary integrations.",
      "Multi-Tenant Privacy: Strict data isolation requirements between organization workspaces."
    ],

    // Comprehensive Real SmartMeet Screens Library
    screens: {
      thumbnail: "/Thumbnail.png",
      liveMeeting: "/smartmeet-pages/live-meeting.jpg",
      knowledgeAi: "/smartmeet-pages/knowledge-ai.jpg",
      tasks: "/smartmeet-pages/tasks.jpg",
      dashboard: "/smartmeet-pages/dashboard.jpg",
      archive: "/smartmeet-pages/archive.jpg",
      communityChat: "/smartmeet-pages/community-chat.jpg",
      pricing: "/smartmeet-pages/pricing.jpg",
      features: "/smartmeet-pages/features.jpg",
      settings: "/smartmeet-pages/settings.jpg"
    },

    // AI Product Design & Control Matrix
    aiDesign: {
      title: "AI Product Design: Automation vs. Human Control",
      summary: "Designing AI interfaces requires explicit boundaries between system generation and human verification.",
      matrix: [
        {
          feature: "Speech-to-Text Transcription",
          aiAction: "Real-time audio stream conversion & speaker tagging",
          userControl: "User can edit transcript text, reassign speaker tags, and flag misinterpretations",
          rationale: "Audio clarity varies; users must remain the source of truth for official records."
        },
        {
          feature: "Action Item Extraction",
          aiAction: "Parses sentences with task intent, assignees, and deadlines",
          userControl: "User verifies extracted task before it syncs to team task board",
          rationale: "Prevents false-positive tasks from cluttering project boards."
        },
        {
          feature: "Decision Logging",
          aiAction: "Highlights key consensus statements made during meeting",
          userControl: "One-click approval or manual edit of logged decision",
          rationale: "Decisions carry organizational weight and require explicit human sign-off."
        },
        {
          feature: "RAG Knowledge Search",
          aiAction: "Semantic vector search across historical meeting transcripts",
          userControl: "Filter by project, date, speaker, or decision type with source citation links",
          rationale: "Provides transparent citations back to original timestamps so users can verify AI context."
        }
      ],
      outputRationale: "Why separate Summary, Decisions, Action Items, and Transcript? Combining everything into one generated block creates cognitive overwhelm. Structuring output into distinct cards allows users to jump directly to their specific need—whether reviewing a decision or auditing a task."
    },

    // Design to Development Vue 3 Implementation
    devImplementation: {
      title: "Design-to-Development: Vue 3 Execution",
      summary: "Understanding frontend code directly informed how UI component hierarchies and state flows were designed in Figma.",
      points: [
        {
          heading: "Sync-Scroll Split Workspace",
          detail: "Designed and implemented a persistent split view where clicking a transcript timestamp automatically scrolls the video player to that moment, keeping video and text synchronized."
        },
        {
          heading: "Optimistic Loading UI for AI Requests",
          detail: "Built skeletal pulse loaders for summary extraction to bridge the 3–5s API response window, eliminating perceived latency."
        },
        {
          heading: "Reusable Component Data Flow",
          detail: "Architected atomic Vue 3 components (`TranscriptRow`, `ActionCard`, `DecisionBadge`) using TailwindCSS tokens matching Figma design tokens."
        }
      ]
    },

    decisions: [
      {
        title: "Persistent Split-Screen Workspace over Tabbed Navigation",
        problem: "Users were constantly switching tabs between video view, transcripts, and task notes, losing visual context.",
        options: "Tabbed sidebar vs. persistent split workspace view.",
        decision: "Created a persistent 2-column split view with sync-scrolling transcript and AI highlights.",
        why: "Keeps video context visible while reviewing generated action items.",
        tradeoff: "Reduces video player area on smaller laptop screens.",
        result: "Reduced post-meeting task review time significantly during usability testing."
      },
      {
        title: "Explicit Human Task Verification Loop",
        problem: "Automated AI task creation occasionally generated duplicate or irrelevant task items.",
        options: "Automatic task sync to task board vs. manual verification queue.",
        decision: "Implemented a staging drawer where users review and confirm AI-extracted tasks before board sync.",
        why: "Maintains high team trust in project task boards.",
        tradeoff: "Adds one additional confirmation click for users.",
        result: "Eliminated invalid task creation while keeping 90% of task details pre-filled."
      }
    ],

    outcomes: {
      measured: "Built and deployed functional web prototype tested with 3 student project teams across 12 live meetings.",
      validated: "Awarded top evaluation grade for UI clarity and frontend code execution at ITI capstone defense.",
      hypothesized: "Expected to reduce post-meeting follow-up review times by ~60% in production team environments."
    },

    ownershipBreakdown: {
      iOwned: "Full UI/UX design in Figma, Design System architecture, Vue 3 frontend component development, split-screen workspace logic.",
      collaboratedOn: "Node.js REST API integration, MongoDB schema design, RAG search API connection.",
      outOfScope: "Raw ML model training and whisper audio processing engine."
    },

    reflections: [
      "If rebuilding today, I would add keyboard shortcuts (`Cmd+K`) for rapid transcript bookmarking and inline task editing.",
      "Designing AI products requires showing confidence scores or source citations so users never feel forced to trust machine output blindly."
    ],

    roleMap: [
      "Real-time speech-to-text & speaker tagging",
      "Automated AI summary & action item extraction",
      "Sync-scroll video & transcript workspace",
      "Cross-meeting RAG vector search"
    ]
  },

  wecare: {
    id: "wecare",
    num: "02",
    name: "WeCare",
    kind: "Healthcare appointment experience",
    accent: "blue",
    image: "/WeCare/WeCare Thumbnail .jpg",
    headline: "Reducing uncertainty between discovering a doctor and completing an appointment.",
    blurb: "End-to-end healthcare product experience covering doctor discovery, progressive 3-step scheduling, transparent pricing, and post-care support.",
    
    // Recruiter 20-Second Overview Metadata
    meta: {
      product: "Mobile Healthcare Booking & Telehealth App",
      users: "Patients seeking specialist medical care & consultations",
      ownership: "Lead Product Designer (Solo Mobile UX/UI Concept)",
      context: "Healthcare Mobile UX Design Exploration",
      timeframe: "2 Months (2024)",
      status: "High-Fidelity Clickable Mobile Prototype (20+ Screens)",
      team: "Marwan Ashraf (Solo Product Designer)"
    },

    thesis: "Healthcare booking is a trust problem before it is a scheduling problem. Visual clarity and transparent pricing eliminate patient anxiety.",

    facts: [
      ["20+", "Mobile screens designed"],
      ["3-Step", "Progressive booking wizard"],
      ["UX Focus", "Anxiety-reducing trust hierarchy"]
    ],

    overview: {
      client: "Healthcare Mobile App Exploration",
      timeframe: "2 Months (2024)",
      team: "Product Designer (Solo)",
      role: "Mobile UX/UI Designer",
      platforms: "iOS Native Mobile UI",
      tools: "Figma, Mobile Interaction Patterns"
    },

    constraints: [
      "Touch Screen Target Sizes: Minimum 44px touch targets and 16px body text for accessible reading during stressful health moments.",
      "Information Density vs. Calmness: Displaying complex medical credentials, consultation fees, and available slots without overwhelming the screen."
    ],

    // Trust & Information Hierarchy
    trustHierarchy: {
      title: "Patient Trust & Information Hierarchy",
      summary: "Anxious patients make decisions based on clear credential hierarchy and cost transparency.",
      hierarchyOrder: [
        {
          rank: "01",
          element: "Specialty & Verified Badges",
          why: "Immediately confirms doctor qualifications and medical board verification."
        },
        {
          rank: "02",
          element: "Transparent Consultation Pricing",
          why: "Displays upfront fees before scheduling begins to eliminate bill anxiety."
        },
        {
          rank: "03",
          element: "Real Patient Reviews & Ratings",
          why: "Builds peer validation and sets clear expectations for care quality."
        },
        {
          rank: "04",
          element: "Next Available Appointment Slot",
          why: "Provides immediate clarity on urgent vs. standard availability."
        }
      ]
    },

    // 3 Equal Journey Screens (Real Local Files)
    journeyFlow: [
      {
        step: "01",
        label: "Discover",
        screen: "/WeCare/Screens/Doctor’s Info.png",
        caption: "Specialist discovery with clear verification badges, ratings, specialty, and upfront consultation pricing."
      },
      {
        step: "02",
        label: "Schedule",
        screen: "/WeCare/Screens/Second.png",
        caption: "Progressive date and time selection calendar breaking scheduling into single digestible choices."
      },
      {
        step: "03",
        label: "Confirm",
        screen: "/WeCare/Screens/Appointment Details.png",
        caption: "Transparent cost breakdown, clinic address, and 1-tap confirmation with instant calendar sync."
      }
    ],

    // Full Mobile Screens Gallery
    galleryScreens: [
      { name: "Home Discovery", path: "/WeCare/Screens/Home.png" },
      { name: "Doctor Search", path: "/WeCare/Screens/Search.png" },
      { name: "Checkout Summary", path: "/WeCare/Screens/Checkout.png" },
      { name: "Doctor Consultation Chat", path: "/WeCare/Screens/Chat option.png" },
      { name: "Audio Consultation", path: "/WeCare/Screens/Audio call.png" },
      { name: "Payment Methods", path: "/WeCare/Screens/Payment methods.png" }
    ],

    decisions: [
      {
        title: "Progressive 3-Step Wizard over Single Long Form",
        problem: "Single-page medical forms resulted in high cognitive fatigue and drop-off during mobile testing.",
        options: "Long scrolling single form vs. progressive 3-step wizard (Doctor → Date/Time → Confirmation).",
        decision: "Implemented a 3-step wizard with step indicator and cost preview.",
        why: "Isolates decisions into manageable steps, reassuring anxious users at each phase.",
        tradeoff: "Requires 2 additional tap transitions.",
        result: "Streamlined booking flow with clear visual progress feedback."
      },
      {
        title: "Upfront Price Display on Search Cards",
        problem: "Patients reported frustration when consultation costs were hidden until the final checkout screen.",
        options: "Hidden fee until checkout vs. upfront consultation price on doctor cards.",
        decision: "Placed transparent consultation fees directly beside doctor rating badges.",
        why: "Transparency builds patient trust and prevents drop-off at checkout.",
        tradeoff: "Takes up visual space on search summary cards.",
        result: "Eliminated pricing surprise during appointment confirmation."
      }
    ],

    outcomes: {
      measured: "Designed 20+ mobile screens linked into a complete interactive iOS prototype.",
      validated: "Reviewed in peer design crits with strong praise for accessible typography and calm color palette.",
      hypothesized: "Expected to increase mobile booking completion rates by eliminating surprise checkout costs."
    },

    ownershipBreakdown: {
      iOwned: "End-to-end mobile product design, user journey mapping, wireframing, high-fidelity iOS UI in Figma, interactive prototyping.",
      collaboratedOn: "Peer design review feedback sessions.",
      outOfScope: "Backend API implementation and medical EHR database integration."
    },

    reflections: [
      "Designing for healthcare requires prioritizing clarity over novelty. Standard mobile UI patterns build confidence.",
      "If expanding this project, I would design dedicated accessibility modes for elder care and screen-reader optimizations."
    ],

    roleMap: [
      "Find specialist doctors with verified credentials",
      "Schedule via progressive 3-step calendar wizard",
      "Review transparent fee breakdowns before booking",
      "Access post-care digital receipts & messaging"
    ]
  },

  goldera: {
    id: "goldera",
    num: "03",
    name: "GolderaPharm",
    kind: "Role-based pharmaceutical CRM",
    accent: "lime",
    image: "/assets/golderapharm-cover.png",
    headline: "Designing one enterprise CRM that adapts to three operational field roles.",
    blurb: "Enterprise CRM for pharmaceutical field teams managing doctors, visits, planning, performance, and reporting across three operational roles.",
    
    // Recruiter 20-Second Overview Metadata
    meta: {
      product: "Enterprise Pharmaceutical Sales & Field Management CRM",
      users: "Sales Managers, Field Supervisors & Medical Representatives",
      ownership: "Lead Product Designer & Design Systems Architect (Solo Design)",
      context: "GolderaPharm Enterprise System Client Project",
      timeframe: "3 Months (2026)",
      status: "Approved Design System & 50+ Screen Handed Off to Development",
      team: "Marwan Ashraf (Lead Designer) + 2 Enterprise Backend Engineers"
    },

    thesis: "A monolithic enterprise CRM fails multi-role operations. Customizing information density per persona dramatically reduces cognitive load and field reporting friction.",

    facts: [
      ["3 Roles", "Manager, Supervisor, Medical Rep"],
      ["50+", "High-fidelity CRM UI screens"],
      ["1 System", "Tokenized Figma component library"]
    ],

    overview: {
      client: "GolderaPharm Enterprise System",
      timeframe: "3 Months (2026)",
      team: "Lead Product Designer (Solo) collaborating with 2 Backend Engineers",
      role: "Lead UI/UX Designer & Design Systems Architect",
      platforms: "Web Desktop Dashboard & Mobile/Tablet Field Web App",
      tools: "Figma, User Flow Mapping, Design Tokens"
    },

    constraints: [
      "Compliance Audit Trails: Immutable logging required for sample distribution and doctor visit confirmations.",
      "Lean Engineering Token System: Development team needed maximum component reuse across all 3 role dashboards without building custom charts for each view.",
      "Mobile Connectivity in Clinics: Medical Representatives needed visit logging to function in low-connectivity hospital basements."
    ],

    // System Information Architecture & Role Mapping (Real Assets)
    roleArchitecture: {
      title: "One Operating System, Three Persona Architectures",
      roles: [
        {
          name: "Sales Manager",
          focus: "Macro Visibility & Strategic Performance",
          color: "#0d244a",
          screen: "/Golderapharm/Manager Dashboard.png",
          duties: "Sales target tracking, regional territory performance, approval queues, analytical reporting."
        },
        {
          name: "Field Supervisor",
          focus: "Team Execution & Coaching Oversight",
          color: "#1e3a8a",
          screen: "/Golderapharm/Supervisor Dashboard.png",
          duties: "Real-time rep location tracking, joint visit scheduling, rep coaching, visit approvals."
        },
        {
          name: "Medical Representative",
          focus: "Mobile Daily Execution & Doctor Visits",
          color: "#be9e1c",
          screen: "/Golderapharm/Medical Rep Dashboard.png",
          duties: "Sub-45-second visit logging, sample inventory requests, route planning, doctor profile management."
        }
      ]
    },

    // Edge States Showcase Context (Real Assets)
    edgeStates: [
      {
        title: "Offline Storage Queue State",
        description: "When network drops inside hospital basements, Rep visit notes queue locally and auto-sync when connection restores.",
        screen: "/Golderapharm/Add new visit-1.png"
      },
      {
        title: "Empty Analytics & Sparse Data Fallback",
        description: "New territories without historical visit data render actionable onboarding prompts instead of blank charts.",
        screen: "/Golderapharm/Loading.png"
      },
      {
        title: "Permission-Restricted Access Gate",
        description: "Clear permission boundary callouts when Reps attempt to view Manager-level financial targets.",
        screen: "/Golderapharm/Error404.png"
      }
    ],

    // System Depth Gallery (Real Assets)
    systemGallery: [
      { title: "Target & Quota Allocation", screen: "/Golderapharm/Target.png" },
      { title: "Territory Sales Map", screen: "/Golderapharm/Territory Map.png" },
      { title: "Rep Field Coaching Audit", screen: "/Golderapharm/Coaching.png" },
      { title: "Plan & Schedule Management", screen: "/Golderapharm/Plan Managment.png" },
      { title: "Doctor Visit Records", screen: "/Golderapharm/Visits.png" },
      { title: "Forecast & Revenue Planning", screen: "/Golderapharm/Forecast.png" }
    ],

    decisions: [
      {
        title: "Role-Scoped Dashboard Templates over Toggleable Widgets",
        problem: "Overwhelming Medical Reps with Manager-level macro metrics caused field visit logging delays.",
        options: "Customizable widget dashboard vs. dedicated role-scoped view templates.",
        decision: "Built 3 dedicated role-scoped view templates sharing the same design token foundation.",
        why: "Medical Reps need speed; Managers need macro aggregation.",
        tradeoff: "Requires maintaining 3 distinct layout templates.",
        result: "Reduced field visit logging time from 4.5 minutes to ~45 seconds."
      },
      {
        title: "Auto-Saving Slide-Over Drawer for Field Visits",
        problem: "Full-page visit forms caused Medical Reps to lose context when navigating back to doctor lists.",
        options: "Full-page form navigation vs. persistent slide-over drawer with local auto-save.",
        decision: "Designed an auto-saving slide-over drawer for mobile/tablet visit logging.",
        why: "Keeps doctor list context visible behind the active logging drawer.",
        tradeoff: "Reduces usable width for detailed notes on mobile.",
        result: "Zero data loss reported during field user testing."
      }
    ],

    outcomes: {
      measured: "Reduced field representative visit logging duration from 4.5 minutes down to ~45 seconds.",
      validated: "Approved by GolderaPharm executive leadership for production rollout; handed off to engineering.",
      hypothesized: "Expected to improve daily visit logging compliance across 3 regional sales divisions by 35%."
    },

    ownershipBreakdown: {
      iOwned: "Full product design across 50+ screens, multi-role information architecture, tokenized Figma design system, tablet/mobile layouts, developer handoff specs.",
      collaboratedOn: "Backend API data mapping with 2 enterprise backend engineers.",
      outOfScope: "Database infrastructure and ERP software integration."
    },

    reflections: [
      "Enterprise SaaS complexity is managed through disciplined component reuse, not fewer features.",
      "If iterating further, I would conduct early accessibility audits for outdoor tablet visibility under direct sunlight for field reps."
    ],

    roleMap: [
      "Manager: Strategic sales visibility & territory target tracking",
      "Supervisor: Team activity tracking & joint visit coaching",
      "Medical Rep: Sub-45-second field visit & sample logging",
      "Unified: Shared tokenized Figma component design system"
    ]
  },

  hmz: {
    id: "hmz",
    num: "04",
    name: "HMZ E-Learning",
    kind: "EdTech learning rhythm & progress system",
    accent: "coral",
    image: "/HMZ/Home.png",
    headline: "Designing tangible progress milestones into online learning.",
    blurb: "An E-learning experience designed from deep UX research through a scalable, accessible interface system.",
    
    meta: {
      product: "EdTech Online Learning Platform",
      users: "Self-paced adult learners & university students",
      ownership: "UX Researcher & Product Designer (Solo)",
      context: "EdTech UX Design Exploration",
      timeframe: "2 Months (2025)",
      status: "High-Fidelity Figma Prototype & UX Case Study",
      team: "Marwan Ashraf (Solo Designer)"
    },

    thesis: "Learners stay motivated when course progress is tangible. Visual milestones and bite-sized curriculum structures reduce course drop-off.",

    facts: [
      ["15+", "Designed platform pages"],
      ["1", "Scalable component system"],
      ["UX Focus", "Progress momentum & course rhythm"]
    ],

    overview: {
      client: "EdTech UX Exploration",
      timeframe: "2 Months (2025)",
      team: "Product Designer (Solo)",
      role: "UX Researcher & Product Designer",
      platforms: "Web & Mobile Web",
      tools: "Figma, User Flow Mapping, Prototyping"
    },

    constraints: [
      "Designed as an independent exploratory project based on heuristic analysis of Coursera and Udemy."
    ],

    // Real HMZ Platform Screens
    screens: {
      home: "/HMZ/Home.png",
      courses: "/HMZ/Courses.png",
      courseInfo: "/HMZ/Course Info.png",
      dashboard: "/HMZ/Dashboard.png",
      pricing: "/HMZ/Pricing.png",
      services: "/HMZ/Services.png",
      about: "/HMZ/About.png"
    },

    decisions: [
      {
        title: "Visual Milestone Progress Timeline",
        problem: "Students felt overwhelmed by long flat lists of video links.",
        options: "Flat list vs. visual milestone timeline showing active, completed, and upcoming units.",
        decision: "Designed a milestone timeline with visual progress indicators.",
        why: "Reinforces a sense of momentum and accomplishment.",
        tradeoff: "Requires more vertical screen space.",
        result: "Tested with 4 users; 100% completed mock navigation tasks without getting lost."
      }
    ],

    outcomes: {
      measured: "Completed end-to-end prototype covering discovery, course view, student dashboard, and leaderboard.",
      validated: "Validated through 4 usability feedback sessions with adult learners.",
      hypothesized: "Expected to improve course completion rates by structuring content into bite-sized units."
    },

    ownershipBreakdown: {
      iOwned: "User research, persona definition, wireframing, component system, high-fidelity UI design.",
      collaboratedOn: "Independent exploration.",
      outOfScope: "Production frontend development."
    },

    reflections: [
      "Focusing on information hierarchy before visual polish leads to significantly cleaner student experiences."
    ],

    roleMap: [
      "Browse course discovery & recommendations",
      "Track learning rhythm & visual milestone progress",
      "Engage with gamified achievement rewards"
    ]
  },

  franchise212: {
    id: "franchise212",
    num: "05",
    name: "212° Franchise",
    kind: "Franchise discovery platform",
    accent: "sand",
    image: "/212/Home.jpg",
    headline: "Clear 4-destination commercial franchise exploration.",
    blurb: "A responsive franchise discovery platform helping prospective partners explore concepts, product categories, and initiate contact.",
    
    meta: {
      product: "Commercial Franchise Discovery Platform",
      users: "Prospective franchisees & business investors",
      ownership: "UI/UX & Web Product Designer",
      context: "Client Web Project for 212° Franchise",
      timeframe: "1.5 Months (2024)",
      status: "Delivered & Approved Client Design System",
      team: "Marwan Ashraf (UI/UX Designer) + Brand Lead"
    },

    thesis: "Build investor trust through transparent visual storytelling before asking for an inquiry submission.",

    facts: [
      ["Web + Mobile", "Responsive design"],
      ["4 Pages", "Home, About, Products, Contact"],
      ["UI/UX", "Product design & web branding"]
    ],

    overview: {
      client: "212° Franchise",
      timeframe: "1.5 Months (2024)",
      team: "UI/UX Designer collaborating with Brand Lead",
      role: "Product & Web UI/UX Designer",
      platforms: "Responsive Desktop & Mobile Web",
      tools: "Figma, Brand Strategy, Layout Grid"
    },

    constraints: [
      "Must adhere strictly to established 212° brand guidelines while elevating digital typography."
    ],

    decisions: [
      {
        title: "Direct 4-Destination Navigation Hierarchy",
        problem: "Information was previously buried in complex multi-level menus.",
        options: "Multi-level dropdown vs. simple 4-destination structure (Home, About, Products, Contact).",
        decision: "Structured site into 4 primary destinations with persistent inquiry action buttons.",
        why: "Enables partners to inspect product categories and financial details within 1 click.",
        tradeoff: "Eliminates deep sub-pages.",
        result: "Dramatically simplified mobile navigation clarity."
      }
    ],

    outcomes: {
      measured: "Delivered responsive high-fidelity prototypes across Home, About, Product Showcase, and Contact.",
      validated: "Approved by 212° executive team for development.",
      hypothesized: "Expected to increase franchise inquiry conversions by reducing form friction."
    },

    ownershipBreakdown: {
      iOwned: "Web UI/UX design, responsive layouts, component system, inquiry form flows.",
      collaboratedOn: "Brand strategy with 212° Brand Lead.",
      outOfScope: "Full-stack web engineering."
    },

    reflections: [
      "Restraint in layout creates a premium commercial feel. Avoiding unnecessary decoration keeps focus on business credibility."
    ],

    roleMap: [
      "Discover 212° franchise concepts",
      "Explore product categories & financial requirements",
      "Initiate direct investor inquiries"
    ],

    screens: {
      home: "/212/Home.jpg",
      about: "/212/About us.jpg",
      products: "/212/Products.jpg",
      contact: "/212/Contact us.jpg"
    }
  },

  imdb: {
    id: "imdb",
    num: "06",
    name: "IMDb Redesign",
    kind: "Entertainment interface redesign",
    accent: "coral",
    image: "/IMDB Redesign/Cover - Light.jpg",
    headline: "Reconsidering a content-heavy legacy database through modular dark UI.",
    blurb: "A UI redesign exploration for an entertainment discovery platform focused on visual hierarchy, reduced clutter, and intuitive browsing.",
    
    meta: {
      product: "Entertainment Media Database Redesign",
      users: "Moviegoers, film enthusiasts & television fans",
      ownership: "Solo Visual & Interaction UI Concept",
      context: "UI/UX Redesign Concept Exploration",
      timeframe: "1 Month (2024)",
      status: "Concept Interface Study",
      team: "Marwan Ashraf (Solo Designer)"
    },

    thesis: "A dark cinematic visual system allows film artwork and ratings to shine without cluttering core metadata.",

    facts: [
      ["UI Study", "Focused interface concept"],
      ["Content-First", "Improved information architecture"],
      ["Dark UI", "Modern visual hierarchy"]
    ],

    overview: {
      client: "UI/UX Redesign Concept",
      timeframe: "1 Month (2024)",
      team: "UI/UX Designer (Solo)",
      role: "Visual & Interaction Designer",
      platforms: "Desktop Web Interface",
      tools: "Figma, Dark Mode Design System"
    },

    constraints: [
      "Retaining all legacy IMDb metadata (ratings, cast, trivia, trailers, reviews) while eliminating visual noise."
    ],

    decisions: [
      {
        title: "Modular Media Cards over Dense Data Tables",
        problem: "Legacy IMDb cast listings and trailer grids fought for visual attention.",
        options: "Dense text tables vs. modular dark-mode content cards.",
        decision: "Organized details into structured dark-mode cards with high contrast hierarchy.",
        why: "Allows users to quickly scan cast lists, ratings, and streaming options.",
        tradeoff: "Slightly less text density per screen.",
        result: "Created a modern visual experience fit for contemporary entertainment fans."
      }
    ],

    outcomes: {
      measured: "Designed complete dark-mode web concept covering home feed, film detail page, and cast profiles.",
      validated: "Demonstrated strong mastery of visual density and modern dark UI aesthetics.",
      hypothesized: "Expected to improve scanability of film metadata by 40%."
    },

    ownershipBreakdown: {
      iOwned: "Visual redesign, information architecture adjustments, dark UI design system in Figma.",
      collaboratedOn: "Independent concept study.",
      outOfScope: "Production code implementation."
    },

    reflections: [
      "Redesigning a high-traffic legacy product teaches respect for established mental models while demonstrating how visual refinement elevates usability."
    ],

    roleMap: [
      "Scan trending titles & ratings",
      "Browse cast & crew metadata",
      "Select streaming options & watchlist"
    ],

    screens: {
      cover: "/IMDB Redesign/Cover - Light.jpg",
      frame: "/IMDB Redesign/Frame.png",
      redesign: "/IMDB Redesign/IMDB 2Redesign.jpg"
    }
  }
};

export const projectKeys = ["smartmeet", "wecare", "goldera", "hmz", "franchise212", "imdb"];

// Flagship Curation (Exact Order: 01 SmartMeet, 02 WeCare, 03 GolderaPharm)
export const flagshipProjects = [
  projects.smartmeet,
  projects.wecare,
  projects.goldera
];

// Secondary Extended Work
export const secondaryProjects = [
  projects.hmz,
  projects.franchise212,
  projects.imdb
];
