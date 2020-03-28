import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
require('@/assets/css/bootstrap.min.css')
require('@/assets/css/ui.css')
require('@/assets/css/owl.carousel.min.css')
require('@/assets/css/owl.theme.default.min.css');
require('@/assets/css/owl.theme.default.min.css')
require('@/assets/css/jquery.fancybox.min.css')
require('@/assets/css/bootstrap-datepicker.css')
require('@/assets/fonts/flaticon/font/flaticon.css')
require('@/assets/css/aos.css')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path :'/detail/:id',
  name: 'Details',
  component: () => import('../views/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
