<template>
    <section id='wrapper-home-view'>
        <section id="hero-section">
            <section id="hero-section-left-side">
                <img src="../assets/img/above-line.svg" alt="">
                <h1>Evaluări de risc la securitate fizică</h1>
                <h3 class="small-text">Asigură-ți securitatea afacerii tale apelând la profesioniști. Procesul este simplu și gândit astfel încât activitatea ta să nu fie perturbată, în timp ce noi lucrăm la standarde de exigență ridicate. Suntem interesați să realizăm și să îți livrăm un produs pe care să îl utilizezi ușor, rapid și predictibil.</h3>
                <div>
                    <span>Contactează-ne</span>
                    <img src="../assets/img/contact-button-icon.svg" alt="">
                </div>
            </section>
            <section id="hero-section-right-side">
                <TheHomeViewSVG />
                <img v-if="this.showBouncingArrow == true" src="../assets/img/scroll-down-arrow.svg" alt="" class="bounce-arrow">
            </section>
        </section>

        <section id="our-mission">
            <div>
                <img src="../assets/img/our-mission-back-bubble.svg" alt="">
                <article>
                    <h2>MISIUNEA NOASTRĂ</h2>
                    <p class="small-text">De cele mai multe ori pare neverosimilă producerea unui incident de securitate chiar în interiorul afacerii tale! Cu toate acestea, ele se întâmplă  zilnic, mai aproape sau mai departe de noi, sunt mediatizate mai mult sau mai puțin, însă daunele provocate – materiale, de imagine / prestigiu sau, în situații grave,  angajaților  sau clienților – sunt greu de surmontat, uneori imposibil.</p>
                </article>
                <img src="../assets/img/our-mission-img.jpg" alt="">
                <img src="../assets/img/repeat-grid.svg" alt="">
            </div>
        </section>
        
        <section id="do-you-need">
            <img src="../assets/img/above-line-cyan.svg" alt="">
            <h2 class="top-lined-header">Ai nevoie de analiză de risc dacă</h2>

            <!-- <img :src="card.icon" alt="adasdasd"> -->
            <article class="top-lined-header">
                <BaseAiNevoieDeAnalizaCard
                    v-for="(card, index) in aiNevoieDeAnalizaCards"
                    v-bind:key="index"    
                    v-bind:hexColor="card.color"
                > 
                    <template v-slot:icon> 
                        <img v-bind:src="requireImage(card.icon)" class="icon" v-bind:alt="card.icon">
                    </template>

                    <template v-slot:heading>
                        <h3>{{card.title}}</h3>
                    </template>

                    <template v-slot:text>
                        <p>{{card.text}}</p>
                    </template>
                </BaseAiNevoieDeAnalizaCard>    
            </article>
        </section>
    </section>
</template>

<script lang='ts'>
    declare let require: any
    
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import TheHomeViewSVG from '@/components/home-page/TheHomeViewSVG.vue';
    import BaseAiNevoieDeAnalizaCard from '@/components/home-page/BaseAiNevoieDeAnalizaCard.vue';
    import aiNevoieDeAnalizaCards from '../ai-nevoie-de-analiza-cards';

    @Component({
        components: {
            TheHomeViewSVG,
            BaseAiNevoieDeAnalizaCard
        }
    })
    export default class HomeView extends Vue {
        hasScrolled = false;
        showBouncingArrow = true;
        aiNevoieDeAnalizaCards = aiNevoieDeAnalizaCards;
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        }

        handleScroll(): void {
            if (this.hasScrolled == false) {
                this.hasScrolled = true;
            }
            if (window.scrollY >= 500) {
                this.showBouncingArrow = false;
            }
            else {
                this.showBouncingArrow = true;
            }
        }

        requireImage(img: string) {
            console.log(img);
            return require('../assets/img/icons/' + img);
        }
    }
</script>

<style lang='scss'>
    #wrapper-home-view {
        margin-top: $the-home-view-header-height;
    }

    #hero-section {
        width: 100%;
        height: calc(100vh - #{$the-home-view-header-height});
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    #hero-section-left-side {
        margin-top: 7vh;
        width: 45%;
        > img {
            margin-top: 3vh;
        }
        > h1 {
            width: 80%;
            font-size: 3.65rem;
            margin-top: 3.5vh;
            letter-spacing: 0.1rem;
            font-weight: bold;     
            line-height: 70pt;   
        }
        > h3 {
            margin-top: 2vh;
            width: 75%;
        }
        > div {
            width: 15vw;
            height: 5.5vh;
            background-color: $base-dark-blue;
            outline: none;
            border: none;
            cursor: pointer;
            color: $base-white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 6.5vh;
            font-size: 1.05rem;
            > img, span {
                background-color: $base-dark-blue;
            }
            > img {
                margin-left: 1vw;
                width: 1.1rem
            }
        }
    }

    #hero-section-right-side {
        width: 55%;
        margin-top: 5vh;
        > img {
            margin-left: 3vw;   
            margin-top: 8vh;
            cursor: pointer;
        }
        // margin-right: 2vw;
    }

    .bounce-arrow {
        animation: bounce-arrow 2s infinite;
    }      
    
    @keyframes bounce-arrow {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }

    #our-mission {
        height: 115vh;
        > div {
            height: 30vh;
            position: relative;
            > img:first-of-type {
                position: absolute;
                margin-top: 12vh;
                z-index: 0;
            }

            > article {
                position: absolute;
                margin-top: 35vh;
                left: 15%;
                z-index: 1;
                width: 50%;
                > h2, p {
                    background-color: none;
                    line-height: 26pt;
                }
                > h2 {
                    color: $base-mid-blue;
                    font-size: 3rem;
                    font-weight: normal;
                    margin-bottom: 5vh;
                }
                > p {
                    width: 80%;
                }
            }
            > img:nth-of-type(2) {
                position: absolute;
                margin-top: 50vh;
                z-index: 0;
                margin-left: 55vw;
                width: 25vw;
            }

            > img:last-of-type {
                position: absolute;
                margin-top: 78vh; 
                left: 76vw;
            }
        }
    }

    #do-you-need > article {
        height: 80vh;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8vw;
        margin-top: 10vh;
    }

    .icon {
        width: 1.6vw;
    }
</style>