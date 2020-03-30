<template>
  <div class="site-section">  
    <div v-if="allBlogs.length <= 0">
          <Spinner></Spinner>
    </div>
         <div class="container">
      <div class="row" v-if="allBlogs.length > 0">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h2 >Editor's Pick</h2>
              </div>
            </div>
          </div>
          <div class="row">

            <div class="col-md-6" >
              <div class="post-entry-1">
               <router-link :to="`/detail/${allBlogs[0].id}`">
                  <a>
                    <img v-bind:src="allBlogs[0].display_image" :alt="allBlogs[3].slug"
                     class="img-fluid"></a>
                </router-link>
                <h2>
                 <router-link :to="`/detail/${allBlogs[0].id}`">
                    <a>
                      {{(allBlogs[0].title).substring(0,70)}}</a>
                  </router-link>
                </h2>
                <p v-html="(allBlogs[0].content).substring(0,400)">
               
                </p>
                <div class="post-meta">
                  <span class="d-block"><a href="#">{{allBlogs[3].author}}</a>
                    in <a>
                      {{allBlogs[0].category}}</a></span>
                  <span class="date-read">{{allBlogs[0].created_at}}
                    <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>


            <div class="col-md-6">
              <div class="post-entry-2 d-flex bg-light" v-for="blog in allBlogs.slice(0,4)"
               v-bind:key="blog.id">
                <div class="thumbnail" 
                v-bind:style="{ 'background-image': 'url(' + blog.display_image + ')' }"></div>
                <div class="contents">
                  <h2>
                    <router-link :to="`/detail/${blog.id}`">
                    <a>
                      {{blog.title}}</a>
                    </router-link> </h2>
                  <div class="post-meta">
                    <span class="d-block">
                      <a href="#">{{blog.author}}</a> in <a href="#">{{blog.category}}</a></span>
                    <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span
                        class="icon-star2"></span></span>
                  </div>
                </div>
              </div>
            </div>


          </div>

         

        </div>


        <div class="col-lg-4" v-if="allTrendings.length > 0">
          <div class="section-title">
            <h2>Trending</h2>
          </div>
          <div  v-for="(trending,times) in allTrendings.slice(0,4)" v-bind:key="trending.id">
         <div class="trend-entry d-flex">
              <div class="number align-self-start">{{times + 1}}</div>
              <div class="trend-contents">
                <h2>
                  <router-link :to="trending.id" ><a href="">
                  {{(trending.title).substring(0,100)}}</a>
                  </router-link>
                  </h2>
                <div class="post-meta">
                  <span class="d-block"><a href="#">{{trending.author}}</a> in
                   <a href="#">{{trending.category}}</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>

          </div>
          <p>
            <a href="#" class="more">See All trends.. <span class="icon-keyboard_arrow_right"></span></a>
          </p>
        </div>
        
      </div>
   
    </div>
  </div>

</template>


<script>
import Spinner from 'vue-simple-spinner'
import {mapGetters,mapActions } from 'vuex';

  export default {
    components: {
    Spinner,
  },
    name: 'Top',
    computed : mapGetters ([
      'allBlogs','allTrendings'

    ]),
   
    data() {
      return {
         show : true
        }
    },
    created() {
     this.fetchBlogs()
     this.fetchTrendings()
     this.index()
    },
    methods: {
      ...mapActions(['fetchBlogs','fetchTrendings']),
      index(){
        console.log("Trending", this.allTrendings)
        console.log("Fucking Vue js",this.allBlogs)
      }
    },
    
    

  }
</script>