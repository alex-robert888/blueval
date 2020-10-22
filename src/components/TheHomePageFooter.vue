<template>
    <section id='wrapper-the-home-page-footer' class="main-section">
        <article>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></article>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHomePageFooter extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 5vh;
        background-color: rgb(0, 119, 255);

        > article {
            color: white;
            > a {
                color: white;
            }
        }
    }
</style>