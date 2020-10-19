<template>
    <section id='wrapper-home-page' class="main">
        <OverlayMenu v-if="isOverlayMenuOpen()"/>
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
    import OverlayMenu from '@/components/OverlayMenu.vue';

    @Component({
        components: {
            TheHomePageHeader,
            TheHomePageHeroSection,
            TheHomePageOurMissionSection,
            TheHomePageWhyYouNeedSection,
            TheHomePageWhatImpliesSection,
            TheHomePageDocumentsAndLegislationSection,
            TheHomePageFAQSection,
            TheHomePageContactSection,
            OverlayMenu
        }
    })
    export default class HomePage extends Vue {
       isOverlayMenuOpen() {
           return this.$store.state.isOverlayMenuOpen;
       }

       printStoreState() {
           return `The value of the store state is: ${this.$store.state.isOverlayMenuOpen}`;
       }
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

    h1 {
        color: red;
    }
</style>