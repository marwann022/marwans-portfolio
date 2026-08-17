import { onMounted, onUnmounted } from "vue";

export function useScrollReveal(selector = ".reveal-on-scroll") {
  let observer = null;

  function initObserver() {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));
  }

  onMounted(() => {
    setTimeout(initObserver, 100);
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    initObserver
  };
}
