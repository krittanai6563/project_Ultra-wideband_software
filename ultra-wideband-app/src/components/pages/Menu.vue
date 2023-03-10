<template>
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
                        <div class="btn btn-icon btn-sm btn-light-primary ms-2" data-bs-dismiss="modal">
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
                                    <div class="col-sm-4">
                                        <a href="/index" class="card bg-light-success hoverable min-h-125px shadow-none mb-5">
                                            <div class="card-body d-flex flex-column flex-center">
                                                <h3 class="fs-3 mb-2 text-dark fw-bolder">ระบุตำแหน่ง</h3>
                                                <p class="mb-0 text-gray-600">ระบุตำแหน่งแบบ real time</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-sm-4">
                                        <a href="/location_history" class="card bg-light-danger hoverable min-h-125px shadow-none mb-5">
                                            <div class="card-body d-flex flex-column flex-center text-center">
                                                <h3 class="fs-3 mb-2 text-dark fw-bolder">ประวัติตำแหน่ง</h3>
                                                <p class="mb-0 text-gray-600">ค้นหาตำแหน่งการเดินทางเฉพาะบุคคล</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-sm-4">
                                        <a href="#" class="card bg-light-warning hoverable min-h-125px shadow-none mb-5">
                                            <div class="card-body d-flex flex-column flex-center text-center">
                                                <h3 class="fs-3 mb-2 text-dark text-hover-primary fw-bolder">ค้นหาตำแหน่ง
                                                </h3>
                                                <p class="mb-0 text-gray-600">ค้นหาตำแหน่งที่ใกล้คุณ</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <!--end::Row-->
                                <!--begin::Row-->
                                <div class="row g-5">
                                    <div class="col-sm-8">
                                        <a href="#" class="card bg-light-primary hoverable min-h-125px shadow-none mb-5">
                                            <div class="card-body d-flex flex-column flex-center text-center">
                                                <h3 class="fs-3 mb-2 text-dark fw-bolder">เขตหวงห้าม</h3>
                                                <p class="mb-0 text-gray-600">ตรวจสอบการละเมิดเข้าพื้นที่หวงห้าม
                                                
                                                </p>
                                            </div>
                                        </a>
                                      
                                    </div>
                                    <div class="col-sm-4">
                                      
                                        <a  href="" class="card bg-light-info hoverable shadow-none min-h-125px mb-5">
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
    
    name: 'Menu',
};

</script>

<style>

</style>