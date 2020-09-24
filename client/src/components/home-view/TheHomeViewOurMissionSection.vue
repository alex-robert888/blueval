<template>
    <section id="wrapper-the-home-view-our-mission-section">
        <div>
            <img src="../../assets/img/our-mission-back-bubble.svg" alt="">
            <article>
                <h2>MISIUNEA NOASTRĂ</h2>
                <p class="small-text">De cele mai multe ori pare neverosimilă producerea unui incident de securitate chiar în interiorul afacerii tale! Cu toate acestea, ele se întâmplă  zilnic, mai aproape sau mai departe de noi, sunt mediatizate mai mult sau mai puțin, însă daunele provocate – materiale, de imagine / prestigiu sau, în situații grave,  angajaților  sau clienților – sunt greu de surmontat, uneori imposibil.</p>
            </article>
            <img src="../../assets/img/our-mission-img.jpg" alt="">
            <img src="../../assets/img/repeat-grid.svg" alt="">
        </div>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHomeViewOurMissionSection extends Vue {
       
    }
</script>

<style lang='scss'>
     #wrapper-the-home-view-our-mission-section {
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

</style>