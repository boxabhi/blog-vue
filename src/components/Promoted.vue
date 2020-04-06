<template>
    

    <div class="py-0">
      <div class="container">
        <div class="half-post-entry d-block d-lg-flex bg-light" v-if="allPromoted.length > 0">
          <div class="img-bg"
          
          v-bind:style="{ 'background-image': 'url(http://ckclub.in/v2/public/images/' + allPromoted[0].display_image + ')' }"
           
           ></div>
          <div class="contents">
            <span class="caption">Views content</span>
            <h2>
               <router-link :to="`/detail/${allPromoted[0].slug}`" >
                 <a href="">
             {{(allPromoted[0].title).substring(0,70)}}</a>
               </router-link></h2>
            <p class="mb-3" v-html="(allPromoted[0].content).substring(0,350)">
            
            </p>
            <div class="post-meta">
              <span class="d-block"><a href="#"> {{(allPromoted[0].author)}}</a> in <a href="#">
               
                {{(allPromoted[0].category)}}
                
                </a></span>
              <span class="date-read"> <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
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