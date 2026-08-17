import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import CaseStudyView from "@/views/CaseStudyView.vue";
import VisualArchiveDetailView from "@/views/VisualArchiveDetailView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView
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
    component: ContactView
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
    component: NotFoundView
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
