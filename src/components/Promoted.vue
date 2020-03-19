<template>
    

    <div class="py-0">
      <div class="container">
        <div class="half-post-entry d-block d-lg-flex bg-light">
          <div class="img-bg"
          
          v-bind:style="{ 'background-image': 'url(' + promoted_blog.display_image + ')' }"
           
           ></div>
          <div class="contents">
            <span class="caption">Best content</span>
            <h2><a href="blog-single.html">
             {{(promoted_blog.title).substring(0,70)}}</a></h2>
            <p class="mb-3">
              {{(promoted_blog.content).substring(0,350)}}
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
export default {
    name : 'Promoted',
    data(){
      return{
        promoted_blog : {
              "id": 1,
"title": "In a first, KNK Salon & Academy in Lucknow, is setting 'semi-permanent makeup' goals in the city",
"content": "Hailed by many names such as pani ke batashe, golgappe, phuchkas and even water balls, panipuri holds the position of being a comfort snack. Almost always there's an instant hit of nostalgia the moment you mouth the first crispy bite and then further on, there's no stopping at one. Panipuri has been our go-to snack after school, college, work and even on the occasion of a brief halt during our evening strolls with siblings or friends.  Lucknow being the epicentre of chaat's birth, does panipuris in every nook and corner which are absolutely fit for the royals too. But amidst all the options we have, one stall which makes us drool even in our dreams, is definitely Ravi Batashe Wale here in Chowk!  What's Good?   As soon as you enter the Gol Darwaza, take a turn towards the Chowk Kotwali and you'll see Ravi bhaiyya tending to his drooling customers in quick motion. That has been the case for over 30 years now and gradually over time, his fame has branched out to other cities as well- tourists and locals alike, frolic his kiosk on a daily basis.  From a distance, you'll not know what exactly makes him so popular because he looks just like any other batashe wale bhaiyya in Lucknow. But the moment you take a dona in hand and mouth the first batasha, you'll know what we're talking about! What makes him utterly awaited in this corner every day, are the 12 different sorts of chutney he serves with each batasha and for a plate of this deliciousness, you've gotta shed only ₹30 from your pockets.    Ravi Batashe offers us seasonings like hing, pudina, hari mirch, dhaniya, jeera, aam, nimbu, mixed, amidst other variants and in the end, a sukhi puri with a blend of all the flavours winds up our snacking sesh here. Everything Ravi bhaiya serves here, ranging from the puris to the fillings and the chutneys, is homemade and the quality has remained consistent throughout the years.  Knock Knock Golgappas are something we can never say no to, no matter how full our tummies are and we always save a secret space saved for these mouth-watering delicacies. You can find Ravi bhaiyya here everyday from 4 PM to 10 PM and if you're a true-blue chatora/chatori, you can be missing out on this one!",
"description": "Broad desciption about Lucknow Pani puri",
"display_image": "https://i.pinimg.com/originals/5a/d8/ef/5ad8ef4e780cefa4268a586e82f945f6.jpg",
"created_at": "2020-03-18 16:37:15",
"updated_at": "2020-03-18 16:37:15"
        }
      }
    }
}
</script>