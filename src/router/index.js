import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import CaseStudyView from "@/views/CaseStudyView.vue";
import VisualArchiveDetailView from "@/views/VisualArchiveDetailView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { nextTick } from "vue";
import { applyPageMetadata, defaultSiteUrl } from "@/lib/pageMetadata.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Marwan Ashraf Elgammal — Product & UI/UX Designer",
      description: "Portfolio of Marwan Ashraf Elgammal, Product & UI/UX Designer with frontend experience specializing in SaaS systems, Vue 3 applications, and interaction design."
    }
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
    meta: {
      title: "Selected Product Work & Case Studies — Marwan Ashraf Elgammal",
      description: "Explore flagship product design systems including SmartMeet AI workspace, WeCare Healthcare booking, and GolderaPharm enterprise CRM."
    }
  },
  {
    path: "/work",
    redirect: "/projects"
  },
  {
    path: "/about",
    redirect: "/#about"
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Contact & Primary Inbox — Marwan Ashraf Elgammal",
      description: "Get in touch with Marwan Ashraf Elgammal for product design, design system architecture, or Vue 3 frontend development opportunities."
    }
  },
  {
    path: "/projects/:slug",
    name: "case-study",
    component: CaseStudyView,
    props: true
  },
  {
    path: "/archive/:slug",
    name: "archive-detail",
    component: VisualArchiveDetailView,
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
    meta: {
      title: "404 Page Not Found — Marwan Ashraf Elgammal"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  async scrollBehavior(to, from, savedPosition) {
    await nextTick();
    // The out-in page transition must finish before measuring anchors or restoring scroll.
    if (from.matched.length && to.path !== from.path && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await new Promise(resolve => setTimeout(resolve, 400));
    }
    if (savedPosition) return savedPosition;
    if (to.hash) {
      // URL fragments are untrusted; getElementById avoids invalid CSS selectors.
      let id;
      try { id = decodeURIComponent(to.hash.slice(1)); } catch { return { top: 0 }; }
      const element = document.getElementById(id);
      if (element) return { el: element, top: 90 };
    }
    return { top: 0 };
  }
});

router.afterEach((to, from, failure) => {
  if (!failure) applyPageMetadata(to.path, import.meta.env.VITE_SITE_URL || defaultSiteUrl);
});

export default router;
