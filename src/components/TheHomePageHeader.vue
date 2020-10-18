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
            <img src="../assets/images/hamburger-menu-icon.svg" alt="" v-on:click="onHamburgerMenuClick()">
        </div>
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
       onHamburgerMenuClick() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            this.$store.commit("openOverlayMenu");
       }
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
                &:first-of-type {
                    margin-left: 30vw;
                    height: 3.7vh;
                    @media all and (max-width: 1310px) {
                        margin-left: 0vw;
                    }
                }

                &:last-of-type{
                    width: 3rem;
                    margin-left: auto;
                    cursor: pointer;
                    @media all and (min-width: 1310px) {
                        display: none;
                    } 
                    
                    @media all and (max-width: 650px) {
                        width: 1.9rem;
                    }   
                }
            }

            > h1 {
                margin-left: auto;
            }
            > nav {
                @media all and (max-width: 1310px) {
                    display: none;
                }
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