<template>
      <div class="site-section">
       
      <div class="container">
        <div class="row">
          <div class="col-lg-6" v-if="allFood.length > 0">
            <div class="section-title">
              <h2>Food</h2>
            </div>
            <div class="post-entry-2 d-flex" v-for="food in allFood.slice(0,3)" v-bind:key="food.id">
              <div class="thumbnail" v-bind:style="{ 'background-image': 'url(http://ckclub.in/v2/public/images/' + food.display_image + ')' }"></div>
              <div class="contents">
                <h2><a>
                  {{ (food.title).substring(0,50) }}
                  </a></h2>
               <p class="mb-3" v-html="(food.content).substring(0,150)">
                  </p>
                <div class="post-meta">
                  <span class="d-block"><a href="#">{{food.author}}</a> in <a href="#">{{food.category}}</a></span>
                  <span class="date-read"> <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" v-if="allFashion.length > 0">
            <div class="section-title">
              <h2>Fashion</h2>
            </div>
            <div class="post-entry-2 d-flex" v-for="fashion in allFashion.slice(0,3)" v-bind:key="fashion.id">
              <div class="thumbnail" v-bind:style="{ 'background-image': 'url(http://ckclub.in/v2/public/images/' + fashion.display_image + ')' }"></div>
              <div class="contents">
                <h2><a href="blog-single.html">
                   {{ (fashion.title).substring(0,50) }}
                  </a></h2>
                <p class="mb-3 keep-spaces" v-html="(fashion.content).substring(0,150)">
                  </p>
                <div class="post-meta">
                  <span class="d-block"><a href="#">{{fashion.author}}</a> in <a href="#">{{fashion.category}}</a></span>
                  <span class="date-read"> <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>


</template>


<script>
 import { mapGetters} from 'vuex';
export default {
    name : 'Mix',
     computed: mapGetters([
      'allFood','allFashion'
    ]),
    data(){
      return{
          loaded : false,
      }
    },
    methods :{

      },
    created(){
  
    }
}
</script>