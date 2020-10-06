<template>
    <section id='wrapper-the-home-page-why-you-need' class='main-section'>
        <div>
            <h2 class="heading">AM NEVOIE DE ANALIZĂ DE RISC DACĂ: </h2>

            <section>
                <BaseCard
                    v-for="(card, index) in cards"
                    v-bind:key="index"
                >
                    <template v-slot:icon>
                        <img v-bind:src="requireImage(card.icon)" alt="" class="icon">
                    </template>
                    
                    <template v-slot:heading>
                        {{card.heading}}
                    </template>
                    
                    <template v-slot:text>
                        {{card.text}}
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

        requireImage(img: string): void {
            console.log(img);
            return require("../assets/images/icons/" + img);
        }
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-why-you-need {
        height: 130vh;
        width: 100%;
        display: flex;
        justify-content: center;
        > div {
            width: 100%;
            background: linear-gradient(45deg,#5A60B1 0%,#5174C7 100%);
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            > h2 {
                color: $base-white;
            }

            > section {
                margin-top: 8vh;
                width: 80%; 
                display: grid;
                grid-template-rows: 1fr 1fr;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 3rem;
            }

            .icon {
                height: 7vh;
            }
        }
    }

    @media all and (max-width: 480px) {
        #wrapper-the-home-page-why-you-need {

            > div {
                > h2 {
                    font-size: 1.2rem !important; 
                    color: $base-white;
                }

                > section {
                    grid-template-rows: 1fr 1fr 1fr;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .icon {
                    height: 5vh;
                }
            }
        }
    }
</style>