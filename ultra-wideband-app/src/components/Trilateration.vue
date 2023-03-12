
<template>
    {{ latestValues }}
          <p v-if="position">Phone position: {{ position }}</p>
        <p v-else>Waiting for location data...</p>

         
</template>

<script>
import 'firebase/database'
import { defineComponent, ref, onMounted } from 'vue';
import firebase from '../firebase/firebase';

export default defineComponent({
  setup() {
    // Firebase setup
    const db = firebase.database()
    const dbAnchor1 = db.ref('esp32/json/Anchor1')
    const dbAnchor2 = db.ref('esp32/json/Anchor2')
    const dbAnchor3 = db.ref('esp32/json/Anchor3')

    const dbPosition = db.ref('esp32/json/Position')

    // Local state
    const latestValues = ref([null, null, null])
    const position = ref(null)
    const positions = ref([])

    // Trilateration function
    const trilaterate = () => {
      const [r1, r2, r3] = latestValues.value
      if (r1 !== null && r2 !== null && r3 !== null) {
        // กำหหด Anchor_UWB
        const x1 = 0, y1 = 1, x2 = 10, y2 = 0, x3 = 0, y3 = 10
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
          dbPosition.push({ x, y, r:50 ,timestamp: firebase.database.ServerValue.TIMESTAMP })
          positions.value.push(position.value)
        }

        console.log('Positions:', positions.value)
       }
    }
  
  

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
    }

    onMounted(() => {

      fetchLatestValues()
      setInterval(fetchLatestValues, 500)
    })



    return { latestValues, position }
  }

  

});


</script>



