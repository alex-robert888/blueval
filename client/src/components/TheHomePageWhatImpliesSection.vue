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
        height: 68vh;
        width: 100%;
    }


    #wrapper-what-implies-cards {
        height: 68vh;
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
            width: 60%;
            margin-top: 5vh;

            > p {
                margin-left: 3vw;
                width: 80%;
            }
        }
    }

    .what-implies-icon {
        width: 3vw;
    }
</style>