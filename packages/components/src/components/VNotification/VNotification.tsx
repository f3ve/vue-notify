import { useNotify } from '@vue3-notify/notify';
import './styles.css';
import { defineComponent, onBeforeUnmount, onMounted } from 'vue';

export type VNotificationProps = {
  message: string;
  color: string;
  index: number;
  delay: number;
};

export const VNotification = defineComponent(
  (props: VNotificationProps) => {
    const notify = useNotify();

    let timeout: number | undefined;

    onMounted(() => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        notify.hide(props.index);
      }, props.delay);
    });

    onBeforeUnmount(() => {
      if (timeout) clearTimeout(timeout);
    });

    function close() {
      if (timeout) clearTimeout(timeout);
      notify.hide(props.index);
    }

    return () => (
      <output role="status" class={`vue-notification color-${props.color}`}>
        <p>{props.message}</p>
        <button onClick={close}>
          <span class="vue-notification-close"></span>
        </button>
      </output>
    );
  },
  {
    props: ['color', 'message', 'index', 'delay'],
  },
);
