import { createApp, computed, ref, onMounted, onBeforeUnmount } from "vue";
import "./style.css";

const projects = {
  goldera: {
    id: "goldera", num: "01", name: "GolderaPharm", kind: "Role-based pharmaceutical CRM", accent: "lime",
    image: "https://drive.google.com/thumbnail?id=1eSJeo5aTE9OLEGW4YoMRCNeTHDwRuFMz&sz=w1600",
    headline: "One operating system.<br><em>Three ways through it.</em>",
    blurb: "A role-based CRM designed for the people who keep a pharmaceutical operation moving: Managers, Supervisors, and Medical Representatives.",
    facts: [["3", "User roles"], ["50+", "High-fidelity screens"], ["1", "Reusable design system"]],
    blocks: [
      ["THE CONTEXT", "Managers need oversight. Supervisors need action. Medical Representatives need clarity in the field."],
      ["THE SYSTEM", "I mapped the complete journey, designed dashboards, assembled reusable components, and handed a clear Figma system to the development team."],
      ["WHAT TO ADD", "Put your strongest dashboard mockup here, followed by a role-flow diagram and 3–5 component close-ups."]
    ],
    roleMap: ["Manager: visibility across performance", "Supervisor: team activity and follow-up", "Medical Representative: focused field workflow"]
  },
  smartmeet: {
    id: "smartmeet", num: "02", name: "SmartMeet", kind: "Multi-tenant collaboration workspace", accent: "blue",
    headline: "Meetings that leave<br><em>something behind.</em>",
    blurb: "An ITI graduation project bringing meetings, knowledge, and action items into one collaborative workspace.",
    facts: [["AI", "Meeting intelligence"], ["RAG", "Knowledge search"], ["Vue + Node", "Full-stack delivery"]],
    blocks: [
      ["THE PRODUCT", "SmartMeet supports real-time meeting transcription, AI summaries and action items, task management, and community-level data isolation."],
      ["MY CONTRIBUTION", "I designed the UI/UX in Figma and contributed to the Vue.js and Vite front end, with Node.js, Express, MongoDB, and REST APIs behind it."],
      ["WHAT TO ADD", "Lead with one strong meeting or workspace screen. Then show the IA, a focused user flow, and a small technical architecture visual."]
    ],
    roleMap: ["Live transcription", "AI summary + action items", "Knowledge search across conversations"]
  },
  hmz: {
    id: "hmz", num: "03", name: "HMZ", kind: "E-learning UX case study", accent: "coral",
    image: "https://drive.google.com/thumbnail?id=1eyyBc02D7vPxCUSO2kxjI38tHjAwJtNt&sz=w1600",
    headline: "Learning flows should feel<br><em>like progress.</em>",
    blurb: "An E-learning experience designed from the UX case study through an interface system that could scale.",
    facts: [["15+", "Designed pages"], ["1", "Component system"], ["End-to-end", "UX process"]],
    blocks: [
      ["THE DISCOVERY", "The case study covered personas, site map, user flows, wireframes, and an icon library before moving into visual design."],
      ["THE EXPERIENCE", "The resulting platform includes course discovery, course details, learner dashboard, leaderboard, chatbot, and authentication flows."],
      ["WHAT TO ADD", "Show your persona and flow as a visual sequence—not a PDF screenshot—then place the dashboard and components as the proof."]
    ],
    roleMap: ["Find a course", "Build a learning rhythm", "Track progress and return"]
  },
  franchise212: {
    id: "franchise212", num: "04", name: "212° Franchise", kind: "Franchise discovery platform", accent: "sand",
    image: "https://drive.google.com/thumbnail?id=1yjJZMAehkVqVFZWz0YXZWYp5f52jyRjr&sz=w1600",
    headline: "A franchise journey<br><em>with room to grow.</em>",
    blurb: "A responsive franchise platform that helps people discover concepts, explore product categories, and reach the team with clarity.",
    facts: [["Web + mobile", "Responsive interface"], ["4", "Core journeys"], ["UI/UX", "Product design"]],
    blocks: [
      ["THE PRODUCT", "212° of Franchise is a discovery platform for franchise concepts. I designed the public-facing experience across Home, About, Products, and Contact."],
      ["THE EXPERIENCE", "The design uses a clear navigation system, strong visual storytelling, product exploration, and mobile layouts that preserve the hierarchy on smaller screens."],
      ["WHAT TO SHOW", "The portfolio will pair the desktop Home screen with a mobile sequence and selected category screens—not a wall of every page."]
    ],
    roleMap: ["Discover the franchise", "Explore categories", "Reach the team"],
    screens: {
      home: "https://drive.google.com/thumbnail?id=1yjJZMAehkVqVFZWz0YXZWYp5f52jyRjr&sz=w1600",
      about: "https://drive.google.com/thumbnail?id=18w4aKgPePCBxRYDcOfK-J9yyvWv4kS9I&sz=w1600",
      products: "https://drive.google.com/thumbnail?id=1MJyXoMNCeaDi1FA0qs8flxKo26R4BXPV&sz=w1600",
      contact: "https://drive.google.com/thumbnail?id=1IdvYLg7J4H8LMEg2kp9ptvX4gR3p1JQK&sz=w1600"
    }
  },
  wecare: {
    id: "wecare", num: "05", name: "WeCare", kind: "Healthcare appointment experience", accent: "blue",
    image: "https://drive.google.com/thumbnail?id=10ndQUkdxh0OSo-qoMa5XY3AgV-cU1zcE&sz=w1600",
    headline: "Care journeys deserve<br><em>calm interfaces.</em>",
    blurb: "A healthcare product experience covering discovery, doctor information, booking, payment, messaging, and appointment support.",
    facts: [["20+", "Product screens"], ["End-to-end", "Patient journey"], ["UI/UX", "Mobile experience"]],
    blocks: [
      ["THE EXPERIENCE", "WeCare maps a patient journey from onboarding and search through doctor details, booking, payment methods, confirmation, chat, calls, and notifications."],
      ["THE SYSTEM", "The product uses clear status, accessible decision points, and supportive UI patterns so that important health-related steps feel direct rather than stressful."],
      ["WHAT TO SHOW", "The case study will sequence the real screens by journey: onboarding, search, appointment, payment, and care follow-up."]
    ],
    roleMap: ["Find the right doctor", "Book and pay with clarity", "Stay supported after the appointment"]
  },
  imdb: {
    id: "imdb", num: "06", name: "IMDB Redesign", kind: "Entertainment interface redesign", accent: "coral",
    image: "https://drive.google.com/thumbnail?id=1LW9tn7VKvXu1XiFwqRcEaoSeTAK49lkn&sz=w1600",
    headline: "A familiar product,<br><em>reconsidered.</em>",
    blurb: "A UI redesign exploration for an entertainment discovery experience, focused on hierarchy, visual clarity, and easier browsing.",
    facts: [["UI", "Redesign study"], ["1", "Focused concept"], ["Visual", "Interface exploration"]],
    blocks: [
      ["THE EXPLORATION", "This project reimagines an entertainment interface through a cleaner visual language and a more deliberate content hierarchy."],
      ["THE FOCUS", "The page will show the design decisions through side-by-side captures and detail crops rather than long explanatory text."],
      ["WHAT TO SHOW", "Use the cover and interface redesign captures to explain the visual direction and the browsing experience."]
    ],
    roleMap: ["Scan what matters", "Browse with less noise", "Choose what to watch"]
  }
};

