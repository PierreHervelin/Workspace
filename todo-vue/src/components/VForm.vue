<template>
    <form @submit.prevent="onSubmit" :class="{'active':isOpen}">
        <div class="bottom"></div>
        <div class="close" @click="toggleOpen">+</div>
        <h2>Nouvelle Tâche</h2>
        <input 
            type="text" 
            id="title"
            placeholder="Titre"
            v-model="form.title"
        >
        <input 
            type="date" 
            id="date"
            placeholder="Date"
            v-model="form.date"
        >
        <input 
            type="time" 
            id="time"
            placeholder="Heure"
            v-model="form.time"
        >
        <input 
            type="text" 
            id="place"
            placeholder="Lieu"
            v-model="form.place"
        >
        <textarea
            id="description"
            placeholder="Description"
            v-model="form.description"
        ></textarea>
        <div class="color-container">
            <div id="white" @click="onColorChange"></div>
            <div id="orange" @click="onColorChange"></div>
            <div id="red" @click="onColorChange"></div>
        </div>
        <button>Valider</button>
    </form>
</template>

<script>
export default {
    props:['list'],
    data() {
        return{
            isOpen:false,
            form:{
                title:null,
                date:null,
                time:null,
                place:null,
                description:null,
                color:null
            }
        }
    },
    methods:{
        onSubmit(){
            const form=this.form
            if(form.title&&form.date&&form.time&&form.color){
                const task={
                    ...form
                }
                this.list.push(task)
                for(let item in form){
                    form[item]=null
                }
            }
        },
        onColorChange(e){
            const el=e.target
            const parent=el.parentNode

            for(let child of parent.children){
                child.classList.remove('active')
            }

            this.form.color=el.id
            if(el.classList.contains('active')){
                el.classList.remove('active')
            }else{
                el.classList.add('active')
            }
        },
        toggleOpen(){
            this.isOpen=!this.isOpen
        }
    }
}
</script>