import { createApp } from 'vue';
import router from '@/routes';
import { $eventBusInjectionKey, $pagesInjectionKey } from '@/injectionKeys';
import App from './App.vue';
import 'bootstrap/scss/bootstrap.scss';
import $eventBus, { EventBus } from './utils/Events';
import $pages, { PageActions } from './data';

declare module 'vue' {
  interface ComponentCustomProperties {
    $eventBus: typeof $eventBus
    $pages: typeof $pages
  }
}

const app = createApp(App);

app.use(router);

app.provide<EventBus>($eventBusInjectionKey, $eventBus);
app.provide<PageActions>($pagesInjectionKey, $pages);

app.mount('#app');
