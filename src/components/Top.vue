<template>
  <div class="site-section">
    <div class="py-0">
      <div class="container">
        <div class="half-post-entry d-block d-lg-flex bg-light" v-if="allBlogs.length > 0">
          <div class="img-bg" v-bind:style="{ 'background-image': 'url(http://ckclub.in/v2/public/images/' + allBlogs[3].display_image + ')' }">
          </div>
          <div class="contents">
            <span class="caption">Best content</span>
            <h2>
              <router-link :to="`/detail/${allBlogs[3].slug}`">
                <a href="" class="text-uppercase">
                  {{(allBlogs[3].title).substring(0,70)}}</a>
              </router-link>
            </h2>
            <p class="mb-3" v-html="(allBlogs[3].content).substring(0,350)">
              
            </p>
            <div class="post-meta">
              <span class="d-block"><a href="#">{{(allBlogs[3].author)}}</a> in
               <a href="#">{{(allBlogs[3].category)}}</a></span>
              <span class="date-read"> 
                <span class="mx-1">&bullet;</span> 3 min read <span
                  class="icon-star2"></span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="allBlogs.length <= 0" class="m-5 p-5">
      <Spinner class="mt-5 mb-5 pb-5"></Spinner>
    </div>
    <div class="container mt-5 pt-3">
      <div class="row" v-if="allBlogs.length > 0">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h2>Editor's Pick</h2>
              </div>
            </div>
          </div>
          <div class="row">

            <div class="col-md-6">
              <div class="post-entry-1">
                <router-link :to="`/detail/${allBlogs[1].slug}`">
                  <a>
                    <img v-bind:src="`http://ckclub.in/v2/public/images/${allBlogs[1].display_image}`" :alt="allBlogs[3].slug" class="img-fluid img-responsive" style="max-height:400px !important"></a>
                </router-link>
                <h2>
                  <router-link :to="`/detail/${allBlogs[1].slug}`">
                    <a>
                      {{(allBlogs[1].title).substring(0,32)}}</a>
                  </router-link>
                </h2>
                <p v-html="(allBlogs[1].content).substring(0,120)">

                </p>
                <div class="post-meta">
                  <span class="d-block"><a href="#">{{allBlogs[1].author}}</a>
                    in <a>
                      {{allBlogs[1].category}}</a></span>
                  <span class="date-read">
                    <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>


            <div class="col-md-6">
              <div class="post-entry-2 d-flex bg-light" v-for="blog in allBlogs.slice(0,4)" v-bind:key="blog.id">
                <div class="thumbnail" v-bind:style="{ 'background-image': 'url(http://ckclub.in/v2/public/images/' + blog.display_image + ')' }"></div>
                <div class="contents">
                  <h2>
                    <router-link :to="`/detail/${blog.slug}`">
                      <a>
                        {{(blog.title).substring(0,60)}}</a>
                    </router-link>
                  </h2>
                  <div class="post-meta">
                    <span class="d-block">
                      <a href="#">{{blog.author}}</a> in <a href="#">{{blog.category}}</a></span>
                    <span class="date-read"> <span class="mx-1">&bullet;</span> 3 min read <span
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
          <div v-for="(trending,times) in allTrendings.slice(0,4)" v-bind:key="trending.id">
            <div class="trend-entry d-flex">
              <div class="number align-self-start">{{times + 1}}</div>
              <div class="trend-contents">
                <h2>
                  <router-link :to="trending.slug"><a href="">
                      {{(trending.title).substring(0,100)}}</a>
                  </router-link>
                </h2>
                <div class="post-meta">
                  <span class="d-block"><a href="#">{{trending.author}}</a> in
                    <a href="#">{{trending.category}}</a></span>
                  <span class="date-read"> <span class="mx-1">&bullet;</span> 3 min read <span
                      class="icon-star2"></span></span>
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

<style>
.keep-spaces { white-space: pre-wrap; }
</style>

<script>
  import Spinner from 'vue-simple-spinner'
  import {
    mapGetters,
    mapActions
  } from 'vuex';
 
  export default {
    components: {
      Spinner,
    
    },
    name: 'Top',
    computed: mapGetters([
      'allBlogs', 'allTrendings'

    ]),

    data() {
      return {
        show: true
      }
    },
    created() {
      this.fetchBlogs()
      this.fetchTrendings()
      this.index()
    },
    methods: {
      ...mapActions(['fetchBlogs', 'fetchTrendings']),
      index() {
       
      }
    },



  }
</script>