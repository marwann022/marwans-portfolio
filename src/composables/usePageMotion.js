import { nextTick, onMounted, onUnmounted, watch } from 'vue';

// Progressive enhancement: content is visible unless the observer is successfully installed.
export function usePageMotion(route) {
  let observer;
  let mutations;
  let frame = 0;
  let reducedMotion;
  let observed = new Set();
  let parallaxItems = [];
  let sectionLinks = [];
  let sections = [];

  function updateScroll() {
    frame = 0;
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty('--page-progress', distance > 0 ? String(Math.max(0, Math.min(1, window.scrollY / distance))) : '0');
    const currentSection = [...sections].reverse().find(element => element.getBoundingClientRect().top <= 195) || sections[0];
    sectionLinks.forEach(link => {
      if (link.hash === `#${currentSection?.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (reducedMotion?.matches || window.innerWidth < 768) return;
    parallaxItems.forEach(element => {
      const box = element.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) return;
      const offset = ((box.top + box.height / 2) / window.innerHeight - .5) * -14;
      element.style.setProperty('--media-shift', `${Math.max(-10, Math.min(10, offset))}px`);
    });
  }
  function requestFrame() { if (!frame) frame = requestAnimationFrame(updateScroll); }
  function refresh() {
    const main = document.querySelector('#main-content');
    if (!main) return;
    for (const element of observed) if (!element.isConnected) { observer?.unobserve(element); observed.delete(element); }
    main.querySelectorAll('[data-reveal]').forEach(element => {
      if (observed.has(element)) return;
      observed.add(element);
      const box = element.getBoundingClientRect();
      if (!observer || reducedMotion.matches || box.top < window.innerHeight) element.classList.add('revealed');
      else { element.classList.add('reveal-ready'); observer.observe(element); }
    });
    parallaxItems = [...main.querySelectorAll('[data-parallax]')];
    sectionLinks = [...main.querySelectorAll('.case-nav a')];
    sections = [...main.querySelectorAll('.case-content > .case-study-anchor')].filter(section => sectionLinks.some(link => link.hash === `#${section.id}`));
    requestFrame();
  }
  function motionPreferenceChanged() {
    if (reducedMotion.matches) {
      observed.forEach(element => element.classList.add('revealed'));
      parallaxItems.forEach(element => element.style.removeProperty('--media-shift'));
    }
    requestFrame();
  }
  onMounted(() => {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if ('IntersectionObserver' in window) observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
      });
    }, { threshold: .04, rootMargin: '0px 0px -24px 0px' });
    mutations = new MutationObserver(refresh);
    mutations.observe(document.getElementById('main-content'), { childList: true, subtree: true });
    window.addEventListener('scroll', requestFrame, { passive: true });
    window.addEventListener('resize', requestFrame, { passive: true });
    reducedMotion.addEventListener('change', motionPreferenceChanged);
    refresh();
  });
  watch(() => route.fullPath, async () => { await nextTick(); requestFrame(); });
  onUnmounted(() => {
    observer?.disconnect(); mutations?.disconnect();
    window.removeEventListener('scroll', requestFrame); window.removeEventListener('resize', requestFrame);
    reducedMotion?.removeEventListener('change', motionPreferenceChanged);
    cancelAnimationFrame(frame); observed.clear();
  });
}
