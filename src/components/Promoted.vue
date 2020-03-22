<template>
    

    <div class="py-0">
      <div class="container">
        <div class="half-post-entry d-block d-lg-flex bg-light" v-if="promoted_blog.length > 0">
          <div class="img-bg"
          
          v-bind:style="{ 'background-image': 'url(' + promoted_blog.display_image + ')' }"
           
           ></div>
          <div class="contents">
            <span class="caption">Best content</span>
            <h2><a href="blog-single.html">
             {{(promoted_blog.title).substring(0,70)}}</a></h2>
            <p class="mb-3">
              {{(promoted_blog.content).substring(0,350)}}
            </p>
            <div class="post-meta">
              <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
              <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
            </div>

          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
    name : 'Promoted',
    data(){
      return{
        promoted_blog : []
    }
    },
    methods : {
        fetchPromotedBlog(){
        var proxy = "https://cors-anywhere.herokuapp.com/";
         var url = `http://ckclub.in/v2/api/promoted`;
         var final_url = proxy + url;
         fetch(final_url)
         .then(response => response.json())
         .then(data => {
           this.promoted_blog = JSON.parse(JSON.stringify(data[0]));
         
           console.log('This is promoted'+this.promoted)
         })
        }
    },
    created(){
       this.fetchPromotedBlog();
    }
}
</script>