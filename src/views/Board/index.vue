<template>
  <div id="chart">
    <div class="mini-charts">
      <div class="card-item" v-for="item in chartData" :key="item.id">
        <div class="details">
          <p class="content">{{ item.num }}</p>
          <p class="content">{{ item.type }}</p>
        </div>
        <n-card title="" hoverable>
          <apexchart
            height="100"
            type="line"
            :options="chartOptions"
            :series="item.series"
          ></apexchart>
        </n-card>
      </div>
    </div>
  </div>
</template>
<script>
import { chartOptions } from "./constants.js";
export default {
  components: {},
  created() {
    this.getCharts();
  },
  data() {
    return {
      chartOptions,
      chartData: [],
    };
  },
  methods: {
    getCharts() {
      this.$http.get("/api/board/charts").then((res) => {
        this.chartData = res.data.chartsData;
      });
    },
  },
};
</script>
<style lang="scss">
#chart {
  .mini-charts {
    display: flex;
    justify-content: space-between;
    .card-item {
      min-width: 250px;
      position: relative;
      .details {
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translate(0, -50%);
        z-index: 1;
        .content {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
        }
      }
      .n-card {
        border-radius: 10px;
      }
    }
    .card-item:nth-child(1) .n-card {
      background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
    }
    .card-item:nth-child(2) .n-card {
      background-image: linear-gradient(135deg, #2afadf 10%, #4c83ff 100%);
    }
    .card-item:nth-child(3) .n-card {
      background-image: linear-gradient(135deg, #ffd3a5 10%, #fd6585 100%);
    }
    .card-item:nth-child(4) .n-card {
      background-image: linear-gradient(135deg, #ee9ae5 10%, #5961f9 100%);
    }
  }
}
</style>