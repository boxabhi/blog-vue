<template>
    
      <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Editor's Pick</h2>
                </div>
              </div>
            </div>
            <div class="row">

              <div class="col-md-6">
                <div class="post-entry-1">
            <router-link to="/detail">   
               <a href="post-single.html" >
                    <img v-bind:src="latest_blog.display_image" 
                     alt="Image" class="img-fluid"></a></router-link>
                  <h2>
                    <a href="blog-single.html">
                      {{(latest_blog.title).substring(0,85)}}</a></h2>
                  <p>
                    {{(latest_blog.content).substring(0,250)}}
                  </p>  
                  <div class="post-meta">
                    <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                    <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                  </div>
                </div>
              </div>

              
              <div class="col-md-6" >
                <div class="post-entry-2 d-flex bg-light" v-for="blog in blogs" v-bind:key="blog.id">
                  <div class="thumbnail" 
                  v-bind:style="{ 'background-image': 'url(' + blog.display_image + ')' }"></div>
                  <div class="contents">
                    <h2><a href="blog-single.html">
                     {{blog.title}}</a></h2>
                    <div class="post-meta">
                      <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
              </div>
              
           
          </div>
          </div>


          <div class="col-lg-4">
            <div class="section-title">
              <h2>Trending</h2>
            </div>

<div v-for="blog in blogs" v-bind:key="blog.id">
            <div class="trend-entry d-flex">
              <div class="number align-self-start justify-content">{{blog.id}}</div>
              <div class="trend-contents">
                <h2 class="justify-content"><a href="blog-single.html">
               {{ (blog.title).substring(0,100)}}
                  </a></h2>
                <div class="post-meta">
                  <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>

</div>
            <p>
              <a href="#" class="more">See All Trends <span class="icon-keyboard_arrow_right"></span></a>
            </p>

          </div>
        </div>
      </div>
    </div>

</template>


<script>


