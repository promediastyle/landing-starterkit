<template>
  <transition name="modal-fade">
    <div class="bg-black/75 fixed inset-0 flex justify-center items-center z-30" @click="$emit('close-modal')">
      <div class="w-full max-w-lg bg-white rounded-lg p-4 text-center" @click.stop>
        <h2 class="mb-4 text-2xl font-bold">Modal 2</h2>
        <button class="py-2 px-6 bg-indigo-600 text-white rounded-full" @click="$emit('close-modal')">close</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  @apply opacity-0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>