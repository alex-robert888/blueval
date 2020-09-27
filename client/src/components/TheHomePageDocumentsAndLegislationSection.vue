<template>
    <section id='wrapper-the-home-page-documents-and-legislation-section' class='main-section'>
        <a name="documente"></a>

        <article class="left-side">
            <h2>Documente</h2>
            <div>
                <img src="../assets/images/vertical-border.svg" alt="" class="vertical-border">
                <ol>
                    <li class="text">Certificatul de înregistrare al societății</li>
                    <li class="text">Certificatul constatator al punctului de lucru</li>
                    <li class="text">Schiţa obiectivului (releveu)</li>
                    <li class="text">Copie după documentul care face dovada dreptului de proprietate sau de folosință asupra obiectivului ce urmează a fi analizat</li>
                    <li class="text">Plan de pază în cazul obiectivelor preexistente (nu este necesar în cazul obiectivelor care nu au instituită pază cu personal uman),</li>
                </ol>
            </div>
            <br>
            <span>Vezi toate..</span>
        </article>

        <article class="right-side">
            <h2>Legislație</h2>
            <div>
                <ul>
                    <li>
                        <h3>Legea-333-din-2003</h3>
                        <p class="text">privind paza obiectivelor, bunurilor, valorilor și protecția persoanelor</p>
                    </li>
                    <li>
                        <h3>H.G. 301 din 11 aprilie 2012 </h3>
                        <p class="text">pentru aprobarea Normelor metodologice de aplicare a Legii nr. 333/2003</p>
                    </li>
                    <li>
                        <h3>Instrucțiuni (1 februarie 2013) </h3>
                        <p class="text">privind efectuarea analizelor de risc la securitatea fizică a unităţilor ce fac obiectul Legii nr. 333/2003 </p>
                    </li>
                    <li>
                        <h3>H.G. 1002 din 23 decembrie 2015 </h3>
                        <p class="text">pentru completarea Hotărârii Guvernului nr. 301/2012 pentru aprobarea Normelor metodologice de aplicare a Legii nr. 333/2003</p>                        
                    </li>
                </ul>
                <img src="../assets/images/vertical-border.svg" alt="" class="vertical-border">
            </div>
        </article>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHomePageDocumentsAndLegislationSection extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-documents-and-legislation-section {
        display: flex;
        height: 80vh;
        .left-side, .right-side {
            background-color: $base-light-blue;
            height: 72vh;
            width: 28vw;
            box-sizing: border-box;
            padding: 4vh 3vw;
        }

        .vertical-border {
            height: 8vh;
            // margin-top: 5vh;
        }

        .left-side {
            > div {
                display: flex;
                padding-top: 5vh;
                box-sizing: border-box;
                > ol {
                    width: 85%;
                    margin-left: 3vw;

                    > li {
                        margin-top: 3vh;
                    }
                }
            }

            > span {
                margin-left: 2vw;
                margin-top: 2vh;
                cursor: pointer;
            }
        }

        .right-side {
            margin-left: auto;
            > h2 {
                margin-left: 16.5vw;
            }
            // flex-direction: column;

            > div {
                display: flex;
                padding-top: 5vh;
                box-sizing: border-box;

                > ul {
                    list-style: none;
                    margin-right: 3vw;

                    > li {
                        text-align: right;
                        margin-top: 3vh;
                        > h3 {
                            cursor: pointer;
                            &:hover {
                                text-decoration: underline;
                            }
                        }

                        > p {
                            font-size: 0.9rem;
                        }
                    }
                }
            }
        }
    }
</style>