export default {
    name : 'Top',
    data(){
      return {
        latest_blog : {},
        promoted_blog : {
          "id": 1,
"title": "Chatores in Lucknow, listen up! ​ Plan your next evening hangout here at Ravi Batashe Wale in Chowk",
"content": "Hailed by many names such as pani ke batashe, golgappe, phuchkas and even water balls, panipuri holds the position of being a comfort snack. Almost always there's an instant hit of nostalgia the moment you mouth the first crispy bite and then further on, there's no stopping at one. Panipuri has been our go-to snack after school, college, work and even on the occasion of a brief halt during our evening strolls with siblings or friends.  Lucknow being the epicentre of chaat's birth, does panipuris in every nook and corner which are absolutely fit for the royals too. But amidst all the options we have, one stall which makes us drool even in our dreams, is definitely Ravi Batashe Wale here in Chowk!  What's Good?   As soon as you enter the Gol Darwaza, take a turn towards the Chowk Kotwali and you'll see Ravi bhaiyya tending to his drooling customers in quick motion. That has been the case for over 30 years now and gradually over time, his fame has branched out to other cities as well- tourists and locals alike, frolic his kiosk on a daily basis.  From a distance, you'll not know what exactly makes him so popular because he looks just like any other batashe wale bhaiyya in Lucknow. But the moment you take a dona in hand and mouth the first batasha, you'll know what we're talking about! What makes him utterly awaited in this corner every day, are the 12 different sorts of chutney he serves with each batasha and for a plate of this deliciousness, you've gotta shed only ₹30 from your pockets.    Ravi Batashe offers us seasonings like hing, pudina, hari mirch, dhaniya, jeera, aam, nimbu, mixed, amidst other variants and in the end, a sukhi puri with a blend of all the flavours winds up our snacking sesh here. Everything Ravi bhaiya serves here, ranging from the puris to the fillings and the chutneys, is homemade and the quality has remained consistent throughout the years.  Knock Knock Golgappas are something we can never say no to, no matter how full our tummies are and we always save a secret space saved for these mouth-watering delicacies. You can find Ravi bhaiyya here everyday from 4 PM to 10 PM and if you're a true-blue chatora/chatori, you can be missing out on this one!",
"description": "Broad desciption about Lucknow Pani puri",
"display_image": "https://i.pinimg.com/originals/5a/d8/ef/5ad8ef4e780cefa4268a586e82f945f6.jpg",
"created_at": "2020-03-18 16:37:15",
"updated_at": "2020-03-18 16:37:15"

        },
        blogs : [{
"id": 1,
"title": "Chatores in Lucknow, listen up! ​ Plan your next evening hangout here at Ravi Batashe Wale in Chowk",
"content": "Hailed by many names such as pani ke batashe, golgappe, phuchkas and even water balls, panipuri holds the position of being a comfort snack. Almost always there's an instant hit of nostalgia the moment you mouth the first crispy bite and then further on, there's no stopping at one. Panipuri has been our go-to snack after school, college, work and even on the occasion of a brief halt during our evening strolls with siblings or friends.  Lucknow being the epicentre of chaat's birth, does panipuris in every nook and corner which are absolutely fit for the royals too. But amidst all the options we have, one stall which makes us drool even in our dreams, is definitely Ravi Batashe Wale here in Chowk!  What's Good?   As soon as you enter the Gol Darwaza, take a turn towards the Chowk Kotwali and you'll see Ravi bhaiyya tending to his drooling customers in quick motion. That has been the case for over 30 years now and gradually over time, his fame has branched out to other cities as well- tourists and locals alike, frolic his kiosk on a daily basis.  From a distance, you'll not know what exactly makes him so popular because he looks just like any other batashe wale bhaiyya in Lucknow. But the moment you take a dona in hand and mouth the first batasha, you'll know what we're talking about! What makes him utterly awaited in this corner every day, are the 12 different sorts of chutney he serves with each batasha and for a plate of this deliciousness, you've gotta shed only ₹30 from your pockets.    Ravi Batashe offers us seasonings like hing, pudina, hari mirch, dhaniya, jeera, aam, nimbu, mixed, amidst other variants and in the end, a sukhi puri with a blend of all the flavours winds up our snacking sesh here. Everything Ravi bhaiya serves here, ranging from the puris to the fillings and the chutneys, is homemade and the quality has remained consistent throughout the years.  Knock Knock Golgappas are something we can never say no to, no matter how full our tummies are and we always save a secret space saved for these mouth-watering delicacies. You can find Ravi bhaiyya here everyday from 4 PM to 10 PM and if you're a true-blue chatora/chatori, you can be missing out on this one!",
"description": "Broad desciption about Lucknow Pani puri",
"display_image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/FNK_Pani-Puri_s4x3.jpg.rend.hgtvcom.826.620.suffix/1546894450909.jpeg",
"created_at": "2020-03-18 16:37:15",
"updated_at": "2020-03-18 16:37:15"
},
{
"id": 3,
"title": "Netram jalebis in Aminabad have truly stood the test of time & every  Lucknowite can vouch for it!",
"content": "When in Lucknow, there are truly no dearth of grub options for you; you name your cravings and the city has surely got it. So on any such occasion, if you find yourself looking for a kick-start to your day through a plate of tummy pleasing breakfast, then we've the perfect place for you. Over a century old, Net Ram Mithai here in Aminabad, is one of the classic confectioneries of Lucknow, where you'll find tons of Lucknowites coming over for their brekkie episode.  What's Good?   On the ground floor, Netram Ajay Kumar resembles just another sweetshop and on the first floor, there is a basic eatery- but this joint is anything but basic, when it comes to its offerings! Run by the 5th generation of the founder, Net Ram Mithai is widely famed for their stuffed puri (also known as bedmi) and sabzi which comes with four different kinds of curry and their desi ghee jalebis are colossal crowd-pleasers as well.  One of the oldest and the most famous chaat shops in Aminabad, Netram serves their specialities throughout the day, which can make for an entire meal or a hearty snack, for you. But do take note, the jalebis are subject to availability and they are best eaten as a post-breakfast option, if you want 'em to be piping fresh.  Knock Knock So when in and around this locale, you've gotta come over here for your breakfast session, at least once! Take bae on a desi nashta date or just drop by on a lazy Sunday morning for your fix of their deliciousness- we know, you won't be disappointed.  Location: Shri Ram Rd, Mohan Market, Kamla Market, Swadeshi Market, Aminabad, Lucknow  Timings: 7am – 9:30pm  Cost: ₹200 for two people (approx.)",
"description": "Lucknow Famous Jalebi",
"display_image": "https://thumbs.dreamstime.com/b/jalebi-jalebi-also-known-as-zulbia-sweet-popular-countries-south-asia-west-asia-north-africa-east-africa-made-98815172.jpg",
"created_at": "2020-03-18 16:41:16",
"updated_at": "2020-03-18 16:41:16"
},
{
"id": 4,
"title": "Booze-heads rejoice! The Tipsy Trunk in Alambagh is now pouring your favourite liquor!",
"content": "When in Alambagh, The Tipsy Trunk is our favourite place to be! This quirky, fun and modern place is always on top of our go-to list as the vibe here is pretty great. And with the latest news you can totally be ready for your next party at this amazing place in town.  The Tipsy Trunk is now serving a full bar for all of us booze-heads who've been wanting a sip of something more than the basic mocktails and soft drinks. T3 is ready to blow your minds, with its amazing food, music & an all new bar!  A full bar, a dance floor and epic music!   If there was ever a checklist that could tell you what makes a party place popular among people, it would have to be the three deciding 'Ds'- Drinks, Dance Floor and DJ. The three things that have the capacity to make any party happening and any hangout place, super fun!  The Tipsy Trunk has anyway been one of our favourites this side of the city, with its great vibe and great music. However, the last and the missing piece has always been booze and the lack of it. Now that T3 has finally launched a full bar menu, you can plan your next party there, without a second thought. Tipsy is now a place that checks of the boxes; it is the go-to for anyone who's looking for an epic time!  Knock Knock    content3.jdmagicbox.com   Though we have long been fans of The Tipsy Trunk, the introduction of a full bar here surely kicks the appeal up several notches. The booze-heads finally have a new hangout address in Lucknow! So head to The Tipsy trunk today and grab a beer, a sangria, the classic screwdriver or anything you want and get the party started.  Location: B-76, Sector B, LDA Colony, Kanpur Road, Opposite Phoenix Mall, Alambagh, Lucknow",
"description": "Liquior shop in Lukcnow",
"display_image": "https://www.liquorlibrarylv.com/s/img/emotionheader13672381.JPG?1488224377.920px.718px",
"created_at": "2020-03-19 09:24:54",
"updated_at": "2020-03-19 09:24:54"
}],
        articles : {
          id : '',
          title : '',
          body : '',

        }
        } 
      },
      created() {
        this.fetchArticles();
      },
      methods : {
        fetchArticles(){
         this.latest_blog = this.blogs[0];
         console.log("Success");
       
        }
      }
    
}


</script>