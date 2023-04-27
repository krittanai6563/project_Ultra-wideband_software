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
 


  
     

    
    <router-view></router-view>

  

   
    
  


</template>




