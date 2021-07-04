<template>
  <div class="login-in">
    <div class="login-dialog">
      <div class="content">
        <div class="form">
          <n-form
            :model="model"
            ref="formRef"
            :rules="rules"
            label-placement="left"
          >
            <n-form-item path="username" label="">
              <n-input
                v-model:value="model.username"
                @keydown.enter.prevent
                round
                placeholder="请输入用户名"
              >
                <template #prefix>
                  <n-icon>
                    <person-icon />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item path="password" label="">
              <n-input
                v-model:value="model.password"
                type="password"
                @keydown.enter.prevent
                round
                placeholder="请输入密码"
              >
                <template #prefix>
                  <n-icon>
                    <lock-icon />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>
          </n-form>
          <n-button
            color="#ff69b4"
            @click="handleValidateButtonClick"
            round
            style="width: 100%"
          >
            <template #icon>
              <n-icon>
                <log-in-icon />
              </n-icon>
            </template>
            登录
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import {
  AirplaneSharp as LogInIcon,
  LockClosedOutline as LockIcon,
  PersonAdd as PersonIcon,
} from "@vicons/ionicons5";
export default defineComponent({
  setup() {
    const router = useRouter();
    const message = useMessage();
    const store = useStore();
    const modelRef = ref({
      username: null,
      password: null,
    });
    const formRef = ref(null);
    return {
      formRef,
      model: modelRef,
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["input", "blur"],
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["input", "blur"],
          },
        ],
      },
      handleValidateButtonClick(e) {
        e.preventDefault();
        formRef.value.validate((errors) => {
          if (!errors) {
            store
              .dispatch("user/login", modelRef.value)
              .then(() => {
                message.success("登录成功");
                router.push({
                  name: "Board",
                });
              })
              .catch(() => {
                message.error("用户名或密码错误");
              });
          } else {
            message.error("登录失败");
          }
        });
      },
    };
  },
  components: {
    LogInIcon,
    LockIcon,
    PersonIcon,
  },
  name: "Login",
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss">
.login-in {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #dccef1, #e3c7ea, #f6b2da);
  .login-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
    width: 800px;
    height: 500px;
    background: linear-gradient(
      45deg,
      rgba(234, 236, 251, 0.8),
      rgba(251, 240, 249, 0.8)
    );
    border-radius: 10px;
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08),
      0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04);
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
      .form {
        width: 400px;
      }
    }
  }
}
</style>