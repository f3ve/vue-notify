import './styles.css';
import { TransitionGroup, defineComponent } from 'vue';
import { VNotification } from '../VNotification';
import { useNotify } from '@f3ve/vue-notify-store';

export const VNotifications = defineComponent(
  (props: { notifyComponent?: any; delay?: number }) => {
    const notify = useNotify();

    const Notification = props.notifyComponent || VNotification;
    const delay = props.delay !== undefined ? props.delay : 3500;

    return () => (
      <div class="notifications">
        <TransitionGroup name="notifications">
          {notify.notifications.map((notification, index) => (
            <Notification
              color={notification.color}
              message={notification.message}
              index={index}
              key={notification.id}
              delay={delay}
            />
          ))}
        </TransitionGroup>
      </div>
    );
  },
  {
    props: ['notifyComponent', 'delay'],
  },
);
