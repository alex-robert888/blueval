<template>
    <section id='wrapper-the-home-page-header'>
        <div id="navigation-bar" class='main-section'>
            <img src="../assets/images/logo.svg" alt="">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#de-ce">De ce am nevoie?</a></li>
                    <li><a href="#ce-presupune">Ce presupune?</a></li>
                    <li><a href="#documente">Documente</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>            
            </nav>
        </div>
        <ScrollIndicator
            height="0.55vh"
            color="linear-gradient(90deg, rgba(60,3,216,1) 0%, rgba(93,175,255,1) 50%, rgba(59,250,255,1) 100%)"
            background="none"
        />
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import ScrollIndicator from './ScrollIndicator.vue';


    @Component({
        components: {
            ScrollIndicator
        }
    })
    export default class TheHomePageHeader extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-header {
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        z-index: 99;
        #navigation-bar {
            display: flex;
            align-items: center;
            height: 10vh;
            width: 100%;
            background-color: $base-white;
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
    }
</style>