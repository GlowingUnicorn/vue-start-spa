import { EventNames, EventPayloads } from '@/types/events';

const events = new Map<EventNames, Function[]>();

export default {
  $on<EventName extends EventNames>(eventName: EventName, fn: Function) {
    if (!events.has(eventName)) {
      events.set(eventName, []);
    }

    const event = events.get(eventName);

    if (event) {
      event.push(fn);
    }
  },

  $off() {
    throw { message: 'Not implemented' };
  },

  $emit<EventName extends EventNames>(eventName: EventName, data: EventPayloads[EventName]) {
    if (events.has(eventName)) {
      const event = events.get(eventName);

      if (event) {
        event.forEach((fn) => fn(data));
      }
    } else {
      console.log(`Event ${eventName} doesn't exist`);
    }
  },
};
