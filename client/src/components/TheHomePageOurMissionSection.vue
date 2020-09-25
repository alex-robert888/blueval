<template>
    <section id='wrapper-the-home-page-our-mission-section' class='main-section'>
        <img src="../assets/images/bubble-our-mission.svg" alt="">
        <article class="text">
            <h2>Misiunea Noastră</h2>
            <h3 class="text">De cele mai multe ori pare neverosimilă producerea unui incident de securitate chiar în interiorul afacerii tale ! Cu toate acestea, ele se întâmplă  zilnic, mai aproape sau mai departe de noi, sunt mediatizate mai mult sau mai puțin, însă daunele provocate – materiale, de imagine / prestigiu sau, în situații grave,  angajaților  sau clienților – sunt greu de surmontat, uneori imposibil.</h3>
        </article>
        
        <article class="image">
            <img src="../assets/images/writing-man.png" alt="">
            <img src="../assets/images/repeat-grid-circles.svg" alt="">
        </article>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHomePageOurMissionSection extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-our-mission-section {
        height: 85vh;
        width: 100%;
        position: relative;
        > img:first-of-type {
            position: absolute;
            top: 14vh;
            z-index: -1;
        }

        > article.text {
            position: absolute;
            top: 33vh;
            left: 20vw;
            width: 35%;

            > h2 {
                font-size: 3.5rem;
                color: $base-mid-blue;
            }

            > h3 {
                margin-top: 3vh;
            }
        }

        > article.image {
            position: absolute;
            top: 43vh;
            left: 65vw;
            > img:first-of-type {
                width: 25vw;
            }

            > img:last-of-type {
                position: absolute;
                left: 20vw;
                top: 29vh;
            }
        }


    }
</style>