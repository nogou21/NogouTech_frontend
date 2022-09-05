import { createRouter, createWebHistory } from "vue-router";

import homeView from '../views/homeView.vue';
import communication from '../views/services/communication.vue';
import services from '../views/services/services.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'homeView',
      path: '/',
      component: homeView
  
    },
    {
      name: 'communication',
      path: '/communication',
      component: communication
    },
    {
      name: 'services',
      path: '/services',
      component: services
      
    }
   
   
  ],
});

export default router;
