import './styles.css';
export type VNotificationProps = {
  message: string;
  color: string;
  index: number;
  delay: number;
};
export declare const VNotification: import('vue').DefineSetupFnComponent<
  VNotificationProps,
  {},
  {},
  VNotificationProps & {},
  import('vue').PublicProps
>;
