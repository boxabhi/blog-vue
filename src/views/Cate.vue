<template>
  <div class="details">
      <Navbar />
        <BlogCategory :category="category" />
      <Footer />
  </div>
</template>


<script>

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import BlogCategory from '@/components/BlogCategory.vue'

export default {
     name: 'Details',
     data(){
       return{
         category : this.$route.params,
       }
       
     },
  components: {
      Navbar,
      Footer,
      BlogCategory
  }
}
</script>