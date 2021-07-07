<template>
  <router-view></router-view>
</template>
<script>
import { loadingBarApiRef } from "./permission";
import { useLoadingBar } from "naive-ui";
import { onMounted } from "vue";

export default {
  setup() {
    const loadingBar = useLoadingBar();
    onMounted(() => {
      loadingBarApiRef.value = loadingBar;
      loadingBar.finish();
    });
    return {};
  },
};
</script>
<style>
</style>
