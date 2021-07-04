<template>
  <n-layout style="height: 100%" :native-scrollbar="false">
    <n-layout-header style="height: 80px; padding: 0 24px" bordered>
      <div class="header">
        <h1 class="my-logo">
          <img src="../assets/logo.png" alt="" class="logo" />
          <span class="title">Hello Vue3</span>
        </h1>
        <div class="login-opt">
          <n-dropdown
            @select="handleSelect"
            trigger="hover"
            :options="options"
            placement="bottom-end"
          >
            <n-space class="user-info">
              <n-avatar circle :size="48" :src="userInfo.avatar" />
              <div style="font-size: 18px; font-weight: 600">
                {{ userInfo.username }}
              </div>
            </n-space>
          </n-dropdown>
        </div>
      </div>
    </n-layout-header>
    <n-layout has-sider position="absolute" style="top: 80px; bottom: 64px">
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
        />
      </n-layout-sider>
      <n-layout-content
        ref="content"
        content-style="padding: 24px;"
        :native-scrollbar="true"
      >
        <router-view />
      </n-layout-content>
    </n-layout>
    <n-layout-footer
      bordered
      position="absolute"
      style="height: 64px; padding: 24px"
    >
      Come on!
    </n-layout-footer>
  </n-layout>
</template>
<script>
import { h, defineComponent, computed } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  BarChartOutline as BarChart,
  SettingsOutline as Settings,
} from "@vicons/ionicons5";
import { useStore } from "vuex";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const options = [
  {
    label: "个人中心",
    key: "myInfo",
  },
  {
    label: "退出",
    key: "out",
  },
];
const menuOptions = [
  {
    label: "数据看板",
    key: "About",
    icon: renderIcon(BarChart),
  },
  {
    label: "1973年的弹珠玩具",
    key: "pinball-1973",
    icon: renderIcon(BookIcon),
    children: [
      {
        label: "鼠",
        key: "rat",
      },
    ],
  },
  {
    label: "寻羊冒险记",
    key: "Home",
    icon: renderIcon(BookIcon),
  },
  {
    label: "设置",
    key: "dance-dance-dance",
    icon: renderIcon(Settings),
    children: [
      {
        label: "叙事者",
        key: "narrator",
        icon: renderIcon(PersonIcon),
      },
      {
        label: "羊男",
        key: "sheep-man",
        icon: renderIcon(PersonIcon),
      },

      {
        label: "饮品",
        key: "beverage",
        icon: renderIcon(WineIcon),
        children: [
          {
            label: "威士忌",
            key: "whisky",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];

export default defineComponent({
  setup() {
    let store = useStore();
    let userInfo = computed(() => store.state.user); // 获取单个state
    return {
      userInfo,
      menuOptions,
      options,
      handleSelect(key) {},
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .my-logo {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    .logo {
      width: 80px;
      height: 80px;
    }
    .title {
      display: inline-block;
      width: 120px;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .login-opt {
    .user-info {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
}
</style>