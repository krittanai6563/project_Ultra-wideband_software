<!-- แสดงข้อมูล เปิดปิดเส้นทางได้ -->
<!-- <template>

     
  <div class="toggle">
   
    <input type="checkbox" id="toggle2" v-model="chartType" :true-value="'line'" :false-value="'scatter'" @change="renderChart">
    <label for="toggle2" data-checked="ปิด" data-unchecked="เปิด"></label>
  </div>



    <canvas ref="chart"></canvas>



</template> -->

<template>

   <div class="row mb-12">

          <div class="card mb-5 mb-xxl-8">
              <div class="card-body d-flex justify-content-between card-rounded p-0 d-flex "
                  style="background-color:#F3F6F9; ">
              <div class="d-flex flex-column flex-lg-row-auto p-10 p-md-20">
      <h2 class="fw-bold text-dark mb-0">ค้นหาตำแหน่งย้อนหลัง</h2>
      <div class="fs-3 mb-8"></div>

      

      <div class="d-flex flex-row"> <!-- add this class to create a horizontal flex container -->
          <select class="select2-selection select2-selection--single form-select form-select-lg form-select-solid" style="width: 300px; background-color:#FFFFFF; "  v-model="selectedUser">
        <option value="">All users</option>
        <option v-for="user in users" :key="user.id" :value="user.name">{{ user.name }}</option>
      </select>

          <label for="period"></label>
          <select class="select2-selection select2-selection--single form-select form-select-lg form-select-solid" style="width: 300px; background-color:#FFFFFF; " v-model="selectedPeriod">
              <option value="all">ค้นหาทั้งหมด</option>
              <option value="30"> 30 นาทีที่ผ่านมา</option>
              <option value="60"> 1 ชั่วโมงที่ผ่านมา</option>
              <option value="90"> 1 ชั่วโมงครึ่งที่ผ่านมา</option>
              <option value="180">3 ชั่วโมงที่ผ่านมา</option>
          </select>
      </div>
</div>
                  <div class="d-none d-md-flex flex-row-fluid mw-200px ms-auto bgi-no-repeat bgi-position-y-center bgi-position-x-right bgi-size-contain"
                      style="background-image: url('../src/assets/frontend/img/undraw_map_re_60yf.svg');">
                  </div>
            </div>
          </div>
      </div>
    
  <div>
    <label >แสดงเส้นทาง   </label> 
     <div class="toggle">
      <input type="checkbox" id="toggle2" v-model="showLine" >
      <label for="toggle2" data-checked="ปิด" data-unchecked="เปิด"></label>
    </div>
<!-- 
    <select v-model="selectedPeriod">
          <option value="all">All</option>
          <option value="30">Last 30 minutes</option>
          <option value="60">Last hour</option>
          <option value="90">Last hour and a half</option>
        </select> -->
    <!-- <input type="checkbox" v-model="showLine" id="chartTypeToggle">
    <label for="chartTypeToggle">{{ showLine ? 'Show Scatter Chart' : 'Show Line Chart' }}</label> -->
    <canvas ref="canvasRef"></canvas>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Chart from 'chart.js/auto';
import ApiService from '../api';
import firebase from '../firebase/firebase'

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const positions = ref({});
    const filteredPositions = ref([]);
    const selectedPeriod = ref('all');
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    const showLine = ref(false);

     const selectedUser = ref('');

    const db = firebase.database();
    const dbuser = db.ref('user');
    const users = ref([]);

    dbuser.orderByChild('name').on('value', (snapshot) => {
      users.value = snapshot.val();
    });

    ApiService.get<any>('').then(response => {
      positions.value = response.data;
      console.log(positions.value)
      filterPositions();
      checkSelectedUser();
    });

 
    function checkSelectedUser() {
      const selectedName = selectedUser.value;
      for (const key in positions.value) {
        if (positions.value[key].name === selectedName) {
          // Found a match!
          console.log('Selected name matches a position:', positions.value[key]);
          return;
        }
      }
      // No match found
      console.log('Selected name does not match any position.');
    }
    

    function formatDate(timestamp: number) {
      const date = new Date(timestamp);
      return date.toLocaleTimeString();
    }

    function filterPositions() {
      const period = parseInt(selectedPeriod.value);
      const selectedName = selectedUser.value;
      let filteredByUser = [];

      if (selectedName) {
        filteredByUser = Object.keys(positions.value)
          .filter((id) => positions.value[id].name === selectedName)
          .map((id) => positions.value[id]);
      } else {
        filteredByUser = Object.values(positions.value);
      }

      if (isNaN(period)) {
        // Search all option selected
        filteredPositions.value = filteredByUser;
      } else {
        filteredPositions.value = filteredByUser.filter(
          (position) => position.timestamp > Date.now() - period * 60 * 1000
        );
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
                y: position.y,
              })),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgb(255, 99, 132)',
              fill: false,
            },
          ],
        };

        if (showLine.value) {
          chartData.datasets[0].type = 'line';
          chartData.datasets[0].borderDash = [5, 5];
        }

        const existingChart = Chart.instances[0];
        if (existingChart) {
          existingChart.data = chartData;
          existingChart.update();
        } else {
          new Chart(ctx, {
            type: 'scatter',
            data: chartData,
          });
        }
      }
    }

    watch([selectedPeriod, showLine, selectedUser,checkSelectedUser], filterPositions);

    return {
      filteredPositions,
      formatDate,
      selectedPeriod,
      canvasRef,
      showLine,
      selectedUser,
      users,
    };
  },
});
</script>


<!-- <script>


import { defineComponent } from 'vue';
import Chart from 'chart.js/auto';
import ApiService from '../api';

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


</script>  -->

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

