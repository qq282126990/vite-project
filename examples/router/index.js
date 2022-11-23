import {
  createWebHistory,
  createRouter
} from 'vue-router';
import Affix from '../components/affix.vue';
import Input from '../components/input.vue';
import Icon from '../components/icon.vue';
import Button from '../components/button.vue';
import Elevation from '../components/elevation.vue';
import Layout from '../components/layout.vue';
import Carousel from '../components/carousel.vue';
import Switch from '../components/switch.vue';
import BottomNav from '../components/bottom-nav.vue';
import Breadcrumb from '../components/breadcrumb.vue';
import Select from '../components/select.vue';
import Steps from '../components/steps.vue';
import UpLoad from '../components/upLoad.vue';
import Progress from '../components/progress.vue';
import Circle from '../components/circle.vue';
import Loading from '../components/loading.vue';
import Notice from '../components/notice.vue';
import Message from '../components/message.vue';
import LoadingBar from '../components/loading-bar.vue';
import Tabs from '../components/tabs.vue';
import Badge from '../components/badge.vue';
import DatePicker from '../components/date-picker.vue';
import Collapse from '../components/collapse.vue';
import Cascader from '../components/cascader.vue';
import Tooltip from '../components/tooltip.vue';
import Chip from '../components/chip.vue';
import Radio from '../components/radio.vue';
import Checkbox from '../components/checkbox.vue';
import Avatar from '../components/avatar.vue';
import Page from '../components/page.vue';
import Spin from '../components/spin.vue';
import Table from '../components/table.vue';
import AutoComplete from '../components/auto-complete.vue';
import Animation from '../components/animation.vue';
import CountDown from '../components/count-down.vue';
import CountUp from '../components/count-up.vue';
import Card from '../components/card.vue';
import Scrollbar from '../components/scrollbar.vue';
import Image from '../components/image.vue';
import NoticeBar from '../components/notice-bar.vue';
import CarouselLoop from '../components/carousel-loop.vue';
import Ellipsis from '../components/ellipsis.vue';
import RelativeTime from '../components/relative-time.vue';
import BackTop from '../components/back-top.vue';
import Modal from '../components/modal.vue';
import Popover from '../components/popover.vue';
import InputNumber from '../components/input-number.vue';
import Menu from '../components/menu.vue';

const routes = [{
    path: '/Affix',
    name: 'Affix',
    component: Affix
  },
  {
    path: '/loading-bar',
    name: 'LoadingBar',
    component: LoadingBar
  },
  {
    path: '/Input',
    name: 'Input',
    component: Input
  },
  {
    path: '/Icon',
    name: 'Icon',
    component: Icon
  },
  {
    path: '/Button',
    name: 'Button',
    component: Button
  },
  {
    path: '/Elevation',
    name: 'Elevation',
    component: Elevation
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/Carousel',
    name: 'Carousel',
    component: Carousel
  },
  {
    path: '/Switch',
    name: 'Switch',
    component: Switch
  },
  {
    path: '/bottom-nav',
    name: 'BottomNav',
    component: BottomNav
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    component: Breadcrumb
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
  {
    path: '/steps',
    name: 'Steps',
    component: Steps
  },
  {
    path: '/upLoad',
    name: 'UpLoad',
    component: UpLoad
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/circle',
    name: 'Circle',
    component: Circle
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs
  },
  {
    path: '/badge',
    name: 'Badge',
    component: Badge
  },
  {
    path: '/date-picker',
    name: 'DatePicker',
    component: DatePicker
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: Collapse
  },
  {
    path: '/cascader',
    name: 'Cascader',
    component: Cascader
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: Tooltip
  },
  {
    path: '/chip',
    name: 'Chip',
    component: Chip
  },
  {
    path: '/radio',
    name: 'Radio',
    component: Radio
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: Checkbox
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: Avatar
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  },
  {
    path: '/spin',
    name: 'Spin',
    component: Spin
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/auto-complete',
    name: 'AutoComplete',
    component: AutoComplete
  }, {
    path: '/animation',
    name: 'Animation',
    component: Animation
  },
  {
    path: '/count-down',
    name: 'CountDown',
    component: CountDown
  }, {
    path: '/count-up',
    name: 'CountUp',
    component: CountUp
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/scrollbar',
    name: 'Scrollbar',
    component: Scrollbar
  },
  {
    path: '/image',
    name: 'Image',
    component: Image
  },
  {
    path: '/notice-bar',
    name: 'NoticeBar',
    component: NoticeBar
  },
  {
    path: '/carousel-loop',
    name: 'CarouselLoop',
    component: CarouselLoop
  },
  {
    path: '/ellipsis',
    name: 'Ellipsis',
    component: Ellipsis
  },
  {
    path: '/relative-time',
    name: 'RelativeTime',
    component: RelativeTime
  },
  {
    path: '/back-top',
    name: 'BackTop',
    component: BackTop
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/popover',
    name: 'Popover',
    component: Popover
  },
  {
    path: '/input-number',
    name: 'InputNumber',
    component: InputNumber
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
