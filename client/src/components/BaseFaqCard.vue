<template>
    <article class='wrapper-base-faq-card'>
        <h3 class="text"><span class="text--bold">Q: </span><slot name="question"/></h3>
        <p class="text"><span class="text--bold">A: </span><slot name="answer"/></p>
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
        width: 35vw;
        background: #E7F0F7;
        display: table;
        border-collapse: separate;
        border-spacing: 2rem 1.5rem;

        > h3, > p {
            display: table-row;
        }

        > h3 {
            font-weight: bold;
            margin-top: 3vh;
        }

    }
</style>