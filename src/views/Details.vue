<template>
  <div class="details">
      <Navbar />
      <Info :a="a" />
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
         a : "abc",
         blog : {
           "id": 3,
"title": "Netram jalebis in Aminabad have truly stood the test of time & every  Lucknowite can vouch for it!",
"content": "When in Lucknow, there are truly no dearth of grub options for you; you name your cravings and the city has surely got it. So on any such occasion, if you find yourself looking for a kick-start to your day through a plate of tummy pleasing breakfast, then we've the perfect place for you. Over a century old, Net Ram Mithai here in Aminabad, is one of the classic confectioneries of Lucknow, where you'll find tons of Lucknowites coming over for their brekkie episode.  What's Good?   On the ground floor, Netram Ajay Kumar resembles just another sweetshop and on the first floor, there is a basic eatery- but this joint is anything but basic, when it comes to its offerings! Run by the 5th generation of the founder, Net Ram Mithai is widely famed for their stuffed puri (also known as bedmi) and sabzi which comes with four different kinds of curry and their desi ghee jalebis are colossal crowd-pleasers as well.  One of the oldest and the most famous chaat shops in Aminabad, Netram serves their specialities throughout the day, which can make for an entire meal or a hearty snack, for you. But do take note, the jalebis are subject to availability and they are best eaten as a post-breakfast option, if you want 'em to be piping fresh.  Knock Knock So when in and around this locale, you've gotta come over here for your breakfast session, at least once! Take bae on a desi nashta date or just drop by on a lazy Sunday morning for your fix of their deliciousness- we know, you won't be disappointed.  Location: Shri Ram Rd, Mohan Market, Kamla Market, Swadeshi Market, Aminabad, Lucknow  Timings: 7am – 9:30pm  Cost: ₹200 for two people (approx.)",
"description": "Lucknow Famous Jalebi",
"display_image": "https://thumbs.dreamstime.com/b/jalebi-jalebi-also-known-as-zulbia-sweet-popular-countries-south-asia-west-asia-north-africa-east-africa-made-98815172.jpg",
"created_at": "2020-03-18 16:41:16",
"updated_at": "2020-03-18 16:41:16"
}
         }
       
     },
  components: {
      Navbar,
      Info,
      Footer,
  }
}
</script>