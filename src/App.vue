<script setup></script>

<template>
  <div
    class="h-screen bg-gray-800 text-white pt-5 flex flex-col items-center gap-2"
  >
    <nav>
      <router-link :to="{ name: 'Home' }" class="link">Home</router-link> |
      <router-link :to="{ name: 'About' }" class="link">About</router-link> |
      <router-link :to="{ name: 'Contact' }" class="link">Contact</router-link>
    </nav>
    
    <router-view v-slot="{ Component }">
      <transition name="router">
        <component :is="Component"></component>
      </transition>
    </router-view>

    <router-view>
      <transition name="router">
        <router-view />
      </transition>
    </router-view>
  </div>
</template>

<style>
.router-enter-from {
  opacity: 0;
  transform: translateX(500px);
}

.router-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}

.router-enter-active,
.router-leave-active {
  transition: all 0.3s ease;
}
</style>
