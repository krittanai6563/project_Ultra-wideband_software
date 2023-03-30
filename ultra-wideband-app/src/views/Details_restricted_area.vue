<template>


    <div class="row mb-12">

          <div class="card mb-5 mb-xxl-8">
              <div class="card-body d-flex justify-content-between card-rounded p-0 d-flex "
                  style="background-color:#F3F6F9; ">
                  <div class="d-flex flex-column flex-lg-row-auto py-10 py-md-14 px-10 px-md-20 pe-lg-0">
                      <h2 class="fw-bold text-dark mb-0">ค้นหาตำแหน่งย้อนหลัง</h2>
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
                                <span class="label label-lg label-light-primary label-inline">{{row.user.Tag_id }}</span>
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
</template>

<script>
export default {
  name: 'Details_restricted_area',
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
      const response = await fetch('https://projectuwb-27b59-default-rtdb.firebaseio.com/area.json');
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
        // Show a confirmation dialog to the user
      if (confirm(`Are you sure you want to delete the row with ID ${row.id}?`)) {
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
          // Show a success message using the Bootstrap alert component
          const alert = document.createElement('div');
          alert.className = 'alert alert-info';
          alert.style.width = '400px';
          alert.style.top = '10px';
          alert.style.position = 'absolute';
          alert.style.right = '10px';
          alert.style.zIndex = '2';
          alert.innerHTML = '<span>Row with ID ' + row.id + ' has been deleted.</span>';
          document.body.appendChild(alert);
        } else {
          // Show an error message if the deletion request fails using a toast
          this.$bvToast.toast(`Failed to delete row with ID ${row.id}.`, {
            title: 'Error',
            variant: 'danger',
            autoHideDelay: 5000
          });
        }
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
};
</script>

