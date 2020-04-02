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
            <div v-if="blogs.length <= 0" class="mt-5 pb-5 mb-5">
                 <Spinner class="mt-5 pt-5"></Spinner>
             </div>
            <div v-else class="post-entry-2 d-flex" v-for="blog in blogs" v-bind:key="blog.id">
              <div class="thumbnail order-md-2" v-bind:style="{ 'background-image': 'url(' + blog.display_image + ')' }"></div>
              <div class="contents order-md-1 pl-0">
                <h2>
                  
                  <router-link :to="trending.id"><a href="">
                    
                    {{(blog.title).substring(0,80)}}
                    </a>
                  </router-link>
                    </h2>
                <p class="mb-3" v-html="(blog.content).substring(0,150)">
                    </p>
                <div class="post-meta">
                  <span class="d-block"><a href="#">{{blog.author}}</a> in <a href="#">{{blog.category}}</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>
          </div>

        <Popular/>
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
import Popular from "@/components/Popular.vue"
 import {
    mapGetters,
  } from 'vuex';

export default {
    name : 'BlogCategory',
    props: ['category'],
    components: {
    Spinner,
    Popular,
  },
  computed: mapGetters(['allTrendings']),
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