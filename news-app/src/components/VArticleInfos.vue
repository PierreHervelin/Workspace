<template>
    <div class="article-infos">
        <div class="user">
            <div class="img"><img :src="article.owner.picture" alt=""></div>
            <p>{{article.owner.firstName}} {{article.owner.lastName}}</p>
        </div>
        <p class="text">{{ article.text }}</p>
        <div class="tag-container">
            <div v-for="tag in article.tags" :key="tag">#{{tag}}</div>
        </div>
        <div class="date">{{article.publishDate}}</div>
        <div class="img"><img :src="article.image" alt=""></div>
        <div class="likes">
            <div>♥</div>
            <div>{{article.likes}}</div>
        </div>
    </div>
</template>

<script>
import { getArticleById } from '../core/utils'
export default {
    data(){
        return{
            article:{
                owner:{},
                tags:[]
            }
        }
    },
    created(){
        getArticleById(this.$route.params.id).then(data=>{
            this.article=data

        })
    }
}
</script>