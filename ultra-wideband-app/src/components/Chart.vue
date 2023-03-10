<template>
 <div>
     <canvas id="myChart"></canvas>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated } from 'vue'
import Chart from 'chart.js/auto'
import firebase from '../firebase/firebase'
import 'firebase/database'

export default defineComponent({
  name: 'MyChart',

  setup() {
    // Initialize Firebase
    firebase.database()

    // Create initial chart configuration
    const config = {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'Weekly Sales',
            data: [],
            backgroundColor: ['rgba(255, 26, 104, 0.2)'],
            borderColor: ['rgba(255, 26, 104, 1)'],
            borderWidth: 1,
          }
        ]
      },
      options: {
        aspectRatio: 1.5,
        scales: {
          x: {
            min: 0,
            max: 100,
            afterTickToLabelConversion: (ctx: any) => {
              ctx.ticks = []
              ctx.ticks.push({ value: 33.33, label: '' })
              ctx.ticks.push({ value: 66.66, label: '' })
            },
            grid: {
              drawTicks: false,
            },
            border: {
              width: 2,
              dash: [6, 6],
            },
          },
          y: {
            min: 0,
            max: 100,
            afterTickToLabelConversion: (ctx: any) => {
              ctx.ticks = []
              ctx.ticks.push({ value: 33.33, label: '' })
              ctx.ticks.push({ value: 66.66, label: '' })
            },
            grid: {
              drawTicks: false,
            },
            border: {
              width: 2,
              dash: [6, 6],
            },
          },
        },
      },
    }

    // Function to update the chart with the most recent data
    // Function to update the chart with the most recent data
    const updateChart = (snapshot: any) => {
      const data = snapshot.val()
      const chartData = Object.values(data).map((item: any) => ({
        x: item.x,
        y: item.y,
        r: item.r,
      }))

      // Get the most recent item from the data
      const latestItem = chartData[chartData.length - 1]

      // Update the data for the first dataset in the chart configuration object
      const chart = Chart.getChart("myChart");
      chart.data.datasets[0].data = [{
        x: latestItem.x,
        y: latestItem.y,
        r: latestItem.r,
      }]
      // Create the chart with the new data
        // const myChart = new Chart(document.getElementById('myChart'), config)
        chart.update();
    }

    // Function to fetch the most recent data from Firebase and update the chart
    const fetchData = () => {
      const collectionRef = firebase.database().ref('esp32/json/Position').limitToLast(1)
      collectionRef.once('value', updateChart)
    }

    // Initialize the chart on mount and fetch the most recent data
    onMounted(() => {
      const myChart = new Chart(document.getElementById('myChart'), config)
      fetchData()
    })

    // Fetch the most recent data on update
    onUpdated(() => {
      fetchData()
    })

    return {}
  },
})
</script>

<!-- <script setup lang="ts">



import { defineComponent, onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import Trilateration from './Trilateration.vue'; // Import the component




const data = {
 
  datasets: [{
    label: 'Weekly Sales',
     data: [{
      x: 20,
      y: 30,
      r: 15
    }],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
    
    ],
    borderWidth: 1
  },
  {
    label: 'Weekly Sales',
     data: [ {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: [
     
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
     
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};



const config = {
  type: 'bubble',
  data,
  options: {
    aspectRatio: 1.5,
    scales: {
      x: {
        min: 0,
        max: 100,
        afterTickToLabelConversion: (ctx: any) => {
         
          ctx.ticks = [];
          ctx.ticks.push({ value: 33.33, label: '' });
          ctx.ticks.push({ value: 66.66, label: '' });


        },
        grid: {
          drawTicks: false
        },
        border: {
          width: 2,
          dash: [6, 6]
        }


      },
      y: {
        min: 0,
        max: 100,
        afterTickToLabelConversion: (ctx: any) => {
         
          ctx.ticks = [];
          ctx.ticks.push({ value: 33.33, label: '' });
          ctx.ticks.push({ value: 66.66, label: '' });
         
        },
        grid: {
            drawTicks : false
        },
        border: {
          width: 2,
          dash: [6,6]
          }
      }
    },
 
  }
};

// render init block
onMounted(() => {
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
})



</> -->