<template>
    <section id='wrapper-the-home-page-hero-section' class='main-section'>
        <a name="home" class="a--redirect"></a>
        <img src="../assets/images/business-building.jpg" alt="">
        <article>
            <h1>Evaluări de risc la securitate fizică</h1>
            <h2>Asigură-ți securitatea afacerii tale apelând la profesioniști. Procesul este simplu și gândit astfel încât activitatea ta să nu fie perturbată, în timp ce noi lucrăm la standarde de exigență ridicate. Suntem interesați să realizăm și să îți livrăm un produs pe care să îl utilizezi ușor, rapid și predictibil.</h2>
            <ButtonContact class="button-contact" />
        </article>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import ButtonContact from '@/components/ButtonContact.vue';


    @Component({
        components: {
            ButtonContact
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

        > a {
            margin-top: -10vh;
        }

        > img {
            position: absolute;
            top: 3.5vh;
            z-index: 99;
            height: 87.5vh;
            width: 24vw;
        }

        > article {
            margin-left: 30vw;
            margin-top: 13vh;

            > h1, > h2 {
                width: 40vw;
            }

            > h1 {
                font-size: 5.5rem;
                font-weight: 100;
            }

            > h2 {
                font-weight: 100;
                margin-top: 3.5vh;
                font-size: 1.05rem;
                line-height: 2.75rem;
            }
        }

        .button-contact {
            margin-top: 6vh;
        }
    }

    @media all and (max-width:  480px) {
        #wrapper-the-home-page-hero-section {
            > img {
                display: none;
            }

            > article {
                margin-left: 0vw;
                margin-top: 13vh;

                > h1, > h2 {
                    width: 85vw;
                }

                > h1 {
                    font-size: 3.3rem;
                    font-weight: 100;
                }

                > h2 {
                    font-weight: 100;
                    margin-top: 2.5vh;
                    font-size: 0.79rem;
                    line-height: 2.15rem;
                }
            }
        }
    }
</style>