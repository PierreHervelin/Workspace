<template>
    <div class="Task" :data-color="task.color">
        <div class="title">{{task.title}}</div>
        <div class="date">{{task.date}}</div>
        <div class="time">{{task.time}}</div>
        <div class="place">{{task.place}}</div>
        <div class="description">{{task.description}}</div>
        <div class="del">+</div>
    </div>
</template>

<script>
export default {
    props:['task']
}
</script>