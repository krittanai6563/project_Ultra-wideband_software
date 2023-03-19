<template>
  <div>

       <button class="btn btn-active-accent  fw-bold " @click="zoomIn">Zoom In</button>
        <button class="btn btn-active-accent  fw-bold ms-3" @click="zoomOut">Zoom Out</button>
         <button class="btn btn-active-accent  fw-bold ms-3" @click="undo">Undo</button>
      <button class="btn btn-active-accent  fw-bold ms-3" @click="redo">Redo</button>
    <button class="btn btn-active-accent  fw-bold ms-3" @click="uploadSVG">Upload SVG</button>

    <button class="btn btn-active-accent  fw-bold ms-3" @click="addCircle">Add Circle</button>
    <button class="btn btn-active-accent  fw-bold ms-3" @click="addSquare">Add Square</button>
        <button class="btn btn-active-accent  fw-bold ms-3" @click="addTriangle">Add Square</button>
           <button class="btn btn-active-accent  fw-bold ms-3" @click="addText">Add text</button>
             <button class="btn btn-active-accent  fw-bold ms-3" @click="isEditing = true">Edit Room Size</button>



    <canvas ref="canvas" width="850" height="600"></canvas>
  
  </div>






  <div id="kt_sidebar" class="sidebar bg-warning" data-kt-drawer="true" data-kt-drawer-name="sidebar"
      data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '350px': '300px'}" data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#kt_sidebar_toggler">
      <!--begin::Sidebar Content-->
     <div class="d-flex flex-column sidebar-body">
          <div id="kt_sidebar_content" class="py-10 px-7 px-lg-12">
      <div class="hover-scroll-y me-lg-n7 pe-lg-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-offset="0px" data-kt-scroll-wrappers="#kt_sidebar_content" data-select2-id="select2-data-113-koyy" style="height: 400px;">
          <!--begin::New Product Form-->
  <div class="animate__animated animate__slideInRight" >
      



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
                   <div class="mb-3 fw-bold fs-6">ขนาดห้อง</div>
                 
  <label class="fw-bold" for="editedRoomWidth">ความกว้าง:</label>
  <input class="form-control form-control-solid form-control-lg" type="number" id="editedRoomWidth" v-model="editedRoomWidth" @keyup.enter="drawRoo()">
  <div class="mb-2"></div>
  <label class="fw-bold" for="editedRoomHeight">ความยาว:</label>
  <input class="form-control form-control-solid form-control-lg" type="number" id="editedRoomHeight" v-model="editedRoomHeight" @keyup.enter="drawRoom()()">
  <div class="mb-3"></div>

          
                </div>

        
              <div class="mb-3 fw-bold fs-6"></div>
              <!--begin::Input-->
                

                       <div class="mb-1">
            
                      <button class="form-control form-control-solid form-control-lg" @click="setRoomSize('small')">Small</button>
                     </div>
                          <div class="mb-1">
                    
                        <button class="form-control form-control-solid form-control-lg" @click="setRoomSize('medium')">Medium</button>
                       </div>
                            <div class="mb-8">
                      
                        <button class="form-control form-control-solid form-control-lg" @click="setRoomSize('large')">Large</button>
                       </div>
                


          
            

              <div class="mb-8">
                  <label class="fw-bold">สี </label>
                
                         <!-- <button @click="openColorPicker()">Change Background Color</button> -->
                           <button class="color-picker-button" ref="colorButton" @click="openColorPicker" :style="{ backgroundColor: backgroundColor }" style="width: 20px; height: 20px;"></button>
              </div>
              
       
           
          </div>
          <!--end::Product Info-->

      <!--end::Form-->
  </div>

      </div>
  </div>
      </div>
  </div>
