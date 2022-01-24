<template>
  <button class="relative w-[40px] border" v-on-clickaway="away" @click="isOpen = !isOpen" @keydown.escape="isOpen = false">
    {{ $t('header.LangSwitcher.language') }}

    <div class="absolute right-0 bg-white w-[100px] flex flex-col space-y-2 mt-2 p-4 border text-left" v-if="isOpen" @click="isOpen = false" v-cloak transform-gpu>
      <NuxtLink active-class="activeLangSwitcher" :to="switchLocalePath('ru')" exact>Русский</NuxtLink>
      <NuxtLink active-class="activeLangSwitcher" :to="switchLocalePath('en')">English</NuxtLink>
      <NuxtLink active-class="activeLangSwitcher" :to="switchLocalePath('de')">Deutch</NuxtLink>
    </div>
  </button>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  mixins: [ clickaway ],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    away () {
      this.isOpen = false
    }
  },
}
</script>

<style>
  .activeLangSwitcher {
    @apply text-indigo-600;
  }
</style>