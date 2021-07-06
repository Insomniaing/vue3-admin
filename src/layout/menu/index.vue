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
  BarChart as BarChart,
  Image as ImageIcon,
  AirplaneSharp as AirplaneIcon,
  Footsteps as FootstepsIcon,
  Heart as HeartIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = [
  {
    label: "数据",
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
  {
    label: "记录",
    key: "Record",
    icon: renderIcon(AirplaneIcon),
    children: [
      {
        label: "旅行",
        key: "Travel",
        icon: renderIcon(FootstepsIcon),
      },
      {
        label: "心情",
        key: "Mood",
        icon: renderIcon(HeartIcon),
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