import { projects, projectKeys } from "@/data/projects.js";

export function useProjectNavigation() {
  const getProject = (id) => projects[id] || null;

  const getNextProjectSlug = (currentId) => {
    const currentIndex = projectKeys.indexOf(currentId);
    if (currentIndex === -1) return projectKeys[0];
    return projectKeys[(currentIndex + 1) % projectKeys.length];
  };

  const getPrevProjectSlug = (currentId) => {
    const currentIndex = projectKeys.indexOf(currentId);
    if (currentIndex <= 0) return projectKeys[projectKeys.length - 1];
    return projectKeys[currentIndex - 1];
  };

  const getNextProject = (currentId) => {
    const nextSlug = getNextProjectSlug(currentId);
    return projects[nextSlug];
  };

  const getPrevProject = (currentId) => {
    const prevSlug = getPrevProjectSlug(currentId);
    return projects[prevSlug];
  };

  return {
    projects,
    projectKeys,
    getProject,
    getNextProjectSlug,
    getPrevProjectSlug,
    getNextProject,
    getPrevProject
  };
}

