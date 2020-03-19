<template>
      <nav class="site-navigation position-relative text-right" role="navigation">
              <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                <li class="active">
             <router-link to="/detail"><a href="" class="nav-link text-left">Home</a></router-link>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Categories</a>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Politics</a>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Business</a>
                </li>
               </ul>                                                                                                                                                                                                                                                                                         
            </nav>

</template>

<script>
export default {
    name : 'Category'
}
</script>