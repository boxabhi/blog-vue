<template>
    <div>
         <div class="site-section">
             
          
      <div class="container" >
        <div class="row">
          <div class="col-lg-9">
            <div class="section-title">
              <span class="caption d-block small">Categories</span>
              <h2 class="text-uppercase">{{$route.params.category}}</h2>
              
            </div>
            <div v-if="blogs.length <= 0">
                 <Spinner></Spinner>
             </div>
            <div v-else class="post-entry-2 d-flex" v-for="blog in blogs" v-bind:key="blog.id">
              <div class="thumbnail order-md-2" v-bind:style="{ 'background-image': 'url(' + blog.display_image + ')' }"></div>
              <div class="contents order-md-1 pl-0">
                <h2><a href="blog-single.html">{{(blog.title).substring(0,80)}}</a></h2>
                <p class="mb-3" v-html="(blog.content).substring(0,150)">
                    </p>
                <div class="post-meta">
                  <span class="d-block"><a href="#">{{blog.author}}</a> in <a href="#">{{blog.category}}</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>
          </div>


          <div class="col-lg-3">
            <div class="section-title">
              <h2>Popular Posts</h2>
            </div>

            <div class="trend-entry d-flex">
              <div class="number align-self-start">01</div>
              <div class="trend-contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <div class="post-meta">
                  <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>
            
            <p>
              <a href="#" class="more">See All Popular <span class="icon-keyboard_arrow_right"></span></a>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <ul class="custom-pagination list-unstyled">
              <li><a href="#">1</a></li>
              <li class="active">2</li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    </div>
</template>


<script>
import Spinner from 'vue-simple-spinner'
import axios from 'axios';


export default {
    name : 'BlogCategory',
    props: ['category'],
    components: {
    Spinner,
  },
    data(){
        return{
            value : this.$props.category.category,
            blogs : [],
            slug : this.category.category
        }
    },
     methods:{
       async fetchBlogCategory(){
           const result = await axios.get(`https://cors-anywhere.herokuapp.com/http://ckclub.in/v2/api/blog/category/${this.slug}`)
            console.log(result.data)
            this.blogs = (result.data)
        },
        async newBlog(category){
          const data = await axios.get(`https://cors-anywhere.herokuapp.com/http://ckclub.in/v2/api/blog/category/${category}`)
            console.log(data.data)
            this.blogs = data.data
        }
     },
    created() {
      this.fetchBlogCategory();
      this.newBlog()
     },
    watch: {
    '$route.params.category': function (category) {
      this.blogs = []
      console.log('EVent trigger'+category)
      this.newBlog(category)

    }
  },
}
</script>