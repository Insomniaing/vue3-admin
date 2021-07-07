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
      :expanded-keys="expandedKeys"
      @update:expanded-keys="handleUpdateExpandedKeys"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :value="routeActive"
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
    const routeActive = computed(() => {
      return route.name;
    });
    return {
      routeActive,
      menuOptions,
    };
  },
  data() {
    return {
      expandedKeys: [this.$route.fullPath.split("/")[1]],
    };
  },
  watch: {
    $route(nv) {
      this.expandedKeys = [nv.fullPath.split("/")[1]];
    },
  },
  methods: {
    handleUpdateExpandedKeys(key) {
      this.expandedKeys = key;
    },
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