<!-- แสดงข้อมูล เปิดปิดเส้นทางได้ -->
<template>

     
  <div class="toggle">
   
    <input type="checkbox" id="toggle2" v-model="chartType" :true-value="'line'" :false-value="'scatter'" @change="renderChart">
    <label for="toggle2" data-checked="ปิด" data-unchecked="เปิด"></label>
  </div>



    <canvas ref="chart"></canvas>

</template>


<script>


import { defineComponent } from 'vue';
import Chart from 'chart.js/auto';

export default defineComponent({
  name: 'ScatterLineChart',
  data() {
    return {
      chartType: 'scatter',
      chart: null
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      if (this.chart) {
        this.chart.destroy(); // destroy existing chart before rendering new chart
      }
      const data = {
        datasets: [{
          label: 'Scatter Line Chart',
          data: [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 8, y: 3 },
            { x: 4, y: 4 },
          ],
          fill: false,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          pointBackgroundColor: 'rgb(75, 192, 192)',
          pointRadius: 5,
          type: this.chartType,

        }]
      };

      data.datasets[0].data.sort((a, b) => a.x - b.x); // sort data by ascending x value

      const config = {
        type: this.chartType,
        data: data,
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            }
          }
        }
      };

      this.chart = new Chart(this.$refs.chart, config);
    }
  }
});


</script> 

 <!-- // export default defineComponent({
//   name: 'ScatterLineChart',
//   data() {
//     return {
//       chartType: 'scatter',
//       chartTypes: ['scatter', 'line'],
//       chart: null
//     };
//   },
//   mounted() {
//     this.renderChart();
//   },
//   methods: {
//     renderChart() {
//       if (this.chart) {
//         this.chart.destroy(); // destroy existing chart before rendering new chart
//       }
//       const data = {
//         datasets: [{
//           label: 'Scatter Line Chart',
//           data: [
//             { x: 0, y: 0 },
//             { x: 1, y: 1 },
//             { x: 2, y: 2 },
//             { x: 3, y: 3 },
//             { x: 4, y: 4 },
//           ],
//           fill: false,
//           backgroundColor: 'rgba(75, 192, 192, 0.5)',
//           pointBackgroundColor: 'rgb(75, 192, 192)',
//           pointRadius: 5,
//           type: this.chartType
//         }]
//       };

//       const config = {
//         type: this.chartType,
//         data: data,
//         options: {
//           scales: {
//             x: {
//               type: 'linear',
//               position: 'bottom'
//             }
//           }
//         }
//       };

//       this.chart = new Chart(this.$refs.chart, config);
//     },
//     toggleChart() {
//       const currentIndex = this.chartTypes.indexOf(this.chartType);
//       this.chartType = this.chartTypes[(currentIndex + 1) % this.chartTypes.length];
//       this.renderChart();
//     }
//   }
// });  -->


<!-- <template>
  <div class="row mb-12">

    <div class="card mb-5 mb-xxl-8">
      <div class="card-body d-flex justify-content-between card-rounded p-0 d-flex " style="background-color:#F3F6F9; ">
        <div class="d-flex flex-column flex-lg-row-auto py-10 py-md-14 px-10 px-md-20 pe-lg-0">
          <h2 class="fw-bold text-dark mb-0">ค้นหาตำแหน่งย้อนหลัง</h2>
          <div class="fs-3 mb-8"></div>


          <label for="period"></label>
          <select class="select2-selection select2-selection--single form-select form-select-lg form-select-solid"
            style="width: 300px; background-color:#FFFFFF; " v-model="selectedPeriod">

            <option value="all">ค้นหาทั้งหมด</option>
            <option value="30"> 30 นาทีที่ผ่านมา</option>
            <option value="60"> 1 ชั่วโมงที่ผ่านมา</option>
            <option value="90"> 1 ชั่วโมงครึ่งที่ผ่านมา</option>
            <option value="180">3 ชั่วโมงที่ผ่านมา</option>
          </select>
          
        </div>

        <div
          class="d-none d-md-flex flex-row-fluid mw-200px ms-auto bgi-no-repeat bgi-position-y-center bgi-position-x-right bgi-size-contain"
          style="background-image: url('../src/assets/frontend/img/undraw_map_re_60yf.svg');">
        </div>
      </div>
    </div>
  </div>

  <canvas ref="canvasRef"></canvas>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Chart from 'chart.js/auto';
