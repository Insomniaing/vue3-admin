<template>
  <n-layout-sider
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="200"
    :native-scrollbar="false"
  >
    <n-menu
      @update:value="handleUpdateValue"
      :default-expanded-keys="defaultExpandedKeys"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :default-value="routeActive"
    />
  </n-layout-sider>
</template>
<script>
import { defineComponent, computed } from "vue";
import { menuOptions } from "./constants";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    let pathArr = route.fullPath.split("/")[1];
    const routeActive = computed(() => {
      return route.name;
    });
    return {
      defaultExpandedKeys: [pathArr],
      routeActive,
      menuOptions,
    };
  },
  methods: {
    handleUpdateValue(key) {
      this.$router.push({
        name: key,
      });
    },
  },
});
</script>
<style lang="scss">
</style>