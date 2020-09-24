<template>
    <svg 
        class="wrapper-base-overline" 
        xmlns="http://www.w3.org/2000/svg" width="135" height="3"
    >
        <rect data-name="Rectangle 85" width="110" height="3" v-bind:fill="color"/>
    </svg>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';


    @Component({})
    export default class BaseOverline extends Vue {
       @Prop() color!: string;
    }
</script>

<style lang='scss'>
    
</style>