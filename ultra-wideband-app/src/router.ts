import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from './views/Login.vue'
import Home from './components/Master.vue'
import About from './views/AddUser.vue'
import Find_Location from './views/Find_Location.vue'
import Find_distance from './views/Find_distance.vue'
import index1 from './components/Floorplan.vue'
import restricted_area from './views/Restricted_area.vue'
import map from './views/map.vue'
import profile from './components/profile.vue'



const routes: RouteRecordRaw[] = [
  {
  path: '/',
  name: 'Login',
  component: Login
},
{
  path: '/Home',
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
    name: 'index1',
    component: index1

  },
    {
    path: '/restricted_area',
    name: 'restricted_area',
    component: restricted_area

  }, {
      path: '/map',
      name: 'map',
      component: map
  }, {
      path: '/map',
      name: 'map',
      component: map
  }, {
      path: '/profile',
      name: 'profile',
      component: profile
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router