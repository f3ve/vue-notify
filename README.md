# Vue3 Notify

Vue3 Notify is a collection of tools that simplify the process for displaying stacking status messages as toasts to your users.

## Features

1. A notification API powered by [Pinia](https://pinia.vuejs.org/getting-started.html)🍍.
2. A Vue composable that abstracts out the logic for handing async requests and displaying status messages.
3. Optional accessible notification component with light and dark variants. Minimally styled to fit into most applications. You can optionally override the styles if you wish.
4. Tree-shaking
5. Fully typed

## Installation

> Note: This package requires [Pinia](https://pinia.vuejs.org/introduction.html) and [Vue3](https://vuejs.org/)

### Basic installation

> This includes all the sub packages in vue-notify

```bash
npm install --save vue-notify
```

### Installing the packages individually

> If you're going to use all three of these packages it's recommended to just install the base package since they're all bundled in there.

#### Install just the notification API

```bash
npm install --save @vue-notify/notify
```

#### Install just the composable

```bash
npm install --save @vue-notify/composables
```

#### Install just the components

```bash
npm install --save @vue/notify/components
```

#### Setup pinia and component styles

```js
// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// Be sure to import component styles
import 'vue3-notify/dist/style.css';

const app = createApp(App);

// Pinia is required for components and `useNotify` to work.
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
```

#### Add VNotifications component to your App.vue component\*\*

```html
<script setup>
import { VNotifications } from 'vue3-notify';
</script>
<template>
  <router-view />

  <!-- This makes notifications component visible on all your pages -->
  <VNotifications
</template>
```

#### You can now display a notification from anywhere in your app

```html
<!-- some nested component -->
<script setup>
  import { useNotify } from 'vue3-notify';

  const notify = useNotify();
</script>

<template>
  <button @click="notify.show('This is a notification!')">
    Show notification
  </button>
</template>
```

## Examples

Here are some examples of how to use this package

### Basic

> Please not this example is intended to show how everything works together. Once the VNotifications component is in your `App.vue` file you can use `useNotify` from any component to display a notification.

```html
// App.vue
<script setup>
  import { useNotify, VNotifications, useNotifyRequest } from 'vue3-notify';
  import { myAsyncFunc } from './api';

  const notify = useNotify();

  const { exec, loading } = useNotifyRequest(myAsyncFunc, {
    onSuccess: (result) => notify.show(result.message, 'success'),
    onError: (error) => notify.show(error.message, 'error'),
  });
</script>

<template>
  <button :disabled="loading" @click="exec">
    {{ loading ? 'Loading...' : 'Submit' }}
  </button>

  <VNotifications />
</template>
```

### How to use the dark variants

You can get the dark notification variants by applying the class `dark` either directly to the `VNotification` component or to any ancestor DOM element. E.G. the `body` tag or the `html` tag.

```html
<!-- index.html -->
<!doctype html>
<!-- Adding the .dark class here will work-->
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue + TS</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

```html
<script setup>
  import { VNotifications } from 'vue3-notify';
</script>

<template>
  <router-view />

  <!-- Alternative adding `dark` class to the component will also show the dark notification variant. -->
  <VNotifications class="dark" />
</template>
```

### Overriding default notification styles.

To override the notification styles simply add your styles to a css file and import it AFTER the component styles import in your main.js file

```js
// Main.js

// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import 'vue3-notify/dist/style.css';
// Be sure to import your styles after the vue3-notify styles.
import './styles/main.css';

const app = createApp(App);

// Pinia is required for components and `useNotify` to work.
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
```

```css
/* ./styles/main.css */

/* Override the default colors by assigning new values in :root*/
:root {
  --vue-notification-color-success: #6fffff;
  --vue-notification-color-success-dark: #6fffff;
}

/* Override notification element styles */
.vue-notification {
  /* ... */
}

/* Override the styles of the close button  */
.vue-notification button {
  /* ... */
}

/* Override the styles of the close button icon. If you wish to use a different icon you could grab the css for it from here: https://icon-sets.iconify.design/ */
.vue-notification-close {
  /* ... */
}
```

Review the [css file](/packages/components/src/components/VNotification/styles.css) for ideas about what all you can override.

### Using a custom toast component

> If you wish wish to use your own toast component while utilize the functionality of VNotifications you can do so by passing your component to the `notifyComponent` prop. The [VNotifications component](/packages/components//src//components//VNotifications/VNotifications.tsx) will pass these [props](/packages/components/src/components/VNotification/VNotification.tsx#L5) to your component so make sure your component is set up to handle these. Review the internal [VNotification component](/packages/components/src/components/VNotification/VNotification.tsx) for an example.

```html
<script lang="ts" setup>
  import { useNotify, VNotifications, useNotifyRequest } from 'vue3-notify';
  import { myAsyncFunc } from './api';
  import { MyCustomComponent } from './components';

  const notify = useNotify();

  const { exec, loading } = useNotifyRequest(myAsyncFunc, {
    onSuccess: (result) => notify.show(result.message, 'success'),
    onError: (error) => notify.show(error.message, 'error'),
  });
</script>

<template>
  <button :disabled="loading" @click="exec">
    {{ loading ? 'Loading...' : 'Submit' }}
  </button>

  <VNotifications :notify-component="MyCustomToast" />
</template>
```

### Custom notification wrapper and toast

If you prefer to create your own components for use with `useNotify()` store please review the [@vue-notify/components](/packages/components/src/components/) package for examples.

## Reference

### Stores

#### useNotify

[View code](/packages/notify/src/useNotify.ts)
This is a pinia store that can be called from anywhere in your application to display a notification.

**It contains the following values:**
`notifications` - An array of notification objects
`show` - A function that displays a notification
`hide` - A function that hides the notification at the index that it receives.

### Composables

#### useNotifyRequest

[View code](/packages/composables/src/useNotifyRequest.ts)
This is a Vue composable that abstracts out the logic for handling async code.

**It accepts the following params**
`requestHandler` - The async function you want to call
`options` - An optional options object where you can pass an `onSuccess` function and a `onError` function

### Components

#### VNotifications

[View code](/packages/components/src/components/VNotifications/VNotifications.tsx)
This component handles the rendering of notifications. It stacks them vertically from the bottom of the screen and also controls the delay before a notification disappears.

It supports the following params
`delay` - An optional param the lets your adjust the delay in milliseconds before a notification disappears.
`notifyComponent` - An optional param that lets you insert your own custom notification component if you do not wish to use the default.

## Inspirations

The notification API was inspired by Quasar's [notify plugin](https://quasar.dev/quasar-plugins/notify)
The `useNotifyRequest` composable was inspired by Pikax's [usePromise composable](https://pikax.me/vue-composable/composable/promise/promise.html).