</template>
  <script>
  import { fabric } from 'fabric';
  import ChannelColorPicker from 'vue-channel-color-picker';

  export default {
    components: {
      ChannelColorPicker,
    },
    data() {
      return {
        roomSize: 'small',
        roomWidth: 200,
        roomHeight: 300,
        backgroundColor: '#ffffff', // set initial background color to white

        zoom: 1,
        actions: [],
        redoActions: [],
        historyIndex: -1,
        isRedoing: false,

        isEditing: false,
        editedRoomWidth: 0,
        editedRoomHeight: 0,
         isEditRoomSizeActive: false
      };
    },
    mounted() {
      const canvas = this.$refs.canvas;
      this.fabricCanvas = new fabric.Canvas(canvas);
      if (this.fabricCanvas) {
        this.drawRoom(this.roomWidth, this.roomHeight);
        this.fabricCanvas.on('object:added', this.saveStateToHistory);
        this.fabricCanvas.on('object:removed', this.saveStateToHistory);
      
      }
      
    
    },
    methods: {
   saveStateToHistory() {
  // Save a copy of the canvas to the actions array
  // only if drawRoom method is not being called
  if (!this.isDrawingRoom) {
    const json = this.fabricCanvas.toJSON();
    this.actions.push(json);
    // Clear the redo actions array
    this.redoActions = [];
  }
      },
      undo() {
        if (this.actions.length > 1) {
          // Pop the last action from the actions array
          const lastAction = this.actions.pop();
          // Save a copy of the canvas to the redo actions array
          this.redoActions.push(lastAction);
          // Load the previous action onto the canvas
          const prevAction = this.actions[this.actions.length - 1];
          this.fabricCanvas.loadFromJSON(prevAction);
          this.fabricCanvas.renderAll();
        }
      },
      redo() {
        if (this.redoActions.length > 0) {
          // Pop the last action from the redo actions array
          const lastAction = this.redoActions.pop();
          // Save a copy of the canvas to the actions array
          const json = this.fabricCanvas.toJSON();
          this.actions.push(json);
          // Load the last action onto the canvas
          this.fabricCanvas.loadFromJSON(lastAction);
          this.fabricCanvas.renderAll();
        }
      },
      addText() {
        const text = new fabric.Textbox('Your Text Here', {
          left: 100,
          top: 100,
          width: 100,
          height: 100,
          fontSize: 20,
          fontFamily: 'Arial',
          fill: 'black',
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

      // รูปสามเหลี่ยม
      addTriangle() {
        const triangleSize = 50;
        const triangle = new fabric.Triangle({
          width: triangleSize,
          height: triangleSize,
          fill: 'red',
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
            fill: 'blue',
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
          fill: 'red',
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
        // check if the edit button has been pressed
        this.isDrawingRoom = true;
        const canvasWidth = this.fabricCanvas.getWidth();
        const canvasHeight = this.fabricCanvas.getHeight();
        const left = (canvasWidth - (this.isEditing ? this.editedRoomWidth : this.roomWidth)) / 2;
        const top = (canvasHeight - (this.isEditing ? this.editedRoomHeight : this.roomHeight)) / 2;
        const rect = new fabric.Rect({
          width: this.isEditing ? this.editedRoomWidth : this.roomWidth,
          height: this.isEditing ? this.editedRoomHeight : this.roomHeight,
          fill: this.backgroundColor,
          stroke: this.strokeColor,
          strokeWidth: 2,
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
      },
     

      // drawRoom(width, height) {
      //    this.isDrawingRoom = true;
      //   const canvasWidth = this.fabricCanvas.getWidth();
      //   const canvasHeight = this.fabricCanvas.getHeight();
      //   const left = (canvasWidth - width) / 2;
      //   const top = (canvasHeight - height) / 2;
      //   const rect = new fabric.Rect({
      //     width,
      //     height,
      //     fill: this.backgroundColor,
      //     stroke: this.strokeColor,
      //     strokeWidth: 2,
      //     lockMovementX: true,
      //     lockMovementY: true,
      //     left,
      //     top,
      //   });
      //   this.fabricCanvas.clear();
      //   this.fabricCanvas.add(rect);
      //   this.isDrawingRoom = false;
      // },

      // drawRoom(width, height) {
      //   // Set the flag to true before drawing the room
      //   this.isDrawingRoom = true;
      //   const canvasWidth = this.fabricCanvas.getWidth();
      //   const canvasHeight = this.fabricCanvas.getHeight();
      //   const left = (canvasWidth - width) / 2;
      //   const top = (canvasHeight - height) / 2;
      //   const rect = new fabric.Rect({
      //     width,
      //     height,
      //     fill: this.backgroundColor,
      //     stroke: this.strokeColor,
      //     strokeWidth: 2,
      //     lockMovementX: true,
      //     lockMovementY: true,
      //     left,
      //     top,
      //   });
      //   this.fabricCanvas.clear();
      //   this.fabricCanvas.add(rect);
      //   // Set the flag back to false after drawing the room
      //   this.isDrawingRoom = false;
      // },

      setRoomSize(size) {
        if (size === 'small') {
          this.roomWidth = 200;
          this.roomHeight = 300;
        } else if (size === 'medium') {
          this.roomWidth = 400;
          this.roomHeight = 500;
        } else if (size === 'large') {
          this.roomWidth = 600;
          this.roomHeight = 700;
        }
        this.drawRoom(this.roomWidth, this.roomHeight);
      },

      setCustomRoomSize() {
        this.drawRoom(this.roomWidth, this.roomHeight);
      },
      openColorPicker() {
        const input = document.createElement('input');
        input.type = 'color';
        input.addEventListener('change', () => {
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

    
   


    uploadSVG() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/svg+xml';
      input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const data = event.target.result;
          fabric.loadSVGFromURL(data, (objects, options) => {
            const svg = fabric.util.groupSVGElements(objects, options);
            this.fabricCanvas.add(svg);
          });
        };
        reader.readAsDataURL(file);
      });
      input.click();
    },
    

  }
};
    
 
</script>
<style scoped>
*{
  font-family: 'IBM Plex Sans Thai', sans-serif;
  font-family: 'Krub', sans-serif;
  font-family: 'Prompt', sans-serif;
}
canvas {
  background-color: #F0F0F0;
}

.circular-button {
  border-radius: 50%;
}
</style>
