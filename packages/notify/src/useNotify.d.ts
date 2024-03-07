export type ColorOptions = 'default' | 'success' | 'warn' | 'error' | 'info';
export type Notification = {
  message: string;
  color: string;
  id: number;
};
export declare const useNotify: import('pinia').StoreDefinition<
  'vue-notify',
  import('pinia')._UnwrapAll<
    Pick<
      {
        notifications: import('vue').Ref<
          {
            message: string;
            color: string;
            id: number;
          }[]
        >;
        show: (message: string, color?: ColorOptions) => void;
        hide: (index: number) => void;
      },
      'notifications'
    >
  >,
  Pick<
    {
      notifications: import('vue').Ref<
        {
          message: string;
          color: string;
          id: number;
        }[]
      >;
      show: (message: string, color?: ColorOptions) => void;
      hide: (index: number) => void;
    },
    never
  >,
  Pick<
    {
      notifications: import('vue').Ref<
        {
          message: string;
          color: string;
          id: number;
        }[]
      >;
      show: (message: string, color?: ColorOptions) => void;
      hide: (index: number) => void;
    },
    'show' | 'hide'
  >
>;
