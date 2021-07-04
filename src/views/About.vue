<template>
  <div class="about">
    <n-button type="primary" @click="getList">Primary</n-button>
    <n-message-provider>
      <n-data-table
        :columns="columns"
        :data="orderList"
        :pagination="pagination"
        :loading="loading"
      />
    </n-message-provider>
  </div>
</template>
<script>
import { h, defineComponent, computed } from "vue";
import { useMessage, NButton } from "naive-ui";
import { useStore } from "vuex";
const createColumns = ({ sendMail }) => {
  return [
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Age",
      key: "age",
    },
    {
      title: "Address",
      key: "address",
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            size: "small",
            onClick: () => sendMail(row),
          },
          { default: () => "Send Email" }
        );
      },
    },
  ];
};
export default defineComponent({
  async setup() {
    const message = useMessage();
    let store = useStore();
    let userInfo = computed(() => store.state.user); // 获取单个state
    return {
      userInfo,
      data: [],
      columns: createColumns({
        sendMail(rowData) {
          message.info("send mail to " + rowData.name);
        },
      }),
      nameObj: {
        name: "aaa",
      },
    };
  },
  data() {
    return {
      orderList: [],
      loading: false,
      pagination: {
        page: 1,
        pageSize: 200,
        showSizePicker: true,
        pageSizes: [2, 50, 100],
        onChange: (page) => {
          this.pagination.page = page;
          this.getList();
        },
        onPageSizeChange: (pageSize) => {
          this.pagination.pageSize = pageSize;
          this.pagination.page = 1;
          this.getList();
        },
      },
    };
  },
  methods: {
    getList() {
      this.loading = true;
      this.$http
        .get("/api/orderlist")
        .then((res) => {
          this.orderList = res.data.list;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
</script>
<style lang="scss">
</style>