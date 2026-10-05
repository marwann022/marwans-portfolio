// Project scope and design goals; quantitative impact is only published with documented evidence.
export const projects = {
  "smartmeet": {
    "id": "smartmeet",
    "num": "02",
    "name": "SmartMeet",
    "kind": "AI meeting intelligence & workspace",
    "accent": "blue",
    "image": "/smartmeet-pages/Codex Image Aug 17, 2026, 06_29_53 PM.png",
    "headline": "Turning live meeting audio into structured, actionable team knowledge.",
    "blurb": "AI meeting intelligence and productivity platform transforming live conversations into structured transcripts, action items, decisions, and team knowledge.",
    "meta": {
      "context": "ITI graduation project",
      "roleTitle": "UI/UX Design & Frontend Development",
      "statusShort": "Developed prototype",
      "techStack": "Vue 3 · Node.js · Figma",
      "product": "AI Meeting Workspace & Knowledge Platform",
      "users": "Engineering, Product & Operations Teams",
      "period": "2026 · ITI graduation project",
      "deliverables": "Meeting review interface, task board, Figma components, and Vue frontend."
    },
    "thesis": "A raw transcript is noise; actionable extraction is signal. SmartMeet transforms passive meetings into verifiable, searchable team context.",
    "facts": [
      [
        "AI Engine",
        "Speech-to-Text & Summarization"
      ],
      [
        "RAG Search",
        "Cross-meeting knowledge retrieval"
      ],
      [
        "Vue 3 + Node",
        "Full-stack web application"
      ]
    ],
    "overview": {
      "client": "ITI Graduation Capstone Project",
      "timeframe": "2026",
      "team": "Graduation project team",
      "role": "UI/UX Designer & Frontend Developer",
      "platforms": "Responsive Web Application",
      "tools": "Figma, Vue 3, Vite, TailwindCSS, Express, MongoDB"
    },
    "constraints": [
      "AI API Latency: Summarization calls took 3–5 seconds per payload, requiring distinct non-blocking loading states so users didn't assume the app froze.",
      "4-Month Capstone Scope: Required strict prioritization of core meeting workflows over secondary integrations.",
      "Multi-Tenant Privacy: Strict data isolation requirements between organization workspaces."
    ],
    "screens": {
      "thumbnail": "/smartmeet-pages/Codex Image Aug 17, 2026, 06_29_53 PM.png",
      "knowledgeAi": "/smartmeet-pages/knowledge-ai.jpg",
      "tasks": "/smartmeet-pages/Codex Image Aug 17, 2026, 06_30_03 PM.png",
      "dashboard": "/smartmeet-pages/Codex Image Aug 17, 2026, 06_29_59 PM.png",
      "archive": "/smartmeet-pages/archive.jpg",
      "communityChat": "/smartmeet-pages/community-chat.jpg",
      "pricing": "/smartmeet-pages/pricing.jpg",
      "features": "/smartmeet-pages/features.jpg",
      "settings": "/smartmeet-pages/settings.jpg",
      "meetingReview": "/smartmeet-pages/Codex Image Aug 17, 2026, 06_29_53 PM.png",
      "newMeeting": "/smartmeet-pages/Codex Image Aug 17, 2026, 06_30_07 PM.png"
    },
    "aiDesign": {
      "title": "AI Product Design: Automation vs. Human Control",
      "summary": "Designing AI interfaces requires explicit boundaries between system generation and human verification.",
      "matrix": [
        {
          "feature": "Speech-to-Text Transcription",
          "aiAction": "Real-time audio stream conversion & speaker tagging",
          "userControl": "User can edit transcript text, reassign speaker tags, and flag misinterpretations",
          "rationale": "Audio clarity varies; users must remain the source of truth for official records."
        },
        {
          "feature": "Action Item Extraction",
          "aiAction": "Parses sentences with task intent, assignees, and deadlines",
          "userControl": "User verifies extracted task before it syncs to team task board",
          "rationale": "Prevents false-positive tasks from cluttering project boards."
        },
        {
          "feature": "Decision Logging",
          "aiAction": "Highlights key consensus statements made during meeting",
          "userControl": "One-click approval or manual edit of logged decision",
          "rationale": "Decisions carry organizational weight and require explicit human sign-off."
        },
        {
          "feature": "RAG Knowledge Search",
          "aiAction": "Semantic vector search across historical meeting transcripts",
          "userControl": "Filter by project, date, speaker, or decision type with source citation links",
          "rationale": "Provides transparent citations back to original timestamps so users can verify AI context."
        }
      ],
      "outputRationale": "Why separate Summary, Decisions, Action Items, and Transcript? Combining everything into one generated block creates cognitive overwhelm. Structuring output into distinct cards allows users to jump directly to their specific need—whether reviewing a decision or auditing a task."
    },
    "devImplementation": {
      "title": "Design-to-Development: Vue 3 Execution",
      "summary": "Understanding frontend code directly informed how UI component hierarchies and state flows were designed in Figma.",
      "points": [
        {
          "heading": "Sync-Scroll Split Workspace",
          "detail": "Designed and implemented a persistent split view where clicking a transcript timestamp automatically scrolls the video player to that moment, keeping video and text synchronized."
        },
        {
          "heading": "Optimistic Loading UI for AI Requests",
          "detail": "Built skeletal pulse loaders for summary extraction to bridge the 3–5s API response window, eliminating perceived latency."
        },
        {
          "heading": "Reusable Component Data Flow",
          "detail": "Architected atomic Vue 3 components (`TranscriptRow`, `ActionCard`, `DecisionBadge`) using TailwindCSS tokens matching Figma design tokens."
        }
      ]
    },
    "decisions": [
      {
        "title": "Meeting Review in a Split Workspace",
        "problem": "Reviewing generated summaries, decisions, and action items separately can make it harder to retain context.",
        "options": "Tabbed sidebar vs. persistent split workspace view.",
        "decision": "Designed a review workspace with a main summary area and adjacent decision and action-item panels.",
        "why": "Makes the generated content easier to review alongside related meeting information.",
        "tradeoff": "Several panels compete for space on smaller laptop screens.",
        "result": "A split review layout keeps generated notes and supporting context available together."
      },
      {
        "title": "Explicit Human Task Verification Loop",
        "problem": "Extracted tasks need a review step before they become team commitments.",
        "options": "Automatic task sync to task board vs. manual verification queue.",
        "decision": "Implemented a staging drawer where users review and confirm AI-extracted tasks before board sync.",
        "why": "Maintains high team trust in project task boards.",
        "tradeoff": "Adds one additional confirmation click for users.",
        "result": "A review step lets people edit and confirm extracted tasks before adding them to the board."
      }
    ],
    "outcomes": {
      "delivered": "Meeting review interface, task board, Figma components, and Vue frontend.",
      "hypothesized": "Help teams review generated summaries and confirm action items before adding them to a task board.",
      "validationPlan": "Evaluate task review time, correction effort, and successful confirmation with representative meeting participants."
    },
    "ownershipBreakdown": {
      "iOwned": [
        "Product UI/UX design & interactive prototype in Figma",
        "Tokenized design system mapped to TailwindCSS",
        "Vue 3 frontend component development & state management",
        "Frontend state management for meeting review screens"
      ],
      "collaboratedOn": "Node.js REST API integration, MongoDB schema design, and RAG search API connection with engineering team.",
      "outOfScope": "Raw ML Whisper model training and backend audio processing pipeline."
    },
    "reflections": [
      "If rebuilding today, I would implement keyboard shortcuts (Cmd+K) for rapid transcript bookmarking and inline task assignment.",
      "Designing AI products requires explicit confidence indicators and instant source citations so users never feel forced to trust machine output blindly."
    ],
    "roleMap": [
      "Real-time speech-to-text & speaker tagging",
      "Automated AI summary & action item extraction",
      "Sync-scroll video & transcript workspace",
      "Cross-meeting RAG vector search"
    ]
  },
  "wecare": {
    "id": "wecare",
    "num": "03",
    "name": "WeCare",
    "kind": "Healthcare appointment experience",
    "accent": "blue",
    "image": "/WeCare/Behance/WeCare Thumbnail .jpg",
    "headline": "Reducing uncertainty between discovering a doctor and completing an appointment.",
    "blurb": "End-to-end healthcare product experience covering doctor discovery, progressive 3-step scheduling, transparent pricing, and post-care support.",
    "meta": {
      "context": "Independent healthcare UX exploration",
      "roleTitle": "UI/UX Designer",
      "statusShort": "Figma prototype",
      "techStack": "Figma · iOS Design System",
      "product": "Mobile Healthcare Booking & Telehealth App",
      "users": "Patients seeking specialist medical consultations",
      "period": "2024 · UX exploration",
      "deliverables": "Doctor discovery, appointment booking, and telehealth interface designs."
    },
    "thesis": "Clear credentials, consultation fees, and booking steps support a more understandable appointment journey.",
    "facts": [
      [
        "20+",
        "Mobile screens designed"
      ],
      [
        "3-Step",
        "Progressive booking wizard"
      ],
      [
        "UX Focus",
        "Anxiety-reducing trust hierarchy"
      ]
    ],
    "overview": {
      "client": "Healthcare Mobile App Exploration",
      "timeframe": "2 Months (2024)",
      "team": "Product Designer (Solo)",
      "role": "UI/UX Designer",
      "platforms": "iOS Native Mobile UI",
      "tools": "Figma, Mobile Interaction Patterns"
    },
    "constraints": [
      "Touch Screen Target Sizes: Minimum 44px touch targets and 16px body text for accessible reading during stressful health moments.",
      "Information Density vs. Calmness: Displaying complex medical credentials, consultation fees, and available slots without overwhelming the screen."
    ],
    "trustHierarchy": {
      "title": "Patient Trust & Information Hierarchy",
      "summary": "Anxious patients make decisions based on clear credential hierarchy and cost transparency.",
      "hierarchyOrder": [
        {
          "rank": "01",
          "element": "Specialty & Verified Badges",
          "why": "Immediately confirms doctor qualifications and medical board verification."
        },
        {
          "rank": "02",
          "element": "Transparent Consultation Pricing",
          "why": "Displays upfront fees before scheduling begins to eliminate bill anxiety."
        },
        {
          "rank": "03",
          "element": "Real Patient Reviews & Ratings",
          "why": "Builds peer validation and sets clear expectations for care quality."
        },
        {
          "rank": "04",
          "element": "Next Available Appointment Slot",
          "why": "Provides immediate clarity on urgent vs. standard availability."
        }
      ]
    },
    "journeyFlow": [
      {
        "step": "01",
        "label": "Discover",
        "screen": "/WeCare/Home.png",
        "caption": "Patient home dashboard & doctor search with category filters, upcoming appointments, and top-rated specialists."
      },
      {
        "step": "02",
        "label": "Schedule",
        "screen": "/WeCare/Doctor’s Info.png",
        "caption": "Specialist profile with credentials, verified 4.8 rating, upfront fee ($25), and calendar date & time slot selector."
      },
      {
        "step": "03",
        "label": "Confirm",
        "screen": "/WeCare/Checkout.png",
        "caption": "Instant booking confirmation with clinic location map, payment receipt summary, and direct navigation instructions."
      }
    ],
    "galleryScreens": [
      {
        "name": "Home Discovery",
        "path": "/WeCare/Home.png"
      },
      {
        "name": "Doctor Search",
        "path": "/WeCare/Search.png"
      },
      {
        "name": "Doctor Credentials & Schedule",
        "path": "/WeCare/Doctor’s Info.png"
      },
      {
        "name": "Booking Details",
        "path": "/WeCare/Appointment Details.png"
      },
      {
        "name": "Payment Methods",
        "path": "/WeCare/Payment methods.png"
      },
      {
        "name": "Booking Confirmed",
        "path": "/WeCare/Checkout.png"
      },
      {
        "name": "Telehealth Doctors",
        "path": "/WeCare/Chat option.png"
      },
      {
        "name": "Audio Consultation",
        "path": "/WeCare/Audio call.png"
      },
      {
        "name": "Patient Profile",
        "path": "/WeCare/Chat option-1.png"
      },
      {
        "name": "Notifications",
        "path": "/WeCare/Notifications.png"
      }
    ],
    "decisions": [
      {
        "title": "Progressive 3-Step Wizard over Single Long Form",
        "problem": "A long booking form presents several decisions at once on a small screen.",
        "options": "Long scrolling single form vs. progressive 3-step wizard (Doctor → Date/Time → Confirmation).",
        "decision": "Implemented a 3-step wizard with step indicator and cost preview.",
        "why": "Isolates decisions into manageable steps, reassuring anxious users at each phase.",
        "tradeoff": "Requires 2 additional tap transitions.",
        "result": "The prototype separates doctor selection, scheduling, and confirmation into distinct stages."
      },
      {
        "title": "Upfront Price Display on Search Cards",
        "problem": "Showing fees only at checkout can leave people uncertain about the cost of an appointment.",
        "options": "Hidden fee until checkout vs. upfront consultation price on doctor cards.",
        "decision": "Placed transparent consultation fees directly beside doctor rating badges.",
        "why": "Transparency builds patient trust and prevents drop-off at checkout.",
        "tradeoff": "Takes up visual space on search summary cards.",
        "result": "Consultation fees are visible before the final booking confirmation."
      }
    ],
    "outcomes": {
      "delivered": "Doctor discovery, appointment booking, and telehealth interface designs.",
      "hypothesized": "Make appointment steps and consultation fees clear before patients confirm a booking.",
      "validationPlan": "Evaluate doctor selection and booking tasks, including unavailable appointments and payment recovery."
    },
    "ownershipBreakdown": {
      "iOwned": [
        "End-to-end mobile UX journey mapping & user flow architecture",
        "High-fidelity iOS native UI component library in Figma",
        "Progressive 3-step scheduling wizard interaction design",
        "Clickable prototype for usability testing & crits"
      ],
      "collaboratedOn": "Peer design crits on accessible typography scale and calm medical color palettes.",
      "outOfScope": "Production mobile app development and medical EHR database integration."
    },
    "reflections": [
      "Designing for healthcare requires prioritizing clarity and standard mental models over visual novelty; familiar mobile patterns build patient trust.",
      "If expanding this system, I would design dedicated accessibility modes for elderly patients, including high-contrast color switches and larger touch targets."
    ],
    "roleMap": [
      "Find specialist doctors with verified credentials",
      "Schedule via progressive 3-step calendar wizard",
      "Review transparent fee breakdowns before booking",
      "Access post-care digital receipts & messaging"
    ]
  },
  "goldera": {
    "id": "goldera",
    "num": "01",
    "name": "GolderaPharm",
    "kind": "Role-based pharmaceutical CRM",
    "accent": "lime",
    "image": "/assets/golderapharm-cover.png",
    "headline": "Designing one enterprise CRM that adapts to three operational field roles.",
    "blurb": "Enterprise CRM for pharmaceutical field teams managing doctors, visits, planning, performance, and reporting across three operational roles.",
    "meta": {
      "context": "GolderaPharm · Client CRM project",
      "roleTitle": "UI/UX Designer",
      "statusShort": "UI design & developer handoff",
      "techStack": "Figma · Token Architecture",
      "product": "Enterprise Pharmaceutical Sales & Field Management CRM",
      "users": "Sales Managers, Field Supervisors & Medical Representatives",
      "period": "Jan–May 2026",
      "deliverables": "Approximately 50 screens, role-based workflows, reusable components, and developer handoff."
    },
    "thesis": "A shared component system can support different workflows for managers, supervisors, and medical representatives.",
    "facts": [
      [
        "3 Roles",
        "Manager, Supervisor, Medical Rep"
      ],
      [
        "~50",
        "High-fidelity CRM UI screens"
      ],
      [
        "1 System",
        "Tokenized Figma component library"
      ]
    ],
    "overview": {
      "client": "GolderaPharm Enterprise System",
      "timeframe": "Jan–May 2026",
      "team": "UI/UX design in collaboration with the engineering team",
      "role": "UI/UX Designer",
      "platforms": "Web Desktop Dashboard & Mobile/Tablet Field Web App",
      "tools": "Figma, User Flow Mapping, Design Tokens"
    },
    "constraints": [
      "Compliance Audit Trails: Immutable logging required for sample distribution and doctor visit confirmations.",
      "Lean Engineering Token System: Development team needed maximum component reuse across all 3 role dashboards without building custom charts for each view.",
      "Mobile Connectivity in Clinics: Medical Representatives needed visit logging to function in low-connectivity hospital basements."
    ],
    "roleArchitecture": {
      "title": "One Operating System, Three Persona Architectures",
      "roles": [
        {
          "name": "Sales Manager",
          "focus": "Macro Visibility & Strategic Performance",
          "color": "#0d244a",
          "screen": "/Golderapharm/Manager Dashboard.png",
          "duties": "Sales target tracking, regional territory performance, approval queues, analytical reporting."
        },
        {
          "name": "Field Supervisor",
          "focus": "Team Execution & Coaching Oversight",
          "color": "#1e3a8a",
          "screen": "/Golderapharm/Supervisor Dashboard.png",
          "duties": "Real-time rep location tracking, joint visit scheduling, rep coaching, visit approvals."
        },
        {
          "name": "Medical Representative",
          "focus": "Mobile Daily Execution & Doctor Visits",
          "color": "#be9e1c",
          "screen": "/Golderapharm/Medical Rep Dashboard.png",
          "duties": "Field visit logging, sample requests, route planning, and doctor profile management."
        }
      ]
    },
    "edgeStates": [
      {
        "title": "Offline Storage Queue State",
        "description": "When network drops inside hospital basements, Rep visit notes queue locally and auto-sync when connection restores.",
        "screen": "/Golderapharm/Add new visit-1.png"
      },
      {
        "title": "Empty Analytics & Sparse Data Fallback",
        "description": "New territories without historical visit data render actionable onboarding prompts instead of blank charts.",
        "screen": "/Golderapharm/Loading.png"
      },
      {
        "title": "Permission-Restricted Access Gate",
        "description": "Clear permission boundary callouts when Reps attempt to view Manager-level financial targets.",
        "screen": "/Golderapharm/Error404.png"
      }
    ],
    "systemGallery": [
      {
        "title": "Target & Quota Allocation",
        "screen": "/Golderapharm/Target.png"
      },
      {
        "title": "Territory Sales Map",
        "screen": "/Golderapharm/Territory Map.png"
      },
      {
        "title": "Rep Field Coaching Audit",
        "screen": "/Golderapharm/Coaching.png"
      },
      {
        "title": "Plan & Schedule Management",
        "screen": "/Golderapharm/Plan Managment.png"
      },
      {
        "title": "Doctor Visit Records",
        "screen": "/Golderapharm/Visits.png"
      },
      {
        "title": "Forecast & Revenue Planning",
        "screen": "/Golderapharm/Forecast.png"
      }
    ],
    "decisions": [
      {
        "title": "Role-Scoped Dashboard Templates over Toggleable Widgets",
        "problem": "Field representatives need visit-entry actions without unrelated management analytics.",
        "options": "Customizable widget dashboard vs. dedicated role-scoped view templates.",
        "decision": "Built 3 dedicated role-scoped view templates sharing the same design token foundation.",
        "why": "Medical Reps need speed; Managers need macro aggregation.",
        "tradeoff": "Requires maintaining 3 distinct layout templates.",
        "result": "Three role-specific layouts share reusable components and a common design foundation."
      },
      {
        "title": "Auto-Saving Slide-Over Drawer for Field Visits",
        "problem": "A separate visit form can interrupt the context of the doctor list.",
        "options": "Full-page form navigation vs. persistent slide-over drawer with local auto-save.",
        "decision": "Designed an auto-saving slide-over drawer for mobile/tablet visit logging.",
        "why": "Keeps doctor list context visible behind the active logging drawer.",
        "tradeoff": "Reduces usable width for detailed notes on mobile.",
        "result": "The proposed visit drawer keeps the doctor list in context while entering visit details."
      }
    ],
    "outcomes": {
      "delivered": "Approximately 50 screens, role-based workflows, reusable components, and developer handoff.",
      "hypothesized": "Give each role the information and actions it needs, while keeping visit entry focused.",
      "validationPlan": "Compare visit-entry completion time, errors, and recovery across representative field tasks."
    },
    "ownershipBreakdown": {
      "iOwned": [
        "Enterprise UI/UX design across approximately 50 desktop and tablet screens",
        "Multi-role information architecture & permission-scoped view templates",
        "Tokenized Figma component library matching backend data schemas",
        "Developer handoff documentation and edge-case state specs"
      ],
      "collaboratedOn": "Backend API data mapping and entity relationship definitions with 2 enterprise software engineers.",
      "outOfScope": "Database infrastructure and legacy ERP software integration."
    },
    "reflections": [
      "Enterprise SaaS complexity is mastered through disciplined component reuse and strict token architecture, not through adding more toggles.",
      "If iterating further, I would conduct early outdoor usability audits on tablet screens to test readability and touch accuracy under direct sunlight for field reps."
    ],
    "roleMap": [
      "Manager: Strategic sales visibility & territory target tracking",
      "Supervisor: Team activity tracking & joint visit coaching",
      "Medical Rep: Field visit and sample logging",
      "Unified: Shared tokenized Figma component design system"
    ]
  },
  "hmz": {
    "id": "hmz",
    "num": "04",
    "name": "HMZ E-Learning",
    "kind": "EdTech learning rhythm & progress system",
    "accent": "coral",
    "image": "/HMZ/Home.png",
    "headline": "Designing tangible progress milestones into online learning.",
    "blurb": "An E-learning experience designed from deep UX research through a scalable, accessible interface system.",
    "meta": {
      "context": "E-learning · Team UX project",
      "roleTitle": "UI/UX Designer",
      "statusShort": "Figma prototype",
      "techStack": "Figma · Component Library",
      "product": "EdTech Online Learning Platform",
      "users": "Self-paced adult learners & university students",
      "period": "2025 · Team UX project",
      "deliverables": "Course discovery, learner dashboard, user flows, wireframes, and reusable Figma components."
    },
    "thesis": "Learners stay motivated when course progress is tangible. Visual milestones and bite-sized curriculum structures reduce course drop-off.",
    "facts": [
      [
        "15+",
        "Designed platform pages"
      ],
      [
        "1",
        "Scalable component system"
      ],
      [
        "UX Focus",
        "Progress momentum & course rhythm"
      ]
    ],
    "overview": {
      "client": "EdTech UX Exploration",
      "timeframe": "2 Months (2025)",
      "team": "UX design team project",
      "role": "UI/UX Designer",
      "platforms": "Web & Mobile Web",
      "tools": "Figma, User Flow Mapping, Prototyping"
    },
    "constraints": [
      "Designed as an independent exploratory project based on heuristic analysis of Coursera and Udemy."
    ],
    "screens": {
      "home": "/HMZ/Home.png",
      "courses": "/HMZ/Courses.png",
      "courseInfo": "/HMZ/Course Info.png",
      "dashboard": "/HMZ/Dashboard.png",
      "pricing": "/HMZ/Pricing.png",
      "services": "/HMZ/Services.png",
      "about": "/HMZ/About.png"
    },
    "decisions": [
      {
        "title": "Visual Milestone Progress Timeline",
        "problem": "Students felt overwhelmed by long flat lists of video links.",
        "options": "Flat list vs. visual milestone timeline showing active, completed, and upcoming units.",
        "decision": "Designed a milestone timeline with visual progress indicators.",
        "why": "Reinforces a sense of momentum and accomplishment.",
        "tradeoff": "Requires more vertical screen space.",
        "result": "The interface presents lesson structure and learner progress together."
      }
    ],
    "outcomes": {
      "delivered": "Course discovery, learner dashboard, user flows, wireframes, and reusable Figma components.",
      "hypothesized": "Make course structure and learner progress easier to scan.",
      "validationPlan": "Evaluate finding a lesson, resuming a course, and understanding progress with self-paced learners."
    },
    "ownershipBreakdown": {
      "iOwned": [
        "Heuristic analysis of legacy EdTech platforms and curriculum drop-off patterns",
        "Student progress dashboard & visual milestone timeline design",
        "Scalable Figma design system for course catalogs and video player controls",
        "Interactive desktop and mobile web prototypes"
      ],
      "collaboratedOn": "Independent design exploration.",
      "outOfScope": "Production frontend web development and video streaming infrastructure."
    },
    "reflections": [
      "Course structure and progress need to be understandable before adding more visual detail.",
      "If taking this to production, I would design personalized adaptive quizzes that dynamically suggest review units based on student quiz scores."
    ],
    "roleMap": [
      "Browse course discovery & recommendations",
      "Track learning rhythm & visual milestone progress",
      "Engage with gamified achievement rewards"
    ]
  },
  "franchise212": {
    "id": "franchise212",
    "num": "05",
    "name": "212° Franchise",
    "kind": "Franchise discovery platform",
    "accent": "sand",
    "image": "/212/Home.jpg",
    "headline": "Clear 4-destination commercial franchise exploration.",
    "blurb": "A responsive franchise discovery platform helping prospective partners explore concepts, product categories, and initiate contact.",
    "meta": {
      "context": "212° Franchise · Client design project",
      "roleTitle": "UI/UX Designer",
      "statusShort": "Responsive design & handoff",
      "techStack": "Figma · Responsive Layouts",
      "product": "Commercial Franchise Discovery Platform",
      "users": "Prospective franchisees & business investors",
      "period": "2024 · Client design project",
      "deliverables": "Responsive designs for Home, About, Products, and Contact."
    },
    "thesis": "Build investor trust through transparent visual storytelling before asking for an inquiry submission.",
    "facts": [
      [
        "Web + Mobile",
        "Responsive design"
      ],
      [
        "4 Pages",
        "Home, About, Products, Contact"
      ],
      [
        "UI/UX",
        "Product design & web branding"
      ]
    ],
    "overview": {
      "client": "212° Franchise",
      "timeframe": "1.5 Months (2024)",
      "team": "UI/UX Designer collaborating with Brand Lead",
      "role": "UI/UX Designer",
      "platforms": "Responsive Desktop & Mobile Web",
      "tools": "Figma, Brand Strategy, Layout Grid"
    },
    "constraints": [
      "Must adhere strictly to established 212° brand guidelines while elevating digital typography."
    ],
    "decisions": [
      {
        "title": "Direct 4-Destination Navigation Hierarchy",
        "problem": "Information was previously buried in complex multi-level menus.",
        "options": "Multi-level dropdown vs. simple 4-destination structure (Home, About, Products, Contact).",
        "decision": "Structured site into 4 primary destinations with persistent inquiry action buttons.",
        "why": "Enables partners to inspect product categories and financial details within 1 click.",
        "tradeoff": "Eliminates deep sub-pages.",
        "result": "Four primary destinations make the product and inquiry routes explicit."
      }
    ],
    "outcomes": {
      "delivered": "Responsive designs for Home, About, Products, and Contact.",
      "hypothesized": "Help prospective partners explore the offer and find a clear inquiry path.",
      "validationPlan": "Evaluate discovery of product information and the inquiry path on desktop and mobile."
    },
    "ownershipBreakdown": {
      "iOwned": [
        "4-destination information architecture & responsive navigation system",
        "Desktop and mobile web UI layouts across all core destinations",
        "Commercial concept showcase templates (Clean Energy, Robotics, Marine)",
        "Investor qualification inquiry form design"
      ],
      "collaboratedOn": "Brand strategy alignment and typography guidelines with 212° Brand Lead.",
      "outOfScope": "Full-stack backend engineering and franchise CRM database integration."
    },
    "reflections": [
      "If I revisited this project, I would run rapid usability tests on the 4-destination navigation with real prospective franchise partners before finalizing the information architecture.",
      "Commercial credibility is established through restrained layout and typography; avoiding decorative clutter keeps the focus on business metrics."
    ],
    "roleMap": [
      "Discover 212° franchise concepts",
      "Explore product categories & financial requirements",
      "Initiate direct investor inquiries"
    ],
    "screens": {
      "home": "/212/Home.jpg",
      "about": "/212/About us.jpg",
      "products": "/212/Products.jpg",
      "contact": "/212/Contact us.jpg",
      "mobHome": "/212/mob home.jpg",
      "mobAbout": "/212/mob about.jpg",
      "mobProducts": "/212/mob prod.jpg",
      "mobContact": "/212/mob contact.jpg",
      "burgerMenu": "/212/Burger menu.jpg",
      "solar": "/212/solar.jpg",
      "solarMob": "/212/Solar mob prod.jpg",
      "robo": "/212/Robo.jpg",
      "roboMob": "/212/robomob prod.jpg",
      "wooden": "/212/wooden.jpg",
      "woodenMob": "/212/wooden mob prod.jpg",
      "yacht": "/212/Yacht.jpg",
      "yachtMob": "/212/Yacht mob.jpg",
      "villa": "/212/villa.jpg"
    }
  },
  "imdb": {
    "id": "imdb",
    "num": "06",
    "name": "IMDb Redesign",
    "kind": "Entertainment interface redesign",
    "accent": "coral",
    "image": "/IMDB Redesign/Cover - Light.jpg",
    "headline": "Reconsidering a content-heavy legacy database through modular dark UI.",
    "blurb": "A UI redesign exploration for an entertainment discovery platform focused on visual hierarchy, reduced clutter, and intuitive browsing.",
    "meta": {
      "context": "Independent entertainment UI redesign",
      "roleTitle": "UI/UX Designer",
      "statusShort": "UI concept",
      "techStack": "Figma · Cinematic Design System",
      "product": "Entertainment Media Database Redesign",
      "users": "Moviegoers, film enthusiasts & television fans",
      "period": "2024 · Redesign exploration",
      "deliverables": "Discovery, movie details, search, and cast interface concepts."
    },
    "thesis": "A dark cinematic visual system allows film artwork and ratings to shine without cluttering core metadata.",
    "facts": [
      [
        "UI Study",
        "Focused interface concept"
      ],
      [
        "Content-First",
        "Improved information architecture"
      ],
      [
        "Dark UI",
        "Modern visual hierarchy"
      ]
    ],
    "overview": {
      "client": "UI/UX Redesign Concept",
      "timeframe": "1 Month (2024)",
      "team": "UI/UX Designer (Solo)",
      "role": "UI/UX Designer",
      "platforms": "Desktop Web Interface",
      "tools": "Figma, Dark Mode Design System"
    },
    "constraints": [
      "Retaining all legacy IMDb metadata (ratings, cast, trivia, trailers, reviews) while eliminating visual noise."
    ],
    "decisions": [
      {
        "title": "Modular Media Cards over Dense Data Tables",
        "problem": "Legacy IMDb cast listings and trailer grids fought for visual attention.",
        "options": "Dense text tables vs. modular dark-mode content cards.",
        "decision": "Organized details into structured dark-mode cards with high contrast hierarchy.",
        "why": "Allows users to quickly scan cast lists, ratings, and streaming options.",
        "tradeoff": "Slightly less text density per screen.",
        "result": "Movie and cast information is grouped into scannable content cards."
      }
    ],
    "outcomes": {
      "delivered": "Discovery, movie details, search, and cast interface concepts.",
      "hypothesized": "Improve visual hierarchy and scanning of movie and cast information.",
      "validationPlan": "Evaluate finding cast details and adding a title to a watchlist against the current experience."
    },
    "ownershipBreakdown": {
      "iOwned": [
        "Information architecture restructuring for high-density entertainment data",
        "Cinematic dark-mode component design system in Figma",
        "Modular card layouts for ratings, streaming options, and cast lists",
        "Faceted search and filter modal interaction flows"
      ],
      "collaboratedOn": "Independent concept study.",
      "outOfScope": "Production web development and media streaming API integration."
    },
    "reflections": [
      "Redesigning a high-traffic legacy platform requires deep respect for established mental models; visual refinement must enhance, not break, intuitive discovery.",
      "If iterating further, I would design customized community discussion boards and user review moderation flows."
    ],
    "roleMap": [
      "Scan trending titles & ratings",
      "Browse cast & crew metadata",
      "Select streaming options & watchlist"
    ],
    "screens": {
      "cover": "/IMDB Redesign/Cover - Light.jpg",
      "redesign": "/IMDB Redesign/IMDB 2Redesign.jpg",
      "frame": "/IMDB Redesign/Frame.png",
      "multiFrame": "/IMDB Redesign/Frame 1948755426.png",
      "feed": "/IMDB Redesign/S6.png",
      "watchlist": "/IMDB Redesign/S7.png",
      "search": "/IMDB Redesign/S8.png",
      "details": "/IMDB Redesign/S9.png"
    }
  }
};

export const projectKeys = ["goldera", "smartmeet", "wecare", "hmz", "franchise212", "imdb"];

// Flagship Curation (Exact Order: 01 SmartMeet, 02 WeCare, 03 GolderaPharm)
export const flagshipProjects = [projects.goldera, projects.smartmeet, projects.wecare];

// Secondary Extended Work
export const secondaryProjects = [
  projects.hmz,
  projects.franchise212,
  projects.imdb
];
