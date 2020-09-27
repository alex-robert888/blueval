<template>
    <section id='wrapper-the-home-page-why-you-need' class='main-section'>
        <a name="de-ce" class="a--redirect"></a>

        <BaseOverlinedHeading color="#3BFAFF">
            <h2 class="overlined-heading-font">Ai nevoie de analiză de risc dacă: </h2>
        </BaseOverlinedHeading>

        <div id="wrapper-do-you-need-cards">
            <section id="do-you-need-cards">
                <BaseCard 
                    v-for="(card, index) in cards"
                    v-bind:key="index"
                    v-bind:size="cardSize"
                >
                    <template v-slot:icon>
                        <img v-bind:src="requireImage(card.icon)" alt="" class="do-you-need-icon">
                    </template>

                    <template v-slot:heading>
                        {{ card.heading }}
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
    import BaseOverlinedHeading from './BaseOverlinedHeading.vue';
    import BaseCard from './BaseCard.vue';
    import cards from '../store/why-you-need-cards';


    @Component({
        components: {
            BaseOverlinedHeading,
            BaseCard
        }
    })
    export default class TheHomePageWhyYouNeed extends Vue {
        cards = cards;
        cardSize = ['10vw', '30vh'];

        requireImage(img: string): void {
            console.log(img);
            return require("../assets/images/icons/" + img);
        }
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-why-you-need {
        height: 110vh;
        width: 100%;
    }

    #wrapper-do-you-need-cards {
        margin-top: 20vh;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    #do-you-need-cards {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4vh 10vw;
    }

    .do-you-need-icon {
        width: 6vw;
    }
</style>