import axios from 'axios';


const state = {
    blogs : [{
        
    }]
}

const getters  ={

    blogs: (state)=> state.blogs
}

const actions = {
    async fetchBlogs(){
        const url = 'http://ckclub.in/v2/api/blog'; 
        const response = await axios.get(url)
        console.log(`This is a axios ${response}`)
    }
}


const mutations ={}

export default{
    state,
    getters,
    actions,
    mutations,

}
