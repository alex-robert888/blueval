<template>
    <section id='wrapper-home-view'>
        <TheHomeViewHeroSection />
        <TheHomeViewOurMissionSection />
        <TheHomeViewDoYouNeedSection />
        <TheHomeViewWhatImpliesSection />
        <TheHomeViewDocumentsAndLegislationSection />
        <TheHomeViewFooter />
    </section>
</template>

<script lang='ts'>  
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import TheHomeViewHeroSection from '@/components/home-view/TheHomeViewHeroSection.vue';
    import TheHomeViewOurMissionSection from '@/components/home-view/TheHomeViewOurMissionSection.vue';
    import TheHomeViewDoYouNeedSection from '@/components/home-view/TheHomeViewDoYouNeedSection.vue';
    import TheHomeViewWhatImpliesSection from '@/components/home-view/TheHomeViewWhatImpliesSection.vue';
    import TheHomeViewDocumentsAndLegislationSection from '@/components/home-view/TheHomeViewDocumentsAndLegislationSection.vue';
    import TheHomeViewFooter from '@/components/home-view/TheHomeViewFooter.vue';

    @Component({
        components: {
            TheHomeViewHeroSection,
            TheHomeViewOurMissionSection,
            TheHomeViewDoYouNeedSection,
            TheHomeViewWhatImpliesSection,
            TheHomeViewDocumentsAndLegislationSection,
            TheHomeViewFooter
        }
    })
    export default class HomeView extends Vue {
        hasScrolled = false;
        showBouncingArrow = true;
        
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        }

        handleScroll(): void {
            if (this.hasScrolled == false) {
                this.hasScrolled = true;
            }
            if (window.scrollY >= 500) {
                this.showBouncingArrow = false;
            }
            else {
                this.showBouncingArrow = true;
            }
        }
    }
</script>

<style lang='scss'>
    #wrapper-home-view {
        margin-top: $the-home-view-header-height;
    }
</style>