<template>
  <div class="container">
    <div class="bg-white border-b sticky top-[80px] z-10 p-4">
      <HeaderScrollbar/>
    </div>
    <main class="container p-4">

      Home

      <div class="py-10">
        <button class="py-2 px-6 rounded-full bg-indigo-600 text-white" @click="showModal = true">Modal Form</button>
        <ModalForm v-show="showModal" @close-modal="showModal = false" />
      </div>
      
      <div class="h-[1000px]"></div>
      <h2 id="anchor">#Anchor</h2>
      <div class="h-[1000px]"></div>
    </main>
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
