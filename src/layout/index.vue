<template>
  <n-layout style="height: 100%; min-width: 1360px" :native-scrollbar="false">
    <n-layout-header style="height: 80px; padding: 0 24px" bordered>
      <div class="header">
        <h1 class="my-logo">
          <img src="../assets/logo.png" alt="" class="logo" />
          <span class="title">Hello Vue3</span>
        </h1>
        <Head />
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
        <n-card style="flex: 1">
          <router-view />
        </n-card>
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
import { defineComponent } from "vue";
import Menus from "./menu";
import Head from "./head";

export default defineComponent({
  setup() {
    return {};
  },
  methods: {},
  components: {
    Head,
    Menus,
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
}
</style>