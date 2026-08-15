<script setup>
const roles = [
  {
    title: "01. Manager",
    badge: "Oversight & Strategy",
    color: "bg-paper border-ink",
    textColor: "text-ink",
    description: "Full visibility across organizational targets, sales analytics, representative allocation, and macro KPI reporting."
  },
  {
    title: "02. Supervisor",
    badge: "Team Management",
    color: "bg-paper border-ink",
    textColor: "text-ink",
    description: "Real-time team activity monitoring, visit schedule approvals, sample distribution tracking, and direct field follow-up."
  },
  {
    title: "03. Medical Representative",
    badge: "Field Execution",
    color: "bg-ink text-paper border-ink",
    textColor: "text-paper",
    description: "Distraction-free mobile workflow for logging doctor visits, requesting sample stock, and reporting orders on the go."
  }
];
</script>

<template>
  <div class="my-8 border border-ink p-6 md:p-8 bg-story-bg font-sans">
    <div class="flex items-center justify-between border-b border-ink pb-4 mb-6">
      <h4 class="font-sans font-bold text-[12px] uppercase tracking-wider text-ink/80 m-0">
        ROLE-BASED WORKFLOW SYSTEM ARCHITECTURE
      </h4>
      <span class="font-sans text-[11px] font-bold bg-ink text-paper px-3 py-1 rounded-full">3 Personas</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="role in roles"
        :key="role.title"
        :class="['p-5 border shadow-[5px_5px_0_rgba(21,21,21,0.12)] flex flex-col justify-between', role.color]"
      >
        <div>
          <span class="font-sans text-[11px] font-extrabold uppercase tracking-wider opacity-75 block mb-1">
            {{ role.badge }}
          </span>
          <h5 class="text-[20px] font-extrabold tracking-[-0.03em] m-0 mb-3">
            {{ role.title }}
          </h5>
          <p class="text-[14px] leading-[1.5] opacity-90 m-0 font-medium">
            {{ role.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
