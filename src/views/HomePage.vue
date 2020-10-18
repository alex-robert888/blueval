<template>
    <section id='wrapper-home-page' class="main">
        <div id="myNav" class="overlay">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <div class="overlay-content">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <TheHomePageHeader />
        <TheHomePageHeroSection />
        <section class="whitespace"></section>
        <TheHomePageOurMissionSection />
        <a name="de-ce" class="a--redirect"></a>
        <section class="whitespace"></section>
        <TheHomePageWhyYouNeedSection />
        <a name="ce-presupune" class="a--redirect"></a>
        <section class="whitespace"></section>
        <TheHomePageWhatImpliesSection />
        <a name="documente" class="a--redirect"></a>
        <section class="whitespace"></section>
        <TheHomePageDocumentsAndLegislationSection />
        <section class="whitespace"></section>
        <TheHomePageContactSection />
        <section class="whitespace"></section>
        <TheHomePageFAQSection />
        <section class="whitespace"></section>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import TheHomePageHeader from '@/components/TheHomePageHeader.vue';
    import TheHomePageHeroSection from '@/components/TheHomePageHeroSection.vue';
    import TheHomePageOurMissionSection from '@/components/TheHomePageOurMissionSection.vue';
    import TheHomePageWhyYouNeedSection from '@/components/TheHomePageWhyYouNeedSection.vue';
    import TheHomePageWhatImpliesSection from '@/components/TheHomePageWhatImpliesSection.vue';
    import TheHomePageDocumentsAndLegislationSection from '@/components/TheHomePageDocumentsAndLegislationSection.vue';
    import TheHomePageFAQSection from '@/components/TheHomePageFAQSection.vue';
    import TheHomePageContactSection from '@/components/TheHomePageContactSection.vue';

    @Component({
        components: {
            TheHomePageHeader,
            TheHomePageHeroSection,
            TheHomePageOurMissionSection,
            TheHomePageWhyYouNeedSection,
            TheHomePageWhatImpliesSection,
            TheHomePageDocumentsAndLegislationSection,
            TheHomePageFAQSection,
            TheHomePageContactSection
        }
    })
    export default class HomePage extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    .wrapper-home-page {
        width: 100vw;
    }

    .whitespace {
        height: 5vh;
        width: 100%;
    }
</style>