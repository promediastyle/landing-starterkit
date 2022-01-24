<template>
  <nav class="flex flex-col md:flex-row md:items-center md:space-x-4">
    <NuxtLink active-class="activeNavbar" :to="localePath('/')" exact>Home</NuxtLink>
    <NuxtLink active-class="activeNavbar" :to="localePath('/about')">About</NuxtLink>
  </nav>
</template>

<style>
  .activeNavbar {
    @apply text-indigo-600;
  }
</style>