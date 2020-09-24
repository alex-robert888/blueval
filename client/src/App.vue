<template>
    <div id='wrapper-app'>
        <TheHomeViewHeader />
        <router-view />
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import TheHomeViewHeader from '@/components/home-view/TheHomeViewHeader.vue';

    @Component({
        components: {
            TheHomeViewHeader
        }
    })
    export default class App extends Vue {
       
    }
</script>

<style lang='scss'>
    #wrapper-app {
        margin: 0px $home-view-horizonal-margins;
        color: $base-black;
        font-family: 'Bahnschrift';
        background-color: $base-white;
    }
</style>