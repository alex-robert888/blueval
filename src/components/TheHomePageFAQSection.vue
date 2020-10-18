<template>
    <section id='wrapper-the-home-page-faq-section' class="main-section">
        <a name="faq" class="a--redirect"></a>
        <div>
            <BaseFaqCard 
                v-for="(card, index) in faqCards"
                v-bind:key="index"    
                class="base-faq-card"
            >
                <template v-slot:question>    
                    {{card.question}}
                </template>

                <template v-slot:answer>    
                    {{card.answer}}
                </template>

            </BaseFaqCard>
        </div>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import BaseFaqCard from './BaseFaqCard.vue';    
    import faqCards from '../store/faq-cards';


    @Component({
        components: {
            BaseFaqCard
        }
    })
    export default class TheHomePageFAQSection extends Vue {
        faqCards = faqCards;
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-faq-section {
        width: 100%;
        display: flex;
        overflow: auto;
        > div {
            background: linear-gradient(90deg, rgba(241,242,255,1) 0%, rgba(220,243,255,1) 100%);          
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;

            .base-faq-card {
                margin: 5vh 1.4vw;
                width: 27.5vw;
            }
        }
    }

    @media all and (max-width: 1200px) {
        #wrapper-the-home-page-faq-section {
            > div {
                flex-direction: column;

                .base-faq-card {
                    width: 95%;
                    align-items: center;
                }
            }

        }
    }
</style>