<template>
  <n-layout style="height: 100%" :native-scrollbar="false">
    <n-layout-header style="height: 80px; padding: 0 24px" bordered>
      <div class="header">
        <h1 class="my-logo">
          <img src="../assets/logo.png" alt="" class="logo" />
          <span class="title">Hello Vue3</span>
        </h1>
        <div class="login-opt">
          <div style="margin-right: 20px">
            <n-badge :value="101" :max="99" color="#FC1F2B">
              <Mail />
            </n-badge>
          </div>
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
      <Menus />
      <n-layout-content
        ref="content"
        embedded
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
import { defineComponent, computed } from "vue";
import { useDialog } from "naive-ui";
import { useStore } from "vuex";
import Menus from "./menu";
import Mail from "@/components/Badge";
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

export default defineComponent({
  setup() {
    let store = useStore();
    const dialog = useDialog();
    let userInfo = computed(() => store.state.user); // 获取单个state
    return {
      userInfo,
      options,
      handleConfirm() {
        dialog.warning({
          title: "系统提示",
          content: "确定要狠心离开么?",
          positiveText: "确定",
          negativeText: "取消",
          onPositiveClick: () => {
            store.dispatch("user/loginOut").then(() => {
              location.reload();
            });
          },
        });
      },
    };
  },
  methods: {
    handleSelect() {
      this.handleConfirm();
    },
  },
  components: {
    Menus,
    Mail,
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
    display: flex;
    align-items: center;
    .user-info {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
}
</style>