<script lang="ts" setup>
import { useNotify, VNotifications, useNotifyRequest } from '@f3ve/vue-notify';

const notify = useNotify();

function myAsyncFunc() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Promise successfully resolved!');
    }, 5000);
  });
}

const { exec, loading } = useNotifyRequest(myAsyncFunc, {
  onSuccess: () => notify.show('muffins', 'success'),
  onError: (error) => notify.show(error.message, 'error'),
});
</script>

<template>
  <button :disabled="loading" @click="exec">
    {{ loading ? 'Loading...' : 'Submit' }}
  </button>

  <VNotifications />
</template>
