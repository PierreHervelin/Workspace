<template>
    <router-link :to="url">
        <div class="article">
            <h2>{{ article.title }}</h2>
            <p>{{ article.body }}</p>
        </div>
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