<script setup>
import { ref } from 'vue';

const beforeEnter = () => console.log('beforeEnter');
const enter = () => console.log('enter');
const afterEnter = () => console.log('afterEnter');

const beforeLeave = () => console.log('beforeLeave');
const leave = () => console.log('leave');
const afterLeave = () => console.log('afterLeave');

const mounted = () => console.log('mounted');
const show = ref(true);
</script>

<template>
  <div class="flex flex-col items-center pt-5">
    <button @click="show = !show">Change</button>
    <transition
      name="hooks"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <h1 v-if="show" class="text-3xl">Contact</h1>
    </transition>
    <div class="grid gap-1 grid-cols-2 grid-rows-2 mt-10">
      <div class="ceil hover:text-red-400">Item 1</div>
      <div class="ceil hover:text-yellow-300">Item 2</div>
      <div class="ceil hover:text-lime-400">Item 3</div>
      <div class="ceil hover:text-blue-500">Item 4</div>
    </div>
  </div>
</template>

<style scoped>
.hooks-enter-from {
  opacity: 0;
}

.hooks-leave-to {
  opacity: 0;
}

.hooks-enter-active,
.hooks-leave-active {
  transition: all 1s ease;
}
</style>
