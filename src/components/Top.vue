<template>
    
      <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2 v-if="latest_blog.length > 0">Editor's Pick</h2>
                </div>
              </div>
            </div>
            <div class="row">

              <div class="col-md-6">
                <div class="post-entry-1">
            <router-link to="/detail">   
               <a href="post-single.html" >
                    <img v-bind:src="latest_blog[0].display_image" 
                     alt="Image" class="img-fluid"></a></router-link>
                  <h2>
                    <a href="blog-single.html">
                      {{(latest_blog[0].title).substring(0,70)}}</a></h2>
                  <p>
                    {{(latest_blog[0].content).substring(0,400)}}
                  </p>  
                  <div class="post-meta">
                    <span class="d-block"><a href="#">{{latest_blog[0].author}}</a> 
                    in <a href="#">
                      {{latest_blog[0].category}}</a></span>
                    <span class="date-read">{{latest_blog[0].created_at}}
                     <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                  </div>
                </div>
              </div>


<div class="col-md-6">
<div class="post-entry-2 d-flex bg-light"  v-for="blog in latest_blog.slice(0,4)" v-bind:key="blog.id">
                  <div class="thumbnail" 
                  v-bind:style="{ 'background-image': 'url(' + blog.display_image + ')' }"></div>
                  <div class="contents">
                    <h2><a href="blog-single.html">
                     {{blog.title}}</a></h2>
                    <div class="post-meta">
                      <span class="d-block"><a href="#">{{blog.author}}</a> in <a href="#">{{blog.category}}</a></span>
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

