<template>
  <n-button @click="info"> 多行 </n-button>
</template>

<script>
import { useMessage } from "naive-ui";

export default {
  setup() {
    window.$message = useMessage();
    const message = useMessage();
    return {
      info() {
        message.info(
          "I don't know why nobody told you how to unfold your love. Once upon a time you dressed so fine. How many roads must a man walk down. 'Cause you walked hand in hand With another man in my place. If I were you, I will realize that I love you more than any other guy."
        );
      },
    };
  },
};
</script>
