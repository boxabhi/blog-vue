import axios from 'axios';

const state = {
    blogs : [],
    trendings : [],
    categories : [],
    promoted : [],
}

const getters  ={
    allBlogs : function() {
        state.blogs = JSON.parse(JSON.stringify(state.blogs))
        if(state.blogs.length == 0){
            //
        }else{
            return state.blogs
        }
        return []
    },
   allTrendings : function(){
    state.trendings = JSON.parse(JSON.stringify(state.trendings))
       if(state.trendings.length == 0){
         //  console.log('Still feching trending')
       }else{
          // console.log(state.trendings)
           return state.trendings
       }
       return []
   },
   allCategories : function (){
    state.categories = JSON.parse(JSON.stringify(state.categories))
        if(state.categories.length == 0){
           // console.log('Fetching categories')
        }else{
            return state.categories
        }
        return []
   },
   allPromoted : function(){
       state.promoted = JSON.parse(JSON.stringify(state.promoted))
       if(state.promoted.length == 0){
           console.log('Fetching promoted')
        }else{
          //  return state.promoted
        }
        return []
   },
   allFood : function(){
        return state.blogs.filter(blog => blog.category == ('Food' || 'food'))
    },
    allFashion : function(){
        return state.blogs.filter(blog => blog.category == ('Fashion' || 'fashion'))
    }
   
}

const actions = {
    async fetchBlogs({commit}){
        const response = await axios.get('https://cors-anywhere.herokuapp.com/http://ckclub.in/v2/api/blog');
        commit('setBlogs',response.data)
    },
    async fetchTrendings({commit}){
        const trend = await axios.get('https://cors-anywhere.herokuapp.com/http://ckclub.in/v2/api/trending')
        commit('setTrendings',trend.data)
    },
    async fetchCategories({commit}){
        const categories = await axios.get('https://cors-anywhere.herokuapp.com/http://ckclub.in/v2/api/category')
        commit('setCategories',categories.data)
    },
    async fetchPromotedBlog({commit}){
        const promoted = await axios.get('https://cors-anywhere.herokuapp.com/http://ckclub.in/v2/api/promoted')
        commit('setPromoted',promoted.data)
    },
    
    
}


const mutations ={
        setBlogs :(state,blogs) =>(state.blogs = blogs),
        setTrendings : (state,trendings) =>(state.trendings = trendings),
        setCategories : (state,categories) =>(state.categories = categories),
        setPromoted : (state,promoted) => (state.promoted = promoted)
}

export default{
    state,
    getters,
    actions,
    mutations,

}
