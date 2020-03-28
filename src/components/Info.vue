<template>

  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 single-content" >
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


      <div class="container">
        <h3>Watch the Youtube video</h3>
        <iframe width="550" height="315" class="embed-responsive-item"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"  > </iframe>
      </div>



          <!-- <div class="pt-5">
            <p>Categories: <a href="#">Design</a>, <a href="#">Events</a> Tags: <a href="#">#html</a>, <a
                href="#">#trends</a></p>
          </div> -->
          
          

        </div>
      


        <div class="col-lg-3 ml-auto">
          <div class="section-title">
            <h2>Popular Posts</h2>
          </div>

          <div class="trend-entry d-flex">
            <div class="number align-self-start">01</div>
            <div class="trend-contents">
              <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
              <div class="post-meta">
                <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span
                    class="icon-star2"></span></span>
              </div>
            </div>
          </div>

          <div class="trend-entry d-flex">
            <div class="number align-self-start">02</div>
            <div class="trend-contents">
              <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
              <div class="post-meta">
                <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span
                    class="icon-star2"></span></span>
              </div>
            </div>
          </div>

          <div class="trend-entry d-flex">
            <div class="number align-self-start">03</div>
            <div class="trend-contents">
              <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
              <div class="post-meta">
                <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span
                    class="icon-star2"></span></span>
              </div>
            </div>
          </div>

          <div class="trend-entry d-flex pl-0">
            <div class="number align-self-start">04</div>
            <div class="trend-contents">
              <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
              <div class="post-meta">
                <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
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
    width : 700px;
}
@media only screen and (max-width: 600px) {
  .image img {
    margin-top: 25px;
    height: 200px !important;
    width : 350px;
  }
}
</style>

<script>
  export default {
    name: 'Info',
    props: ['id'],

    data() {
      return {
        blog: {},
      }
    },

    created() {
      this.fetchAricle()
    },
    methods: {
      fetchAricle() {
        var proxy = "https://cors-anywhere.herokuapp.com/";
        var url = `http://ckclub.in/v2/api/blog/${this.$props.id}`;
        var final_url = proxy + url;
        fetch(final_url)
          .then(response => response.json())
          .then(data => {
            this.blog = data;
            this.blog = JSON.parse(JSON.stringify(this.blog))

          })
      }
    }
  }
</script>