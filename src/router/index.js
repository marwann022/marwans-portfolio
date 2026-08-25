import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import CaseStudyView from "@/views/CaseStudyView.vue";
import VisualArchiveDetailView from "@/views/VisualArchiveDetailView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { projects } from "@/data/projects.js";
import { archiveProjects } from "@/data/gallery.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Marwan Elgammal — UI/UX Designer & Front-End Developer",
      description: "Portfolio of Marwan Elgammal, Lead Product Designer & Frontend Developer specializing in SaaS systems, Vue 3 applications, and interaction design."
    }
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
    meta: {
      title: "Selected Product Work & Case Studies — Marwan Elgammal",
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
      title: "Contact & Primary Inbox — Marwan Elgammal",
      description: "Get in touch with Marwan Elgammal for product design, design system architecture, or Vue 3 frontend development opportunities."
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
      title: "404 Page Not Found — Marwan Elgammal"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0, behavior: "smooth" };
  }
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else if (to.name === "case-study" && to.params.slug) {
    const project = projects[to.params.slug];
    document.title = project
      ? `${project.name} — Case Study | Marwan Elgammal`
      : `${to.params.slug} Case Study — Marwan Elgammal`;
  } else if (to.name === "archive-detail" && to.params.slug) {
    const archiveItem = archiveProjects[to.params.slug];
    document.title = archiveItem
      ? `${archiveItem.name} — Visual Identity & Brand System | Marwan Elgammal`
      : `${to.params.slug} Visual Archive — Marwan Elgammal`;
  } else {
    document.title = "Marwan Elgammal — UI/UX Designer & Front-End Developer";
  }

  if (to.meta && to.meta.description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", to.meta.description);
    }
  }
});

router.beforeResolve((to, from, next) => {
  if (
    document.startViewTransition &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    document.startViewTransition(() => {
      next();
    });
  } else {
    next();
  }
});

export default router;

