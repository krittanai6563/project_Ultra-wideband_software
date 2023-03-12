

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
                                <h3 class="text-dark fw-bolder my-1">ค้นหาตำแหน่ง</h3>
                                <!--end::Title-->
                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7">
                                    <li class="breadcrumb-item">
                                        <a href="index.html" class="text-muted text-hover-primary">หน้าแรก</a>
                                    </li>
                                    <li class="breadcrumb-item text-dark">ค้นหาตำแหน่ง</li>
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

                                     <div class="row mb-12">

                                        <div class="card mb-5 mb-xxl-8">
                                             <div class="card-body d-flex justify-content-between card-rounded p-0 d-flex " style="background-color:#F3F6F9; ">
                                                    <div class="d-flex flex-column flex-lg-row-auto py-10 py-md-14 px-10 px-md-20 pe-lg-0">
                                                     <h2 class="fw-bold text-dark mb-0">ค้นหาตำแหน่ง</h2>
                                                     <div class="fs-3 mb-8"></div>
                                           
                                     
                                            
                                                      <form id="searchthis" action="/search" style="display:inline;" method="get">
                                                       <input id="namanyay-search-box" name="q" size="30" type="text" placeholder="Search"/>
                                                       <input id="namanyay-search-btn" value="ค้นหา" type="submit"/>
                                                      </form>
                                                <!--end::Form-->
                                                    </div>
                                
                                                      <div class="d-none d-md-flex flex-row-fluid mw-200px ms-auto bgi-no-repeat bgi-position-y-center bgi-position-x-right bgi-size-contain" style="background-image: url('../src/assets/frontend/img/undraw_map_re_60yf.svg');">
                                                        </div>
                                                    </div>
                                             </div>
                                        </div>




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
import Header from "../components/pages/Header.vue";
import Footer from "../components/pages/Footer.vue";
import Sidebar from "../components/pages/Sidebar.vue";
import Search from "../components/pages/Search.vue";

import test from "./Find_Location_code.vue"







// import { reactive } from '@vue/runtime-core'
// import { dbAnchor1 } from '../firebase/firebase'




export default {
    components: { Header, Footer, Sidebar, Search , test},
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Find_Location",

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


