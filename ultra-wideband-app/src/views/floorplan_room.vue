<template>
  <div>
        <canvas ref="canvas" width="800" height="400"></canvas>
          <div v-if="isEditing">
          <input type="text" v-model="revisionNote" placeholder="Enter revision note">
          <button @click="saveRevisionNote">Save</button>
        </div>
        <button @click="editRoomSize">Edit</button>

        
        <div>
          <label for="roomSize">Room Size:</label>
          <select v-model="selectedSize" id="roomSize">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>







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

<script>
import { fabric } from 'fabric';

export default {
    data() {
        return {
            canvas: null,
            selectedSize: 'small',
            width: 200,
            height: 150,
            isEditing: false,
            revisionNote: '',
        };
    },
    mounted() {
        this.canvas = new fabric.Canvas(this.$refs.canvas);

        this.canvas.on('mouse:down', this.handleMouseDown);
        this.canvas.on('mouse:move', this.handleMouseMove);
        this.canvas.on('mouse:up', this.handleMouseUp);
        this.drawRoom();
    },
    watch: {
        selectedSize: function (newSize) {
            switch (newSize) {
                case 'small':
                    this.width = 200;
                    this.height = 150;
                    break;
                case 'medium':
                    this.width = 300;
                    this.height = 200;
                    break;
                case 'large':
                    this.width = 400;
                    this.height = 250;
                    break;
                default:
                    this.width = 200;
                    this.height = 150;
            }
            this.drawRoom();
        },
    },
    methods: {
        drawRoom() {
            const rect = new fabric.Rect({
                width: this.width,
                height: this.height,
                fill: 'white',
                stroke: 'black',
                lockMovementX: true,
                lockMovementY: true,
            });
            this.canvas.clear();
            this.canvas.add(rect);
            this.canvas.renderAll();
        },
        editRoomSize() {
            this.isEditing = true;
            this.canvas.discardActiveObject();
            this.canvas.renderAll();
        },
        handleMouseDown(event) {
            if (this.isEditing) {
                this.startWidth = this.width;
                this.startHeight = this.height;
                this.startX = event.pointer.x;
                this.startY = event.pointer.y;
                this.isResizing = true;
            }
        },
        handleMouseMove(event) {
            if (this.isEditing && this.isResizing) {
                const deltaX = event.pointer.x - this.startX;
                const deltaY = event.pointer.y - this.startY;
                this.width = Math.max(50, this.startWidth + deltaX);
                this.height = Math.max(50, this.startHeight + deltaY);
                this.drawRoom();
            }
        },
        handleMouseUp() {
            if (this.isEditing) {
                this.isResizing = false;
            }
        },
        saveRevisionNote() {
            // Save the revision note to a database or other storage mechanism
            console.log('Revision note saved:', this.revisionNote);

            // Reset the revision note and disable editing
            this.revisionNote = '';
            this.isEditing = false;

            // Remove the revision note textbox from the canvas
            const activeObject = this.canvas.getActiveObject();
            this.canvas.remove(activeObject);
            this.canvas.renderAll();
        },
    },
};
</script>

<style>


</style>