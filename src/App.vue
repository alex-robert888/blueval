<template>
    <div id='wrapper-app'>
        <router-view />
        <h1>{{ getAllListeners() }}</h1>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class App extends Vue {
       getAllListeners() {
           console.log(this.$listeners);
       }
    }

</script>

<style lang='scss' scoped>
    
</style>