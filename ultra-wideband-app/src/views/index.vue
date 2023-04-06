<template>
  <div>
    <button class="btn btn-active-accent fw-bold" @click="zoomIn">
      Zoom In
    </button>
    <button class="btn btn-active-accent fw-bold ms-3" @click="zoomOut">
      Zoom Out
    </button>
    <button class="btn btn-active-accent fw-bold ms-3" @click="undo">
      Undo
    </button>
    <button class="btn btn-active-accent fw-bold ms-3" @click="redo">
      Redo
    </button>

    <button
      class="btn btn-active-accent fw-bold ms-3"
      @click="isEditing = true"
    >
      Edit Room Size
    </button>

    <canvas ref="canvas" width="850" height="600"></canvas>
  </div>

  <div
    id="kt_sidebar"
    class="sidebar bg-warning"
    data-kt-drawer="true"
    data-kt-drawer-name="sidebar"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '350px': '300px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_sidebar_toggler"
  >
    <!--begin::Sidebar Content-->
    <div class="d-flex flex-column sidebar-body">
      <div id="kt_sidebar_content" class="py-10 px-7 px-lg-12">
        <div
          class="hover-scroll-y me-lg-n7 pe-lg-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-offset="0px"
          data-kt-scroll-wrappers="#kt_sidebar_content"
          data-select2-id="select2-data-113-koyy"
          style="height: 400px"
        >
          <div class="animate__animated animate__slideInRight">
            <!--begin::Product Info-->
            <div class="mt-5" data-select2-id="select2-data-111-xnc2">
              <!-- <div v-if="isEditing">
        <label for="editedRoomWidth">Width:</label>
        <input type="number" id="editedRoomWidth" v-model="editedRoomWidth">
        <br>
        <label for="editedRoomHeight">Height:</label>
        <input type="number" id="editedRoomHeight" v-model="editedRoomHeight">
        <br>
        <button @click="drawRoom()">Update Room Size</button>
      </div> -->

              <div class="mb-8" v-if="isEditing">
                <div class="mb-3 fw-bold fs-6">กำหนดขนาดห้อง</div>

                <label class="fw-bold" for="editedRoomWidth">ความกว้าง:</label>
                <input
                  class="form-control form-control-solid form-control-lg"
                  type="number"
                  id="editedRoomWidth"
                  v-model="editedRoomWidth"
                  @keyup.enter="drawRoo()"
                />
                <div class="mb-2"></div>
                <label class="fw-bold" for="editedRoomHeight">ความยาว:</label>
                <input
                  class="form-control form-control-solid form-control-lg"
                  type="number"
                  id="editedRoomHeight"
                  v-model="editedRoomHeight"
                  @keyup.enter="drawRoom()()"
                />
                <div class="mb-3"></div>
              </div>

              <div class="mb-3 fw-bold fs-6"></div>
              <!--begin::Input-->

              <div class="mb-1">
                   <div class="text-dark fw-bold fs-6 mb-5">ขนาดห้อง </div>
                <button
                  class="form-control form-control-solid form-control-lg"
                  @click="setRoomSize('small')"
                >
                  Small
                </button>
              </div>
              <div class="mb-1">
                <button
                  class="form-control form-control-solid form-control-lg"
                  @click="setRoomSize('medium')"
                >
                  Medium
                </button>
              </div>
              <div class="mb-8">
                <button
                  class="form-control form-control-solid form-control-lg"
                  @click="setRoomSize('large')"
                >
                  Large
                </button>
              </div>

              <!-- <div class="mb-8">
                <label class="fw-bold">สี </label>

          
                <button
                  class="color-picker-button"
                  ref="colorButton"
                  @click="openColorPicker"
                  :style="{ backgroundColor: backgroundColor }"
                  style="width: 20px; height: 20px"
                ></button>
              </div> -->

              <div class="mb-8">
                 <div class="text-dark fw-bold fs-6 mb-5">รูปทรง </div>
                <button class="btn btn-active-accent" @click="addCircle">
                  <img
                    src="../assets/frontend/img/circle-svgrepo-com.svg"
                    style="width: 25px; height: 25px"
                  />
                </button>
                <button class="btn btn-active-accent" @click="addSquare">
                  <img
                    src="../assets/frontend/img/square-svgrepo-com.svg"
                    style="width: 25px; height: 25px"
                  />
                </button>
                <button class="btn btn-active-accent" @click="addTriangle">
                  <img
                    src="../assets/frontend/img/triangle-svgrepo-com.svg"
                    style="width: 25px; height: 25px"
                  />
                </button>
                <button class="btn btn-active-accent" @click="addText">
                  <img
                    src="../assets/frontend/img/text-svgrepo-com.svg"
                    style="width: 25px; height: 25px"
                  />
                </button>

                     <button class="btn btn-active-accent" @click="addLine">
                    <img
                      src="../assets/frontend/img/line-xl-svgrepo-com.svg"
                      style="width: 25px; height: 25px"
                    />
                  </button>

                       <button class="btn btn-active-accent" @click="addArrowLine">
                        <img
                          src="../assets/frontend/img/right-direction-3-svgrepo-com.svg"
                          style="width: 25px; height: 25px"
                        />
                      </button>
              </div>

              <div>
               
                <!--begin::Accordion-->
                <div
                  class="accordion accordion-icon-toggle"
                  id="kt_accordion_1"
                >
                  <!--begin::Item-->
                  <div class="mb-1">
                    <!--begin::Header-->
                    <div
                      class="accordion-header py-6 d-flex collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_1"
                      aria-expanded="false"
                    >
                      <span class="accordion-icon"
                        ><!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                        <span class="svg-icon svg-icon-4"
                          ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="18"
                              y="13"
                              width="13"
                              height="2"
                              rx="1"
                              transform="rotate(-180 18 13)"
                              fill="currentColor"
                            ></rect>
                            <path
                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <!--end::Svg Icon--></span
                      >
                      <h3 class="fs-4 text-gray-800 fw-semibold mb-0 ms-4">
                        ประตู
                      </h3>
                    </div>
                    <!--end::Header-->

                    <!--begin::Body-->
                    <div
                      id="kt_accordion_1_item_1"
                      class="fs-6 ps-10 collapse"
                      data-bs-parent="#kt_accordion_1"
                      style=""
                    >
                      <div class="mb-5">
                        <div class="row row-cols-2 px-xl-2 sidebar-toolbar">
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="door_drawio">
                                <img
                                  src="../../public/images/door.drawio.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">ประตูบานคู่</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="door_drawio1">
                                <img
                                  src="../../public/images/door.drawio1.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">ผู้ละเมิด</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="door_drawio2">
                                <img
                                  src="../../public/images/door.drawio2.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">สมอ</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="door_drawio3">
                                <img
                                  src="../../public/images/door.drawio3.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">แท็ก</span>
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="door_drawio4">
                                <img
                                  src="../../public/images/door.drawio4.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">แท็ก</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end::Body-->
                  </div>
                  <!--end::Item-->

                  <!--begin::Item-->
                  <div class="mb-5">
                    <!--begin::Header-->
                    <div
                      class="accordion-header py-3 d-flex collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_2"
                      aria-expanded="false"
                    >
                      <span class="accordion-icon"
                        ><!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                        <span class="svg-icon svg-icon-4"
                          ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="18"
                              y="13"
                              width="13"
                              height="2"
                              rx="1"
                              transform="rotate(-180 18 13)"
                              fill="currentColor"
                            ></rect>
                            <path
                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <!--end::Svg Icon--></span
                      >
                      <h3 class="fs-4 text-gray-800 fw-semibold mb-0 ms-4">
                        หน้าต่าง
                      </h3>
                    </div>
                  </div>
                  <!--end::Header-->

                  <!--begin::Body-->
                  <div
                    id="kt_accordion_1_item_2"
                    class="fs-6 ps-10 collapse"
                    data-bs-parent="#kt_accordion_1"
                    style=""
                  >
                    <div class="mb-5">
                      <div class="row row-cols-2 px-xl-2 sidebar-toolbar">
                        <div class="col p-2">
                          <a
                            href="#"
                            class="btn p-5 w-100 text-start btn-active-primary"
                          >
                            <button @click="window_drawio">
                              <img
                                src="../../public/images/window.drawio.svg"
                                style="width: 60px; height: 60px"
                              />
                            </button>
                            <span class="fw-bold">หน้าต่าง</span>
                          </a>
                        </div>

                        <div class="col p-2">
                          <a
                            href="#"
                            class="btn p-5 w-100 text-start btn-active-primary"
                          >
                            <button @click="window_drawio1">
                              <img
                                src="../../public/images/window.drawio1.svg"
                                style="width: 60px; height: 60px"
                              />
                            </button>
                            <span class="fw-bold">หน้าต่าง</span>
                          </a>
                        </div>

                        <div class="col p-2">
                          <a
                            href="#"
                            class="btn p-5 w-100 text-start btn-active-primary"
                          >
                            <button @click="window_drawio2">
                              <img
                                src="../../public/images/window.drawio2.svg"
                                style="width: 60px; height: 60px"
                              />
                            </button>
                            <span class="fw-bold" style="text-align: center"
                              >หน้าต่าง</span
                            >
                          </a>
                        </div>
                      </div>
                    </div>
                    <!--end::Body-->
                  </div>
                  <!--end::Item-->

                  <!--begin::Item-->
                  <div class="mb-5">
                    <!--begin::Header-->
                    <div
                      class="accordion-header py-3 d-flex collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_3"
                      aria-expanded="false"
                    >
                      <span class="accordion-icon"
                        ><!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                        <span class="svg-icon svg-icon-4"
                          ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="18"
                              y="13"
                              width="13"
                              height="2"
                              rx="1"
                              transform="rotate(-180 18 13)"
                              fill="currentColor"
                            ></rect>
                            <path
                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <!--end::Svg Icon--></span
                      >
                      <h3 class="fs-4 text-gray-800 fw-semibold mb-0 ms-4">
                        โต๊ะ
                      </h3>
                    </div>
                    <!--end::Header-->

                    <!--begin::Body-->
                    <div
                      id="kt_accordion_1_item_3"
                      class="fs-6 ps-10 collapse"
                      data-bs-parent="#kt_accordion_1"
                      style=""
                    >
                      <div class="mb-5">
                        <div class="row row-cols-2 px-xl-2 sidebar-toolbar">
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio">
                                <img
                                  src="../../public/images/table.drawio.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ2ที่นั่ง</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio1">
                                <img
                                  src="../../public/images/table.drawio1.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ4ที่นั่ง</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio2">
                                <img
                                  src="../../public/images/table.drawio2.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ4ที่นั่ง</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio3">
                                <img
                                  src="../../public/images/table.drawio3.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ6ที่นั่ง</span>
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio4">
                                <img
                                  src="../../public/images/table.drawio4.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ6ที่นั่ง</span>
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio5">
                                <img
                                  src="../../public/images/table.drawio5.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะคอม</span>
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio6">
                                <img
                                  src="../../public/images/table.drawio6.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ4ที่นั่ง</span>
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio7">
                                <img
                                  src="../../public/images/table.drawio7.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ6ที่นั่ง</span>
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio8">
                                <img
                                  src="../../public/images/table.drawio8.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ6ที่นั่ง</span>
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio9">
                                <img
                                  src="../../public/images/table.drawio9.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ10ที่นั่ง</span>
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="table_drawio10">
                                <img
                                  src="../../public/images/table.drawio10.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">โต๊ะ18ที่นั่ง</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end::Body-->
                  </div>
                  <!--end::Item-->

                  <!--begin::Item-->
                  <div class="mb-5">
                    <!--begin::Header-->
                    <div
                      class="accordion-header py-3 d-flex collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_4"
                      aria-expanded="false"
                    >
                      <span class="accordion-icon"
                        ><!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                        <span class="svg-icon svg-icon-4"
                          ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="18"
                              y="13"
                              width="13"
                              height="2"
                              rx="1"
                              transform="rotate(-180 18 13)"
                              fill="currentColor"
                            ></rect>
                            <path
                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <!--end::Svg Icon--></span
                      >
                      <h3 class="fs-4 text-gray-800 fw-semibold mb-0 ms-4">
                        เก้าอี้
                      </h3>
                    </div>
                    <!--end::Header-->

                    <!--begin::Body-->
                    <div
                      id="kt_accordion_1_item_4"
                      class="fs-6 ps-10 collapse"
                      data-bs-parent="#kt_accordion_1"
                      style=""
                    >
                      <div class="mb-5">
                        <div class="row row-cols-2 px-xl-2 sidebar-toolbar">
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="chair_drawio">
                                <img
                                  src="../../public/images/chair.drawio.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">หน้าต่าง</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="chair_drawio1">
                                <img
                                  src="../../public/images/chair.drawio1.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">หน้าต่าง</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="chair_drawio2">
                                <img
                                  src="../../public/images/chair.drawio2.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="chair_drawio3">
                                <img
                                  src="../../public/images/chair.drawio3.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="chair_drawio4">
                                <img
                                  src="../../public/images/chair.drawio4.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="chair_drawio5">
                                <img
                                  src="../../public/images/chair.drawio5.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="chair_drawio6">
                                <img
                                  src="../../public/images/chair.drawio6.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-5">
                    <!--begin::Header-->
                    <div
                      class="accordion-header py-3 d-flex collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_5"
                      aria-expanded="false"
                    >
                      <span class="accordion-icon"
                        ><!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                        <span class="svg-icon svg-icon-4"
                          ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="18"
                              y="13"
                              width="13"
                              height="2"
                              rx="1"
                              transform="rotate(-180 18 13)"
                              fill="currentColor"
                            ></rect>
                            <path
                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <!--end::Svg Icon--></span
                      >
                      <h3 class="fs-4 text-gray-800 fw-semibold mb-0 ms-4">
                        อื่นๆ
                      </h3>
                    </div>
                    <!--end::Header-->

                    <!--begin::Body-->
                    <div
                      id="kt_accordion_1_item_5"
                      class="fs-6 ps-10 collapse"
                      data-bs-parent="#kt_accordion_1"
                      style=""
                    >
                      <div class="mb-5">
                        <div class="row row-cols-2 px-xl-2 sidebar-toolbar">
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio">
                                <img
                                  src="../../public/images/miscellaneous.drawio.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">หน้าต่าง</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio1">
                                <img
                                  src="../../public/images/miscellaneous.drawio1.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold">หน้าต่าง</span>
                            </a>
                          </div>

                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio3">
                                <img
                                  src="../../public/images/miscellaneous.drawio3.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio4">
                                <img
                                  src="../../public/images/miscellaneous.drawio4.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio5">
                                <img
                                  src="../../public/images/miscellaneous.drawio5.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio6">
                                <img
                                  src="../../public/images/miscellaneous.drawio6.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio7">
                                <img
                                  src="../../public/images/miscellaneous.drawio7.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio8">
                                <img
                                  src="../../public/images/miscellaneous.drawio8.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio9">
                                <img
                                  src="../../public/images/miscellaneous.drawio9.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio10">
                                <img
                                  src="../../public/images/miscellaneous.drawio10.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                          <div class="col p-2">
                            <a
                              href="#"
                              class="btn p-5 w-100 text-start btn-active-primary"
                            >
                              <button @click="miscellaneous_drawio11">
                                <img
                                  src="../../public/images/miscellaneous.drawio11.svg"
                                  style="width: 60px; height: 60px"
                                />
                              </button>
                              <span class="fw-bold" style="text-align: center"
                                >หน้าต่าง</span
                              >
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--end::Body-->
                  </div>
                  <!--end::Item-->
                </div>
                <!--begin::Item-->

                <!--end::Item-->
              </div>
              <!--end::Accordion-->
            </div>
          </div>
        </div>
        <!--end::Product Info-->

        <!--end::Form-->
      </div>
    </div>
  </div>
