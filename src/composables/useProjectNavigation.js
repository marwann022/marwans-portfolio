import { computed } from "vue";
import { projects, projectKeys } from "@/data/projects.js";

export function useProjectNavigation() {
  const getProject = (id) => projects[id] || null;

  const getNextProjectSlug = (currentId) => {
    const currentIndex = projectKeys.indexOf(currentId);
    if (currentIndex === -1) return projectKeys[0];
    return projectKeys[(currentIndex + 1) % projectKeys.length];
  };

  const getNextProject = (currentId) => {
    const nextSlug = getNextProjectSlug(currentId);
    return projects[nextSlug];
  };

  return {
    projects,
    projectKeys,
    getProject,
    getNextProjectSlug,
    getNextProject
  };
}
