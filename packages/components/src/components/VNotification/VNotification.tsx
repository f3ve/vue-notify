import { useNotify } from '@vue-notify/notify';
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
    let timeout: NodeJS.Timeout | undefined;

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
      <div class={`vue-notification color-${props.color}`}>
        <p>{props.message}</p>
        <button onClick={close}>Close</button>
      </div>
    );
  },
  {
    props: ['color', 'message', 'index', 'delay'],
  },
);
