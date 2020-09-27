<template>
    <section id='wrapper-the-home-page-hero-section' class='main-section'>
        <a name="home" class="a--redirect"></a>
       
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

        > a {
            margin-top: -10vh;
        }

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