import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './components/Master.vue'
import About from './views/AddUser.vue'
import Find_Location from './views/Find_Location.vue'
import Find_distance from './views/Find_distance.vue'
import floorplan from './components/Floorplan.vue'

const routes: RouteRecordRaw[] = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/About',
  name: 'About',
  component: About
  },
  {
    path: '/Find_Location',
    name: 'Find_Location',
    component: Find_Location
  },
  {
    path: '/MyComponent',
    name: 'MyComponent',
    component: Find_distance
  },
  {
    path: '/floorplan',
    name: 'floorplan',
    component: floorplan

  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router