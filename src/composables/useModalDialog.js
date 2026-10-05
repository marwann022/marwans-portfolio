import { nextTick, onUnmounted, watch } from 'vue';

export function useModalDialog(isOpen, dialog, close) {
  let restoreFocus = null;
  let restoreOverflow = '';
  let isolated = [];
  let active = false;
  function focusable() {
    return [...(dialog.value?.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])') || [])]
      .filter(el => !el.disabled && !el.closest('[inert]') && el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden');
  }
  function keepFocus(event) {
    if (active && dialog.value && !dialog.value.contains(event.target)) (focusable()[0] || dialog.value).focus();
  }
  function keydown(event) {
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); }
    else if (event.key === 'Tab') {
      const items = focusable();
      const first = items[0] || dialog.value;
      const last = items.at(-1) || dialog.value;
      if (!items.length || !dialog.value.contains(document.activeElement) || (event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) {
        event.preventDefault(); (event.shiftKey ? last : first)?.focus();
      }
    }
  }
  function release() {
    if (!active) return;
    active = false;
    document.removeEventListener('keydown', keydown, true);
    document.removeEventListener('focusin', keepFocus, true);
    isolated.forEach(([element, inert]) => { element.inert = inert; });
    isolated = [];
    document.body.style.overflow = restoreOverflow;
    if (restoreFocus?.isConnected && !restoreFocus.closest('[inert]')) restoreFocus.focus({ preventScroll: true });
    restoreFocus = null;
  }
  watch(isOpen, async open => {
    if (!open) return release();
    restoreFocus = document.activeElement;
    await nextTick();
    if (!isOpen() || !dialog.value) return;
    restoreOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    for (let node = dialog.value; node?.parentElement; node = node.parentElement) {
      for (const sibling of node.parentElement.children) {
        if (sibling !== node && sibling instanceof HTMLElement && !['SCRIPT', 'STYLE', 'LINK'].includes(sibling.tagName)) {
          isolated.push([sibling, sibling.inert]); sibling.inert = true;
        }
      }
      if (node.parentElement === document.body) break;
    }
    active = true;
    document.addEventListener('keydown', keydown, true);
    document.addEventListener('focusin', keepFocus, true);
    (focusable()[0] || dialog.value).focus({ preventScroll: true });
  }, { flush: 'post', immediate: true });
  onUnmounted(release);
}
