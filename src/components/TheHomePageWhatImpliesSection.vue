<template>
    <section id='the-home-page-what-implies-section' class='main-section'>
        <div id="wrapper-what-implies-cards">
            <h2 class="heading">CE PRESUPUNE?</h2>
            <section id="what-implies-cards">
                <div 
                    v-for="(card, index) in cards"
                    v-bind:key="index"
                >
                    <img v-bind:src="requireImage(card.icon)" alt="" class="what-implies-icon">
                    <p class="text">{{ card.text }}</p> 
                </div>
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
        width: 100%;
        overflow: auto;
    }


    #wrapper-what-implies-cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border: solid 1px #E4E4E4; 
    }

    #what-implies-cards {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        > div {
            display: flex;
            align-items: center;
            width: 100%;
            margin-top: 5vh;

            > img {
                height: 10vh;
            }

            > p {
                margin-left: 3vw;
                width: 100%;
                font-size: 0.85 rem !important;
            }
        }
    }

    .what-implies-icon {
        width: 3vw;
    }

    @media all and (max-width: 480px) {
        #wrapper-what-implies-cards {
            box-sizing: border-box;
            padding: 2vh 0;

        }

        #what-implies-cards {
            padding: 2vh 0;
            > div {
                flex-direction: column;
                align-items: flex-start;

                > img {
                    width: 14vw;
                    margin-left: 2vw;
                }
            }
        }
    }
    
</style>