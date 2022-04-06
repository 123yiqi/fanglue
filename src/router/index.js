import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"user",
    component:()=>import("../views/auto.vue")
  },
  {
    path: '/login',
    name: 'Home',
    component: Home
  },
  {
    path:"/userc",
    name:"userc",
    component:()=>import("../views/index.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to,from,next)=>{
    if(to.path !=="/login"){
      next('/login')
    }else{
      next()

    }
})

export default router
