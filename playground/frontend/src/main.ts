import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './styles/main.css';
import '@vue-notify/components/dist/style.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.mount('#app');
