<template>
  <div>
    <nav v-if="allCategories.length > 0" class="site-navigation position-relative text-right" role="navigation">
      <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
        <li class="active">
          <router-link to="/">
            <a href="" class="nav-link text-left">Home</a>
            </router-link>
        </li>
       
        <li v-for="category in allCategories" v-bind:key="category.id">
         <router-link :to="`/category/${category.category}`"> 
         <a href="" class="nav-link text-left" v-if="category.category != 'Others'">{{category.category}}</a>
         </router-link>
        </li>
       
      </ul>
    </nav>
   
    <div v-else>
      Loading...
    </div>

   
  </div>
</template>

<script>
  import { mapActions, mapGetters} from 'vuex';
  export default {
    name: 'Category',
    computed: mapGetters([
      'allCategories'
    ]),
    data() {
      return {
      }
    },
    methods: {
      ...mapActions(['fetchCategories']),
    },
    mounted() {
      this.fetchCategories();
    }
  }
</script>