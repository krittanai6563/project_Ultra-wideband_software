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
                                    <h3 class="text-dark fw-bolder my-1">พื้นที่เขตหวงห้าม</h3>
                                    <!--end::Title-->
                                    <!--begin::Breadcrumb-->
                                    <ul class="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7">
                                        <li class="breadcrumb-item">
                                            <a href="index.html" class="text-muted text-hover-primary">หน้าแรก</a>
                                        </li>
                                        <li class="breadcrumb-item text-dark">การละเมิดเข้าพื้นที่หวงห้าม</li>
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
                  <div class="card-body d-flex justify-content-between card-rounded p-0 d-flex "
                      style="background-color:#F3F6F9; ">
                      <div class="d-flex flex-column flex-lg-row-auto py-10 py-md-14 px-10 px-md-20 pe-lg-0">
                          <h2 class="fw-bold text-dark mb-0">ค้นหาบุคคลมีการละเมิดเข้าพื้นที่หวงห้าม</h2>
                          <div class="fs-3 mb-8"></div>


                          <label for="period"></label>
                             <select class="select2-selection select2-selection--single form-select form-select-lg form-select-solid" style="width: 300px; background-color:#FFFFFF; " id="zone-select" v-model="selectedZone">
         <option value="">All zones</option>
                              <option value="A">Zone A</option>
            <option value="B">Zone B</option>
            <option value="C">Zone C</option>
          </select>
                      </div>

                      <div class="d-none d-md-flex flex-row-fluid mw-200px ms-auto bgi-no-repeat bgi-position-y-center bgi-position-x-right bgi-size-contain"
                          style="background-image: url('../src/assets/frontend/img/undraw_map_re_60yf.svg');">
                      </div>
                  </div>
              </div>
          </div>
      <div>
   
 
      </div>
     <div class="card-body py-0">
              <!--begin::Table-->
              <div class="table-responsive">
                  <table class="table align-middle border-gray-100" id="kt_advance_table_widget_4">
                      <thead>
                          <tr class="text-start text-muted fw-bold text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1">
                    
                              <td class="ps-0 min-w-50px py-5" style="text-align: center;">ลำดับ</td>
                              <td class="min-w-200px py-5" style="text-align: center;">ชื่อ-นามสกุล</td>
                              <td class="min-w-100px py-5" style="text-align: center;">
                                  <span class="min-w-100px py-5" style="text-align: center;">หมายเลขแท็ก</span>

                    </td>
                              <td class="min-w-100px py-5 text-success" style="text-align: center;">เวลา</td>
                              <td class="min-w-100px pe-0 text-end py-5" style="text-align: center;">ลบข้อมูล</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr  v-for="(row, index) in filteredTableData" :key="row.id">
                         
                              <td style="text-align: center;">
                                  <a  >{{ index + 1 }}</a>
                              </td>
                              <td style="text-align: center;">
                                <a >{{ row.user.name }}</a>
                             
                              </td>
                                <td style="text-align: center;">
                                    <span class="label label-lg label-light-primary label-inline">{{ row.user.Tag_id }}</span>
                                </td>
                              <td style="text-align: center;">
                                  <span class="text-success fw-bold d-block fs-6">
                                    {{ row.time }}
                                  </span>
                              
                              </td>
                        
                              <td class="pe-0 text-end">
                      
                                  <a @click="deleteRow(row)" class="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm">
                                      <!--begin::Svg Icon | path: icons/duotune/general/gen027.svg-->
      <span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor"></path>
      <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor"></path>
      <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor"></path>
      </svg>
      </span>
      <!--end::Svg Icon-->                            </a>
                              </td>
                          </tr>
                       
                      </tbody>
                  </table>
              </div>
              <!--end::Table-->
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
              <div id="kt_sidebar" class="sidebar bg-warning" data-kt-drawer="true" data-kt-drawer-name="sidebar"
        data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'200px', '350px': '300px'}" data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_sidebar_toggler">


      
            
    
        <!--begin::Sidebar Content-->
        <div class="d-flex flex-column sidebar-body">
        
            <!--begin::Sidebar Content-->
            <div id="kt_sidebar_content" class="py-10 px-2 px-lg-8">
                <div class="hover-scroll-y me-lg-n5 pe-lg-4" data-kt-scroll="true" data-kt-scroll-height="auto"
                    data-kt-scroll-offset="0px" data-kt-scroll-wrappers="#kt_sidebar_content">
                    <!--begin::Card-->
                    <div class="card bg-warning">

                    
                        <!--begin::Body-->
                        <div class="card-body px-0">
                            <div class="pt-0">
                                <!--begin::Chart-->
                                <div class="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center"
                                    style="background-image:url('/src/assets/frontend/media/svg/illustrations/bg-2.svg')">
                                    <div class="position-absolute mb-7">
                                        <div
                                            class="symbol symbol-circle symbol-100px overflow-hidden d-flex flex-center z-index-1">
                                            <span class="symbol-label bg-white align-items-end">
                                                <img alt="Logo" src="/src/assets/frontend/media/svg/avatars/016-boy-7.svg"
                                                    class="mh-75px" />
                                            </span>
                                        </div>
                                    </div>
                                    <div id="kt_user_chart" style="height: 200px"></div>
                                </div>
                                <!--end::Chart-->
                                <!--begin::Items-->
                                <div class="pt-4">
                                    <!--begin::Title-->
                                    <div class="text-center pb-12">
                                        <!--begin::Username-->
                                        <h3 class="fw-bolder text-white fs-2 pb-4">Mr. Krittanai</h3>
                                        <!--end::Username-->
                                        <!--end::Action-->
                                        <span
                                            class="fw-bolder fs-6 text-white px-4 py-2 rounded bg-white bg-opacity-10">Admin</span>
                                        <!--begin::Action-->
                                    </div>
                                 
                                    <!--end::Row-->
                                </div>
                                <!--end::Items-->
                            </div>
                        </div>
                        <!--end::Body-->
                    </div>
                    <!--end::Card-->
                    <!--begin::Card-->
                
                </div>
            </div>
            <!--end::Sidebar Content-->
        </div>
        <!--end::Sidebar Content-->
    </div>
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

