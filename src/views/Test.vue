<script setup></script>

<template>
  <div class="flex flex-col items-center pt-5">
    <transition name="fade" appear>
      <h1 class="text-5xl">Илья лох</h1>
    </transition>
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
  transition: all 1s ease;
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
