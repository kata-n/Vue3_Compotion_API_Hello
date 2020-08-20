import { createApp } from 'vue';
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);
import App from './App.vue'

createApp(App).mount('#app')
