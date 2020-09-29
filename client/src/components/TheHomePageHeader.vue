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
        <!-- <ScrollIndicator
            height="0.55vh"
            color="#0311D8"
            background="none"
        /> -->
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
        z-index: 90;

        #navigation-bar {
            display: flex;
            align-items: center;
            height: 10vh;
            width: 100%;
            background-color: $base-white;
                
            > img {
                margin-left: 30vw;
            }

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
                            font-size: 0.88rem;
                        }
                    }
                }
            }
        }
    }
</style>