<div v-for="blog in latest_blog.slice(0,4)" v-bind:key="blog.id">
            <div class="trend-entry d-flex">
              <div class="number align-self-start justify-content">{{blog.id}}</div>
              <div class="trend-contents">
                <h2 class="justify-content"><a href="blog-single.html">
               {{ (blog.title)}}
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
        latest_blog : [],
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
"id": "1",
"title": "Best pani puri shops in Lucknow you gotta go once in a life",
"content": "Hailed by many names such as pani ke batashe, golgappe, phuchkas and even water balls, panipuri holds the position of being a comfort snack. Almost always there's an instant hit of nostalgia the moment you mouth the first crispy bite and then further on, there's no stopping at one. Panipuri has been our go-to snack after school, college, work and even on the occasion of a brief halt during our evening strolls with siblings or friends.  Lucknow being the epicentre of chaat's birth, does panipuris in every nook and corner which are absolutely fit for the royals too. But amidst all the options we have, one stall which makes us drool even in our dreams, is definitely Ravi Batashe Wale here in Chowk!  What's Good?   As soon as you enter the Gol Darwaza, take a turn towards the Chowk Kotwali and you'll see Ravi bhaiyya tending to his drooling customers in quick motion. That has been the case for over 30 years now and gradually over time, his fame has branched out to other cities as well- tourists and locals alike, frolic his kiosk on a daily basis.  From a distance, you'll not know what exactly makes him so popular because he looks just like any other batashe wale bhaiyya in Lucknow. But the moment you take a dona in hand and mouth the first batasha, you'll know what we're talking about! What makes him utterly awaited in this corner every day, are the 12 different sorts of chutney he serves with each batasha and for a plate of this deliciousness, you've gotta shed only ₹30 from your pockets.    Ravi Batashe offers us seasonings like hing, pudina, hari mirch, dhaniya, jeera, aam, nimbu, mixed, amidst other variants and in the end, a sukhi puri with a blend of all the flavours winds up our snacking sesh here. Everything Ravi bhaiya serves here, ranging from the puris to the fillings and the chutneys, is homemade and the quality has remained consistent throughout the years.  Knock Knock Golgappas are something we can never say no to, no matter how full our tummies are and we always save a secret space saved for these mouth-watering delicacies. You can find Ravi bhaiyya here everyday from 4 PM to 10 PM and if you're a true-blue chatora/chatori, you can be missing out on this one!  Location: Chowk Kotwali, Gol Darwaza, Lucknow  Cost: ₹30 for a plate",
"description": "Chatores in Lucknow, listen up! ​ Plan your next evening hangout here at Ravi Batashe Wale in Chowk",
"slug": "best-pani-puri-shops-in-lucknow-you-gotta-go-once-in-a-life",
"display_image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/FNK_Pani-Puri_s4x3.jpg.rend.hgtvcom.826.620.suffix/1546894450909.jpeg",
"image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/FNK_Pani-Puri_s4x3.jpg.rend.hgtvcom.826.620.suffix/1546894450909.jpeg",
"author": "Abhijeet",
"category": "Food",
"popularity": null,
"special_meaning": "1",
"created_at": "2020-03-19 10:59:52",
"updated_at": "2020-03-19 10:59:52",
},
{
"id": "3",
"title": "Demo",
"content": "Hailed by many names such as pani ke batashe, golgappe, phuchkas and even water balls, panipuri holds the position of being a comfort snack. Almost always there's an instant hit of nostalgia the moment you mouth the first crispy bite and then further on, there's no stopping at one. Panipuri has been our go-to snack after school, college, work and even on the occasion of a brief halt during our evening strolls with siblings or friends.  Lucknow being the epicentre of chaat's birth, does panipuris in every nook and corner which are absolutely fit for the royals too. But amidst all the options we have, one stall which makes us drool even in our dreams, is definitely Ravi Batashe Wale here in Chowk!  What's Good?   As soon as you enter the Gol Darwaza, take a turn towards the Chowk Kotwali and you'll see Ravi bhaiyya tending to his drooling customers in quick motion. That has been the case for over 30 years now and gradually over time, his fame has branched out to other cities as well- tourists and locals alike,",
"description": "Chatores in Lucknow, listen up! ​ Plan your next evening hangout here at Ravi Batashe Wale in Chowk",
"slug": "demo",
"display_image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/FNK_Pani-Puri_s4x3.jpg.rend.hgtvcom.826.620.suffix/1546894450909.jpeg",
"image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/FNK_Pani-Puri_s4x3.jpg.rend.hgtvcom.826.620.suffix/1546894450909.jpeg",
"author": "Abhijeet",
"category": "food",
"popularity": null,
"special_meaning": "0",
"created_at": "2020-03-20 06:28:03",
"updated_at": "2020-03-20 06:28:03"
},
{
"id": "4",
"title": "5 fancy teas available in Lucknow for the Tea aficionados in the city",
"content": "Tea is something we can never have enough of! The rich taste of sweetly brewed tea leaves simmered in water or milk is the absolutely perfect thing we can want to drink. Be it morning time, evening or any given point of the day, 'Tea is always a great idea'! So if you're a tea aficionado or just a tea experimentalist that has had enough of the basic chai and is looking for something more fun and fancy, we have just the thing for you.  These five epic 'fancy' teas in Lucknow are a must try for anyone who thinks 'luxury' and 'experiment' are their cup of tea!  Red Wine Tea at The Planters Cafe (Mahanagar)  What happens when you mix two of the greatest inventions the man has made? Yes we're talking about red wine and tea! For those who like their red wines as much as they like their teas, the 'Red Wine Tea' at The Planter Cafe, Mahanagar, can surely be just what you need and are looking for. Plus, now you can gulp down on all the red wine you want at 11 in the morning, without any guilt!  Kesar Pista Green Tea at Irani Kafe (Patrakarpuram)  For someone who likes green tea, a kesar tea is nothing but the epitome of luxury. This amazing tea combines two luxuries, saffron and pistachios and brew them with quality green tea leaves to develop the best tea experience you can have. Plus the ambiance here is pretty darn great so you can sip your tea, listen to the calming music and have a perfectly great time.  Pink Chai or Noon Chai at Kashmiri Mohalla (Chowk)  www.straitstimes.com  If there's one thing we can never have enough of from the Kashmiri Mohalla (other than the Yakhni Pulao of course), it is the noon chai. This blush pink tea is warm, aromatic and served with a hint of salt, an addition which makes all the difference when making tea! So when in Chowk, a warm cup will do you more good than you think.  Litchi Watermelon Bubble Tea at Dr. Bubbles (Gomti Nagar)  i.pinimg.com  Lucknow has been pretty late to grab on to the bubble tea trend, yet, better late than never! When looking for a great bubble tea in Lucknow, there's no better place to be at, than Dr. Bubbles in Gomti Nagar. This epic bubble tea chain serves a refreshing and extremely delicious 'Litchi Watermelon Bubble Tea'; a perfect summer drink.  Chilli Tea at Talab The Chai Junction  If these teas still don't satiate your 'Talab', the Hosh Fakta tea from Talab The Chai Junction will quite literally make you swoon. This daring tea is a mix of delicious tea and green chilli, a combination which will suit all the tea lovers who're constantly complaining that their tea doesn't have enough flavour!  Knock Knock If you're a fan of different types of teas or a 'chai' purist whose looking for something new, this list is exactly what you need. With our selection of the choicest and the fanciest teas in lucknow, you can surely say, Wah kya chai hai",
"description": "Famous tea shops in Lucknow",
"slug": "5-fancy-teas-available-in-lucknow-for-the-tea-aficionados-in-the-city",
"display_image": "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/326/326347/women-drinking-tea.jpg",
"image": "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/326/326347/women-drinking-tea.jpg",
"author": "Abhijeet",
"category": "Food",
"popularity": null,
"special_meaning": "0",
"created_at": "2020-03-20 13:44:26",
"updated_at": "2020-03-20 13:44:26"
},
{
"id": "5",
"title": "Netram jalebis in Aminabad have truly stood the test of time & every  Lucknowite can vouch for it!",
"content": "When in Lucknow, there are truly no dearth of grub options for you; you name your cravings and the city has surely got it. So on any such occasion, if you find yourself looking for a kick-start to your day through a plate of tummy pleasing breakfast, then we've the perfect place for you. Over a century old, Net Ram Mithai here in Aminabad, is one of the classic confectioneries of Lucknow, where you'll find tons of Lucknowites coming over for their brekkie episode.  What's Good?   On the ground floor, Netram Ajay Kumar resembles just another sweetshop and on the first floor, there is a basic eatery- but this joint is anything but basic, when it comes to its offerings! Run by the 5th generation of the founder, Net Ram Mithai is widely famed for their stuffed puri (also known as bedmi) and sabzi which comes with four different kinds of curry and their desi ghee jalebis are colossal crowd-pleasers as well.  One of the oldest and the most famous chaat shops in Aminabad, Netram serves their specialities throughout the day, which can make for an entire meal or a hearty snack, for you. But do take note, the jalebis are subject to availability and they are best eaten as a post-breakfast option, if you want 'em to be piping fresh.  Knock Knock So when in and around this locale, you've gotta come over here for your breakfast session, at least once! Take bae on a desi nashta date or just drop by on a lazy Sunday morning for your fix of their deliciousness- we know, you won't be disappointed.  Location: Shri Ram Rd, Mohan Market, Kamla Market, Swadeshi Market, Aminabad, Lucknow  Timings: 7am – 9:30pm",
"description": "Wanted to eat yummy jalebi in Lucknow",
"slug": "netram-jalebis-in-aminabad-have-truly-stood-the-test-of-time-&-every-lucknowite-can-vouch-for-it!",
"display_image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Awadhi_jalebi.jpg",
"image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Awadhi_jalebi.jpg",
"author": "Divya",
"category": "Food",
"popularity": null,
"special_meaning": "0",
"created_at": "2020-03-20 13:50:22",
"updated_at": "2020-03-20 13:50:22"
},
{
"id": "6",
"title": "Booze-heads rejoice! The Tipsy Trunk in Alambagh is now pouring your favourite liquor!",
"content": "When in Alambagh, The Tipsy Trunk is our favourite place to be! This quirky, fun and modern place is always on top of our go-to list as the vibe here is pretty great. And with the latest news you can totally be ready for your next party at this amazing place in town.  The Tipsy Trunk is now serving a full bar for all of us booze-heads who've been wanting a sip of something more than the basic mocktails and soft drinks. T3 is ready to blow your minds, with its amazing food, music & an all new bar!  A full bar, a dance floor and epic music!   If there was ever a checklist that could tell you what makes a party place popular among people, it would have to be the three deciding 'Ds'- Drinks, Dance Floor and DJ. The three things that have the capacity to make any party happening and any hangout place, super fun!  The Tipsy Trunk has anyway been one of our favourites this side of the city, with its great vibe and great music. However, the last and the missing piece has always been booze and the lack of it. Now that T3 has finally launched a full bar menu, you can plan your next party there, without a second thought. Tipsy is now a place that checks of the boxes; it is the go-to for anyone who's looking for an epic time!  Knock Knock    content3.jdmagicbox.com   Though we have long been fans of The Tipsy Trunk, the introduction of a full bar here surely kicks the appeal up several notches. The booze-heads finally have a new hangout address in Lucknow! So head to The Tipsy trunk today and grab a beer, a sangria, the classic screwdriver or anything you want and get the party started.  Location: B-76, Sector B, LDA Colony, Kanpur Road, Opposite Phoenix Mall, Alambagh, Lucknow",
"description": "Liquior shop in Lukcnow",
"slug": "booze-heads-rejoice!-the-tipsy-trunk-in-alambagh-is-now-pouring-your-favourite-liquor!",
"display_image": "https://pbs.twimg.com/media/C6A4LeBWAAUh8us.jpg",
"image": "https://pbs.twimg.com/media/C6A4LeBWAAUh8us.jpg",
"author": "City konnect",
"category": "Places",
"popularity": null,
"special_meaning": "0",
"created_at": "2020-03-20 13:51:55",
"updated_at": "2020-03-20 13:51:55"
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
     async fetchArticles(){
         var proxy = "https://cors-anywhere.herokuapp.com/";
         var url = "http://ckclub.in/v2/api/blog";
         var final_url = proxy + url;
       await fetch(final_url)
         .then(res => res.json())
         .then(data =>{
           this.latest_blog = data;
           console.log('Values')
           this.latest_blog = (JSON.parse(JSON.stringify(this.latest_blog)))
         })
         .catch(err => console.log(err))
      
        },

       

       
      }
    
}


</script>