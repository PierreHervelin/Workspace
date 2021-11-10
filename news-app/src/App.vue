<template>
    <div>
        <nav>
            <router-link to="/">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'App',
}
</script>