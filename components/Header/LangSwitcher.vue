<template>
  <div
    v-click-away="'close'"
    class="relative inline-block text-left"
    @mouseenter="open = true"
    @mouseleave="open = false"
    @keydown.escape="open = false"
  >
    <slot name="trigger" :toggle="toggle" :open="open" />

    <transition
      enter-class="transform opacity-0 scale-95"
      enter-active-class="transition ease-out duration-100"
      enter-to-class="transform opacity-100 scale-100"
      leave-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-show="open" class="origin-top-right absolute top-0 right-0">
        <div class="bg-white w-[100px] flex flex-col space-y-2 p-4 border text-left mt-8">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickAway from '~/plugins/click-away'
export default {
  name: 'LangSwitcher',
  directives: {
    'click-away': ClickAway
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    close () {
      this.open = false
    }
  }
}
</script>