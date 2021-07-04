<template>
  <n-message-provider>
    <Suspense>
      <router-view></router-view>
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