const gallery = [
  ["Moon", "Brand identity & packaging", "https://drive.google.com/thumbnail?id=1Cbal9PBxChChqDUmrJqc58caqjddlmhG&sz=w1000"],
  ["Cela", "Campaign & social design", "https://drive.google.com/thumbnail?id=1LIM7s0ZnUMQ0T7LZa9wJI5K0ibZBLhUR&sz=w1000"],
  ["IEEE", "Community communications", "https://drive.google.com/thumbnail?id=396702188_702184045263495_3409533937639513646_n&sz=w1000"]
];

const App = {
  setup() {
    const route = ref(location.hash.replace("#/", "") || "home");
    const menuOpen = ref(false);
    const current = computed(() => projects[route.value]);
    const setRoute = (r) => { location.hash = "#/" + r; menuOpen.value = false; };
    const nextRoute = computed(() => { const keys = Object.keys(projects); return keys[(keys.indexOf(route.value) + 1) % keys.length]; });
    const onHash = () => { route.value = location.hash.replace("#/", "") || "home"; window.scrollTo({ top: 0, behavior: "smooth" }); };
    onMounted(() => window.addEventListener("hashchange", onHash));
    onBeforeUnmount(() => window.removeEventListener("hashchange", onHash));
    return { route, current, menuOpen, setRoute, nextRoute, projects, gallery };
  },
  template: `
  <div class="site-shell">
    <header class="topbar">
      <a href="#/home" class="logo" @click="setRoute('home')">ME<span>°</span></a>
      <nav :class="{ open: menuOpen }">
        <a href="#/home" @click="setRoute('home')">Index</a>
        <a href="#/about" @click="setRoute('about')">About</a>
        <a href="#/contact" @click="setRoute('contact')">Contact</a>
      </nav>
      <button class="menu" @click="menuOpen=!menuOpen" aria-label="Open menu">＋</button>
      <a class="available" href="mailto:marwanelgammal0@gmail.com"><i></i> Available for work</a>
    </header>

    <main v-if="route === 'home'" class="home">
      <section class="hero">
        <p class="eyebrow enter">Cairo, Egypt <span>—</span> Open to relocate</p>
        <h1 class="hero-title"><span class="line">Digital products</span><span class="line serif">with a pulse.</span></h1>
        <div class="hero-foot enter"><p>UI/UX designer and developer shaping complex systems into interfaces people can move through naturally.</p><button @click="setRoute('goldera')" class="circle-btn">Start here <b>↓</b></button></div>
        <div class="orbit">UI/UX<br>DESIGNER<br>&amp; DEVELOPER</div>
        <div class="moving-tape"><span>RESEARCH · SYSTEMS · FLOWS · INTERFACES · BUILD · </span><span>RESEARCH · SYSTEMS · FLOWS · INTERFACES · BUILD · </span></div>
      </section>
      <section class="intro section-dark"><p class="eyebrow">(01) THE WAY I WORK</p><h2>Make the complex feel <mark>considered.</mark><br>Not complicated.</h2><p class="side-copy">Research gives the work a reason. A system makes it coherent. A build-minded handoff makes it real.</p></section>
      <section class="work-index">
        <div class="section-top"><p class="eyebrow">(02) SELECTED WORK</p><p>Tap a project to enter its case study.</p></div>
        <article v-for="p in projects" :key="p.name" :class="['project-row',p.accent]" @click="setRoute(p.id)">
          <span class="number">{{ p.num }}</span><div class="project-title"><h3>{{p.name}}</h3><p>{{p.kind}}</p></div>
          <div class="project-window"><img v-if="p.image" :src="p.image" :alt="p.name + ' project screen'"><template v-else><span>INTERFACE SYSTEM</span><b>{{p.name}}</b><i></i><i></i><i></i></template></div>
          <button aria-label="Open case study">↗</button>
        </article>
      </section>
      <section class="gallery-section"><div class="section-top"><p class="eyebrow">(03) VISUAL ARCHIVE</p><p>Selected brand, product, and communication work.</p></div><div class="gallery-grid"><article v-for="item in gallery" :key="item[0]"><img :src="item[2]" :alt="item[0]"><div><b>{{item[0]}}</b><span>{{item[1]}}</span></div></article></div></section>
      <section class="home-about"><div class="portrait-slot"><span>PORTRAIT / DETAIL<br>PLACEHOLDER</span><b>ME</b></div><div><p class="eyebrow">(04) MORE THAN SCREENS</p><h2>Systems thinker.<br><em>Builder, too.</em></h2><p>I connect UX research, visual design, and enough code to make the handoff genuinely useful.</p><button @click="setRoute('about')" class="text-link">More about me ↗</button></div></section>
    </main>

    <main v-else-if="current" :class="['case-study', current.accent]">
      <section class="case-hero"><a href="#/home" @click="setRoute('home')" class="back">← ALL WORK</a><div class="case-index">{{current.num}}</div><p class="eyebrow">{{current.kind}}</p><h1 v-html="current.headline"></h1><p class="case-blurb">{{current.blurb}}</p><div class="case-main-slot" :class="{ 'has-image': current.image }"><img v-if="current.image" :src="current.image" :alt="current.name + ' interface'"/><template v-else><span>HERO MOCKUP / PRODUCT SCREEN</span><div class="screen-skeleton"><b>{{current.name}}</b><i></i><i></i><i></i></div></template></div></section>
      <section class="facts"><div v-for="fact in current.facts" :key="fact[1]"><b>{{fact[0]}}</b><span>{{fact[1]}}</span></div></section>
      <section class="case-content"><div v-for="(block,index) in current.blocks" :key="block[0]" class="content-block"><p class="eyebrow">0{{index+1}} / {{block[0]}}</p><p>{{block[1]}}</p><div v-if="index === 1" class="detail-slot"><span>DROP PROCESS / FLOW VISUAL HERE</span></div></div></section>
      <section class="role-flow"><p class="eyebrow">THE EXPERIENCE, IN MOTION</p><div class="flow-lines"><div v-for="(step,index) in current.roleMap" :key="step"><b>0{{index+1}}</b><span>{{step}}</span><i>→</i></div></div></section>
      <template v-if="current.id === 'franchise212'">
        <section class="franchise-story">
          <div class="story-label"><p class="eyebrow">04 / THE PUBLIC JOURNEY</p><p>A straightforward website should still have a point of view.</p></div>
          <div class="story-copy"><h2>Give the concept space.<br><em>Then make action easy.</em></h2><p>I designed the public journey around four clear destinations: an editorial Home that introduces 212°, supporting context in About, a focused Products view, and a direct Contact route.</p></div>
        </section>
        <section class="franchise-screen spread-home">
          <div class="screen-caption"><p class="eyebrow">01 / HOME</p><p>The first screen balances the brand story with a clear way into the franchise offering.</p></div>
          <div class="browser-frame"><div class="browser-bar"><i></i><i></i><i></i><span>212franchise.com</span></div><img :src="current.screens.home" alt="212 Franchise Home page"></div>
        </section>
        <section class="franchise-grid">
          <article><div class="browser-frame small"><div class="browser-bar"><i></i><i></i><i></i></div><img :src="current.screens.about" alt="212 Franchise About page"></div><p class="eyebrow">02 / ABOUT</p><h3>Build trust before asking for a decision.</h3></article>
          <article><div class="browser-frame small"><div class="browser-bar"><i></i><i></i><i></i></div><img :src="current.screens.products" alt="212 Franchise Products page"></div><p class="eyebrow">03 / PRODUCTS</p><h3>Keep category exploration visual and easy to scan.</h3></article>
          <article><div class="browser-frame small"><div class="browser-bar"><i></i><i></i><i></i></div><img :src="current.screens.contact" alt="212 Franchise Contact page"></div><p class="eyebrow">04 / CONTACT</p><h3>End the journey with one direct, unambiguous next step.</h3></article>
        </section>
        <section class="franchise-close"><p class="eyebrow">DESIGNED FOR THE FULL JOURNEY</p><div><b>HOME</b><i>→</i><b>ABOUT</b><i>→</i><b>PRODUCTS</b><i>→</i><b>CONTACT</b></div></section>
      </template>
      <section class="next-case"><p class="eyebrow">NEXT CASE STUDY</p><button @click="setRoute(nextRoute)">{{ projects[nextRoute].name }} <b>↗</b></button></section>
    </main>

    <main v-else-if="route === 'about'" class="about-page">
      <section class="page-hero"><p class="eyebrow">ABOUT MARWAN</p><h1>A designer who<br><em>understands the build.</em></h1><p>Computer and Control Engineering graduate, UI/UX Designer, and UI/UX Developer trained at ITI.</p></section>
      <section class="timeline"><p class="eyebrow">(01) TIMELINE</p><div><article><b>2026</b><span><strong>UI/UX Designer · GolderaPharm</strong>Designed an implemented role-based pharma CRM, 50+ screens, dashboards, and a reusable design system.</span></article><article><b>2026</b><span><strong>ITI · UI/UX Development, ITP Round 2</strong>Six-month intensive professional training covering UX, front end, back end, AI, Vue.js, Node.js, MongoDB, and REST APIs.</span></article><article><b>2024</b><span><strong>Graphic Designer · Cela</strong>Remote part-time work creating posters, logos, and advertising assets.</span></article><article><b>2023</b><span><strong>ITI · UI/UX Design Internship</strong>UX research, Figma, wireframing, prototyping, visual design, and basic front end.</span></article><article><b>2025</b><span><strong>B.Sc. Computer and Control Engineering</strong>Suez Canal University · Final Grade: Very Good.</span></article></div></section>
      <section class="toolkit"><p class="eyebrow">(02) TOOLKIT</p><div class="toolkit-grid"><span>Figma</span><span>UX Research</span><span>Design Systems</span><span>Wireframing</span><span>Vue.js</span><span>Vite</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>REST APIs</span><span>Photoshop</span><span>Illustrator</span></div></section>
    </main>

    <main v-else class="contact-page" id="contact"><p class="eyebrow">LET'S MAKE THE USEFUL THING BEAUTIFUL</p><h1>Have a product<br>worth <em>shaping?</em></h1><a href="mailto:marwanelgammal0@gmail.com">marwanelgammal0@gmail.com ↗</a><div><a href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/" target="_blank">LinkedIn</a><a href="https://github.com/marwann022" target="_blank">GitHub</a><span>+20 101 690 6441</span></div></main>
    <footer><span>© 2026 Marwan Elgammal</span><span>UI/UX Designer + Developer</span></footer>
  </div>`
};
createApp(App).mount("#app");
