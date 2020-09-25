
<template>
<!-- v-bind:style=" { width: size[0], height: size[1] }" -->
    <article class="wrapper-base-card" >
        <slot name="icon" />
        <h3 class="heading"><slot name="heading" /></h3>
        <p class="text"><slot name="text" /></p>
    </article>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';


    @Component({})
    export default class BaseCard extends Vue {
        @Prop() size!: [string, string];
    }
</script>

<style lang='scss' scoped>
    h3 {
        margin-top: 3vh;
        font-size: 1.2rem;
    }

    p {
        margin-top: 1vh;
    }
</style>