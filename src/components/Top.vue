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
            <router-link  to="/detail/1">   
               <a >
                    <img v-bind:src="latest_blog[0].display_image" 
                     alt="Image" class="img-fluid"></a></router-link>
                  <h2>
                <router-link to="/detail/1">
                      <a>
                      {{(latest_blog[0].title).substring(0,70)}}</a> 
                </router-link>
                 </h2>
                  <p>
                    {{(latest_blog[0].content).substring(0,400)}}
                  </p>  
                  <div class="post-meta">
                    <span class="d-block"><a href="#">{{latest_blog[0].author}}</a> 
                    in <a>
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
                      <span class="d-block">
                        <a href="#">{{blog.author}}</a> in <a href="#">{{blog.category}}</a></span>
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
                <h2 class="justify-content">
                   <router-link to="/detail">   <a href="">
               {{ (blog.title)}}
                  </a></router-link></h2>
                <div class="post-meta">
                  <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                </div>
              </div>
            </div>

</div>
            <p>
              <a href="#" class="more">See All trends.. <span class="icon-keyboard_arrow_right"></span></a>
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
        blogs : [],
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