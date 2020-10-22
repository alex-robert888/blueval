<template>
    <section id='wrapper-the-home-page-contact-section' class="main-section">
        <h2 class="heading">CONTACT / FAQ</h2>
        <div>
            <div class="left-side">
                <a name="contact" class="a--redirect"></a>
                <form name="contact"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <label for="email" class="text label">Email</label>
                    <input v-model="form.email" type="email" name="email" id="" class="input-or-textarea">
                
                    <label for="mesaj" class="text label">Mesaj</label>
                    <textarea v-model="form.message" type="text" name="mesaj" id="" class="textarea input-or-textarea" />

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
    import axios from 'axios';


    @Component({
        components: {
            TheHomePageContactSectionSvg
        }
    })
    export default class TheHomePageContactSection extends Vue {
       form = {
           email: "",
           message: ""
       }

       async postContact() {
            try {
                await axios.post('/', {
                    email: this.form.email,
                    message: this.form.message
                });
            }
            catch(err) {
                alert(err.message);
            }
        }
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-contact-section {
        overflow: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        > div {
            display: flex;
            margin-top: 10vh;
            width: 100%;
        }

        .left-side {
            width: 100%;

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

    @media all and (max-width: 480px) {
        #wrapper-the-home-page-contact-section {
            .right-side {
                display: none;
            }

            .left-side {
                > form {
                    > input, > textarea {
                        width: 100%;
                    }

                    button {
                        width: 40%;
                    }
                }
            }
        }
    }

</style>