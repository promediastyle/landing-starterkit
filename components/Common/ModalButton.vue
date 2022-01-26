<template>
  <div class="flex justify-center">
    <button class="py-2 px-6 rounded-full bg-indigo-600 text-white" @click="showModal = true">Open Form</button>
    <CommonModalContent v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
  watch: {
    showModal: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen)
            document.body.style.setProperty("overflow", "hidden");
          else
            document.body.style.removeProperty("overflow");
        }
      }
    },
  },
}
</script>