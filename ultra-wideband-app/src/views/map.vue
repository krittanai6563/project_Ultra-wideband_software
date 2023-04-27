

<template>
  <div>
    <h1>Active Users:</h1>
    <div class="flags">
      <div
        v-for="user in users"
        :key="user.id"
        :class="{ active: user.isActive }"
      >
        <span>{{ user.name }}</span>
      </div>
    </div>
  </div>
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
              <div
                class="d-flex flex-column align-items-start justify-content-center flex-wrap me-1"
              >
                <!--begin::Title-->
                <h3 class="text-dark fw-bolder my-1">ระบุตำแหน่ง</h3>
                <!--end::Title-->
                <!--begin::Breadcrumb-->
                <ul
                  class="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7"
                >
                  <li class="breadcrumb-item">
                    <a href="index.html" class="text-muted text-hover-primary"
                      >หน้าแรก</a
                    >
                  </li>
                  <li class="breadcrumb-item text-dark">ระบุตำแหน่ง</li>
                </ul>
                <!--end::Breadcrumb-->
              </div>
            </div>
          </div>
          <!--end::toolbar-->
          <!--begin::Content-->
          <div class="content fs-6 d-flex" id="kt_content">
            <!--begin::Container-->
            <div class="container">
              <!--begin::Pricing-->
              <div class="">
                <div class="card-body p-12">
                  <div class="row g-6 g-xl-9">
                    <!--begin::Col-->
                    <div
                      class="col-md-6 col-xxl-4"
                      v-for="user in users"
                      :key="user.id"
                    >
                      <!--begin::Card-->
                      <div class="card">
                        <!--begin::Card body-->
                        <div
                          class="card-body d-flex flex-center flex-column p-9"
                        >
                          <!--begin::Wrapper-->

                          <!--end::Wrapper-->

                          <!--begin::Name-->
                          <a
                            href="#"
                            class="fs-4 text-gray-800 text-hover-primary fw-bold mb-0"
                          >
                            {{ user.name }} {{ user.Email }}
                            {{ user.id_Tag }}</a
                          >
                          <!--end::Name-->

                          <!--begin::Position-->
                          <div class="fw-semibold text-gray-400 mb-6">
                            Art Director
                          </div>
                          <!--end::Position-->

                          <!--begin::Info-->

                          <!--begin::Link-->
                          <button
                            class="btn btn-sm btn-light-primary fw-bold"
                            data-kt-drawer-show="true"
                            data-kt-drawer-target="#kt_drawer_chat"
                             @click="navigateTo('/Home')"
                          >
                           ดูข้อมูล
                          </button>
                          <!--end::Link-->
                        </div>
                        <!--begin::Card body-->
                      </div>
                      <!--begin::Card-->
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->

                    <!--end::Col-->
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

  <!--end::Mega Menu-->
</template>







<script  >
import { defineComponent, ref, onMounted, computed } from "vue";
import firebase from "../firebase/firebase";

import Header from "../../src/components/pages/Header.vue";
import Footer from "../../src/components/pages/Footer.vue";
import Sidebar from "../../src/components/pages/Sidebar.vue";
import Search from "../../src/components/pages/Search.vue";

import map1 from "../components/Chart_map.vue";

const db = firebase.database();
const messageRef = db.ref("user");
const dbAnchor1 = db.ref("Archor1");

export default defineComponent({
  components: { Header, Footer, Sidebar, Search, map1 },
  // eslint-disable-next-line vue/multi-word-component-names
    name: "map",

     methods: {
        navigateTo(path) {
            this.$router.push(path);
            setTimeout(() => {
                this.$router.go(0);
            }, 50);
        },
    },

  data() {
    return {
      users: [],
      activeUsers: [],
      lastUpdateTime: null,
      timer: null,
      screenIsBlank: false,
    };
  },
  created() {
    // Listen for changes to the `user` node
    messageRef.on("value", (snapshot) => {
      const usersArray = [];
      snapshot.forEach((childSnapshot) => {
        const user = childSnapshot.val();
        user.id = childSnapshot.key;
        user.isActive = this.activeUsers.some(
          (activeUser) => activeUser.id === user.id
        );
        usersArray.push(user);
      });
      this.users = usersArray;
    });

    // Listen for changes to the `Archor1` node
    dbAnchor1.on("value", (snapshot) => {
      const idTag = snapshot.child("ID").val();
      const distance = snapshot.child("Range").val();
      const activeUsers = this.users.filter((user) => user.id_Tag === idTag);

      // If the distance has been updated, mark the user as active
      if (distance && activeUsers.length > 0) {
        activeUsers.forEach((activeUser) => {
          activeUser.isActive = true;
        });
      }

      // Update the last update time and reset the timer
      this.lastUpdateTime = new Date();
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.screenIsBlank = true;
      }, 60000); // Set the timer to 1 minute (60000 milliseconds)

      // If no active users are found, assume that all users have stopped
      if (activeUsers.length === 0) {
        console.log("All users have stopped.");
      }
    });
  },
});
</script>


