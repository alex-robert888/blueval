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
    #wrapper-the-home-page-our-mission-section {
        overflow-x: auto;
        height: 45vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        > div { 
            width: 100%;
            height: 80%;
            background: linear-gradient(90deg, rgba(241,242,255,1) 0%, rgba(220,243,255,1) 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            > p {
                width: 80%;
                text-align: center;
            }

            > h2 {
                text-align: center;
            }
        }
    }

    // @media all and (max-width: 970px) {
    //     #wrapper-the-home-page-our-mission-section {
    //         height: 80vh;
    //         > div {
    //             > p {
    //                 width: 85%;
    //                 font-size: 0.7rem;
    //                 line-height: 2rem;
    //             }
    //         }    
    //     }
    // }  

    @media all and (max-width: 480px) {
        #wrapper-the-home-page-our-mission-section {
            height: 70vh;
            > div {
                > p {
                    width: 90%;
                    font-size: 0.7rem;
                    line-height: 2rem;
                }
            }    
        }
    }   
    
    @media all and (min-width: 480px) and (max-width: 970px) {
        #wrapper-the-home-page-our-mission-section {
            height: 70vh;
            > div {
                > p {
                    width: 90%;
                    font-size: 0.9rem !important;
                    line-height: 2rem;
                }

                > h2 {
                   font-size: 1.8rem !important;
                }
            }    
        }
    }

</style>