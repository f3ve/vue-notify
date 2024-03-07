<script lang="ts" setup>
import { useNotify } from '@vue-notify/notify';
import { VNotifications } from '@vue-notify/components';

const notify = useNotify();
</script>

<template>
  <button @click="notify.show('This is an error message!', 'error')">
    Error
  </button>
  <button @click="notify.show('This is a success message!', 'success')">
    Success
  </button>
  <button @click="notify.show('This is a warning message!', 'warn')">
    Warn
  </button>
  <button @click="notify.show('This is an info message!', 'info')">Info</button>
  <button @click="notify.show('This is a default message!', 'default')">
    Default
  </button>

  <VNotifications />
</template>
