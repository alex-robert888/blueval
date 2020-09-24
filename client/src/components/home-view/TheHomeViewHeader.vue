<template>
    <div id='wrapper-the-home-view-header'>
        <div>
            <img src="../../assets/img/blueval-logo.svg" alt="">
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">De ce imi trebuie?</a></li>
                    <li><a href="">Ce presupune?</a></li>
                    <li><a href="">Documente</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHomeViewHeader extends Vue {
       
    }
</script>

<style lang='scss'>
    #wrapper-the-home-view-header {
        z-index: 2;
        background-color: $base-white;
        height: $the-home-view-header-height;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
            width: 100%;
            display: flex;
            align-items: center;
            margin: 0 $home-view-horizonal-margins;
            > img {
                height: 2.7vh;
                margin-top: 1vh;
            }
        }

        nav {
            margin-left: auto;
            ul {
                list-style: none;
                display: flex;
                li {
                    margin-left: 3.5vw;   
                    a {
                        text-decoration: none;
                        color: $base-black;
                    }
                }
            }
        }
    }
</style>