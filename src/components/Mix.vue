<template>
      <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" v-if="foods.length > 0">
            <div class="section-title">
              <h2>Food</h2>
            </div>
            <div class="post-entry-2 d-flex" v-for="food in foods.slice(0,3)" v-bind:key="food.id">
              <div class="thumbnail" v-bind:style="{ 'background-image': 'url(' + food.display_image + ')' }"></div>
              <div class="contents">
                <h2><a href="blog-single.html">{{food.title}}</a></h2>
                <p class="mb-3">
                  {{(food.content).substring(0,100)}}</p>
                <div class="post-meta">
                  <span class="d-block"><a href="#">{{food.author}}</a> in <a href="#">{{food.category}}</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>
          
          </div>
          <div class="col-lg-6" v-if="fashion.length > 0">
            <div class="section-title">
              <h2>Fashion</h2>
            </div>
            <div class="post-entry-2 d-flex" v-for="fash in fashion.slice(0,3)" v-bind:key="fash.id">
              <div class="thumbnail" v-bind:style="{ 'background-image': 'url(' + fash.display_image + ')' }"></div>
              <div class="contents">
                <h2><a href="blog-single.html">
                  
                 {{fash.title}}
                  </a></h2>
                <p class="mb-3">
              {{(fash.content).substring(0,100)}}</p>
                <div class="post-meta">

                  <span class="d-block">
                    <a href="#">{{fash.author}}</a> in <a href="#">{{fash.category}}</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>


</template>

<script>
export default {
    name : 'Mix',
   
    data(){
      return{
          foods : [],
          fashion : []
      }
    },
    methods :{
      async fetchByCategory(){
          var proxy = "https://cors-anywhere.herokuapp.com/";
         var url = `http://ckclub.in/v2/api/blog/category/food`;
         var final_url = proxy + url;
         await fetch(final_url)
         .then(response => response.json())
         .then(data =>{
           this.foods =  data
           this.foods = JSON.parse(JSON.stringify(this.foods))
           console.log(this.foods)
         })
        },
      async fetchFashion() {
         var proxy = "https://cors-anywhere.herokuapp.com/";
         var url = `http://ckclub.in/v2/api/blog/category/Fashion`;
         var final_url = proxy + url;
         await fetch(final_url)
         .then(response => response.json())
         .then(data =>{
           this.fashion =  data
           this.fashion = JSON.parse(JSON.stringify(this.fashion))
      })
      }
      },
    created(){
  // this.fetchByCategory(),
    //  this.fetchFashion()
     
    }
}
</script>