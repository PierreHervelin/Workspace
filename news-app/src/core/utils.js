import axios from 'axios'

// --- API REQUEST ---

export const getArticleById=async(id)=>{
    console.info('get',id);

    const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.data
}

export const getAllArticle=async()=>{
    console.info('get articles');

    const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
}
