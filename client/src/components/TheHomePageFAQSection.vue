<template>
    <section id='wrapper-the-home-page-faq-section' class="main-section">
        <section class="faq-left-side">
            <h2>FAQ</h2>
            <span>Întreabă-ne orice nelămurire mai jos:</span>
            <form action="">
                <label for="email" class="text label">Email</label>
                <input type="text" name="email" id="email-input" class="input-or-textarea">
                <label for="question" class="text label">Question</label>
                <textarea type="text" name="question" id="question-input" class="textarea input-or-textarea" />
                <button type="submit" class="button">Întreabă</button>
            </form>
        </section>

        <section class="faq-right-side">
            <BaseFaqCard
                v-for="(card, index) in faqCards"    
                v-bind:key="index"
                class="faq-cards"
            >
                <template v-slot:question>
                    {{card.question}}
                </template>

                <template v-slot:answer>
                    {{card.answer}}
                </template>
            </BaseFaqCard>
        </section>
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
        display: flex;
        height: 80vh;
        .faq-left-side {
            > h2 {
                color: #D8D8D8;
                font-size: 6.5rem;
            }

            > span {
                display: block;
                margin-top: 2vh;
                font-size: 1.3rem;
            }

            > form {
                display: flex;
                flex-direction: column;
                margin-top: 15vh;

                > input, textarea {
                    width: 25vw;
                }

                > button {
                    margin-top: 4.5vh;
                    background-color: $base-dark-blue;
                    width: 40%;
                    height: 4.5vh;
                    color: $base-white;
                    letter-spacing: 0.1rem;
                }
            }
        }

        .faq-right-side {
            display: flex;
            flex-direction: column;
            margin-left: auto;
            overflow: scroll;
            overflow-x: hidden;
        }
    }

    #email-input {
        height: 5vh;
    }

    #question-input {
        height: 20vh;
    }

    .faq-cards {
        margin-left: auto;
        margin-bottom: 5vh; 
    }
</style>