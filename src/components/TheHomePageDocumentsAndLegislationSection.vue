<template>
    <section id='wrapper-the-home-page-documents-and-legislation-section' class='main-section'>
        <a name="documente"></a>

        <article class="left-side">
            <h2>DOCUMENTE</h2>
            <div>
                <ol>
                    <li class="text">Certificatul de înregistrare al societății</li>
                    <li class="text">Certificatul constatator al punctului de lucru</li>
                    <li class="text">Copie după documentul care face dovada dreptului de proprietate sau de folosință asupra obiectivului ce urmează a fi analizat)</li>
                    <li class="text">Plan de pază în cazul obiectivelor preexistente (nu este necesar în cazul obiectivelor care nu au instituită pază cu personal uman)</li>
                </ol>
            </div>
            <br>
            <span>Vezi toate..</span>
        </article>

        <div class="gap">

        </div>

        <article class="right-side">
            <h2>LEGISLAȚIE</h2>
            <div>
                <ol>
                    <li class="text">Legea-333-din-2003 privind paza obiectivelor, bunurilor, valorilor și protecția persoanelor</li>
                    <li class="text">H.G. 301 din 11 aprilie 2012 pentru aprobarea Normelor metodologice de aplicare a Legii nr. 333/2003</li>
                    <li class="text"> Instrucțiuni (1 februarie 2013) privind efectuarea analizelor de risc la securitatea fizică a unităţilor ce fac obiectul Legii nr. 333/2003</li>
                    <li class="text">H.G. 1002 din 23 decembrie 2015 pentru completarea Hotărârii Guvernului nr. 301/2012 pentru aprobarea Normelor metodologice de aplicare a Legii nr. 333/2003</li>
                </ol>
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

        .gap {
            width: 2.8vw;
        }

        .left-side, .right-side {
            height: 50vh;
            width: 45.5vw;
            box-sizing: border-box;
            padding: 4vh 4vw;
            color: white;

            h2 {
                font-size: 2rem;
                font-weight: 400;
            }

            > div {
                display: flex;
                padding-top: 5vh;
                box-sizing: border-box;
            }
        }

        li {
            margin-top: 1vh;
            line-height: 4vh !important;
        }

        .left-side {
            background: linear-gradient(45deg,#5A60B1 0%,#5174C7 100%);

            > h2 {
                color: $base-cyan;
            }

            > span {
                margin-top: 2vh;
                cursor: pointer;
            }
        }

        .right-side {
            background-color: white;
            border: solid 1px #E4E4E4;;
            > h2 {
                color: $base-dark-blue;
            }

            > div {
                > ol {
                    list-style: none;
                    > li {
                        color: $base-dark-gray;
                    }
                }
            }
        }
    }

    @media all and (max-width: 480px) {
        #wrapper-the-home-page-documents-and-legislation-section {
            flex-direction: column;

            .left-side, .right-side {
                width: 100%;
                height: auto;

                h2 {
                    font-size: 1.5rem;
                }

                ol > li {
                    margin-left: 5vw;
                }
            }
        }
    }
</style>