<template>
  <transition name="modal-fade">
    <div class="bg-black/75 fixed inset-0 flex justify-center items-baseline z-30 p-4 overflow-auto" @click="$emit('close-modal')">
      <div class="w-full max-w-md bg-white rounded-lg p-4" @click.stop>
        
        <h2 class="mb-4 text-2xl font-bold">Modal Form</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nisi, ducimus consequuntur, culpa veritatis inventore perferendis doloremque nihil non quisquam dignissimos aspernatur omnis eligendi accusantium error ut? Earum, id nulla.</p>

        <div class="block mt-4">
          <button class="py-2 px-6 bg-indigo-600 text-white rounded-full" @click="$emit('close-modal')">close</button>
        </div>
        
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