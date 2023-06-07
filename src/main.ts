import { createApp } from 'vue';
import router from '@/routes';
import App from './App.vue';
import 'bootstrap/scss/bootstrap.scss';
import $eventBus from './utils/Events';
import $pages from './data';

declare module 'vue' {
  interface ComponentCustomProperties {
    $eventBus: typeof $eventBus
    $pages: typeof $pages
  }
}

const app = createApp(App);

app.use(router);

app.config.globalProperties.$eventBus = $eventBus;
app.config.globalProperties.$pages = $pages;

app.mount('#app');
