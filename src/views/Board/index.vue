<template>
  <div id="chart">
    <div class="mini-charts">
      <div class="card-item">
        <n-card title="" hoverable>
          <apexchart
            height="100"
            type="line"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </n-card>
      </div>
      <div class="card-item">
        <n-card title="" hoverable>
          <apexchart
            height="100"
            type="line"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </n-card>
      </div>
      <div class="card-item">
        <n-card title="" hoverable>
          <apexchart
            height="100"
            type="line"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </n-card>
      </div>
      <div class="card-item">
        <n-card title="" hoverable>
          <apexchart
            height="100"
            type="line"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </n-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      series: [
        {
          data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21],
        },
      ],
      chartOptions: {
        chart: {
          id: "spark1",
          group: "sparks",
          type: "line",
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            opacity: 0.2,
          },
        },
        stroke: {
          curve: "smooth",
        },
        markers: {
          size: 0,
        },
        grid: {
          padding: {
            top: 20,
            bottom: 10,
            left: 110,
          },
        },
        colors: ["#fff"],
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return "";
              },
            },
          },
        },
      },
    };
  },
};
</script>
<style lang="scss">
#chart {
  .mini-charts {
    display: flex;
    justify-content: space-between;
    .card-item {
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