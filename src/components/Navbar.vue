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
            <form action="#" class="search-form d-inline-block">

              <div class="d-flex">
                <input type="email" class="form-control" placeholder="Search...">
                <button type="submit" class="btn btn-secondary" >
                  <i class="fas fa-search"></i></button>
              </div>
            </form> 
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
    
      </div>
</div>
</template>



<script>
import Category from "@/components/Category.vue"
export default {
  name: 'Navbar',
  components: {
    Category,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
