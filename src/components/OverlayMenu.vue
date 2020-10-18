<template>
    <div id='wrapper-overlay-menu'>
        <a href="" class="closebtn" v-on:click="closeOverlayMenu()">&times;</a>
        <div class="center-nav">
            <div class="overlay-content"> 
                <a href="#home" v-on:click="closeOverlayMenu()">Home</a>
                <a href="#de-ce" v-on:click="closeOverlayMenu()">De ce am nevoie?</a>
                <a href="#ce-presupune" v-on:click="closeOverlayMenu()">Ce presupune?</a>
                <a href="#documente" v-on:click="closeOverlayMenu()">Documente</a>
                <a href="#faq" v-on:click="closeOverlayMenu()">FAQ</a>
                <a href="#contact" v-on:click="closeOverlayMenu()">Contact</a>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class OverlayMenu extends Vue {
       closeOverlayMenu() {
           this.$store.commit("closeOverlayMenu()");
       }
    }
</script>

<style lang='scss' scoped>
    #wrapper-overlay-menu {
        width: 100%;
        height: 100vh;
        position: relative;
        z-index: 100;
        background-color: rgb(61, 53, 177);

        .closebtn {
            font-size: 4rem;
            margin: 3rem;
        }


        a {
            color: white;
            text-decoration: none;
        }

        .overlay-content {
            display: flex;
            flex-direction: column;
            align-self: center;
        }
        
        .center-nav {
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            
            a {
                font-size: 2.1rem;
            }
        }
    }
</style>