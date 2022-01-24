<template>
  <header class="container bg-white h-[80px] flex justify-between items-center space-x-4 border-b mb-10 sticky top-0">
    
    <NuxtLink :to="localePath('/')"><img class="w-[100px]" src="~/img/fubon.svg" alt=""></NuxtLink>
    
    <HeaderNavbar/>

    <HeaderScrollbar/>

    <HeaderDropdown/>

    <HeaderLangSwitcher v-if="availableLocales.length" class="inline-flex">
      <template #trigger="{ open, toggle }">
        <button class="focus:outline-none cursor-pointer" :class="{ 'text-indigo-500': open }" @touchstart.stop.prevent="toggle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </button>
      </template>
      <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{ locale.name }}</NuxtLink>
    </HeaderLangSwitcher>
    
    <HeaderOffcanvas/>

  </header>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales // this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      // <NuxtLink v-for="locale in availableLocales" v-if="$i18n.locale !== locale.code" :to="switchLocalePath(locale.code)" >{{ locale.name }}</NuxtLink>
    }
  },
}
</script>

<style>
  .nuxt-link-exact-active {
    @apply text-indigo-600;
  }
</style>