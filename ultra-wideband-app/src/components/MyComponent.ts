import firebase from '../firebase/firebase';
import { Component, Vue } from "vue-property-decorator";
import Chart from "chart.js/auto";




@Component
export default class MyComponent extends Vue {
private anchor1Data: number[] = [];
private anchor2Data: number[] = [];
private anchor3Data: number[] = [];
private chart: Chart | null = null;

mounted() {
const db = firebase.database();
const dbAnchor1 = db.ref("esp32/json/Anchor1");
const dbAnchor2 = db.ref("esp32/json/Anchor2");
const dbAnchor3 = db.ref("esp32/json/Anchor3");

dbAnchor1.on("value", (snapshot: firebase.database.DataSnapshot) => {
const data = snapshot.val();
const dataArray: number[] = [];
for (let key in data) {
dataArray.push(data[key]);
}
this.anchor1Data = dataArray;
this.updateChart();
});

dbAnchor2.on("value", (snapshot: firebase.database.DataSnapshot) => {
const data = snapshot.val();
const dataArray: number[] = [];
for (let key in data) {
dataArray.push(data[key]);
}
this.anchor2Data = dataArray;
this.updateChart();
});

dbAnchor3.on("value", (snapshot: firebase.database.DataSnapshot) => {
const data = snapshot.val();
const dataArray: number[] = [];
for (let key in data) {
dataArray.push(data[key]);
}
this.anchor3Data = dataArray;
this.updateChart();
});

this.chart = new Chart(this.$refs.myChart as HTMLCanvasElement, {
type: "line",
data: {
labels: [],
datasets: [
{
label: "Anchor 1",
data: [],
borderColor: "red",
borderWidth: 1,
fill: false,
},
{
label: "Anchor 2",
data: [],
borderColor: "blue",
borderWidth: 1,
fill: false,
},
{
label: "Anchor 3",
data: [],
borderColor: "green",
borderWidth: 1,
fill: false,
},
],
},
options: {
responsive: true,
maintainAspectRatio: false,
},
});
}

private updateChart() {
if (!this.chart)
return;
this.chart.data.labels = [...Array(this.anchor1Data.length).keys()];
this.chart.data.datasets[0].data = this.anchor1Data;
this.chart.data.datasets[1].data = this.anchor2Data;
this.chart.data.datasets[2].data = this.anchor3Data;
this.chart.update();
}
}
