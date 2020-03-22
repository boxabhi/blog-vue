<template>
      <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-title">
              <h2>Food</h2>
            </div>
            <div class="post-entry-2 d-flex">
              <div class="thumbnail" style="background-image: url('images/img_v_1.jpg')"></div>
              <div class="contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <div class="post-meta">
                  <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>
          
          </div>
          <div class="col-lg-6">
            <div class="section-title">
              <h2>Business</h2>
            </div>
            <div class="post-entry-2 d-flex">
              <div class="thumbnail" style="background-image: url('images/img_v_1.jpg')"></div>
              <div class="contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <div class="post-meta">
                  <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
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
          foods : this.fetchByCategory("food"),
      }
    },
    methods :{
        fetchByCategory(category){
          var proxy = "https://cors-anywhere.herokuapp.com/";
         var url = `http://ckclub.in/v2/api/blog/category/${category}`;
         var final_url = proxy + url;
         fetch(final_url)
         .then(response => response.json())
         .then(data =>{
           console.log(data)
           return JSON.parse(JSON.stringify(data))
         })
        }
    },
    created(){
      this.fetchByCategory(),
      console.log(`This is foods : ${this.foods}`);
    }
}
</script>