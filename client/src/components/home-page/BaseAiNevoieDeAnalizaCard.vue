<template>
    <div class='wrapper-base-ai-nevoie-de-analiza-card'>
        <div class="icon-frame" v-bind:style="{ 'background-color': hexColor }">
            <slot name="icon" />
        </div>
        <slot name="heading" />
        <slot name="text" />
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';


    @Component({})
    export default class BaseAiNevoieDeAnalizaCard extends Vue {
       @Prop() hexColor!: string;
    }
</script>

<style lang='scss'>
    $icon-frame-diameter: 5vw;

    .icon-frame {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: $icon-frame-diameter;
        height: $icon-frame-diameter;
    }
</style>