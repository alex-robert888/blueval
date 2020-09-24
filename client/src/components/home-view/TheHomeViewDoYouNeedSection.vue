<template>
    <section id="wrapper-the-home-view-do-you-need-section">
        <BaseOverlinedHeading color="#3BFAFF"> 
            <h2> Ai nevoie de analiză de risc dacă</h2>
        </BaseOverlinedHeading>

        <article class="top-lined-header">
            <BaseCardWithIcon
                v-for="(card, index) in doYouNeedCards"
                v-bind:key="index"    
                v-bind:hexColor="card.color"
            > 
                <template v-slot:icon> 
                    <img 
                        class="icon"
                        v-bind:src="requireImage(card.icon)"  
                        v-bind:alt="card.icon"
                        v-bind:style="card.extraStylingToIcon"
                    >
                </template>

                <template v-slot:heading>
                    <h3>{{card.title}}</h3>
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
    import doYouNeedCards from '../../do-you-need-cards';
    import { requireImage } from '../../utils';


    @Component({
        components: {
            BaseCardWithIcon,
            BaseOverlinedHeading
        }
    })
    export default class TheHomeViewWhatDoYouNeedSection extends Vue {
        doYouNeedCards = doYouNeedCards; 
        requireImage = requireImage;    // utility function
    }
</script>

<style lang='scss'>
    #wrapper-the-home-view-do-you-need-section {
        > article {
            height: 80vh;
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 8vw;
            margin-top: 10vh;
        }
    }
    .icon {
        width: $card-ai-nevoie-de-analiza-icon-width;
    }
</style>