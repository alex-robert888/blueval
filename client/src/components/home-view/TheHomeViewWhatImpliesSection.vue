<template>
    <section id="wrapper-the-home-view-what-implies-section">
        <BaseOverlinedHeading color="#68BBFB"> 
            <h2>Ce presupune?</h2>
        </BaseOverlinedHeading>

        <article>
            <BaseCardWithIcon
                v-for="(card, index) in whatImpliesCards"
                v-bind:key="index"    
                hexColor="transparent"
            >
                <template v-slot:icon> 
                    <img 
                        class="icon-ce-presupune-card"
                        v-bind:src="requireImage(card.icon)"  
                        v-bind:alt="card.icon"
                        v-bind:style="card.extraStylingToIcon"
                    >
                </template>
                <template v-slot:text>
                    <p class="text-tiny text-crammed">{{card.text}}</p>
                </template>
            </BaseCardWithIcon>
        </article>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import BaseCardWithIcon from '@/components/base/BaseCardWithIcon.vue';
    import BaseOverlinedHeading from '@/components/base/BaseOverlinedHeading.vue';
    import whatImpliesCards from '../../what-implies-cards';
    import { requireImage } from '../../utils';


    @Component({
        components: {
            BaseCardWithIcon,
            BaseOverlinedHeading
        }
    })
    export default class TheHomeViewWhatImpliesSection extends Vue {
       whatImpliesCards = whatImpliesCards;
       requireImage = requireImage;
    }
</script>

<style lang='scss'>
    #wrapper-the-home-view-what-implies-section > article{
        height: 50vh;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 7vw;
    }

    .icon-ce-presupune-card {
        width: 3vw;
    }
</style>