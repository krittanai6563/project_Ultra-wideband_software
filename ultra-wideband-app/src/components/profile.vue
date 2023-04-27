
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

                                <form class="form d-flex flex-center" @submit.prevent="submitForm">
        <div class="card-body mw-800px py-20">
            <!--begin::Form row-->
          
                 

                <div class="d-flex align-items-center">
                           <div class="row mb-8 me-5">
                        <label class="col-lg-3 col-form-label">ตำแหน่งที่ 1 แกน x</label>
                        <div class="col-lg-9">
                            <div class="spinner spinner-sm spinner-primary spinner-right">
                                <input class="form-control form-control-lg form-control-solid" type="text" v-model="position1x">
                            </div>
                        </div>
                    </div>
                          <div class="row mb-8 me-5">
                        <label class="col-lg-3 col-form-label">ตำแหน่งที่ 1 แกน y</label>
                        <div class="col-lg-9">
                            <div class="spinner spinner-sm spinner-primary spinner-right">
                                <input class="form-control form-control-lg form-control-solid" type="text"  v-model="position1y">
                            </div>
                        </div>
                    </div>
                           
                 </div>
        
                 
                    <div class="d-flex align-items-center">
                               <div class="row mb-8 me-5">
                            <label class="col-lg-3 col-form-label">ตำแหน่งที่ 2 แกน x</label>
                            <div class="col-lg-9">
                                <div class="spinner spinner-sm spinner-primary spinner-right">
                                    <input class="form-control form-control-lg form-control-solid" type="text" v-model="position2x">
                                </div>
                            </div>
                        </div>
                              <div class="row mb-8 me-5">
                            <label class="col-lg-3 col-form-label">ตำแหน่งที่ 2 แกน y</label>
                            <div class="col-lg-9">
                                <div class="spinner spinner-sm spinner-primary spinner-right">
                                    <input class="form-control form-control-lg form-control-solid" type="text" v-model="position2y">
                                </div>
                            </div>
                        </div>
                           
                     </div>

                     
                    <div class="d-flex align-items-center">
                               <div class="row mb-8 me-5">
                            <label class="col-lg-3 col-form-label">ตำแหน่งที่ 3 แกน x</label>
                            <div class="col-lg-9">
                                <div class="spinner spinner-sm spinner-primary spinner-right">
                                    <input class="form-control form-control-lg form-control-solid" type="text" v-model="position3x">
                                </div>
                            </div>
                        </div>
                              <div class="row mb-8 me-5">
                            <label class="col-lg-3 col-form-label">ตำแหน่งที่ 3 แกน y</label>
                            <div class="col-lg-9">
                                <div class="spinner spinner-sm spinner-primary spinner-right">
                                    <input class="form-control form-control-lg form-control-solid" type="text" v-model="position3y">
                                </div>
                            </div>
                        </div>
                           
                     </div>

  
            <!--begin::Form row-->

            <div class="separator separator-dashed my-10"></div>
            <div class="row">
                <label class="col-lg-3 col-form-label"></label>
                <div class="col-lg-9">
                    <button type="submit" class="btn btn-primary fw-bold px-6 py-3 me-3">บันทึก</button>
                    <button type="reset" class="btn btn-color-gray-600 btn-active-light-primary fw-bold px-6 py-3">ยกเลิก</button>
                </div>
            </div>
            <!--end::Form row-->
        </div>
    </form>

      <div class="card-body p-12">

    <div class="table-responsive" >
                                    <table class="table align-middle border-gray-100" id="kt_advance_table_widget_4">
                                        <thead>
                                            <tr
                                                class="text-start text-muted fw-bold text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1">
                                       
                                      
                                                <td class="min-w-100px py-5">ตำแหน่งที่ 1 แกน x</td>
                                                <td class="min-w-100px py-5">ตำแหน่งที่ 1 แกน y</td>
                                                <td class="min-w-100px py-5">ตำแหน่งที่ 2 แกน x</td>
                                                <td class="min-w-100px py-5">ตำแหน่งที่ 2 แกน y</td>
                                                <td class="min-w-100px pe-0 text-end py-5">ตำแหน่งที่ 3 แกน x</td>
                                                        <td class="min-w-100px pe-0 text-end py-5">ตำแหน่งที่ 3 แกน y</td>
                                            </tr>
                                        </thead>
                                        <tbody v-for="(formData, index) in formResponses" :key="index">
                                            <tr >
                                                <td class="fw-bold d-block fs-6"  >
                                                {{ formData.position1x }}
                                                </td>
                                    
                                                <td>
                                                    <span class=" fw-bold d-block fs-6">
                                                 {{ formData.position1y }}
                                                    </span>

                                                

                                                </td>
                                                <td>
                                                    <span class="text-success fw-bold d-block fs-6">
                                                     {{ formData.position2x }}
                                                    </span>

                                                </td>
                                                    <td>
                                                        <span class="label label-lg label-light-primary label-inline">{{ formData.position2y }}</span>
                                                    </td>
                                                <td>
                                                    <span
                                                        class="label label-lg label-light-primary label-inline"> {{ formData.position3x }}</span>
                                                </td>
                                                <td class="pe-0 text-end">
                                     
                                     <span
                                                            class="label label-lg label-light-primary label-inline"> {{ formData.position3y }}</span>
                                                   
                                                </td>
                                                <td class="ps-0 w-30px py-5">
                                                    <div
                                                        class="form-check form-check-custom form-check-sm form-check-solid me-2">

                                                    </div>
                                                </td>
                                            </tr>


                                        </tbody>
                                  
                                    </table>
                                </div>
                                </div>

<!-- 
     <div> -->
    <!-- <table>
      <thead>
        <tr>
          <th>Position 1 x axis</th>
          <th>Position 1 y axis</th>
          <th>Position 2 x axis</th>
          <th>Position 2 y axis</th>
          <th>Position 3 x axis</th>
          <th>Position 3 y axis</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(formData, index) in formResponses" :key="index">
          <td>{{ formData.position1x }}</td>
          <td>{{ formData.position1y }}</td>
          <td>{{ formData.position2x }}</td>
          <td>{{ formData.position2y }}</td>
          <td>{{ formData.position3x }}</td>
          <td>{{ formData.position3y }}</td>
        </tr>
      </tbody>
    </table>
  </div> -->

                           
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


<script lang="ts">

import Header from "./pages/Header.vue";
import Footer from "./pages/Footer.vue";
import Sidebar from "./pages/Sidebar.vue";
import Search from "./pages/Search.vue";

import firebase from '../firebase/firebase';


const db = firebase.database().ref('formData')

export default {
components: { Header, Footer, Sidebar, Search },
    name: 'profile',

     data() {
        return {
            position1x: '',
            position1y: '',
            position2x: '',
            position2y: '',
            position3x: '',
            position3y: '',
            formResponses: []
        }
    },
    methods: {
        submitForm() {
            const formData = {
                position1x: this.position1x,
                position1y: this.position1y,
                position2x: this.position2x,
                position2y: this.position2y,
                position3x: this.position3x,
                position3y: this.position3y
            }
            db.push(formData)
            this.position1x = ''
            this.position1y = ''
            this.position2x = ''
            this.position2y = ''
            this.position3x = ''
            this.position3y = ''
        }
    },
     created() {


        // Listen for changes to the 'formData' node in the database and update the formResponses array
        db.on('value', snapshot => {
            this.formResponses = []
            snapshot.forEach(childSnapshot => {
                this.formResponses.push(childSnapshot.val())
            })
        })
    }
}
</script>

<style>

</style>