<template>
    <section id='wrapper-the-home-page-hero-section' class="main-section">
        <h1>adasd</h1>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHomePageHeroSection extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    $the-hero-section-height: calc(100vh - #{$the-header-height});

    #wrapper-the-home-page-hero-section {
        margin-top: $the-header-height;
        height: $the-hero-section-height;
        width: 100%;
        background-color: rgb(243, 194, 194);
    }
</style>