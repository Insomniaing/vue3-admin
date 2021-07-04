<template>
  <n-message-provider>
    <Suspense>
      <n-dialog-provider>
        <router-view></router-view>
      </n-dialog-provider>
    </Suspense>
  </n-message-provider>
</template>
<script>
// import Layout from "@/layout";
import "./styles/reset.scss";

export default {
  setup() {},
  components: {
    // Layout,
  },
};
</script>
<style>
</style>
