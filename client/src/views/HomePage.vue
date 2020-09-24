<template>
    <section id='wrapper-home-page'>
        <TheHomePageHeader />
        <TheHomePageHeroSection />
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import TheHomePageHeader from '@/components/TheHomePageHeader.vue';
    import TheHomePageHeroSection from '@/components/TheHomePageHeroSection.vue';


    @Component({
        components: {
            TheHomePageHeader,
            TheHomePageHeroSection
        }
    })
    export default class HomePage extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    .wrapper-home-page {
        width: 100vw;
        > section {
             padding: 0 15%;
        }
    }
</style>