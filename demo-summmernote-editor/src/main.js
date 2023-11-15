import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import jQuery from "jquery";

// define & and jQuery on the global window object
Object.assign(window, { $: jQuery, jQuery });
createApp(App).mount('#app')
