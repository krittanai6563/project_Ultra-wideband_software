<template>
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
                                <!--end::Title-->
                                <!--begin::Row-->
                                <!-- <div class="row row-cols-2 px-xl-12 sidebar-toolbar">
                                    <div class="col p-3">
                                        <a href="#" class="btn p-5 w-100 text-start btn-active-primary">
                                            <span class="text-white fw-bolder fs-1 d-block pb-1">38</span>
                                            <span class="fw-bold">Pending</span>
                                        </a>
                                    </div>
                                    <div class="col p-3">
                                        <a href="#" class="btn p-5 w-100 text-start btn-active-primary">
                                            <span class="text-white fw-bolder fs-1 d-block pb-1">204</span>
                                            <span class="fw-bold">Completed</span>
                                        </a>
                                    </div>
                                    <div class="col p-3">
                                        <a href="#" class="btn p-5 w-100 text-start btn-active-primary">
                                            <span class="text-white fw-bolder fs-1 d-block pb-1">76</span>
                                            <span class="fw-bold">On Hold</span>
                                        </a>
                                    </div>
                                    <div class="col p-3">
                                        <a href="#" class="btn p-5 w-100 text-start btn-active-primary">
                                            <span class="text-white fw-bolder fs-1 d-block pb-1">9</span>
                                            <span class="fw-bold">In Progress</span>
                                        </a>
                                    </div>
                                </div> -->
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
</template>

<script >
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Sidebar',
};

</script>

<style>

</style>