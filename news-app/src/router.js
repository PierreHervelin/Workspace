import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/VHome.vue'
import Article from './components/VArticleInfos.vue'
import About from './components/VAbout.vue'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        component: Home
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/article/:id',
        component: Article
    }
]

export const router=new VueRouter({
    mode:'history',
    routes
})