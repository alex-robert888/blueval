<template>
    <section id='wrapper-the-home-page-contact-section' class="main-section">
        <a name="contact" class="a--redirect"></a>
        <form action="">
            <label for="email" class="text label">Email</label>
            <input type="text" name="email" id="" class="input-or-textarea">
        
            <label for="mesaj" class="text label">Mesaj</label>
            <textarea type="text" name="mesaj" id="" class="textarea input-or-textarea" />

            <button type="submit" class="button">Continuă</button>
        </form>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHomePageContactSection extends Vue {
       
    }
</script>

<style lang='scss' scoped>
    #wrapper-the-home-page-contact-section {
        background-color: $base-light-blue;
        height: 80vh;
        width: 100%;
        overflow: auto;
        .a--redirect {
            margin-top: -10vh;
        }

        > form {
            display: flex;
            flex-direction: column;
            margin-top: 20vh;
            
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

</style>