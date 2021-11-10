<template>
    <div class="article-infos">
        <h1>ARTICLE {{ article.title }}</h1>
        <p>{{article.body}}</p>
    </div>
</template>

<script>
import { getArticleById } from '../core/utils'
export default {
    data(){
        return{
            article:{}
        }
    },
    created(){
        getArticleById(this.$route.params.id).then(data=>{
            this.article=data
        })
    }
}
</script>