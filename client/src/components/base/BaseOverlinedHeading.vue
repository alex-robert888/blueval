<template>
    <div class='wrapper-base-overlined-heading'>
        <!-- <img src="../../assets/img/above-line-cyan.svg" alt=""> -->
        <div><BaseOverline v-bind:color="color" /></div>
        <slot />
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    import BaseOverline from './BaseOverline.vue'


    @Component({
        components: {
            BaseOverline
        }
    })
    export default class BaseOverlinedHeading extends Vue {
       @Prop() color!: string;
    }
</script>

<style lang='scss'>
    .wrapper-base-overlined-heading {
        margin-top: 16vh;
        margin-bottom: 16vh;

        > div {
            margin-left: -3.5vw;
            margin-bottom: 1vh;
        }
    }

    h2 {
        font-weight: lighter;
    }
</style>