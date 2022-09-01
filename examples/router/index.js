import {
  createWebHashHistory,
  createRouter
} from 'vue-router';
import Affix from '../components/affix.vue';
import Input from '../components/input.vue';
const routes = [{
    path: '/Affix',
    name: 'Affix',
    component: Affix
  },
  // {
  //   path: '/loading-bar',
  //   name: 'LoadingBar',
  //   component: LoadingBar
  // },
  {
    path: '/Input',
    name: 'Input',
    component: Input
  },
  // {
  //   path: '/Icon',
  //   name: 'Icon',
  //   component: Icon
  // },
  // {
  //   path: '/Button',
  //   name: 'Button',
  //   component: Button
  // },
  // {
  //   path: '/Elevation',
  //   name: 'Elevation',
  //   component: Elevation
  // },
  // {
  //   path: '/Layout',
  //   name: 'Layout',
  //   component: Layout
  // },
  // {
  //   path: '/List',
  //   name: 'List',
  //   component: List
  // },
  // {
  //   path: '/Carousel',
  //   name: 'Carousel',
  //   component: Carousel
  // },
  // {
  //   path: '/Switch',
  //   name: 'Switch',
  //   component: Switch
  // },
  // {
  //   path: '/bottom-nav',
  //   name: 'BottomNav',
  //   component: BottomNav
  // },
  // {
  //   path: '/breadcrumb',
  //   name: 'Breadcrumb',
  //   component: Breadcrumb
  // },
  // {
  //   path: '/select',
  //   name: 'Select',
  //   component: Select
  // },
  // {
  //   path: '/steps',
  //   name: 'Steps',
  //   component: Steps
  // },
  // {
  //   path: '/upLoad',
  //   name: 'UpLoad',
  //   component: UpLoad
  // },
  // {
  //   path: '/progress',
  //   name: 'Progress',
  //   component: Progress
  // },
  // {
  //   path: '/circle',
  //   name: 'Circle',
  //   component: Circle
  // },
  // {
  //   path: '/loading',
  //   name: 'Loading',
  //   component: Loading
  // },
  // {
  //   path: '/notice',
  //   name: 'Notice',
  //   component: Notice
  // },
  // {
  //   path: '/message',
  //   name: 'Message',
  //   component: Message
  // },
  // {
  //   path: '/tabs',
  //   name: 'Tabs',
  //   component: Tabs
  // },
  // {
  //   path: '/badge',
  //   name: 'Badge',
  //   component: Badge
  // },
  // {
  //   path: '/date-picker',
  //   name: 'DatePicker',
  //   component: DatePicker
  // },
  // {
  //   path: '/collapse',
  //   name: 'Collapse',
  //   component: Collapse
  // },
  // {
  //   path: '/cascader',
  //   name: 'Cascader',
  //   component: Cascader
  // },
  // {
  //   path: '/tooltip',
  //   name: 'Tooltip',
  //   component: Tooltip
  // },
  // {
  //   path: '/chip',
  //   name: 'Chip',
  //   component: Chip
  // },
  // {
  //   path: '/radio',
  //   name: 'Radio',
  //   component: Radio
  // },
  // {
  //   path: '/checkbox',
  //   name: 'Checkbox',
  //   component: Checkbox
  // },
  // {
  //   path: '/avatar',
  //   name: 'Avatar',
  //   component: Avatar
  // },
  // {
  //   path: '/page',
  //   name: 'Page',
  //   component: Page
  // },
  // {
  //   path: '/spin',
  //   name: 'Spin',
  //   component: Spin
  // },
  // {
  //   path: '/table',
  //   name: 'Table',
  //   component: Table
  // },
  // {
  //   path: '/auto-complete',
  //   name: 'AutoComplete',
  //   component: AutoComplete
  // }, {
  //   path: '/animation',
  //   name: 'Animation',
  //   component: Animation
  // },
  // {
  //   path: '/count-down',
  //   name: 'CountDown',
  //   component: CountDown
  // }, {
  //   path: '/count-up',
  //   name: 'CountUp',
  //   component: CountUp
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
