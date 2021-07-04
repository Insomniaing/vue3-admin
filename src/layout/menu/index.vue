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
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      default-value="Board"
    />
  </n-layout-sider>
</template>
<script>
import { h, defineComponent } from "vue";
import { NIcon } from "naive-ui";
import {
  BarChartOutline as BarChart,
  ImageOutline as ImageIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = [
  {
    label: "数据看板",
    key: "Board",
    icon: renderIcon(BarChart),
  },
  {
    label: "图库",
    key: "Picture",
    icon: renderIcon(ImageIcon),
    children: [
      {
        label: "壁纸",
        key: "Wallpaper",
      },
    ],
  },
];

export default defineComponent({
  setup() {
    return {
      menuOptions,
    };
  },
  methods: {
    handleUpdateValue(key, item) {
      console.log(key, item);
      this.$router.push({
        name: key,
      });
    },
  },
});
</script>
<style lang="scss">
</style>