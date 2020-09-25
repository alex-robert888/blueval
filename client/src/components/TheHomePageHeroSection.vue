<template>
    <section id='wrapper-the-home-page-hero-section' class='main-section'>
        <section class="left-part">
            <img src="../assets/images/overline-multicolor.svg" alt="">
            <h1>Evaluări de risc la securitate fizică</h1>
            <h2 class="text">Asigură-ți securitatea afacerii tale apelând la profesioniști. Procesul este simplu și gândit astfel încât activitatea ta să nu fie perturbată, în timp ce noi lucrăm la standarde de exigență ridicate. Suntem interesați să realizăm și să îți livrăm un produs pe care să îl utilizezi ușor, rapid și predictibil.</h2>
            <div class="button center">
                <span>Contactează-ne</span>
                <img src="../assets/images/contact-icon.svg" alt="">
            </div>
        </section>

        <section class="right-part">
            <TheHeroSectionSvg />
        </section>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import TheHeroSectionSvg from '@/components/TheHeroSectionSvg.vue';


    @Component({
        components: {
            TheHeroSectionSvg
        }
    })
    export default class TheHomePageHeroSection extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    $the-hero-section-height: calc(100vh - #{$the-header-height});

    #wrapper-the-home-page-hero-section {
        margin-top: $the-header-height;
        height: $the-hero-section-height;
        width: 100%;
        display: flex;

        .left-part, .right-part {
            box-sizing: border-box;
        }

        .left-part {
            width: 40%;
            height: 100%;
            padding-top: 7.5%;

            > h1 {
                margin-top: 2vh;
                font-size: 4rem;
                line-height: 65pt;
            }

            > h2 {
                margin-top: 4%;
            }

            > div {
                margin-top: 10%;
                height: 5.75vh;
                width: 17.5vw;
                background-color: $base-dark-blue;

                > span {
                    color: $base-white;
                    letter-spacing: 0.15rem;
                    font-size: 1rem;
                }

                > img {
                    margin-left: 0.5vw;
                    width: 1.1vw;
                }
            }
        }

        .right-part{
            margin-left: auto;
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }
</style>