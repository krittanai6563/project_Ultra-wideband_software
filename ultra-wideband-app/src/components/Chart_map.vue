<template>
  <div>
       <canvas ref="chartCanvas"></canvas>
  </div>
</template>




<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import firebase from '../firebase/firebase';
import 'firebase/database';


export default defineComponent({
  setup() {
    const chartCanvas = ref(null);
  const data = ref(JSON.parse(localStorage.getItem('chartData')) || {
  
  });

  data.value.datasets = [
      {
        label: 'Tag',
        data: [],
       backgroundColor: 'rgba(255, 206, 86, 1)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Anchor',
        data: [
          { x: 1, y: 1, r: 10 },
          { x: 4, y: 1, r: 10 },
          { x: 3, y: 5, r: 10 },
        ],
         backgroundColor: 'rgba(0,0,0)',
        borderColor: 'rgba(0,0,0)',
        borderWidth: 1,
      },
    
    ];
    const options = ref({
      // Define the chart options here
      scales: {
        y: {
          min: 0,
          max: 6,
          beginAtZero: true,
          // reverse: true, กลับเลข 0
          ticks: {
            stepSize: 1,
            

          },
        },
        x: {
          min: 0,
          max: 6,
          ticks: {
            stepSize: 1,
          },
        },

      },
    });

    const db = firebase.database();
    const dbRef = db.ref('map');

    const updateChart = () => {
      dbRef.limitToLast(1).once('value', snapshot => {
        const newValues = [];
        snapshot.forEach(childSnapshot => {
          const childData = childSnapshot.val();
          const x = childData.x;
          const y = childData.y;
          const r = childData.r;
          const newData = {
            x,
            y,
            r,
          };
          newValues.push(newData);
        });
        data.value.datasets[0].data = newValues;
        data.value.datasets[1].data = [
          { x: 1, y: 1, r: 10 },
          { x: 5, y: 1, r: 10 },
          { x: 3, y: 5, r: 10 },
        ];
      

        localStorage.setItem('chartData', JSON.stringify(data.value));

        // Update the chart
        const chart = Chart.getChart(chartCanvas.value);
        chart.update();
      });
    };

    // Update the chart every 5 seconds
    setInterval(updateChart, 1000);

    onMounted(() => {
      const ctx = chartCanvas.value.getContext('2d');

      new Chart(ctx, {
        type: 'bubble',
        data: data.value,
        options: options.value,
      });
    });

    return {
      chartCanvas,
    };
  },
});
</script>