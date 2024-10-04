
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import   router  from './router/index.js'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

import 'flatpickr/dist/flatpickr.min.css';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { 
    faUser, 
    faLocation, 
    faRightFromBracket, 
    faGears,
    faMoneyCheck,
    faShop,
    faPhone,
    faBriefcase,
    faKitchenSet,faClosedCaptioning,faCamera,faEye,faMagnifyingGlass,faCircleXmark
  } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faCircleXmark,faMoneyCheck,faGears,faRightFromBracket,faLocation,faUser,faShop,faPhone,faBriefcase,faKitchenSet,faClosedCaptioning,faCamera,faEye,faMagnifyingGlass);

const app=createApp(App)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(bootstrap)
app.mount('#app')
