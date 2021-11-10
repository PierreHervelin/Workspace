import axios from 'axios'
import { DUMMY_TOKEN } from '../main';

// --- API REQUEST ---

export const getArticleById=async(id)=>{
    console.info('get',id);

    const data={
        headers:{
            'app-id':DUMMY_TOKEN
        }
    }

    const res=await axios.get(`https://dummyapi.io/data/v1/post/${id}`,data)
    console.log(res.data);
    return res.data
}

export const getAllArticle=async(limit=20,page=0)=>{
    console.info('get articles');

    const data={
        params:{
            limit,
            page
        },
        headers:{
            'app-id':DUMMY_TOKEN
        }
    }

    const res=await axios.get('https://dummyapi.io/data/v1/post',data)
    console.log(res.data);
    return res.data
}
