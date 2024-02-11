<template>
  <div
    class="w-screen h-screen max-h-[300px] max-w-[1080px] font-bold bg-black text-white relative grid grid-cols-12 px-8"
  >
    <div class="col-span-2 flex items-center">
      <transition
        mode="out-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition-opacity duration-1000"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        leave-active-class="transition-opacity duration-1000"
      >
        <img v-if="switchImg" src="@/assets/img/motoluc.png" />
        <img v-else src="@/assets/img/logo_vontage.svg" />
      </transition>
    </div>

    <div class="col-span-8 flex items-center justify-center space-x-[4rem] text-7xl">
      <div class="w-[80px]">{{ hours }}</div>
      <div class="w-[80px]">{{ mins }}</div>
      <div class="w-[80px]">{{ seconds }}</div>
    </div>

    <div class="col-span-2 flex items-center">
      <transition
        mode="out-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition-opacity duration-1000"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        leave-active-class="transition-opacity duration-1000"
      >
        <img v-if="switchImg" src="@/assets/img/logo_vontage.svg" />
        <img v-else src="@/assets/img/motoluc.png" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, unref } from 'vue'

const switchImg = ref(false)
const hours = ref('00')
const mins = ref('00')
const seconds = ref('00')

const tick = () => {
  const date = new Date()
  hours.value = String(date.getHours()).padStart(2, '0')
  mins.value = String(date.getMinutes()).padStart(2, '0')
  seconds.value = String(date.getSeconds()).padStart(2, '0')
}
tick()
setInterval(() => tick(), 100)
setInterval(
  () => {
    switchImg.value = !unref(switchImg)
  },
  10 * 60 * 1000
)
</script>
