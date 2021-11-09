<template>
    <div class="App">
        <Form ref="Form" :list="tasks"></Form>
        <div class="task-container">
            <Task v-for="item in tasks" :key="item.id" :task="item"></Task>
        </div>
        <div class="open" @click="open">+</div>
    </div>
</template>

<script>
import Task from './components/VTask.vue'
import Form from './components/VForm.vue'
export default {
    components:{
        Task,
        Form
    },
    data(){
        return{
            tasks:[]
        }
    },
    methods:{
        open(){
            this.$refs.Form.toggleOpen()
        }
    }
}
</script>

<style lang="scss">
    @import './style/index.scss';
</style>