<script>

import Header from "../components/pages/Header.vue";
import Footer from "../components/pages/Footer.vue";

import Search from "../components/pages/Search.vue";








export default {
components: { Header, Footer, Search},
    name: 'restricted_area',
    data() {
        return {
            tableData: [],
            selectedZone: ''
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const response = await fetch('https://puwb-346e7-default-rtdb.firebaseio.com/area.json');
            const data = await response.json();

            const dataArray = [];
            for (const key in data) {
                const timestamp = data[key].time;
                const date = new Date(timestamp);
                const formattedDate = date.toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }).replace(/\//g, '-');

                const tableRow = {
                    id: key,
                    x: data[key].position.x,
                    y: data[key].position.y,
                    target: data[key].target,
                    time: formattedDate,
                    user: data[key].user
                };
                dataArray.push(tableRow);
            }

            this.tableData = dataArray;
        },

        async deleteRow(row) {
            // Show a success message using the Bootstrap alert component
            const alert = document.createElement('div');
            alert.className = 'alert alert-info';
            alert.style.width = '300px';
            alert.style.top = '10px';
            alert.style.position = 'absolute';
            alert.style.fontFamily = 'IBM Plex Sans Thai';
            alert.style.fontFamily = 'Krub';
            alert.style.fontFamily = 'Prompt';
            alert.style.left = '20px';
            alert.style.zIndex = '2';
            alert.style.textAlign = 'right';

            alert.innerHTML = '<span>การลบข้อมูลของท่านสำเร็จ</span>';
            document.body.appendChild(alert);

            // Set a timeout to remove the alert after 5 seconds
            setTimeout(() => {
                document.body.removeChild(alert);
            }, 5000);

            // Delete the row from the database
            const response = await fetch(`https://projectuwb-27b59-default-rtdb.firebaseio.com/area/${row.id}.json`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // Delete the row from the tableData array
                const index = this.tableData.indexOf(row);
                if (index > -1) {
                    this.tableData.splice(index, 1);
                }
                  // Scroll to the end of the page
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                // Show an error message if the deletion request fails using a toast
                this.$bvToast.toast(`Failed to delete row with ID ${row.id}.`, {
                    title: 'Error',
                    variant: 'danger',
                    autoHideDelay: 5000
                });
            }
        }
    },

    computed: {
        filteredTableData() {
            if (!this.selectedZone) {
                return this.tableData;
            }
            const filteredData = this.tableData.filter(row => row.target === this.selectedZone);
            console.log('Filtered Table Data:', filteredData);
            return filteredData;
        }
    },
    watch: {
        selectedZone: function (newZone) {
            console.log('Selected Zone:', newZone);
        }
    }
}
</script>

<style>

</style>