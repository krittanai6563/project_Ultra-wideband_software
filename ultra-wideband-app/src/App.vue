<!-- <script >
import { reactive } from '@vue/runtime-core'

import { productCollection } from '../src/firebase/firebase'
export default {
  methods: {
    refresh() {
      window.location.reload();
    },
  },
  setup() {
    const state = reactive({
      productData: {},
    });
    setInterval(async () => {
      let productDataSet = await productCollection.once("value");
      state.productData = productDataSet.val();
    }, 500)
    return { state };
  }
}
</script>

<template>

  <div>{{ state.productData }}</div>
</template>

 -->


 <script setup >
 


 </script>

<template>
  <div id="app">


      <div>
      <!-- <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> -->
     </div>

    
    <router-view></router-view>

  

   
    
  

  </div>
</template>


