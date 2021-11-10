<template>
    <div class="article-container">
        <Article v-for="article in articles" :key="article.id" :article="article"></Article>
    </div>
</template>

<script>
import { getAllArticle } from '../core/utils'
import Article from './VArticle.vue'
export default {
    components:{
        Article
    },
    data(){
        return{
            articles:[]
        }
    },
    created(){
        getAllArticle(40,1).then(data=>{this.articles=data.data})
    }
}
</script>