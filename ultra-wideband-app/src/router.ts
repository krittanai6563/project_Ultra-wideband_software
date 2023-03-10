import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './components/Master.vue'
import About from './views/AddUser.vue'
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
}
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router