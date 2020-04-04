<template>

  <div class="site-section">
   
    <div class="container">
      <div v-if="isLoading" class="container text-left mt-5 mb-5 pb-5">
        <Spinner></Spinner>
      </div>

      <div class="row" v-else>
        <div class="col-lg-8 single-content">
          <p class="mb-5">
            <img :src="`http://ckclub.in/v2/public/images/${blog.display_image}`" alt="Image" class="img-fluid" style="max-height:500px">
          </p>
          <h1 class="mb-4">
            {{blog.title}}
          </h1>
          <div class="post-meta d-flex mb-5">

            <div class="vcard">
              <span class="d-block"><a href="#">{{blog.author}}</a> in <a href="#">{{blog.category}}</a></span>
              <span class="date-read"> <span class="mx-1">&bullet;</span> 3 min read <span
                  class="icon-star2"></span></span>
            </div>
          </div>
          <p class="text-justify p-1 content" style="font-size:18px" v-html="blog.content">

          </p>


          <div class="mt-5">
            <h5 class="text-uppercase"><b>Social Links</b></h5>
            <div class="d-flex mb-5 mt-2">
              <div class="bg-secondary  p-3 m-1">
               <a href="https://www.facebook.com/" class="text-white"> <i class="fab fa-facebook"></i></a>
              </div>
              <div class="bg-info text-white p-3 m-1">
               <a href="https://www.facebook.com/cricketacademyofpathanslucknow/" class="text-white">  <i class="fab fa-facebook-f"></i></a>
              </div>
              <div class="bg-danger text-white p-3 m-1">
               <a href="https://www.youtube.com/" class="text-white">  <i class="fab fa-youtube"></i></a>
              </div>
              <div class="bg-primary text-white p-3 m-1">
                <a href="https://www.youtube.com/" class="text-white"> <i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>

       
          <div class="container" v-if="blog.youtube_link_one != '#'">
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

      <Popular />

      </div>

    </div>
  </div>
</template>

<style>
  .image img {
    height: 450px !important;
    width: 700px;
  }
  .wp-block-image img{
     height: 450px !important;
    width: 700px;
  }
  @media only screen and (max-width: 600px) {
    .image img {
      margin-top: 25px;
      height: 200px !important;
      width: 350px;
    }
    .wp-block-image img{
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
  import Popular from "@/components/Popular.vue"
  import axios from 'axios'
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  //import {store} from './store/store'
  export default {
    components: {
      Spinner,
      Popular
    },
    name: 'Info',
    props: ['id'],

    data() {
      return {
        blog: [],
        isLoading: true,
        slug : this.$route.params.id,
      }
    },
    computed: mapGetters(['allTrendings']),

    created() {
      this.getBlog(this.slug),
        this.fetchTrendings()

    },
    methods: {
      ...mapActions(['fetchTrendings']),
      async getBlog(slug) {
        axios.get(`https://cors-anywhere.herokuapp.com/http://ckclub.in/v2/api/blog/${slug}`)
          .then(response => {
           // console.log(response.data[0])
            this.blog = (response.data[0])
            this.isLoading = false
          })
      },

    },
     watch: {
    '$route.params.id': function (id) {
      this.isLoading = true
      this.getBlog(id)
      console.log('Event trigger'+id)
     // this.newBlog(category)

    }
}

  }
</script>