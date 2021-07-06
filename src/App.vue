<template>
  <!-- <n-config-provider :theme="darkTheme"> -->
  <n-message-provider>
    <Suspense>
      <n-dialog-provider>
        <router-view></router-view>
      </n-dialog-provider>
    </Suspense>
  </n-message-provider>
  <!-- </n-config-provider> -->
</template>
<script>
// import Layout from "@/layout";
import { darkTheme } from "naive-ui";
import "./styles/reset.scss";

export default {
  setup() {
    return { darkTheme };
  },
  components: {
    // Layout,
  },
};
</script>
<style>
</style>
