<template>
  <div class="main">
    <Navbar/>
    <Main />
   <Top/>
   <Promoted />
   <Mix/>
   <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Navbar from '@/components/Navbar.vue'
import Top from '@/components/Top.vue'
import Promoted from '@/components/Promoted.vue'
import Mix from '@/components/Mix.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Main,
    Navbar,
   Top,
   Promoted,
   Mix,
   Footer,
  }
}
</script>
