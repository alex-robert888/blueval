<template>
    <section id='the-home-page-what-implies-section' class='main-section'>
        <BaseOverlinedHeading color="#5DAFFF">
            <h2 class="overlined-heading-font">Ce presupune?</h2>
        </BaseOverlinedHeading>

        <div id="wrapper-what-implies-cards">
            <section id="what-implies-cards">
                <BaseCard 
                    v-for="(card, index) in cards"
                    v-bind:key="index"
                >
                    <template v-slot:icon>
                        <img v-bind:src="requireImage(card.icon)" alt="" class="what-implies-icon">
                    </template>

                    <template v-slot:text>
                        {{ card.text }}
                    </template>
                </BaseCard>
            </section>  
        </div>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import BaseCard from './BaseCard.vue';
    import BaseOverlinedHeading from './BaseOverlinedHeading.vue';
    import cards from '../store/what-implies';


    @Component({
        components: {
            BaseCard,
            BaseOverlinedHeading
        }
    })
    export default class TheHomePageWhatImpliesSection extends Vue {
       cards = cards;
       
        requireImage(img: string): void {
            console.log(img);
            return require("../assets/images/icons/" + img);
        }
    }
</script>

<style lang='scss' scoped>
    #the-home-page-what-implies-section {
        height: 65vh;
        width: 100%;
    }

    #wrapper-what-implies-cards {
        width: 100%;
        height: 45vh;
        display: flex;
        justify-content: center;
        margin-top: 20vh;
    }

    #what-implies-cards {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0 10vw;
    }

    .what-implies-icon {
        width: 3vw;
    }
</style>