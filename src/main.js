import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import hola from "./ejemplo.js"  export default
// import {hola} from "./ejemplo.js"
import router from './router/index.js'

createApp(App)
  .use(router)
  .mount('#app')
