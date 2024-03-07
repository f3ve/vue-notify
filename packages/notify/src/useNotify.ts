import { defineStore } from 'pinia';
import { ref } from 'vue';

export type ColorOptions = 'default' | 'success' | 'warn' | 'error' | 'info';
export type Notification = { message: string; color: string; id: number };

export const useNotify = defineStore('vue-notify', () => {
  const notifications = ref<Notification[]>([]);

  /**
   * Display the notification.
   * @param message Message to display in the notification
   * @param color Color of the notification. Defaults to 'default'
   */
  function show(message: string, color: ColorOptions = 'default') {
    const id = notifications.value.length ? notifications.value[0].id + 1 : 1;
    notifications.value.unshift({
      message,
      color,
      id,
    });
  }

  /**
   * Hide the notification
   */
  function hide(index: number) {
    notifications.value.splice(index, 1);
  }

  return {
    notifications,
    show,
    hide,
  };
});
