<script setup>
import { ref } from 'vue';

const list = ref(['clear my room', 'go to the grossery']);
const task = ref('');
const isEmpty = ref(false);

const addTask = () => {
  if (task.value !== '') {
    list.value = [task.value, ...list.value];
    task.value = '';
    isEmpty.value = false;
  } else {
    isEmpty.value = true;
  }
};

const deleteTask = (task) =>
  (list.value = list.value.filter((item) => item !== task));
</script>

<template>
  <div class="flex flex-col items-center pt-10">
    <transition name="notification">
      <p v-if="isEmpty" class="note">Empty task not alloved</p>
    </transition>
    <input
      type="text"
      class="item"
      placeholder="Enter task..."
      @keydown.enter="addTask"
      v-model="task"
    />
    <transition name="switch" mode="out-in">
      <div v-if="list.length">
        <transition-group tag="ul" name="list" class="mt-5" appear>
          <li
            v-for="item in list"
            :key="item"
            class="item"
            @click="deleteTask(item)"
          >
            {{ item }}
          </li>
        </transition-group>
      </div>
      <div v-else class="text-red-500 p-2">No tasks</div>
    </transition>
  </div>
</template>

<style scoped>
/* .notification-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.notification-enter-to {
  opacity: 1;
} */
.notification-enter-active {
  /* transition: all 0.3s ease; */
  animation: wobble 300ms ease;
}

.notification-leave-from {
  opacity: 1;
}
.notification-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.notification-leave-active {
  transition: all 300ms ease;
}

@keyframes wobble {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  50% {
    opacity: 1;
    transform: translateX(0px);
  }
  60% {
    transform: translateX(10px);
  }

  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(4px);
  }
  90% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}

.list-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.3s ease;
}

.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.list-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

.list-move {
  transition: all 0.3s ease;
}

ul {
  position: relative;
}

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.switch-enter-to,
.switch-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.switch-enter-active,
.switch-leave-active {
  transition: all 0.5s ease;
}
</style>
