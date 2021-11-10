<template>
    <div class="acticle-container">
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
        getAllArticle().then(data=>{this.articles=data})
    }
}
</script>