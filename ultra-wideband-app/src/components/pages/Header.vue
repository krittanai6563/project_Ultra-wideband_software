<template>



<div id="kt_header" class="header" data-kt-sticky="true" data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}">
    <!--begin::Container-->
    <div class="container d-flex align-items-stretch justify-content-between">
        <!--begin::Left-->
        <div class="d-flex align-items-center">
            <!--begin::Mega Menu Toggler-->
            <button class="btn btn-icon btn-accent me-2 me-lg-6" id="kt_mega_menu_toggle" data-bs-toggle="modal"
                data-bs-target="#kt_mega_menu_modal" @click="showModal = true">
                <!--begin::Svg Icon | path: icons/duotone/Text/Article.svg-->
                <span class="svg-icon svg-icon-1">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                        height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <rect fill="#000000" x="4" y="5" width="16" height="3" rx="1.5" />
                            <path
                                d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 C14,12.3284271 13.3284271,13 12.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z"
                                fill="#000000" opacity="0.3" />
                        </g>
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </button>
            <!--end::Mega Menu Toggler-->
            <!--begin::Logo-->
            <a href="#">
                <img alt="Logo" src="/src/assets/frontend/media/logos/Logo.png" class="h-30px" />
            </a>
            <!--end::Logo-->
        </div>
        <!--end::Left-->
        <!--begin::Right-->
        <div class="d-flex align-items-center">
 
            <!--end::Search-->
         
            <!--begin::User-->
            <div class="ms-1 ms-lg-6">
                <!--begin::Toggle-->
                <div class="btn btn-icon btn-sm btn-active-bg-accent" data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end" id="kt_header_user_menu_toggle">
                    <!--begin::Svg Icon | path: icons/duotone/General/User.svg-->
                    <span class="svg-icon svg-icon-1 svg-icon-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                            height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <polygon points="0 0 24 0 24 24 0 24" />
                                <path
                                    d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                    fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                <path
                                    d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                    fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                </div>
                <!--begin::Menu-->
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-warning fw-bold w-300px"
                    data-kt-menu="true">
                    
                    <!--begin::Row-->
                    <div class="row row-cols-2 g-0">
                        <a @click="navigateTo('/profile')"
                            class="border-bottom border-end text-center py-10 btn btn-active-color-warning rounded-0">
                            <!--begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks.svg-->
                            <span class="svg-icon svg-icon-3x me-n1">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24" />
                                        <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                                        <path
                                            d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                            fill="#000000" opacity="0.3" />
                                    </g>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                            <span class="fw-bolder fs-6 d-block pt-3">ตั้งค่าตำแหน่ง</span>
                        </a>
                    
                       
                        <a @click="navigateTo('/')" class="col text-center py-10 btn btn-active-color-warning rounded-0">
                            <!--begin::Svg Icon | path: icons/duotone/Navigation/Sign-out.svg-->
                            <span class="svg-icon svg-icon-3x me-n1">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M14.0069431,7.00607258 C13.4546584,7.00607258 13.0069431,6.55855153 13.0069431,6.00650634 C13.0069431,5.45446114 13.4546584,5.00694009 14.0069431,5.00694009 L15.0069431,5.00694009 C17.2160821,5.00694009 19.0069431,6.7970243 19.0069431,9.00520507 L19.0069431,15.001735 C19.0069431,17.2099158 17.2160821,19 15.0069431,19 L3.00694311,19 C0.797804106,19 -0.993056895,17.2099158 -0.993056895,15.001735 L-0.993056895,8.99826498 C-0.993056895,6.7900842 0.797804106,5 3.00694311,5 L4.00694793,5 C4.55923268,5 5.00694793,5.44752105 5.00694793,5.99956624 C5.00694793,6.55161144 4.55923268,6.99913249 4.00694793,6.99913249 L3.00694311,6.99913249 C1.90237361,6.99913249 1.00694311,7.89417459 1.00694311,8.99826498 L1.00694311,15.001735 C1.00694311,16.1058254 1.90237361,17.0008675 3.00694311,17.0008675 L15.0069431,17.0008675 C16.1115126,17.0008675 17.0069431,16.1058254 17.0069431,15.001735 L17.0069431,9.00520507 C17.0069431,7.90111468 16.1115126,7.00607258 15.0069431,7.00607258 L14.0069431,7.00607258 Z"
                                            fill="#000000" fill-rule="nonzero" opacity="0.5"
                                            transform="translate(9.006943, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-9.006943, -12.000000)" />
                                        <rect fill="#000000" opacity="0.5"
                                            transform="translate(14.000000, 12.000000) rotate(-270.000000) translate(-14.000000, -12.000000)"
                                            x="13" y="6" width="2" height="12" rx="1" />
                                        <path
                                            d="M21.7928932,9.79289322 C22.1834175,9.40236893 22.8165825,9.40236893 23.2071068,9.79289322 C23.5976311,10.1834175 23.5976311,10.8165825 23.2071068,11.2071068 L20.2071068,14.2071068 C19.8165825,14.5976311 19.1834175,14.5976311 18.7928932,14.2071068 L15.7928932,11.2071068 C15.4023689,10.8165825 15.4023689,10.1834175 15.7928932,9.79289322 C16.1834175,9.40236893 16.8165825,9.40236893 17.2071068,9.79289322 L19.5,12.0857864 L21.7928932,9.79289322 Z"
                                            fill="#000000" fill-rule="nonzero"
                                            transform="translate(19.500000, 12.000000) rotate(-90.000000) translate(-19.500000, -12.000000)" />
                                    </g>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                            <span class="fw-bolder fs-6 d-block pt-3">ออกจากระบบ</span>
                        </a>
                    </div>
                    <!--end::Row-->
                </div>
                <!--end::Menu-->
            </div>
            <!--end::User-->
     
            <!--begin::Aside Toggler-->
            <!--end::Aside Toggler-->
            <!--begin::Sidebar Toggler-->
            <button class="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6" id="kt_sidebar_toggler">
                <!--begin::Svg Icon | path: icons/duotone/Text/Menu.svg-->
                <span class="svg-icon svg-icon-1 svg-icon-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                        height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <rect fill="#000000" x="4" y="5" width="16" height="3" rx="1.5" />
                            <path
                                d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z"
                                fill="#000000" opacity="0.3" />
                        </g>
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </button>
            <!--end::Sidebar Toggler-->
        </div>
        <!--end::Right-->
    </div>
    <!--end::Container-->
