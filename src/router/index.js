import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Xat from '../views/Xat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/xat',
    name: 'Xat',
    component: Xat,
    props:true,
    beforeEnter:(to,from, next) =>{
      if (to.params.name){
        next();
      } else{
        next({name:'Login'});
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
