<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<template>
  <div class="flex flex-col items-center pt-5">
    <button @click="show = !show">Show</button>
    <transition name="fade">
      <h1 v-show="show" class="text-3xl">About</h1>
    </transition>
    <p class="w-[400px] mt-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nihil
    </p>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 10s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 1s ease;
}
</style>
