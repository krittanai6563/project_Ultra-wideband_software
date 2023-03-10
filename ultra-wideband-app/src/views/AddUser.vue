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

                        <div class="card-footer border-0 d-flex flex-stack pt-0 pb-3">
                                <!--begin::Label-->
                                <span class="text-muted fs-6 fw-bold pe-2"></span>
                                <!--end::Label-->

                                <button id="kt_explore_toggle"
                                    class="btn btn-primary btn-sm fw-bolder fs-6 ps-4 mt-6 text-white"
                                    data-bs-dismiss="click" data-bs-trigger="hover">
                                    <span id="kt_explore_toggle_label">ลงทะเบียน</span>
                                </button>


                            </div>

                             <div class="table-responsive" >
                                <table class="table align-middle border-gray-100" id="kt_advance_table_widget_4">
                                    <thead>
                                        <tr
                                            class="text-start text-muted fw-bold text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1">
                                            <td class="ps-0 w-30px py-5">
                                                <div
                                                    class="form-check form-check-custom form-check-sm form-check-solid me-2">

                                                </div>
                                            </td>
                                      
                                            <td class="ps-0 min-w-250px py-5">ชื่อ-นามสกุล</td>
                                            <td class="min-w-100px py-5">อีเมล</td>
                                            <td class="min-w-100px py-5">เบอร์โทร</td>
                                            <td class="min-w-100px py-5">หมายเลข Tag</td>
                                            <td class="min-w-100px pe-0 text-end py-5">จัดการ</td>
                                        </tr>
                                    </thead>
                                    <tbody v-for="message in messages">
                                        <tr >
                                            <td class="ps-0 py-6">
                                                <div
                                                    class="form-check form-check-custom form-check-sm form-check-solid me-2">

                                                </div>
                                            </td>
                                    
                                            <td>
                                                <span class="text-gray-800 fw-bold d-block fs-6">
                                                 {{ message[0] }}
                                                </span>

                                                

                                            </td>
                                            <td>
                                                <span class="text-success fw-bold d-block fs-6">
                                                   {{ message[1] }}
                                                </span>

                                            </td>
                                                <td>
                                                    <span class="label label-lg label-light-primary label-inline"> {{ message[2] }}</span>
                                                </td>
                                            <td>
                                                <span
                                                    class="label label-lg label-light-primary label-inline"> {{ message[3] }}</span>
                                            </td>
                                            <td class="pe-0 text-end">
                                                <!-- <a href="#"
                                                    class="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm mx-3"  @click.prevent ="editMessage(message)">
                                                
                                                    <span class="svg-icon svg-icon-4"><svg width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3"
                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                fill="currentColor"  ></path>
                                                            <path
                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                    </a> -->
                                                <a href="#" class="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm" @click.prevent ="deleteMessage(message)" >
                                                    <!--begin::Svg Icon | path: icons/duotune/general/gen027.svg-->
                                                    <span class="svg-icon svg-icon-4"><svg width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                fill="currentColor"></path>
                                                            <path opacity="0.5"
                                                                d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                fill="currentColor"></path>
                                                            <path opacity="0.5"
                                                                d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon--> </a>
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
             
  
                           <div id="kt_explore" class="explore bg-white" data-kt-drawer="true"
                                data-kt-drawer-name="explore" data-kt-drawer-activate="true" data-kt-drawer-overlay="true"
                                data-kt-drawer-width="{default:'300px', 'lg': '345px'}" data-kt-drawer-direction="end"
                                data-kt-drawer-toggle="#kt_explore_toggle" data-kt-drawer-close="#kt_explore_close">
                                <!--begin::Card-->
                                <div class="card shadow-none w-100">
                                    <!--begin::Header-->
                                    <div class="card-header" id="kt_explore_header">
                                        <h5 class="card-title fw-bold text-gray-600">
                                            ลงทะเบียนผู้ใช้งาน
                                        </h5>
                                        <div class="card-toolbar">
                                            <button type="button" class="btn btn-sm btn-icon explore-btn-dismiss me-n5"
                                                id="kt_explore_close">
                                                <!--begin::Svg Icon | path: icons/duotone/Navigation/Close.svg-->
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                                        height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
                                                            fill="#000000">
                                                            <rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
                                                            <rect fill="#000000" opacity="0.5"
                                                                transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)"
                                                                x="0" y="7" width="16" height="2" rx="1" />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </button>
                                        </div>
                                    </div>
                                    <!--end::Header-->
                                    <!--begin::Body-->
                                    <div class="card-body" id="kt_explore_body">
                                            <form class="form2" id="contact-form" @submit.prevent="onSubmit" >
                                                <div class="mb-12"></div>
                                        
                                                <div class="mb-8" style="width: 361px; max-width: 100%">
                                                    <label for="exampleInputEmail1">ชื่อ - นามสกุล </label>
                                                    <input type="text" class="form-control form-control-solid form-control-lg" v-model="name"/>
                                                </div>
                                                <div class="mb-8" style="width: 361px; max-width: 100%">
                                                    <label for="exampleInputEmail1">อีเมล </label>
                                                    <input type="email" class="form-control form-control-solid form-control-lg" v-model="Email" />
                                                </div>
                                                <div class="mb-8" style="width: 361px; max-width: 100%">
                                                    <label for="exampleInputEmail1">เบอร์โทร</label>
                                                    <input type="tel" class="form-control form-control-solid form-control-lg" v-model="tel" />
                                                </div>
                                                <div class="mb-8" style="width: 361px; max-width: 100%">
                                                    <label for="exampleInputEmail1">หมายเลข Tag</label>
                                                    <input type="tel" class="form-control form-control-solid form-control-lg" v-model="numbertag" />
                                                </div>
                                                <div class="mb-12"></div>
                                       
                                                <!-- <p><input type="submit" name ="submit" value="บันทึก" class="btn btn-primary fw-bold me-2 px-8" /></p> -->
                                               <input type="submit" value="บันทึก" class="btn btn-primary fw-bold me-2 px-8" />
                                             
                                                 
                                           
                                           
                                           
                                            </form>
                              
                                    </div>
                              



                                    <!--end::Body-->

                                </div>
                                <!--end::Card-->
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
      <Menu></Menu>
      <!--end::Mega Menu-->
