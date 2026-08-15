<script setup>
</script>

<template>
  <main class="contact-page min-h-[calc(100vh-82px)] p-5 md:p-[100px_7vw] flex flex-col justify-between bg-coral font-sans" id="contact">
    <div>
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/80">
        LET'S MAKE THE USEFUL THING BEAUTIFUL
      </p>

      <h1 class="text-[clamp(44px,7vw,96px)] leading-[1.05] tracking-[-0.03em] my-6 md:my-8 font-extrabold text-ink">
        Have a product<br />worth <span class="font-serif italic font-normal text-ink/85">shaping?</span>
      </h1>

      <p class="text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.01em] max-w-[580px] text-ink/85 font-medium mb-8">
        Available for product design roles, design systems architecture, and front-end development collaboration.
      </p>

      <a
        href="mailto:marwanelgammal0@gmail.com"
        class="text-[clamp(20px,3.5vw,44px)] font-extrabold tracking-[-0.03em] border-b-2 border-ink pb-1.5 inline-flex items-center gap-3 hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 transition-all"
      >
        <span>marwanelgammal0@gmail.com</span>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[0.65em]" />
      </a>
    </div>

    <!-- Contact & Secondary Action Footer Bar -->
    <div class="mt-16 md:mt-24 pt-8 border-t border-ink grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-[13px] font-bold text-ink">
      <div>
        <span class="block text-ink/60 text-[11px] uppercase mb-1 font-bold">Direct Phone</span>
        <a
          href="tel:+201016906441"
          class="inline-flex items-center gap-2 hover:underline focus:outline-none focus:ring-1 focus:ring-ink"
        >
          <font-awesome-icon icon="fa-solid fa-phone" class="text-[12px]" />
          +20 101 690 6441
        </a>
      </div>

      <div>
        <span class="block text-ink/60 text-[11px] uppercase mb-1 font-bold">Social Profiles</span>
        <div class="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 hover:underline focus:outline-none focus:ring-1 focus:ring-ink"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" class="text-[14px]" />
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/marwann022"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 hover:underline focus:outline-none focus:ring-1 focus:ring-ink"
          >
            <font-awesome-icon icon="fa-brands fa-github" class="text-[14px]" />
            GitHub ↗
          </a>
        </div>
      </div>

      <div>
        <span class="block text-ink/60 text-[11px] uppercase mb-1 font-bold">Curriculum Vitae</span>
        <a
          href="mailto:marwanelgammal0@gmail.com?subject=Request%20for%20Marwan%27s%20CV"
          class="inline-flex items-center gap-1.5 hover:underline focus:outline-none focus:ring-1 focus:ring-ink"
        >
          <font-awesome-icon icon="fa-solid fa-envelope" class="text-[12px]" />
          Request Resume / CV ↗
        </a>
      </div>
    </div>
  </main>
</template>
