import {
  createWebHashHistory,
  createRouter
} from 'vue-router';
import Affix from '../components/affix.vue';
import Animation from '../components/animation.vue';
import AutoComplete from '../components/auto-complete.vue';

const routes = [{
  path: '/Affix',
  name: 'Affix',
  component: Affix
}, {
  path: '/animation',
  name: 'Animation',
  component: Animation
}, {
  path: '/auto-complete',
  name: 'AutoComplete',
  component: AutoComplete
}, ];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
