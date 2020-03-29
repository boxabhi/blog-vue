<template>
    

    <div class="py-0">
      <div class="container">
        <div class="half-post-entry d-block d-lg-flex bg-light" v-if="allPromoted.length > 0">
          <div class="img-bg"
          
          v-bind:style="{ 'background-image': 'url(' + allPromoted[0].display_image + ')' }"
           
           ></div>
          <div class="contents">
            <span class="caption">Best content</span>
            <h2><a href="blog-single.html">
             {{(allPromoted[0].title).substring(0,70)}}</a></h2>
            <p class="mb-3">
              {{(allPromoted[0].content).substring(0,350)}}
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
import {mapActions,mapGetters} from 'vuex';
export default {
    name : 'Promoted',
    data(){
      return{
        promoted_blog : []
    }
    },
   computed : mapGetters ([
      'allPromoted'

    ]),
    methods : {
     ...mapActions(['fetchPromotedBlog']),
    },
    created(){
      this.fetchPromotedBlog();
    }
}
</script>