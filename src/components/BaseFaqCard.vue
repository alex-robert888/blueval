<template>
    <article class='wrapper-base-faq-card'>
        <div class="question">
            <img src="../assets/images/question-mark.svg" alt="">
            <h3 class="text text--bold"><slot name="question"/></h3>
        </div>
        <p><slot name="answer"/></p>
    </article>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class BaseFaqCard extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    .wrapper-base-faq-card {
        background-color: white;
        overflow: auto;
        box-sizing: border-box;
        padding: 4vh 2vw;

        .question {
            display: flex;

            > h3 {
                margin-left: 0.8vw;
            }
        }

        > p {
            line-height: 4vh;
            font-weight: 300;
            width: 85%;
            margin-left: 2vw;
            font-size: 0.9rem;
        }
    }

    @media all and (max-width: 1500px) {
        .wrapper-base-faq-card {
            .question {
                > h3 {
                    margin-left: 1rem;
                    line-height: 1.5rem;
                }
            }

            > p {
                margin-left: 2.38rem;
                margin-top: 0.8rem;
            }
        }
    }
</style>