<template>
  <div class="login-opt">
    <div style="margin-right: 20px" @click="activate('right')">
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
    <n-drawer v-model:show="active" :width="502" :placement="placement">
      <n-drawer-content title="通知">
        <n-list>
          <n-list-item>
            <template #suffix>
              <n-tag type="error" size="small" round>未读</n-tag>
            </template>
            <n-thing
              title="评论"
              title-extra="不安静的小游客"
              description="《且听风吟》"
            >
              <template #avatar>
                <n-badge :value="5" dot />
              </template>
              <n-ellipsis :line-clamp="2">
                电灯熄灭 物换星移 泥牛入海<br />黑暗好像 一颗巨石 按在胸口<br />独脚大盗
                百万富翁 摸爬滚打<br />黑暗好像 一颗巨石 按在胸口
              </n-ellipsis>
            </n-thing>
          </n-list-item>
          <n-list-item>
            <template #suffix>
              <n-tag type="error" size="small" round>未读</n-tag>
            </template>
            <n-thing
              title="收藏"
              title-extra="房东的猫"
              description="《那车头依然吐着烟》"
            >
              <template #avatar>
                <n-badge :value="5" dot v-if="!checked" />
              </template>
              <div>该用户收藏了您的文章</div>
            </n-thing>
          </n-list-item>
          <n-list-item>
            <template #suffix>
              <n-tag type="success" size="small" round>已读</n-tag>
            </template>
            <n-thing title="转发" title-extra="一条秋虫" description="《秋色》">
              <template #avatar>
                <n-badge :value="5" dot style="visibility: hidden" />
              </template>
              <div>该用户转发了您的文章</div>
            </n-thing>
          </n-list-item>
          <n-list-item>
            <template #suffix>
              <n-tag type="error" size="small" round>未读</n-tag>
            </template>
            <n-thing
              title="评论"
              title-extra="落寞潇"
              description="《复杂度不会消失，只会转移》"
            >
              <template #avatar>
                <n-badge :value="5" dot />
              </template>

              <n-ellipsis :line-clamp="2">
                当你听到一些人对于精致的概念模型侃侃而谈，请保持清醒
              </n-ellipsis>
            </n-thing>
          </n-list-item>
          <n-list-item>
            <template #suffix>
              <n-tag type="success" size="small" round>已读</n-tag>
            </template>
            <n-thing
              title="收藏"
              title-extra="一颗白菜"
              description="《手写的从前》"
            >
              <template #avatar>
                <n-badge :value="5" dot style="visibility: hidden" />
              </template>
              <div>该用户收藏了您的文章</div>
            </n-thing>
          </n-list-item>
          <n-list-item>
            <template #suffix>
              <n-tag type="error" size="small" round>未读</n-tag>
            </template>
            <n-thing
              title="收藏"
              title-extra="我是一条鱼的羊"
              description="《夜星》"
            >
              <template #avatar>
                <n-badge :value="5" dot />
              </template>
              <n-ellipsis :line-clamp="2">
                没有把握的话不要给星星换颜色，那会是个灾难。
              </n-ellipsis>
            </n-thing>
          </n-list-item>
          <n-list-item>
            <template #suffix>
              <n-tag type="error" size="small" round>未读</n-tag>
            </template>
            <n-thing
              title="收藏"
              title-extra="Vince 麦"
              description="《那车头依然吐着烟》"
            >
              <template #avatar>
                <n-badge :value="5" dot />
              </template>
              <div>该用户收藏了您的文章</div>
            </n-thing>
          </n-list-item>
          <n-list-item>
            <template #suffix>
              <n-tag type="error" size="small" round>未读</n-tag>
            </template>
            <n-thing title="评论" title-extra="初安" description="《童年》">
              <template #avatar>
                <n-badge :value="5" dot />
              </template>
              <n-ellipsis :line-clamp="2">
                每每这个时候，我都会回忆起童年玩 NDS 的快乐时光。
              </n-ellipsis>
            </n-thing>
          </n-list-item>
          <n-list-item>
            <template #suffix>
              <n-tag type="error" size="small" round>未读</n-tag>
            </template>
            <n-thing
              title="收藏"
              title-extra="CODE BUG"
              description="《桃花影落》"
            >
              <template #avatar>
                <n-badge :value="5" dot />
              </template>
              <div>该用户收藏了您的文章</div>
            </n-thing>
          </n-list-item>
        </n-list>
      </n-drawer-content>
    </n-drawer>
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
  data() {
    return {
      checked: false,
      active: false,
      placement: "right",
    };
  },
  methods: {
    activate(placement) {
      this.active = true;
      this.placement = placement;
    },
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