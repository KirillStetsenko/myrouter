import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';
import Test from '@/views/Test.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/test', name: 'Test', component: Test },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({ history: createWebHistory(), routes: routes });

export { router };
