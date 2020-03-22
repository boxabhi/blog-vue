<template>
  <div class="details">
      <Navbar />
    
      <Info :id="id.id" />
      <Footer />
  </div>
</template>


<script>
import Info from '@/components/Info.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
     name: 'Details',

     data(){
       return{
         id : this.$route.params,
       }
       
     },
  components: {
      Navbar,
      Info,
      Footer,
  }
}
</script>