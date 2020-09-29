<template>
    <section id='wrapper-base-overlined-heading'>
        <svg>
            <rect id="Rectangle_85" data-name="Rectangle 85" width="103" height="3" v-bind:fill="color"/>
        </svg>
        <slot />
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';


    @Component({})
    export default class BaseOverlinedHeading extends Vue {
       @Prop() color!: string;
    }
</script>

<style lang='scss' scoped>
    svg {
        margin-left: -3vw;
        margin-bottom: -13vh;
    }
</style>