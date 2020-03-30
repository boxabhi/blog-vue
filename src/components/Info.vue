<template>

  <div class="site-section">
    <div class="container">

      <div v-if="isLoading" class="container text-left ">
        <Spinner></Spinner>
      </div>

      <div class="row" v-else>
        <div class="col-lg-8 single-content">
          <p class="mb-5">
            <img :src="blog.display_image" alt="Image" class="img-fluid">
          </p>
          <h1 class="mb-4">
            {{blog.title}}
          </h1>
          <div class="post-meta d-flex mb-5">

            <div class="vcard">
              <span class="d-block"><a href="#">{{blog.author}}</a> in <a href="#">{{blog.category}}</a></span>
              <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span
                  class="icon-star2"></span></span>
            </div>
          </div>
          <p class="text-justify p-1 content" style="font-size:18px" v-html="blog.content">

          </p>


          <div class="mt-5">
            <h5 class="text-uppercase"><b>Social Links</b></h5>
            <div class="d-flex mb-5 mt-2">
              <div class="bg-secondary  p-3 m-1">
               <a href="" class="text-white"> <i class="fab fa-facebook"></i></a>
              </div>
              <div class="bg-info text-white p-3 m-1">
               <a href="" class="text-white">  <i class="fab fa-facebook-f"></i></a>
              </div>
              <div class="bg-danger text-white p-3 m-1">
               <a href="" class="text-white">  <i class="fab fa-youtube"></i></a>
              </div>
              <div class="bg-primary text-white p-3 m-1">
                <a href="" class="text-white"> <i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>


          <div class="container">
            <h3>Watch the Youtube video</h3>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ltzlhAxJr74" frameborder="0"
                allowfullscreen> </iframe>
            </div>


             <div class="embed-responsive embed-responsive-16by9 mt-5">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ltzlhAxJr74" frameborder="0"
                allowfullscreen> </iframe>
            </div>
          </div>


          <div class="pt-5">
            <p>Categories: <a href="#">{{blog.category}}</a></p>
          </div>



        </div>



        <div class="col-lg-3 ml-auto">
          <div class="section-title">
            <h2>Popular Posts</h2>
          </div>

          <div class="trend-entry d-flex " v-for="(trending,times) in allTrendings.slice(0,5)" v-bind:key="trending.id">
            <div class="number align-self-start">
              {{times+1}}
            </div>
            <div class="trend-contents">
              <h2><a>
                  {{ (trending.title).substring(0,30) }}
                </a></h2>
              <div class="post-meta">
                <span class="d-block"><a href="#">{{trending.author}}</a> in <a
                    href="#">{{trending.category}}</a></span>
                <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span
                    class="icon-star2"></span></span>
              </div>
            </div>
          </div>


          <p>
            <a href="#" class="more">See All Popular <span class="icon-keyboard_arrow_right"></span></a>
          </p>
        </div>


      </div>

    </div>
  </div>
</template>

<style>
  .image img {
    height: 450px !important;
    width: 700px;
  }

  @media only screen and (max-width: 600px) {
    .image img {
      margin-top: 25px;
      height: 200px !important;
      width: 350px;
    }

  }

  .iframe {
    border: none;

  }
</style>

<script>
  import Spinner from 'vue-simple-spinner'
  import axios from 'axios'
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  //import {store} from './store/store'
  export default {
    components: {
      Spinner,
    },
    name: 'Info',
    props: ['id'],

    data() {
      return {
        blog: {},
        isLoading: true,
      }
    },
    computed: mapGetters(['allTrendings']),

    created() {
      this.getBlog(),
        this.fetchTrendings()

    },
    methods: {
      ...mapActions(['fetchTrendings']),
      async getBlog() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://ckclub.in/v2/api/blog/${this.id}`)
          .then(response => {
            this.blog = (response.data)
            this.isLoading = false
          })
      },

    },

  }
</script>