</div>





       <div class="modal bg-white fade" id="kt_mega_menu_modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content shadow-none">
                    <div class="container">
                        <div class="modal-header d-flex flex-stack border-0">
                            <div class="d-flex align-items-center">
                                <!--begin::Logo-->
                                <a href="index.html">
                                    <img alt="Logo" src="src/assets/frontend/media/logos/Logo.png" class="h-30px" />
                                </a>
                                <!--end::Logo-->
                            </div>
                            <!--begin::Close-->
                            <div class="btn btn-icon btn-sm btn-light-primary ms-2" data-bs-dismiss="modal" @click="showModal = false">
                                <!--begin::Svg Icon | path: icons/duotone/Navigation/Close.svg-->
                                <span class="svg-icon svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
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
                            </div>
                            <!--end::Close-->
                        </div>
                        <div class="modal-body">
                            <!--begin::Row-->
                            <div class="row py-10 g-5">
                                <!--begin::Column-->
                                <div class="col-lg-12">

                          

                               
                         
                                    <!--begin::Row-->
                                    <div class="row g-12">
                                        <div class="col-sm-8">
                                            <a @click="navigateTo('/Home')" class="card bg-light-success hoverable min-h-125px shadow-none mb-5">
                                                <div class="card-body d-flex flex-column flex-center">
                                                    <h3 class="fs-3 mb-2 text-dark fw-bolder">ระบุตำแหน่ง</h3>
                                                    <p class="mb-0 text-gray-600">ระบุตำแหน่งแบบ real time</p>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- <div class="col-sm-4">
                                            <a @click="navigateTo('/Find_Location')" class="card bg-light-danger hoverable min-h-125px shadow-none mb-5">
                                                <div class="card-body d-flex flex-column flex-center text-center">
                                                    <h3 class="fs-3 mb-2 text-dark fw-bolder">ประวัติตำแหน่ง</h3>
                                                    <p class="mb-0 text-gray-600">ค้นหาตำแหน่งการเดินทางเฉพาะบุคคล</p>
                                                </div>
                                            </a>
                                        </div> -->
                                        <div class="col-sm-4">
                                            <a @click="navigateTo('/MyComponent')" class="card bg-light-warning hoverable min-h-125px shadow-none mb-5">
                                                <div class="card-body d-flex flex-column flex-center text-center">
                                                    <h3 class="fs-3 mb-2 text-dark text-hover-primary fw-bolder">ประวัติตำแหน่ง
                                                    </h3>
                                                    <p class="mb-0 text-gray-600">ค้นหาตำแหน่งการเดินทางเฉพาะบุคคล</p>
                                                </div>
                                            </a>
                                        </div>

                                        
                                    </div>
                                    <!--end::Row-->
                                    <!--begin::Row-->
                                    <div class="row g-5">
                                        <div class="col-sm-4">
                                            <a @click="navigateTo('/restricted_area')" class="card bg-light-primary hoverable min-h-125px shadow-none mb-5">
                                                <div class="card-body d-flex flex-column flex-center text-center">
                                                    <h3 class="fs-3 mb-2 text-dark fw-bolder">เขตหวงห้าม</h3>
                                                    <p class="mb-0 text-gray-600">ตรวจสอบการละเมิดเข้าพื้นที่หวงห้าม
                                                
                                                    </p>
                                                </div>
                                            </a>
                                      
                                        </div>
                                        <div class="col-sm-4">
                                      
                                                <a  @click="navigateTo('/floorplan')" class="card bg-light-info hoverable shadow-none min-h-125px mb-5">
                                                    <div class="card-body d-flex flex-column flex-center text-center">
                                                        <h3 class="fs-3 mb-2 text-dark fw-bolder">สร้างแผนที่</h3>
                                                        <p class="mb-0 text-gray-600">สร้างและออกแบบแผนที่ภายในห้อง</p>
                                                    </div>
                                                </a>
                                     
                                            </div>
                                        <div class="col-sm-4">
                                      
                                            <a  @click="navigateTo('/about')" class="card bg-light-info hoverable shadow-none min-h-125px mb-5">
                                                <div class="card-body d-flex flex-column flex-center text-center">
                                                    <h3 class="fs-3 mb-2 text-dark fw-bolder">ลงทะเบียน</h3>
                                                    <p class="mb-0 text-gray-600">ลงทะเบียนผู้ใช้งาน</p>
                                                </div>
                                            </a>
                                     
                                        </div>
                                             
                                    </div>
                                    <!--end::Row-->
                                </div>
                                <!--end::Column-->
                            </div>
                            <!--end::Row-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>


export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    methods: {
        navigateTo(path) {
            this.$router.push(path);
            setTimeout(() => {
                this.$router.go(0);
            }, 50);
        },
    },
  

};
</script>

<style>
</style>