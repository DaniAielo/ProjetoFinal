import { createApp } from 'vue'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min'

//..import the router
import router from './router/index'

import App from './App.vue'

//..use the router before mount the app instance
createApp(App).use(router).mount('#app')
