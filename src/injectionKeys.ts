import { InjectionKey } from 'vue';
import { PageActions } from '@/data';
import { EventBus } from '@/utils/Events';

export const $pagesInjectionKey = Symbol('pagesInjectKey') as InjectionKey<PageActions>;
export const $eventBusInjectionKey = Symbol('eventBusInjectKey') as InjectionKey<EventBus>;
