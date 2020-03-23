<template>
      <nav class="site-navigation position-relative text-right" role="navigation">
              <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                <li class="active">
             <router-link to="/detail">
             <a href="" class="nav-link text-left">Home</a></router-link>
                </li>
                <li v-for="category in categories" v-bind:key="category.id">
                  <a href="categories.html" class="nav-link text-left">{{category.category}}</a>
                </li>
              
               </ul>                                                                                                                                                                                                                                                                                         
            </nav>

</template>

<script>
export default {
    name : 'Category',
    data(){
      return{
        categories : []
      }
    },
      methods :{
        fetchCategory(){
         var proxy = "";
         var url = `http://ckclub.in/v2/api/category/`;
         var final_url = proxy + url;
         fetch(final_url)
         .then(response => response.json())
         .then(data =>{
           this.categories = data
           this.data = JSON.parse(JSON.stringify(data))
           
         })
        }
      },
    created(){
      this.fetchCategory()
    }
}
</script>