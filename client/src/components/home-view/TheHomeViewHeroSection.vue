<template>
    <section id="wrapper-the-home-view-hero-section">
        <section id="hero-section-left-side">
            <img src="../../assets/img/above-line.svg" alt="">
            <h1>Evaluări de risc la securitate fizică</h1>
            <h3 class="small-text">Asigură-ți securitatea afacerii tale apelând la profesioniști. Procesul este simplu și gândit astfel încât activitatea ta să nu fie perturbată, în timp ce noi lucrăm la standarde de exigență ridicate. Suntem interesați să realizăm și să îți livrăm un produs pe care să îl utilizezi ușor, rapid și predictibil.</h3>
            <div>
                <span>Contactează-ne</span>
                <img src="../../assets/img/contact-button-icon.svg" alt="">
            </div>
        </section>
        <section id="hero-section-right-side">
            <TheHomeViewHeroSectionSvg />
            <img v-if="this.showBouncingArrow == true" src="../../assets/img/scroll-down-arrow.svg" alt="" class="bounce-arrow">
        </section>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import TheHomeViewHeroSectionSvg from './TheHomeViewHeroSectionSvg.vue';


    @Component({
        components: {
            TheHomeViewHeroSectionSvg
        }
    })
    export default class TheHomeViewHeroSection extends Vue {
       
    }
</script>

<style lang='scss'>
    #wrapper-the-home-view-hero-section {
        display: flex;
        justify-content: center;
        width: 100%;
        height: calc(100vh - #{$the-home-view-header-height});
        overflow: hidden;
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
</style>