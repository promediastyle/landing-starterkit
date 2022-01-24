<template>
  <section>
    <a class="focus:outline-none cursor-pointer" aria-label="Open Menu" @click="drawer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </a>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>

    <aside class="transform top-0 right-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? '-translate-x-0' : 'translate-x-full'"
    >
      <span
        @click="isOpen = false"
        class="flex w-full items-center p-4 border-b"
      >
        <img src="~/img/fubon.svg" alt="" width="48" />
      </span>

      <div class="p-4" @click="isOpen = false">
        
        <nav class="flex flex-col space-y-2">
          <NuxtLink active-class="activeNavbar" :to="localePath('/')" exact>Home</NuxtLink>
          <NuxtLink active-class="activeNavbar" :to="localePath('/about')">About</NuxtLink>
        </nav>

      </div>

    </aside>
  </section>
</template>

<script>
export default {
  data() {
      return {
          isOpen: false,
          isDrop: false
      };
  },
  methods: {
      drawer() {
          this.isOpen = !this.isOpen;
      }
  },
  // No Scroll Page
  watch: {
      isOpen: {
          immediate: true,
          handler(isOpen) {
              if (process.client) {
                  if (isOpen)
                      document.body.style.setProperty("overflow", "hidden");
                  else
                      document.body.style.removeProperty("overflow");
              }
          }
      }
  },
  // ESC Button
  mounted() {
      document.addEventListener("keydown", e => {
          if (e.keyCode == 27 && this.isOpen)
              this.isOpen = false;
      });
  },
}
</script>