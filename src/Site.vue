<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <App />
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>
<script>
import "./styles/reset.scss";
import App from "./App.vue";

export default {
  setup() {
    return {};
  },
  components: {
    App,
  },
};
</script>
<style>
</style>