import ApiService from '../api';

export default defineComponent({
  
  
  setup() {
    const positions = ref({});
    const filteredPositions = ref([]);
    const selectedPeriod = ref('all');
    const canvasRef = ref<HTMLCanvasElement | null>(null);

    ApiService.get<any>('').then(response => {
      positions.value = response.data;
      filterPositions();
    });

    function formatDate(timestamp: number) {
      const date = new Date(timestamp);
      return date.toLocaleTimeString();
    }

    function filterPositions() {
      const period = parseInt(selectedPeriod.value);
      if (isNaN(period)) {
        // Search all option selected
        filteredPositions.value = Object.keys(positions.value)
          .map((id) => positions.value[id]);
      } else {
        filteredPositions.value = Object.keys(positions.value)
          .filter(
            (id) => positions.value[id].timestamp > Date.now() - period * 60 * 1000
          )
          .map((id) => positions.value[id]);
      }
      drawChart();
    }

    function drawChart() {
      const ctx = canvasRef.value?.getContext('2d');
      if (ctx) {
        const chartData = {
          datasets: [
            {
              label: 'Positions',
              data: filteredPositions.value.map((position) => ({
                x: position.x,
                y: position.y
              })),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 2,
              fill: false,
            
            },
          ],
        };

        const existingChart = Chart.instances[0];
        if (existingChart) {
          existingChart.data = chartData;
          existingChart.update();
        } else {
          new Chart(ctx, {
            type: 'scatter',
            data: chartData,
            options: {
              scales: {
                x: {
                  type: 'linear',
                  position: 'bottom'
                }
              }
            }
          });
        }
      }
    }

    watch(selectedPeriod, filterPositions);

    return {
      filteredPositions,
      formatDate,
      selectedPeriod,
      canvasRef,
    };
  },
});
</script> -->

<style lang="scss">

.text12  {
    box-sizing: border-box;
    color: #777;
    
    font-size: 14px;
    margin-left: 29px;
    top: 3px;
    text-transform: uppercase;
    white-space: nowrap;
    font-family: "IBM Plex Sans Thai", sans-serif;
    font-family: "Krub", sans-serif;
    font-family: "Prompt", sans-serif;
}

.toggle {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  
  & > input[type=checkbox] {
    box-sizing: border-box;
    margin-left: -9999px;
    position: absolute;
    visibility: hidden;
  }
  & > input[type=checkbox] + label {
    background-color: #f3f5f7;
    border: 1px solid #d4d9de;
    border-radius: 15px;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 26px;
    outline: none;
    position: relative;
    transition: background .3s;
    user-select: none;
    width: 62px;
    &::after,
    &::before {
      display: block;
      position: absolute;
    }
    &::before {
      background-color: #a0aeba;
      border-radius: 50%;
      bottom: -3px;
      // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5);
      box-sizing: border-box;
      content: "";
      height: 26px;
      left: 0px;
      top: -1px;
      transition: background .3s, margin .3s;
      width: 25px;
    }
    &::after {
      box-sizing: border-box;
      color: #777;
      content: attr(data-unchecked);
      font-family: Sans-serif;
      font-size: 14px;
      margin-left: 79px;
      top: 3px;
      text-transform: uppercase;
      white-space: nowrap;
        font-family: 'IBM Plex Sans Thai', sans-serif;
    font-family: 'Krub', sans-serif;
    font-family: 'Prompt', sans-serif;
    }
  }
  & input[type=checkbox]:checked + label {
    background-color: #faeab2;
    border-color: #faeab2;
    &::before {
      background-color: #F1BC00;
      margin-left: 36px;
    }
    &::after {
      content: attr(data-checked)
    }
  }
} 
 
</style>

