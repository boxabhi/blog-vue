<template>

  <div class="site-wrap">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <div class="header-top ">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6 d-flex">
            <router-link to="/">
              <a href="index.html" class="site-logo">
                <img src="https://events.citykonnect.com/public/city/files/img/icon/logo.png">
                Konnect
              </a>
            </router-link>
            <a href="#" class="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                class="icon-menu h3"></span></a>
          </div>
          <div class="col-12 col-lg-6 ml-auto d-flex">
            <div class="ml-md-auto top-social d-none d-lg-inline-block">
              <a href="#" class="d-inline-block p-3">
                <i class="fab fa-facebook-f"></i></a>
              <a href="#" class="d-inline-block p-3"><i class="fab fa-youtube"></i></a>
              <a href="#" class="d-inline-block p-3"><i class="fab fa-instagram"></i></a>
            </div>

          </div>
          <div class="col-6 d-block d-lg-none text-right">
          </div>
        </div>
      </div>

      <div class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">
        <div class="container">
          <div class="d-flex align-items-center">
            <div class="mr-auto">
              <Category />
            </div>
          </div>
        </div>
      </div>

 <div class="container"  v-if="isMobile()">
  <nav class="nav d-flex" v-for="category in allCategories" v-bind:key="category.id">
  <router-link class="nav-link active" :to="`/category/${category.category}`"> 
  {{category.category}}
  </router-link>
</nav>

    </div>


    </div>
  </div>
</template>



<script>
  import Category from "@/components/Category.vue"
  import { mapActions, mapGetters} from 'vuex';
  export default {
    name: 'Navbar',
    components: {
      Category,
    },
    computed: mapGetters([
      'allCategories'
    ]),
    methods: {
      isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         return true
      } else {
     return false
   }
 },
 ...mapActions(['fetchCategories']),
    },
    mounted() {
      this.fetchCategories();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->