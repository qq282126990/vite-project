import {
  createApp
} from 'vue'
import App from './App'
import router from './router'

const app = createApp(App)

app.config.devtools = false


if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor
}

app.use(router)



app.mount('#app')
