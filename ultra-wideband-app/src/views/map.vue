

<template>
    <!--begin::Main-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <!--begin::Header-->
                <Header></Header>
                <!--end::Header-->
                <!--begin::Main-->
                <div class="d-flex flex-column flex-column-fluid">
                    <!--begin::toolbar-->
                    <div class="toolbar" id="kt_toolbar">
                        <div class="container d-flex flex-stack flex-wrap flex-sm-nowrap">
                            <!--begin::Info-->
                            <div class="d-flex flex-column align-items-start justify-content-center flex-wrap me-1">
                                <!--begin::Title-->
                                <h3 class="text-dark fw-bolder my-1">ระบุตำแหน่ง</h3>
                                <!--end::Title-->
                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7">
                                    <li class="breadcrumb-item">
                                        <a href="index.html" class="text-muted text-hover-primary">หน้าแรก</a>
                                    </li>
                                    <li class="breadcrumb-item text-dark">ระบุตำแหน่ง</li>
                                </ul>
                                <!--end::Breadcrumb-->
                            </div>
                        </div>
                    </div>
                    <!--end::toolbar-->
                    <!--begin::Content-->
                    <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
                        <!--begin::Container-->
                        <div class="container">
                            <!--begin::Pricing-->
                            <div class="card">
                                <div class="card-body p-12">
<map1></map1>
     {{ latestValues }}
              <p v-if="position">position: {{ position }}</p>
            <p v-else>Waiting for location data...</p>
               <!-- <p>Distance to x1y1: {{ distanceToX1Y1 }} units</p> -->



                <div>
        <label for="zone">Select zone:</label>
        <select id="zone" v-model="selectedZone">
          <option value="A">Zone A</option>
          <option value="B">Zone B</option>
          <option value="C">Zone C</option>
        </select>
        <p>Distance to {{ selectedZone }}: {{ distanceToSelectedZone }}</p>
      </div>


                                </div>
                            </div>
                            <!--end::Pricing-->
                        </div>
                        <!--end::Container-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Main-->
                <!--begin::Footer-->
                <Footer></Footer>
                <!--end::Footer-->
            </div>
            <!--end::Wrapper-->
            <!--begin::Sidebar-->
            <Sidebar></Sidebar>
            <!--end::Sidebar-->
        </div>
        <!--end::Page-->
    </div>
    <!--end::Root-->
    <!--begin::Header Search-->
    <Search></Search>
    <!--end::Header Search-->
    <!--begin::Mega Menu-->
  
    <!--end::Mega Menu-->
</template>





<script  >

import { defineComponent, ref, onMounted, computed  } from 'vue';
import firebase from '../firebase/firebase';

import Header from "../../src/components/pages/Header.vue";
import Footer from "../../src/components/pages/Footer.vue";
import Sidebar from "../../src/components/pages/Sidebar.vue";
import Search from "../../src/components/pages/Search.vue";

import map1 from "../components/Chart_map.vue"











export default defineComponent({
    components: { Header, Footer, Sidebar, Search , map1 },
    // eslint-disable-next-line vue/multi-word-component-names
    name: "map",

      props: {
        distanceToX1Y1: Number,
        position: Array,
    },
    data() {
        return {
            selectedZone: null,
            x1: 1,
            y1: 1,
            x2: 5,
            y2: 1,
            x3: 3,
            y3: 5,
        };
    },
    setup() {
        // Firebase setup
        const db = firebase.database()
        const dbAnchor1 = db.ref('Archor1')
        const dbAnchor2 = db.ref('Archor2')
        const dbAnchor3 = db.ref('Archor3')
        const dbPosition = db.ref('map')
        // Local state
        const latestValues = ref([null, null, null])
        const position = ref(null)
        const positions = ref([])

        


        // Trilateration function
        const trilaterate = () => {
            const [r1, r2, r3] = latestValues.value
            if (r1 !== null && r2 !== null && r3 !== null) {
                // กำหหด Anchor_UWB
                const x1 = 1, y1 = 1, x2 = 5, y2 = 1, x3 = 3, y3 = 5
                let A = 2 * x2 - 2 * x1
                let B = 2 * y2 - 2 * y1
                let C = r1 ** 2 - r2 ** 2 - x1 ** 2 + x2 ** 2 - y1 ** 2 + y2 ** 2
                let D = 2 * x3 - 2 * x2
                let E = 2 * y3 - 2 * y2
                let F = r2 ** 2 - r3 ** 2 - x2 ** 2 + x3 ** 2 - y2 ** 2 + y3 ** 2
                let x = (C * E - F * B) / (E * A - B * D)
                let y = (C * D - A * F) / (B * D - A * E)
                position.value = [x, y]


                // dbPosition.push({ x, y, timestamp: firebase.database.ServerValue.TIMESTAMP })
                // เอาเฉพาะค่าที่ไม่ซ้ำ
                const newPosition = JSON.stringify(position.value)
                // Check for duplicates without saving
                let duplicateFound = false
                for (let i = 0; i < positions.value.length; i++) {
                    if (JSON.stringify(positions.value[i]) === newPosition) {
                        duplicateFound = true
                        break
                    }
                }
                if (!duplicateFound) {
                    dbPosition.push({ x, y, r: 10, timestamp: firebase.database.ServerValue.TIMESTAMP  })
                    positions.value.push(position.value)
                }
                console.log('Positions:', positions.value)
            }
        };
          // Calculate distance function
        const calculateDistance = (x1, y1, x2, y2) => {
            return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        };


        // Fetch data from Firebase every 5 seconds
        const fetchLatestValues = () => {
            dbAnchor1.limitToLast(1).once('value', snapshot => {
                const value = snapshot.val()
                latestValues.value[0] = value ? Object.values(value)[0] : null
            })
            dbAnchor2.limitToLast(1).once('value', snapshot => {
                const value = snapshot.val()
                latestValues.value[1] = value ? Object.values(value)[0] : null
            })
            dbAnchor3.limitToLast(1).once('value', snapshot => {
                const value = snapshot.val()
                latestValues.value[2] = value ? Object.values(value)[0] : null
            })
            trilaterate()
        };
          // Computed property for distance to x1y1
        const distanceToX1Y1 = computed(() => {
            if (position.value) {
                const x1 = 0;
                const y1 = 1;
                const px2 = position.value[0];
                const py2 = position.value[1];
                return calculateDistance(x1, y1, px2, py2);
            } else {
                return null;
            }
        });
        onMounted(() => {
            fetchLatestValues()
            setInterval(fetchLatestValues, 500)
        })
        return { latestValues, position , distanceToX1Y1 }
    },

     computed: {
        distanceToSelectedZone() {
            let x, y;
            switch (this.selectedZone) {
                case "A":
                    x = this.x1;
                    y = this.y1;
                    break;
                case "B":
                    x = this.x2;
                    y = this.y2;
                    break;
                case "C":
                    x = this.x3;
                    y = this.y3;
                    break;
                default:
                    return null;
            }
            if (this.position) {
                const px2 = this.position[0];
                const py2 = this.position[1];
                return this.calculateDistance(x, y, px2, py2);
            } else {
                return null;
            }
        },
    },
    methods: {
        calculateDistance(x1, y1, x2, y2) {
            return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        },
    },

});


    



</script>


