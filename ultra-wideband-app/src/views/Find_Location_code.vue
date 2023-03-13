<!-- <template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="location in locations" :key="location.time">
                    <td>{{ location.x }}</td>
                    <td>{{ location.y }}</td>
                    <td>{{ formatDate(location.timestamp) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import firebase from '../firebase/firebase';
import 'firebase/database';

const db = firebase.database();
const dbRef = db.ref('esp32/json/Position');
const locations = ref([]);

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
        console.error(`Invalid timestamp: ${timestamp}`);
        return '';
    }

    console.log(date.toLocaleDateString(), date.toLocaleTimeString())
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

};
const updateLocations = (snapshot) => {
    const newLocations = [];
    snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        if (!childData.timestamp) {
            console.error(`Missing timestamp for location: ${childSnapshot.key}`);
            return;
        }
        const location = {
            x: childData.x,
            y: childData.y,
            timestamp: formatDate(childData.timestamp),
        };
        newLocations.push(location);
    });
    locations.value = newLocations;
};

onMounted(() => {
    dbRef.limitToLast(10).on('value', updateLocations);
});
</script> -->

<!-- ดึงข้อมูลมาแสดง โดยใช้ api -->
<!-- <template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>Radius</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(position, index) in positionsWithIndex" :key="position.id">
                    <td> -- {{ index + 1 }}</td>
                    <td>--  {{ position.x }}</td>
                    <td> -- {{ position.y }}</td>
                    <td>--  {{ position.r }}</td>
                    <td> -- {{ formatDate(position.timestamp) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ApiService from '../api';

export default defineComponent({
    name: 'MyComponent',
    setup() {
        const positions = ref({});
        const positionsWithIndex = ref([]);

        ApiService.get<any>('').then(response => {
            positions.value = response.data;
            positionsWithIndex.value = Object.keys(positions.value).map((id, index) => ({ id, ...positions.value[id] }));
        });

        function formatDate(timestamp: number) {
            const date = new Date(timestamp);
            return date.toLocaleTimeString();
        }

        return {
            positionsWithIndex,
            formatDate,
        };
    },
});
</script> -->

<!-- <template>
    <div>
        <label for="period">Select period:</label>
        <select v-model="selectedPeriod">
      <option value="30">Last 30 minutes</option>
      <option value="60">Last 1 hour</option>
      <option value="90">Last 1.5 hours</option>
      <option value="180">Last 3 hours</option>
    </select>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>Radius</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(position, index) in filteredPositions" :key="position.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ position.x }}</td>
                    <td>{{ position.y }}</td>
                    <td>{{ position.r }}</td>
                    <td>{{ formatDate(position.timestamp) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import ApiService from '../api';

export default defineComponent({
    name: 'MyComponent',
    setup() {
        const positions = ref({});
        const filteredPositions = ref([]);
        const selectedPeriod = ref('30');

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
            filteredPositions.value = Object.keys(positions.value)
                .filter(id => positions.value[id].timestamp > Date.now() - period * 60 * 1000)
                .map((id, index) => ({ id, ...positions.value[id] }));
        }

        watch(selectedPeriod, filterPositions);

        return {
            filteredPositions,
            formatDate,
            selectedPeriod,
        };
    },
});
</script> -->

<!-- ค้นหาข้อมูลโดยระบุเวลา -->

<!-- <template>
    <div>
        <label for="period">Select period:</label>
        <select v-model="selectedPeriod">
            <option value="all">All</option>
            <option value="30">Last 30 minutes</option>
            <option value="60">Last 1 hour</option>
            <option value="90">Last 1.5 hours</option>
            <option value="180">Last 3 hours</option>
             <option value="210">Last 4 hours</option>
        </select>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>Radius</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(position, index) in filteredPositions" :key="position.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ position.x }}</td>
                    <td>{{ position.y }}</td>
                    <td>{{ position.r }}</td>
                    <td>{{ formatDate(position.timestamp) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">

import { defineComponent, ref, watch } from 'vue';
import ApiService from '../api';

export default defineComponent({
    name: 'MyComponent',
    setup() {
        const positions = ref({});
        const filteredPositions = ref([]);
        const selectedPeriod = ref('all');

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
                    .map((id, index) => ({ id, ...positions.value[id] }));
            } else {
                filteredPositions.value = Object.keys(positions.value)
                    .filter(id => positions.value[id].timestamp > Date.now() - period * 60 * 1000)
                    .map((id, index) => ({ id, ...positions.value[id] }));
            }
        }


        watch(selectedPeriod, filterPositions);

        return {
            filteredPositions,
            formatDate,
            selectedPeriod,
        };
    },
});
</script> -->


<template>
    <div class="row mb-12">

        <div class="card mb-5 mb-xxl-8">
            <div class="card-body d-flex justify-content-between card-rounded p-0 d-flex "
                style="background-color:#F3F6F9; ">
                <div class="d-flex flex-column flex-lg-row-auto py-10 py-md-14 px-10 px-md-20 pe-lg-0">
                    <h2 class="fw-bold text-dark mb-0">ค้นหาตำแหน่งย้อนหลัง</h2>
                    <div class="fs-3 mb-8"></div>


                    <label for="period"></label>
                    <select class="select2-selection select2-selection--single form-select form-select-lg form-select-solid" style="width: 300px; background-color:#FFFFFF; " v-model="selectedPeriod">
                        
                        <option value="all">ค้นหาทั้งหมด</option>
                        <option value="30"> 30 นาทีที่ผ่านมา</option>
                        <option value="60"> 1 ชั่วโมงที่ผ่านมา</option>
                        <option value="90"> 1 ชั่วโมงครึ่งที่ผ่านมา</option>
                        <option value="180">3 ชั่วโมงที่ผ่านมา</option>
                    </select>
                    <!--end::Form-->
                </div>

                <div class="d-none d-md-flex flex-row-fluid mw-200px ms-auto bgi-no-repeat bgi-position-y-center bgi-position-x-right bgi-size-contain"
                    style="background-image: url('../src/assets/frontend/img/undraw_map_re_60yf.svg');">
                </div>
            </div>
        </div>
    </div>

    <canvas ref="canvasRef"></canvas>
    <!-- <div>
            <label for="period">Select period:</label>
            <select v-model="selectedPeriod">
                <option value="all">All</option>
                <option value="30">Last 30 minutes</option>
                <option value="60">Last 1 hour</option>
                <option value="90">Last 1.5 hours</option>
                <option value="180">Last 3 hours</option>
            </select>

            <canvas ref="canvasRef"></canvas>
        </div> -->
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Chart from 'chart.js/auto';
import ApiService from '../api';

export default defineComponent({
    name: 'MyComponent',
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
                                y: position.y,
                                r: position.r,
                            })),
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor: 'rgb(255, 99, 132)',
                        },
                    ],
                };

                const existingChart = Chart.instances[0];
                if (existingChart) {
                    existingChart.data = chartData;
                    existingChart.update();
                } else {
                    new Chart(ctx, {
                        type: 'bubble',
                        data: chartData,
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
</script>


