<template>
    <router-link :to="url" class="article">
        <div class="img">
            <img :src="article.image" alt="">
        </div>
        <h2>{{ article.text }}</h2>
    </router-link>
</template>

<script>
export default {
    props:['article'],
    data(){
        return{
            url:'/article/'
        }
    },
    mounted(){
        this.url+=this.article.id
    }
}
</script>