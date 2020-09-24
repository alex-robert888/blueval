<template>
    <section id='wrapper-the-home-page-header' class='main-section'>
        <img src="../assets/images/logo.svg" alt="">
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">De ce am nevoie?</a></li>
                <li><a href="">Ce presupune?</a></li>
                <li><a href="">Documente</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Contact</a></li>
            </ul>            
        </nav>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHomePageHeader extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-header {
        position: fixed;
        display: flex;
        align-items: center;
        height: 10vh;
        width: 100%;
        box-sizing: border-box;
        top: 0;
        left: 0;
        z-index: 99;
        > h1 {
            margin-left: auto;
        }
        > nav {
            margin-left: auto;
            > ul {
                list-style: none;
                display: flex;
                > li {
                    margin-left: 3.5vw;
                    > a {
                        text-decoration: none;
                        color: $base-dark-gray;
                    }
                }
            }
        }
    }
</style>