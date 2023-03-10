

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

                     
                  
                     <Chart></Chart>
                      

                     <Tr></Tr>

                     <test></test>
     
    
               

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
  <Menu></Menu>
  <!--end::Mega Menu-->
</template>





<script lang="ts" >
import Header from "./pages/Header.vue";
import Footer from "./pages/Footer.vue";
import Sidebar from "./pages/Sidebar.vue";
import Search from "./pages/Search.vue";
import Menu from "./pages/Menu.vue";

import Chart from "./Chart.vue"
import Tr from './Trilateration.vue'




// import { reactive } from '@vue/runtime-core'
// import { dbAnchor1 } from '../firebase/firebase'




export default {
  components: { Header, Footer, Sidebar, Search, Menu, Chart ,Tr},
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Master",

  //  methods: {
  //   refresh() {
  //     window.location.reload();
  //   },
  // },
  // setup() {
  //   const state = reactive({
  //     productData: {},
  //   });
  //   setInterval(async () => {
  //     let productDataSet = await dbAnchor1.once("value");
  //     state.productData = productDataSet.val();
  //   }, 500)
  //   return { state };
  // }
}

</script>


