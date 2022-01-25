<template>
  <transition name="modal-fade">
    <div class="bg-black/75 fixed inset-0 flex justify-center items-baseline z-30 p-4 overflow-auto" @click="$emit('close-modal')">
      <div class="w-full max-w-md bg-white rounded-lg p-4" @click.stop>
        <h2 class="mb-4 text-2xl font-bold">Modal Form</h2>

        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Full name</span>
            <input
              type="text"
              class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input
              type="email"
              class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder="john@example.com"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">When is your event?</span>
            <input
              type="date"
              class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
            />
          </label>
          <label class="block">
            <span class="text-gray-700">What type of event is it?</span>
            <select
              class="
                block
                w-full
                mt-1
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
            >
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
          <label class="block">
            <span class="text-gray-700">Additional details</span>
            <textarea
              class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              rows="3"
            ></textarea>
          </label>
          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="
                      rounded
                      bg-gray-200
                      border-transparent
                      focus:border-transparent focus:bg-gray-200
                      text-gray-700
                      focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                    "
                  />
                  <span class="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
        </div>

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

.iframe {
  border: none;
  width: 100%;
  height: 554px;
  overflow: hidden;
}
</style>