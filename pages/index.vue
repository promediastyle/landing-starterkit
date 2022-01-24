<template>
  <div class="container">
    <HeaderScrollbar class="bg-white border-b sticky top-[80px] z-10 p-4"/>
    <main class="container p-4">

      Home
      
      <div class="h-[1000px]"></div>

      <div id="anchor">
        <button class="py-2 px-6 rounded-full bg-indigo-600 text-white" @click="showModal = true">Form</button>
        <ModalForm v-show="showModal" @close-modal="showModal = false" class="z-50" />
      </div>
      
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
}
</script>
