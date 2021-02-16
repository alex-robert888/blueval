<template>
    <section id='wrapper-the-home-page-hero-section' class='main-section'>
        <a name="home" class="a--redirect"></a>
        <img src="../assets/images/business-building.jpg" alt="">
        <article>
            <h1>Evaluări de risc la securitate fizică</h1>
            <h2>Covasna, Harghita si județele limitrofe</h2>
            <hr>
            <h3>Asigură-ți securitatea afacerii tale apelând la profesioniști. Procesul este simplu și gândit astfel încât activitatea ta să nu fie perturbată, în timp ce noi lucrăm la standarde de exigență ridicate. Suntem interesați să realizăm și să îți livrăm un produs pe care să îl utilizezi ușor, rapid și predictibil.</h3>
            <a id="a-button-contact" href="#contact" class="button-contact">
                <ButtonContact  />
            </a>
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
        contactOnClick() {
            console.log('contact button test');
            alert('redirecting you to contact section...');
        }
    }
</script>

<style lang='scss' scoped>
    $the-hero-section-height: calc(100vh - #{$the-header-height});

    #a-button-contact {
        display: block;
        margin-top: 4vh;
    }

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

            @media all and (max-width: 1310px) {
                display: none;
            }
        }

        > article {
            @media all and (max-width: 1310px) {
                 margin-left: 8vw;
            }
            @media all and (max-width: 570px) {
                 margin-top: 7.5vh;
            }
            margin-left: 30vw;
            margin-top: 11vh;

            > h1, > h2, > h3 {
                width: 740px;
                @media all and (max-width: 960px) {
                    width: 500px;
                }

                @media all and (max-width: 570px) {
                    width: 330px;
                }

                @media all and (max-width: 350px) {
                    width: 285px;
                }
            }

            > h1 {
                font-size: 5.5rem;
                font-weight: 100;
                 @media all and (max-width: 960px){
                    font-size: 4rem;
                }
                @media all and (max-width: 570px) {
                    font-size: 3rem;
                }
                @media all and (max-width: 350px) {
                    font-size: 2rem;
                }
            }

            > h2 {
                margin-top: 1.5rem;
                font-size: 1.1rem;
                font-weight: 100;
                color: #9e9e9e;
                @media all and (max-width: 960px){
                    font-size: 4rem;
                }
                @media all and (max-width: 570px) {
                    font-size: 3rem;
                }
                @media all and (max-width: 350px) {
                    font-size: 2rem;
                }
            }


            > h3 {
                font-weight: 100;
                margin-top: 3.5vh;
                font-size: 1.0rem;
                line-height: 2.75rem;
                @media all and (max-width: 960px) {
                    font-size: 0.86rem;
                }
                @media all and (max-width: 570px) {
                    font-size: 0.69rem;
                }
                @media all and (max-width: 350px) {
                    font-size: 0.57rem;
                }
            }

            > hr {
                margin: .2rem 0;
                background-color: red;
                border-color:#f5f5f5;
            }
        }
    }

    @media all and (max-width: 1699px) {
        h1 {
            font-size: 2.33rem;
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
                    width: 92vw;
                }

                > h1 {
                    font-size: 3rem;
                    font-weight: 100;
                }

                > h2 {
                    font-weight: 100;
                    margin-top: 2.5vh;
                    font-size: 0.75rem;
                    line-height: 2.15rem;
                }
            }
        }
    }
</style>