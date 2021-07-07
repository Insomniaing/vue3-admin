<template>
  <div class="login-opt">
    <div style="margin-right: 20px">
      <n-badge :value="101" :max="99" color="#FC1F2B">
        <Mail />
      </n-badge>
    </div>
    <n-popover
      :style="{ width: '350px' }"
      trigger="hover"
      placement="bottom-end"
    >
      <template #trigger>
        <n-avatar circle :size="48" :src="userInfo.avatar" />
      </template>
      <div class="user">
        <div class="login-out">
          <div class="title fw">个人信息</div>
          <n-button text @click="handleSelect">
            <template #icon>
              <n-icon>
                <out-icon />
              </n-icon>
            </template>
            登出
          </n-button>
        </div>
        <div class="info">
          <n-avatar circle :size="48" :src="userInfo.avatar" />
          <div style="font-size: 18px; font-weight: 600">
            {{ userInfo.username }}
          </div>
          <div class="icon">
            <n-icon size="18" color="#72ABE9">
              <git-hub-icon />
            </n-icon>
            <n-icon size="18" color="#FC7726">
              <phone-icon />
            </n-icon>
            <n-icon size="18" color="#71B65A">
              <mail-icon />
            </n-icon>
          </div>
          <div class="level">
            <n-tag type="warning" size="small" style="color: #fdac41"
              >LV 22</n-tag
            >
            <n-progress
              type="line"
              style="width: 200px; margin: 0 10px"
              :percentage="60.3"
              :indicator-placement="'inside'"
              processing
            />
            <n-tag type="error" size="small">LV 23</n-tag>
          </div>
          <n-divider />
          <div class="bar">
            <div class="bar-content">
              <router-link to="/Setting/my">
                <n-icon size="28" color="#9429D3">
                  <logo-icon />
                </n-icon>
                <div>个人中心</div>
              </router-link>
            </div>
            <div class="bar-content">
              <n-icon size="28" color="#25CBC2">
                <head-icon />
              </n-icon>
              <div>我的音乐</div>
            </div>
            <a href="http://yoshy.cn" target="blank" class="bar-content">
              <n-icon size="28" color="#ff69b4">
                <new-icon />
              </n-icon>
              <div>博客记录</div>
            </a>
          </div>
        </div>
      </div>
    </n-popover>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import { useDialog } from "naive-ui";
import { useStore } from "vuex";
import Mail from "@/components/Badge";
import {
  LogInOutline as OutIcon,
  LogoGithub as GitHubIcon,
  PhonePortrait as PhoneIcon,
  MailUnread as MailIcon,
  Headset as HeadIcon,
  LogoOctocat as LogoIcon,
  Newspaper as NewIcon,
} from "@vicons/ionicons5";

export default defineComponent({
  setup() {
    let store = useStore();
    const dialog = useDialog();
    let userInfo = computed(() => store.state.user); // 获取单个state
    return {
      userInfo,
      handleConfirm() {
        dialog.error({
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
    OutIcon,
    GitHubIcon,
    PhoneIcon,
    MailIcon,
    HeadIcon,
    LogoIcon,
    NewIcon,
    Mail,
  },
});
</script>
<style lang="scss">
.login-opt {
  display: flex;
  align-items: center;
}
.fw {
  font-weight: 600;
}
.user {
  .login-out {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
    .icon {
      display: flex;
    }
    .icon i:nth-child(2n) {
      margin: 0 5px;
    }
    .level {
      margin: 5px 0;
      display: flex;
      align-items: center;
    }
    .bar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .bar-content {
        text-align: center;
      }
    }
  }
}
</style>