<template>
    <div class="col-lg-3">
        <p>Popular</p>
        <div class="section-title">
            <h2>Popular Posts</h2>
        </div>
        <div v-for="(trending,times) in allTrendings.slice(0,4)" v-bind:key="trending.id">
            <div class="trend-entry d-flex">
                <div class="number align-self-start">{{times + 1}}</div>
                <div class="trend-contents">
                    <h2>
                        <router-link :to="`/detail/${trending.slug}`"><a>
                                {{(trending.title).substring(0,100)}}</a>
                        </router-link>
                    </h2>
                    <div class="post-meta">
                        <span class="d-block"><a href="#">{{trending.author}}</a> in
                            <a href="#">{{trending.category}}</a></span>
                        <span class="date-read"> <span class="mx-1">&bullet;</span> 3 min read <span
                                class="icon-star2"></span></span>
                    </div>
                </div>
            </div>
        </div>
        <p>
            <a href="#" class="more">See All Popular <span class="icon-keyboard_arrow_right"></span></a>
        </p>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';

    export default {
        name: 'Popular',
        computed: mapGetters(['allTrendings']),
       
    }
    
</script>