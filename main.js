// import { createApp } from "vue";
// import SFCButton from "./SFCButton.vue";

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'ivue-material-plus/dist/styles/index.css'

// const app = createApp(SFCButton)

// // app.use(ElementPlus)
// app.mount('#app')

import {
  createApp
} from 'vue'
import App from './examples/App.vue'
import router from './examples/router/index'

const app = createApp(App)


// import ElementPlus from 'ivue-material-plus'
// app.use(ElementPlus)

app.use(router)

app.mount('#app')