</template>
<script>
import { fabric } from "fabric";
import ChannelColorPicker from "vue-channel-color-picker";

export default {
  components: {
    ChannelColorPicker,
  },
  data() {
    return {
      roomSize: "small",
      roomWidth: 800,
      roomHeight: 500,
      backgroundColor: "#ffffff", // set initial background color to white

      zoom: 1,
      actions: [],
      redoActions: [],
      historyIndex: -1,
      isRedoing: false,

      isEditing: false,
      editedRoomWidth: 0,
      editedRoomHeight: 0,
      isEditRoomSizeActive: false,
      canvas: null,
      removedObjects: [],

       // Add a flag to indicate if drawRoom() was called
      isDrawRoomCalled: false,

    };
  },
  mounted() {
    const canvas = this.$refs.canvas;
    this.fabricCanvas = new fabric.Canvas(canvas);

    if (this.fabricCanvas) {
      this.drawRoom(this.roomWidth, this.roomHeight);
      this.fabricCanvas.on("object:added", this.saveStateToHistory);
      this.fabricCanvas.on("object:removed", this.saveStateToHistory);

    
    }
  },

  methods: {
    miscellaneous_drawio() {
      const url = "../../public/images/miscellaneous.drawio.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    miscellaneous_drawio1() {
      const url = "../../public/images/miscellaneous.drawio1.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },

    miscellaneous_drawio3() {
      const url = "../../public/images/miscellaneous.drawio3.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    miscellaneous_drawio4() {
      const url = "../../public/images/miscellaneous.drawio4.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    miscellaneous_drawio5() {
      const url = "../../public/images/miscellaneous.drawio5.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    miscellaneous_drawio6() {
      const url = "../../public/images/miscellaneous.drawio6.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    miscellaneous_drawio7() {
      const url = "../../public/images/miscellaneous.drawio7.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    miscellaneous_drawio8() {
      const url = "../../public/images/miscellaneous.drawio8.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    miscellaneous_drawio9() {
      const url = "../../public/images/miscellaneous.drawio9.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    miscellaneous_drawio10() {
      const url = "../../public/images/miscellaneous.drawio10.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    miscellaneous_drawio11() {
      const url = "../../public/images/miscellaneous.drawio11.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },

    chair_drawio() {
      const url = "../../public/images/chair.drawio.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    chair_drawio1() {
      const url = "../../public/images/chair.drawio1.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    chair_drawio2() {
      const url = "../../public/images/chair.drawio2.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    chair_drawio3() {
      const url = "../../public/images/chair.drawio3.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    chair_drawio4() {
      const url = "../../public/images/chair.drawio4.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    chair_drawio5() {
      const url = "../../public/images/chair.drawio5.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    chair_drawio6() {
      const url = "../../public/images/chair.drawio6.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },

    table_drawio() {
      const url = "../../public/images/table.drawio.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio1() {
      const url = "../../public/images/table.drawio1.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio2() {
      const url = "../../public/images/table.drawio2.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio3() {
      const url = "../../public/images/table.drawio3.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio4() {
      const url = "../../public/images/table.drawio4.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio5() {
      const url = "../../public/images/table.drawio5.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0) * 0.25;
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY);
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio6() {
      const url = "../../public/images/table.drawio6.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio7() {
      const url = "../../public/images/table.drawio7.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio8() {
      const url = "../../public/images/table.drawio8.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio9() {
      const url = "../../public/images/table.drawio9.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        img.set({
          left: room.left,
          top: room.top,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    table_drawio10() {
      const url = "../../public/images/table.drawio10.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        const doorWidth = img.width * scale;
        const doorHeight = img.height * scale;
        const roomLeft = room.left;
        const roomTop = room.top;
        const doorMargin = 2; // Set margin for door from outer edge of room
        const doorLeft = roomLeft + (room.width - doorWidth) / 2; // Calculate left position of door
        const doorTop = roomTop + room.height - doorMargin; // Calculate top position of door
        img.set({
          left: doorLeft,
          top: doorTop,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },

    window_drawio() {
      const url = "../../public/images/window.drawio.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        const doorWidth = img.width * scale;
        const doorHeight = img.height * scale;
        const roomLeft = room.left;
        const roomTop = room.top;
        const doorMargin = 2; // Set margin for door from outer edge of room
        const doorLeft = roomLeft + (room.width - doorWidth) / 2; // Calculate left position of door
        const doorTop = roomTop + room.height - doorMargin; // Calculate top position of door
        img.set({
          left: doorLeft,
          top: doorTop,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },

    window_drawio1() {
      const url = "../../public/images/window.drawio1.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        const doorWidth = img.width * scale;
        const doorHeight = img.height * scale;
        const roomLeft = room.left;
        const roomTop = room.top;
        const doorMargin = 2; // Set margin for door from outer edge of room
        const doorLeft = roomLeft + (room.width - doorWidth) / 2; // Calculate left position of door
        const doorTop = roomTop + room.height - doorMargin; // Calculate top position of door
        img.set({
          left: doorLeft,
          top: doorTop,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    window_drawio2() {
      const url = "../../public/images/window.drawio2.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        const doorWidth = img.width * scale;
        const doorHeight = img.height * scale;
        const roomLeft = room.left;
        const roomTop = room.top;
        const doorMargin = 2; // Set margin for door from outer edge of room
        const doorLeft = roomLeft + (room.width - doorWidth) / 2; // Calculate left position of door
        const doorTop = roomTop + room.height - doorMargin; // Calculate top position of door
        img.set({
          left: doorLeft,
          top: doorTop,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    door_drawio() {
      const url = "../../public/images/door.drawio.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.5;
        const doorWidth = img.width * scale;
        const doorHeight = img.height * scale;
        const roomLeft = room.left;
        const roomTop = room.top;
        const doorMargin = 2; // Set margin for door from outer edge of room
        const doorLeft = roomLeft + (room.width - doorWidth) / 2; // Calculate left position of door
        const doorTop = roomTop + room.height - doorMargin; // Calculate top position of door
        img.set({
          left: doorLeft,
          top: doorTop,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    door_drawio1() {
      const url = "../../public/images/door.drawio1.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        const doorWidth = img.width * scale;
        const doorHeight = img.height * scale;
        const roomLeft = room.left;
        const roomTop = room.top;
        const doorMargin = 2; // Set margin for door from outer edge of room
        const doorLeft = roomLeft + (room.width - doorWidth) / 2; // Calculate left position of door
        const doorTop = roomTop + room.height - doorMargin; // Calculate top position of door
        img.set({
          left: doorLeft,
          top: doorTop,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    door_drawio2() {
      const url = "../../public/images/door.drawio2.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        const doorWidth = img.width * scale;
        const doorHeight = img.height * scale;
        const roomLeft = room.left;
        const roomTop = room.top;
        const doorMargin = 2; // Set margin for door from outer edge of room
        const doorLeft = roomLeft + (room.width - doorWidth) / 2; // Calculate left position of door
        const doorTop = roomTop + room.height - doorMargin; // Calculate top position of door
        img.set({
          left: doorLeft,
          top: doorTop,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    door_drawio3() {
      const url = "../../public/images/door.drawio3.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.5;
        const doorWidth = img.width * scale;
        const doorHeight = img.height * scale;
        const roomLeft = room.left;
        const roomTop = room.top;
        const doorMargin = 5; // Set margin for door from outer edge of room
        const doorLeft = roomLeft + (room.width - doorWidth) / 2; // Calculate left position of door
        const doorTop = roomTop + room.height - doorMargin; // Calculate top position of door
        img.set({
          left: doorLeft,
          top: doorTop,
          scaleX: scale,
          scaleY: scale,
        });
        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    door_drawio4() {
      const url = "../../public/images/door.drawio4.svg";
      fabric.Image.fromURL(url, (img) => {
        const room = this.fabricCanvas.item(0);
        const scaleX = room.width / img.width;
        const scaleY = room.height / img.height;
        const scale = Math.min(scaleX, scaleY) * 0.25;
        const doorWidth = img.width * scale;
        const doorHeight = img.height * scale;
        const roomLeft = room.left;
        const roomTop = room.top;
        const doorMargin = 35; // Set margin for door from outer edge of room
        const doorLeft = roomLeft + (room.width - doorWidth) / 2; // Calculate left position of door
        const doorTop = roomTop + room.height - doorMargin; // Calculate top position of door
        img.set({
          left: doorLeft,
          top: doorTop,
          scaleX: scale,
          scaleY: scale,
        });

        this.fabricCanvas.add(img);
        this.canvasObjects.push(img);
      });
    },
    saveStateToHistory() {
      // Save a copy of the canvas to the actions array
      const canvasObject = this.fabricCanvas.toObject();
      this.actions.push(canvasObject);
      // Clear the redo actions array
      this.redoActions = [];
      // Clear the removed objects array
      this.removedObjects = [];
    },

    undo() {
      if (this.actions.length > 1) {
        const lastAction = this.actions.pop();
        const lastObject = this.fabricCanvas.item(this.fabricCanvas.size() - 1);
        if (lastObject && lastObject !== this.fabricCanvas.item(0)) {
          this.fabricCanvas.remove(lastObject);
          this.removedObjects.push(lastObject); // add the removed object to the removedObjects array
          console.log("Undo - removed object: ", lastObject);
          this.redoActions.push(lastObject.toJSON()); // save a copy of the removed object to the redoActions array
        } else {
          return;
        }
        const prevAction = this.actions[this.actions.length - 1];
        this.fabricCanvas.loadFromJSON(prevAction);
        this.fabricCanvas.renderAll();
        console.log("Undo - prev action loaded: ", prevAction);
      }
    },

    redo() {
      if (this.redoActions.length > 0) {
        const lastAction = this.redoActions.pop();
        const lastObject = fabric.Object.fromJSON(lastAction);
        this.fabricCanvas.add(lastObject);
        console.log("Redo - added object: ", lastObject);
        this.actions.push(this.fabricCanvas.toObject());
        console.log("Redo - current state saved to actions array");
        this.fabricCanvas.renderAll();
      }
    },


    // เส้นตรง
    addLine() {
      const lineWidth = 100;
      const lineHeight = 5;
      const line = new fabric.Line([100, 100, 100 + lineWidth, 100], {
        stroke: 'red',
        strokeWidth: lineHeight,
        selectable: true,
        left: 100,
        top: 100,
      });

      // Ensure line stays within the room boundaries
      const room = this.fabricCanvas.item(0);
      const lineLeft = line.left;
      const lineTop = line.top;
      const lineRight = lineLeft + lineWidth;
      const lineBottom = lineTop + lineHeight;

      if (lineLeft < room.left) {
        line.set({ left: room.left });
      }

      if (lineTop < room.top) {
        line.set({ top: room.top });
      }

      if (lineRight > room.left + room.width) {
        line.set({ left: room.left + room.width - lineWidth });
      }

      if (lineBottom > room.top + room.height) {
        line.set({ top: room.top + room.height - lineHeight });
      }

      this.fabricCanvas.add(line);
    },

    addText() {
      const text = new fabric.Textbox("Your Text Here", {
        left: 100,
        top: 100,
        width: 100,
        height: 100,
        fontSize: 20,
        fontFamily: "Arial",
        fill: "black",
        editable: true,
      });

      const room = this.fabricCanvas.item(0);

      // Ensure text stays within the room boundaries
      if (text.left < room.left) {
        text.left = room.left;
      }

      if (text.top < room.top) {
        text.top = room.top;
      }

      if (text.left + text.width > room.left + room.width) {
        text.left = room.left + room.width - text.width;
      }

      if (text.top + text.height > room.top + room.height) {
        text.top = room.top + room.height - text.height;
      }

      this.fabricCanvas.add(text);
    },
// เสร้นตรงหัวลูกศร
    addArrowLine() {
      const lineWidth = 100;
      const lineHeight = 5;

      // create the line
      const line = new fabric.Line([100, 100, 100 + lineWidth, 100], {
        stroke: 'red',
        strokeWidth: lineHeight,
        selectable: true,
        left: 100,
        top: 100,
      });

      // create the arrowhead
      const arrowhead = new fabric.Triangle({
        width: 20, // adjust arrowhead width
        height: 10, // adjust arrowhead height
        fill: 'red',
        left: line.x2 - 20+ 13, // adjust arrowhead position
        top: line.y2 - 3, // adjust arrowhead position
        angle: 0, // set arrowhead angle to 0 degrees
      });

      // rotate the arrowhead to align with the line
      const deltaX = line.x2 - line.x1;
      const deltaY = line.y2 - line.y1;
      const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
      arrowhead.rotate(angle + 90, 'center');

      // add the arrowhead to the line
      const group = new fabric.Group([line, arrowhead], {
        selectable: true,
      });

      // Ensure the line with arrowhead stays within the room boundaries
      const room = this.fabricCanvas.item(0);
      const lineLeft = group.left;
      const lineTop = group.top;
      const lineRight = lineLeft + lineWidth + 20; // add arrowhead width
      const lineBottom = lineTop + lineHeight + 10; // add arrowhead height

      if (lineLeft < room.left) {
        group.set({ left: room.left });
      }

      if (lineTop < room.top) {
        group.set({ top: room.top });
      }

      if (lineRight > room.left + room.width) {
        group.set({ left: room.left + room.width - lineWidth - 20 }); // subtract arrowhead width
      }

      if (lineBottom > room.top + room.height) {
        group.set({ top: room.top + room.height - lineHeight - 10 }); // subtract arrowhead height
      }

      this.fabricCanvas.add(group);
    },


   

    // รูปสามเหลี่ยม
    addTriangle() {
      const triangleSize = 50;
      const triangle = new fabric.Triangle({
        width: triangleSize,
        height: triangleSize,
        fill: "red",
        left: 100,
        top: 100,
        draggable: true,
      });

      // Ensure triangle stays within the room boundaries
      const room = this.fabricCanvas.item(0);
      const triangleLeft = triangle.left;
      const triangleTop = triangle.top;
      const triangleRight = triangleLeft + triangleSize;
      const triangleBottom = triangleTop + triangleSize;

      if (triangleLeft < room.left) {
        triangle.set({ left: room.left });
      }

      if (triangleTop < room.top) {
        triangle.set({ top: room.top });
      }

      if (triangleRight > room.left + room.width) {
        triangle.set({ left: room.left + room.width - triangleSize });
      }

      if (triangleBottom > room.top + room.height) {
        triangle.set({ top: room.top + room.height - triangleSize });
      }

      this.fabricCanvas.add(triangle);
    },

    // รูปทรงสี่เหลี่ยม
    addSquare() {
      const squareSize = 50;
      const square = new fabric.Rect({
        width: squareSize,
        height: squareSize,
        fill: "blue",
        left: 100,
        top: 100,
        draggable: true,
      });

      // Ensure square stays within the room boundaries
      const room = this.fabricCanvas.item(0);
      const squareLeft = square.left;
      const squareTop = square.top;
      const squareRight = squareLeft + squareSize;
      const squareBottom = squareTop + squareSize;

      if (squareLeft < room.left) {
        square.set({ left: room.left });
      }

      if (squareTop < room.top) {
        square.set({ top: room.top });
      }

      if (squareRight > room.left + room.width) {
        square.set({ left: room.left + room.width - squareSize });
      }

      if (squareBottom > room.top + room.height) {
        square.set({ top: room.top + room.height - squareSize });
      }

      this.fabricCanvas.add(square);
    },

    // รูปทรงวงกลม
    addCircle() {
      const circleRadius = 10;
      const circle = new fabric.Circle({
        radius: circleRadius,
        fill: "red",
        left: 100,
        top: 100,
        draggable: true,
      });

      // Ensure circle stays within the room boundaries
      const room = this.fabricCanvas.item(0);
      const circleLeft = circle.left;
      const circleTop = circle.top;
      const circleRight = circleLeft + circleRadius * 2;
      const circleBottom = circleTop + circleRadius * 2;

      if (circleLeft < room.left) {
        circle.set({ left: room.left });
      }

      if (circleTop < room.top) {
        circle.set({ top: room.top });
      }

      if (circleRight > room.left + room.width) {
        circle.set({ left: room.left + room.width - circleRadius * 2 });
      }

      if (circleBottom > room.top + room.height) {
        circle.set({ top: room.top + room.height - circleRadius * 2 });
      }

      this.fabricCanvas.add(circle);
    },

    drawRoom() {
      // Check if the edit button has been pressed
      this.isDrawingRoom = true;

      const canvasWidth = this.fabricCanvas.getWidth();
      const canvasHeight = this.fabricCanvas.getHeight();
      const left =
        (canvasWidth -
          (this.isEditing ? this.editedRoomWidth : this.roomWidth)) /
        2;
      const top =
        (canvasHeight -
          (this.isEditing ? this.editedRoomHeight : this.roomHeight)) /
        2;
      const rect = new fabric.Rect({
        width: this.isEditing ? this.editedRoomWidth : this.roomWidth,
        height: this.isEditing ? this.editedRoomHeight : this.roomHeight,
        fill: this.backgroundColor,
        stroke: this.strokeColor,
        strokeWidth: 4,
        stroke: "red",
        lockMovementX: true,
        lockMovementY: true,
        lockScalingX: true, // Add lockScalingX property
        lockScalingY: true, // Add lockScalingY property
        left,
        top,
      });
      this.fabricCanvas.clear();
      this.fabricCanvas.add(rect);
      this.isDrawingRoom = false;
      // Save the current state to the actions array
      this.saveStateToHistory();
      this.isDrawRoomCalled = true;
    },

    setRoomSize(size) {
      if (size === "small") {
        this.roomWidth = 500;
        this.roomHeight = 800;
      } else if (size === "medium") {
        this.roomWidth = 800;
        this.roomHeight = 1000;
      } else if (size === "large") {
        this.roomWidth = 1000;
        this.roomHeight = 1000;
      }
      this.drawRoom(this.roomWidth, this.roomHeight);
    },

    setCustomRoomSize() {
      this.drawRoom(this.roomWidth, this.roomHeight);
    },
    openColorPicker() {
      const input = document.createElement("input");
      input.type = "color";
      input.addEventListener("change", () => {
        const color = input.value;
        this.backgroundColor = color;
        this.strokeColor = color;
        const rect = this.fabricCanvas.item(0);
        rect.set({ fill: this.backgroundColor, stroke: this.strokeColor });
        this.fabricCanvas.renderAll();
      });
      input.click();
    },
    zoomIn() {
      const zoom = this.fabricCanvas.getZoom();
      const zoomFactor = 1.2;
      this.fabricCanvas.zoomToPoint(
        { x: this.fabricCanvas.width / 2, y: this.fabricCanvas.height / 2 },
        zoom * zoomFactor
      );
    },

    zoomOut() {
      const zoom = this.fabricCanvas.getZoom();
      const zoomFactor = 1.2;
      this.fabricCanvas.zoomToPoint(
        { x: this.fabricCanvas.width / 2, y: this.fabricCanvas.height / 2 },
        zoom / zoomFactor
      );
    },
  },
};
</script>
<style scoped>
* {
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-family: "Krub", sans-serif;
  font-family: "Prompt", sans-serif;
}

canvas {
  background-color: #f0f0f0;
}

.circular-button {
  border-radius: 50%;
}
</style>
