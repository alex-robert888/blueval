<template>
    <section id='wrapper-the-home-page-contact-section' class="main-section">
        <h2 class="heading">CONTACT / FAQ</h2>
        <div>
            <div class="left-side">
                <a name="contact" class="a--redirect"></a>
                <form name="contact" netlify>
                    <label for="email" class="text label">Email</label>
                    <input type="text" name="email" id="" class="input-or-textarea">
                
                    <label for="mesaj" class="text label">Mesaj</label>
                    <textarea type="text" name="mesaj" id="" class="textarea input-or-textarea" />

                    <button type="submit" class="button">Trimite</button>
                </form>
            </div>        
            <TheHomePageContactSectionSvg class="right-side" />
        </div>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import TheHomePageContactSectionSvg from './TheHomePageContactSectionSvg.vue';

    @Component({
        components: {
            TheHomePageContactSectionSvg
        }
    })
    export default class TheHomePageContactSection extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-contact-section {
        overflow: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        > div {
            display: flex;
            margin-top: 10vh;
            width: 90%;
        }

        .left-side {
            height: 40vh;
            .a--redirect {
                margin-top: -10vh;
            }

            > form {
                display: flex;
                flex-direction: column;
                
                > input, > textarea {
                    width: 25vw;
                }

                > input {
                    height: 5vh;
                }

                > textarea {
                    height: 20vh;
                }

                > button {
                    background-color: #3B6FFF;
                    color: white;
                    width: 9vw;
                    height: 5vh;
                    margin-top: 3vh;
                }
            }
        }

        .right-side {
            margin-left: auto;
            margin-top: -5vh;
        }
    }

</style>