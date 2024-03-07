import { ref } from 'vue';

/**
 * A Vue composable that abstracts out the logic for handling loading and errors when running async code.
 */
export function useNotifyRequest<
  T = any,
  TArgs extends Array<any> = Array<any>,
>(
  requestHandler: (...args: TArgs) => Promise<T>,
  options?: {
    onSuccess: (result: Awaited<T>) => void;
    onError: (error: any) => void;
  },
) {
  const loading = ref(false);
  const error = ref<any>();
  const result = ref<T>();

  async function exec(...args: TArgs) {
    try {
      _startLoading();
      _clearError();

      const res = await requestHandler(...args);
      res ? _setResult(res) : _clearResult();

      if (options?.onSuccess) options.onSuccess(res);
    } catch (err) {
      _clearResult();
      _setError(err);

      if (options?.onError) options.onError(err);
    } finally {
      _stopLoading();
    }
  }

  function _startLoading() {
    loading.value = true;
  }

  function _stopLoading() {
    loading.value = false;
  }

  function _setError(err: any) {
    error.value = err;
  }

  function _clearError() {
    error.value = undefined;
  }

  function _setResult(val: T) {
    error.value = val;
  }

  function _clearResult() {
    result.value = undefined;
  }

  return {
    result,
    error,
    loading,
    exec,
  };
}
