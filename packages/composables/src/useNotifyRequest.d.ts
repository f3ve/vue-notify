/**
 * A Vue composable that abstracts out the logic for handling loading and errors when running async code.
 */
export declare function useNotifyRequest<
  T = any,
  TArgs extends Array<any> = Array<any>,
>(
  requestHandler: (...args: TArgs) => Promise<T>,
  options?: {
    onSuccess: (result: Awaited<T>) => void;
    onError: (error: any) => void;
  },
): {
  result: import('vue').Ref<T | undefined>;
  error: import('vue').Ref<any>;
  loading: import('vue').Ref<boolean>;
  exec: (...args: TArgs) => Promise<void>;
};
