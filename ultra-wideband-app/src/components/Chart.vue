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
      datasets: [
        {
          label: 'Bubble Chart',
          data: [],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    });
    const options = ref({
      // Define the chart options here
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 10,
          },
        },
        x: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 10,
          },
        },
      },
    });

    const db = firebase.database();
    const dbRef = db.ref('esp32/json/Position');

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