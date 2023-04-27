
<template>
   
    <p>ชื่อ: {{ userName }}</p>
   <p>{{ latestValues }}</p> 
          <p v-if="position">ตำแหน่ง: {{ position }}</p>
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
    const dbAnchor1 = db.ref('Archor1')
    const dbAnchor2 = db.ref('Archor2')
    const dbAnchor3 = db.ref('Archor3')

    const dbPosition = db.ref('esp32/json/Position')

    const dbArea = db.ref('area')
    const dbuser = db.ref('user')


    const userName = ref(null);
    



    let anchor1Data = {}
    let userData = [] // Define userData at the top-level scope
    dbAnchor1.once('value').then((snapshot) => {
      anchor1Data = snapshot.val()

      // Retrieve user data
      dbuser.once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val()
          userData.push(childData)
        })

        // Check if Tag id in Anchor1 matches id_Tag in user data
        if (anchor1Data && userData.length > 0) {
          const anchor1TagId = anchor1Data.ID.toString()
          const userIdTag = userData[0].id_Tag.toString()
          const user = userData.find(data => data.id_Tag.toString() === anchor1TagId)

            if (user) {
        userName.value = user.name
          } else {
            console.log(`No user with id_Tag ${anchor1TagId} found in user data`)
          }

          if (anchor1TagId === userIdTag) {
            console.log(`User with id_Tag ${userIdTag} is associated with Anchor1`)
          } else {
            console.log(`User with id_Tag ${userIdTag} is not associated with Anchor1`)
          }
        }

      }).catch((error) => {
        console.error(error) // Handle any errors that occur
      })

    }).catch((error) => {
      console.error(error) // Handle any errors that occur
    })

    // Local state
    const latestValues = ref([null, null, null])
    const position = ref(null)
    const positions = ref([])

    // Trilateration function

    const room = ref(null)

    const targetPositions = [
      { x: 1, y: 1, label: 'A' },
      { x: 6, y: 1, label: 'B' },
      { x: 3, y: 5, label: 'C' }
    ]

    let approachingTarget = null
    let timeAtTarget = null

    const checkPosition = () => {
      if (!position.value || !userData.length) {
        return
      }

      const userRoomAccess = userData[0].roomAccess
      if (!userRoomAccess) {
        console.log('User does not have access to any room')
        return
      }

      const target = targetPositions.find((t) => t.label === userRoomAccess)
      if (!target) {
        console.log(`User does not have access to room ${userRoomAccess}`)
        return
      }

      const distance = Math.sqrt((position.value[0] - target.x) ** 2 + (position.value[1] - target.y) ** 2)
      if (distance < 2) {
        if (!approachingTarget || approachingTarget !== target.label) {
          approachingTarget = target.label
          timeAtTarget = Date.now()
        } else if (approachingTarget === target.label && Date.now() - timeAtTarget >= 180000) { // 3 minutes in milliseconds
          dbArea.push({
            target: approachingTarget,
            time: new Date().toISOString(),
            position: {
              x: position.value[0],
              y: position.value[1]
            },
            user: {
              name: userData[0].name,
              Tag_id: userData[0].id_Tag
            }
          })
          approachingTarget = null
          timeAtTarget = null
        }
      } else {
        approachingTarget = null
        timeAtTarget = null
      }
    }


    const trilaterate = () => {
      const [r1, r2, r3] = latestValues.value
      if (r1 !== null && r2 !== null && r3 !== null) {
        // กำหหด Anchor_UWB
        const x1 = 1, y1 = 1, x2 = 6, y2 = 1, x3 = 3, y3 = 5
        let A = 2 * x2 - 2 * x1
        let B = 2 * y2 - 2 * y1
        let C = r1 ** 2 - r2 ** 2 - x1 ** 2 + x2 ** 2 - y1 ** 2 + y2 ** 2
        let D = 2 * x3 - 2 * x2
        let E = 2 * y3 - 2 * y2
        let F = r2 ** 2 - r3 ** 2 - x2 ** 2 + x3 ** 2 - y2 ** 2 + y3 ** 2
        let x = (C * E - F * B) / (E * A - B * D)
        let y = (C * D - A * F) / (B * D - A * E)
        position.value = [x, y]

        let timer = setTimeout(() => {
          console.log('No calculation made after 1 minute')
        }, 60000)

        checkPosition()








        // พื้นที่หวงห้าม

        // const distance = Math.sqrt(Math.pow(position.value[0] - x1, 2) + Math.pow(position.value[1] - y1, 2))
        // const now = new Date().getTime()
        // const restrictedAreaRef = db.ref('restricted_area')
        // let threeMinutesInterval
        // let pushedValue = false

        // if (distance < 2) {
        //   threeMinutesInterval = setInterval(() => {
        // if (!pushedValue) {
        //       const now = new Date().getTime()
        //       let duplicateFound = false
        //       restrictedAreaRef.once('value', snapshot => {
        //         snapshot.forEach(childSnapshot => {
        //           const childData = childSnapshot.val()
        //           if (childData.distance === distance) {
        //             duplicateFound = true
        //           }
        //         })

        //         if (!duplicateFound) {
        //           restrictedAreaRef.push({ distance, timestamp: now, ID_Tag:1}, error => {
        //             if (error) {
        //               console.error('Error pushing data:', error)
        //             } else {
        //               console.log('Data pushed successfully')
        //               pushedValue = true

        //               // Start a new timer after push is successful
        //               setTimeout(() => {
        //                 pushedValue = false
        //               }, 1 * 60 * 1000)
        //             }
        //           })
        //         } else {
        //           console.log('Duplicate value found, not pushing to database')
        //         }
        //       })
        //     }
        //   }, 1 * 60 * 1000)

        //     // Clear pushedValue and start collecting new values after the timer ends
        //   setTimeout(() => {
        //     clearInterval(threeMinutesInterval)
        //     pushedValue = false
        //   }, 1 * 60 * 1000)
        // }

        // เอาเฉพาะค่าที่ไม่ซ้ำ


        const newPosition = JSON.stringify(position.value);

        // Check for duplicates in local storage
        let duplicateFound = false;
        const storedPositions = JSON.parse(localStorage.getItem("positions") || "[]");
        for (let i = 0; i < storedPositions.length; i++) {
          if (JSON.stringify(storedPositions[i]) === newPosition) {
            duplicateFound = true;
            break;
          }
        }

        // Run the code that uses userData inside this callback function
        if (!duplicateFound) {
          const idTag = userData.length > 0 ? userData[0].id_Tag : null;
          const name = userData.length > 0 ? userData[0].name : null;
          if (idTag) {
            dbPosition.push({
              x,
              y,
              r: 10,
              timestamp: firebase.database.ServerValue.TIMESTAMP,
              id: idTag,
              name,
            });
            positions.value.push(position.value);

            // Store positions in local storage
            storedPositions.push(position.value);
            localStorage.setItem("positions", JSON.stringify(storedPositions));
          } else {
            console.error("User data is empty or undefined");
          }
        }

        console.log("Positions:", positions.value);

        clearTimeout(timer);

      }
    }
    //     const newPosition = JSON.stringify(position.value)
    
       
    //     // Check for duplicates without saving
    //     let duplicateFound = false
    //     for (let i = 0; i < positions.value.length; i++) {
    //       if (JSON.stringify(positions.value[i]) === newPosition) {
    //         duplicateFound = true
    //         break
    //       }
    //     }
    //     // Run the code that uses userData inside this callback function
    //     if (!duplicateFound) {
    //       const idTag = userData.length > 0 ? userData[0].id_Tag : null;
    //       const name = userData.length > 0 ? userData[0].name : null;
    //       if (idTag) {
    //         dbPosition.push({ x, y, r: 10, timestamp: firebase.database.ServerValue.TIMESTAMP, id: idTag, name })
    //         positions.value.push(position.value)
    //       } else {
    //         console.error("User data is empty or undefined");
    //       }
    //     }

    //     console.log('Positions:', positions.value)
        
    //     clearTimeout(timer)
          
    //   } else {
    //      console.log('Not enough data to calculate position')
    //   }
      
       
    // }


  

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



    return { latestValues, position, room, // expose the `room` variable to the template
      targetPositions,  userName,
      checkPosition }
    
  }

  

});

    // dbPosition.push({ x, y, timestamp: firebase.database.ServerValue.TIMESTAMP })

        // เขตห่วงห้าม
        // const distance = Math.sqrt(Math.pow(position.value[0] - x1, 2) + Math.pow(position.value[1] - y1, 2))

        // // Check if distance is less than 5 and push to Firebase
        // if (distance < 5) {
        //   const restrictedAreaRef = db.ref('restricted_area')
        //   restrictedAreaRef.push({ distance, timestamp: firebase.database.ServerValue.TIMESTAMP })
        // }


         // Check if position is within 1 meter of (x1, y1)
        //  const distance = Math.sqrt(Math.pow(position.value[0] - x1, 2) + Math.pow(position.value[1] - y1, 2))
        // const now = new Date().getTime()
        // const restrictedAreaRef = db.ref('restricted_area')
        // let threeMinutesInterval

        // if (distance < 2) {
        //   threeMinutesInterval = setInterval(() => {
        //     const now = new Date().getTime()
        //     restrictedAreaRef.orderByChild('timestamp').startAt(now - 3 * 60 * 1000).once('value', snapshot => {
        //       const values = snapshot.val()
        //       const tooCloseForThreeMinutes = values && Object.values(values).some(val => {
        //         return val.x === position.value[0] && val.y === position.value[1] && now - val.timestamp >= 3 * 60 * 1000
        //       })

        //       if (!tooCloseForThreeMinutes) {
        //         // Stop the interval and update one value
        //         clearInterval(threeMinutesInterval)
        //         restrictedAreaRef.push({ distance, timestamp: now })
        //       }
        //     })
        //   }, 3 * 60 * 1000)
        // }

</script>



