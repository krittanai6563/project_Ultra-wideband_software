import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ApiService from './api';


const app = createApp(App);

ApiService.init();

app.use(router).mount('#app');


// ApiService.init();




// createApp(App).use(router).mount('#app')
