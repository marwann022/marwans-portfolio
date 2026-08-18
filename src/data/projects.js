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
    
    // Recruiter Overview Metadata
    meta: {
      context: "ITI Graduation Capstone",
      roleTitle: "Product Design + Frontend Development",
      statusShort: "Developed & Evaluated Prototype",
      techStack: "Vue 3 · Node.js · Figma",
      product: "AI Meeting Workspace & Knowledge Platform",
      users: "Engineering, Product & Operations Teams"
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
      delivered: "Full-stack Vue 3 + Node.js application with synchronized video playback, real-time speaker tagging, and AI task staging.",
      validated: "Awarded top evaluation score for UI clarity and engineering craft at ITI graduation defense.",
      measured: "Tested across 12 live team meetings with 0 data loss during action item confirmation.",
      hypothesized: "Expected to reduce post-meeting team review and follow-up duration by ~60% in production workflows."
    },

    ownershipBreakdown: {
      iOwned: [
        "Product UI/UX design & interactive prototype in Figma",
        "Tokenized design system mapped to TailwindCSS",
        "Vue 3 frontend component development & state management",
        "Sync-scrolling video and transcript workspace logic"
      ],
      collaboratedOn: "Node.js REST API integration, MongoDB schema design, and RAG search API connection with engineering team.",
      outOfScope: "Raw ML Whisper model training and backend audio processing pipeline."
    },

    reflections: [
      "If rebuilding today, I would implement keyboard shortcuts (Cmd+K) for rapid transcript bookmarking and inline task assignment.",
      "Designing AI products requires explicit confidence indicators and instant source citations so users never feel forced to trust machine output blindly."
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
    image: "/WeCare/Behance/WeCare Thumbnail .jpg",
    headline: "Reducing uncertainty between discovering a doctor and completing an appointment.",
    blurb: "End-to-end healthcare product experience covering doctor discovery, progressive 3-step scheduling, transparent pricing, and post-care support.",
    
    // Recruiter Overview Metadata
    meta: {
      context: "Healthcare Mobile UX Exploration",
      roleTitle: "Lead Product & UI/UX Designer",
      statusShort: "20+ Mobile Screens Prototype",
      techStack: "Figma · iOS Design System",
      product: "Mobile Healthcare Booking & Telehealth App",
      users: "Patients seeking specialist medical consultations"
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
        screen: "/WeCare/Home.png",
        caption: "Patient home dashboard & doctor search with category filters, upcoming appointments, and top-rated specialists."
      },
      {
        step: "02",
        label: "Schedule",
        screen: "/WeCare/Doctor’s Info.png",
        caption: "Specialist profile with credentials, verified 4.8 rating, upfront fee ($25), and calendar date & time slot selector."
      },
      {
        step: "03",
        label: "Confirm",
        screen: "/WeCare/Checkout.png",
        caption: "Instant booking confirmation with clinic location map, payment receipt summary, and direct navigation instructions."
      }
    ],

    // Full Mobile Screens Gallery
    galleryScreens: [
      { name: "Home Discovery", path: "/WeCare/Home.png" },
      { name: "Doctor Search", path: "/WeCare/Search.png" },
      { name: "Doctor Credentials & Schedule", path: "/WeCare/Doctor’s Info.png" },
      { name: "Booking Details", path: "/WeCare/Appointment Details.png" },
      { name: "Payment Methods", path: "/WeCare/Payment methods.png" },
      { name: "Booking Confirmed", path: "/WeCare/Checkout.png" },
      { name: "Telehealth Doctors", path: "/WeCare/Chat option.png" },
      { name: "Audio Consultation", path: "/WeCare/Audio call.png" },
      { name: "Patient Profile", path: "/WeCare/Chat option-1.png" },
      { name: "Notifications", path: "/WeCare/Notifications.png" }
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
      delivered: "20+ high-fidelity mobile native screens covering specialist discovery, 3-step booking wizard, and telehealth chat.",
      validated: "Moderated usability feedback confirmed 100% task completion across doctor selection and appointment confirmation flows.",
      hypothesized: "Displaying transparent consultation fees upfront is projected to significantly decrease last-step checkout abandonment."
    },

    ownershipBreakdown: {
      iOwned: [
        "End-to-end mobile UX journey mapping & user flow architecture",
        "High-fidelity iOS native UI component library in Figma",
        "Progressive 3-step scheduling wizard interaction design",
        "Clickable prototype for usability testing & crits"
      ],
      collaboratedOn: "Peer design crits on accessible typography scale and calm medical color palettes.",
      outOfScope: "Production mobile app development and medical EHR database integration."
    },

    reflections: [
      "Designing for healthcare requires prioritizing clarity and standard mental models over visual novelty; familiar mobile patterns build patient trust.",
      "If expanding this system, I would design dedicated accessibility modes for elderly patients, including high-contrast color switches and larger touch targets."
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
    
    // Recruiter Overview Metadata
    meta: {
      context: "GolderaPharm Enterprise System",
      roleTitle: "Lead Product Designer & System Architect",
      statusShort: "50+ Enterprise SaaS Screens",
      techStack: "Figma · Token Architecture",
      product: "Enterprise Pharmaceutical Sales & Field Management CRM",
      users: "Sales Managers, Field Supervisors & Medical Representatives"
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
      delivered: "50+ enterprise SaaS dashboard screens & scalable design token system across Manager, Supervisor, and Medical Rep views.",
      validated: "Approved by GolderaPharm executive leadership and sales directors for engineering production rollout.",
      measured: "Reduced medical representative field visit logging duration from ~4.5 minutes down to ~45 seconds in user testing.",
      hypothesized: "Expected to improve daily visit compliance reporting across 3 regional sales divisions by 35%."
    },

    ownershipBreakdown: {
      iOwned: [
        "Full enterprise UI/UX design across 50+ desktop and tablet screens",
        "Multi-role information architecture & permission-scoped view templates",
        "Tokenized Figma component library matching backend data schemas",
        "Developer handoff documentation and edge-case state specs"
      ],
      collaboratedOn: "Backend API data mapping and entity relationship definitions with 2 enterprise software engineers.",
      outOfScope: "Database infrastructure and legacy ERP software integration."
    },

    reflections: [
      "Enterprise SaaS complexity is mastered through disciplined component reuse and strict token architecture, not through adding more toggles.",
      "If iterating further, I would conduct early outdoor usability audits on tablet screens to test readability and touch accuracy under direct sunlight for field reps."
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
      context: "EdTech UX Design Exploration",
      roleTitle: "UX Researcher & Product Designer",
      statusShort: "Complete EdTech Interface System",
      techStack: "Figma · Component Library",
      product: "EdTech Online Learning Platform",
      users: "Self-paced adult learners & university students"
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
      delivered: "End-to-end EdTech interface prototype across Course Catalog, Video Player Module, and Student Dashboard.",
      validated: "Tested with 4 self-paced learners; 100% completed lesson navigation and unit tracking without confusion.",
      hypothesized: "Structuring course content into visual milestone timelines is projected to reduce student drop-off across multi-week courses."
    },

    ownershipBreakdown: {
      iOwned: [
        "Heuristic analysis of legacy EdTech platforms and curriculum drop-off patterns",
        "Student progress dashboard & visual milestone timeline design",
        "Scalable Figma design system for course catalogs and video player controls",
        "Interactive desktop and mobile web prototypes"
      ],
      collaboratedOn: "Independent design exploration.",
      outOfScope: "Production frontend web development and video streaming infrastructure."
    },

    reflections: [
      "Focusing on cognitive load and progress momentum before visual polish leads to significantly better student completion rates.",
      "If taking this to production, I would design personalized adaptive quizzes that dynamically suggest review units based on student quiz scores."
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
      context: "Client Web Project for 212° Franchise",
      roleTitle: "UI/UX & Web Product Designer",
      statusShort: "Approved Client Design System",
      techStack: "Figma · Responsive Layouts",
      product: "Commercial Franchise Discovery Platform",
      users: "Prospective franchisees & business investors"
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
      delivered: "Responsive commercial web design system across Home, About, Product Showcase, and Investor Contact Inquiry.",
      validated: "Approved by 212° executive team and brand leadership for frontend development.",
      hypothesized: "Direct 4-destination navigation and persistent mobile inquiry actions expected to increase qualified franchisee leads."
    },

    ownershipBreakdown: {
      iOwned: [
        "4-destination information architecture & responsive navigation system",
        "Desktop and mobile web UI layouts across all core destinations",
        "Commercial concept showcase templates (Clean Energy, Robotics, Marine)",
        "Investor qualification inquiry form design"
      ],
      collaboratedOn: "Brand strategy alignment and typography guidelines with 212° Brand Lead.",
      outOfScope: "Full-stack backend engineering and franchise CRM database integration."
    },

    reflections: [
      "If I revisited this project, I would run rapid usability tests on the 4-destination navigation with real prospective franchise partners before finalizing the information architecture.",
      "Commercial credibility is established through restrained layout and typography; avoiding decorative clutter keeps the focus on business metrics."
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
      contact: "/212/Contact us.jpg",
      mobHome: "/212/mob home.jpg",
      mobAbout: "/212/mob about.jpg",
      mobProducts: "/212/mob prod.jpg",
      mobContact: "/212/mob contact.jpg",
      burgerMenu: "/212/Burger menu.jpg",
      solar: "/212/solar.jpg",
      solarMob: "/212/Solar mob prod.jpg",
      robo: "/212/Robo.jpg",
      roboMob: "/212/robomob prod.jpg",
      wooden: "/212/wooden.jpg",
      woodenMob: "/212/wooden mob prod.jpg",
      yacht: "/212/Yacht.jpg",
      yachtMob: "/212/Yacht mob.jpg",
      villa: "/212/villa.jpg"
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
      context: "Entertainment UI/UX Redesign Study",
      roleTitle: "Visual & Interaction Designer",
      statusShort: "Dark UI Concept System",
      techStack: "Figma · Cinematic Design System",
      product: "Entertainment Media Database Redesign",
      users: "Moviegoers, film enthusiasts & television fans"
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
      delivered: "Complete dark-mode media database concept covering discovery feed, movie detail page, search modals, and cast filmography.",
      validated: "Demonstrated strong control over high-density information architecture, organizing deep metadata without visual clutter.",
      hypothesized: "Modular media cards and 1-click watchlist actions projected to increase browsing speed by ~40%."
    },

    ownershipBreakdown: {
      iOwned: [
        "Information architecture restructuring for high-density entertainment data",
        "Cinematic dark-mode component design system in Figma",
        "Modular card layouts for ratings, streaming options, and cast lists",
        "Faceted search and filter modal interaction flows"
      ],
      collaboratedOn: "Independent concept study.",
      outOfScope: "Production web development and media streaming API integration."
    },

    reflections: [
      "Redesigning a high-traffic legacy platform requires deep respect for established mental models; visual refinement must enhance, not break, intuitive discovery.",
      "If iterating further, I would design customized community discussion boards and user review moderation flows."
    ],

    roleMap: [
      "Scan trending titles & ratings",
      "Browse cast & crew metadata",
      "Select streaming options & watchlist"
    ],

    screens: {
      cover: "/IMDB Redesign/Cover - Light.jpg",
      redesign: "/IMDB Redesign/IMDB 2Redesign.jpg",
      frame: "/IMDB Redesign/Frame.png",
      multiFrame: "/IMDB Redesign/Frame 1948755426.png",
      feed: "/IMDB Redesign/S6.png",
      watchlist: "/IMDB Redesign/S7.png",
      search: "/IMDB Redesign/S8.png",
      details: "/IMDB Redesign/S9.png"
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
