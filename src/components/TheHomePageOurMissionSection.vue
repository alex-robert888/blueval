<template>
    <section id='wrapper-the-home-page-our-mission-section' class='main-section'>
        <div>
            <h2 class="heading"> AM NEVOIE DE EVALUARE DE RISC? </h2>
            <p class="text">De cele mai multe ori pare neverosimilă producerea unui incident de securitate chiar în interiorul afacerii tale! Cu toate acestea, ele se întâmplă  zilnic, mai aproape sau mai departe de noi, sunt mediatizate mai mult sau mai puțin, însă daunele provocate – materiale, de imagine / prestigiu sau, în situații grave,  angajaților  sau clienților – sunt greu de surmontat, uneori imposibil.</p>
        </div>
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
    #wrapper-the-home-page-our-mission-section > div {
        margin-top: 15vh;
        height: 40vh;
        width: 100%;
        background-clip: content-box;
        background: linear-gradient(90deg, rgba(241,242,255,1) 0%, rgba(220,243,255,1) 100%);
        // overflow: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        > p {
            width: 55%;
            text-align: center;
        }
    }

    @media all and (max-width:  864px) {
        #wrapper-the-home-page-our-mission-section > div {
            margin-top: 0vh;
            height: 55vh;
            > p {
                width: 88%;
                font-size: 0.85rem;
                line-height: 2.1rem;
            }
        }    
    }     
</style>