</template>
<script>

    import Header from "../components/pages/Header.vue";
    import Footer from "../components/pages/Footer.vue";
    import Sidebar from "../components/pages/Sidebar.vue";
    import Search from "../components/pages/Search.vue";
    import Menu from "../components/pages/Menu.vue";



    import firebase from '../firebase/firebase';

// const productDataSet = await User.once("value");
// console.log(productDataSet.val());

const db = firebase.database();
const messageRef = db.ref("user")


export default {
    components: { Header, Footer, Sidebar, Search, Menu },
    name: 'About',

    el: "comment",
    data() {
        return {
    
            messages: [],
            name: '',
            Email: '',
            tel: '',
            numbertag: '',
            editText:null

        }
    },

    methods: {
        onSubmit() {
            messageRef.push({ 0: this.name, 1: this.Email, 2: this.tel, 3: this.numbertag })
            this.name = ''
            this.Email = ''
            this.tel = ''
            this.numbertag = ''
           
             
            
            
           
        } ,
        deleteMessage:function(message) {
            // ลบข้อมูล
            messageRef.child(message.id).remove()
        },

     
    },
    //แสดงข้อมูล
    created() {
        messageRef.on("child_added", snapshot => {
            this.messages.push({...snapshot.val(), id: snapshot.key })
        })
          messageRef.on("child_removed", snapshot => {
              const deleteText = this.messages.find(message=> message.id == snapshot.key)
              const index = this.messages.indexOf(deleteText)
            this.messages.splice(index,1)
        })
        
    }


   

 
    }
   

</script>
