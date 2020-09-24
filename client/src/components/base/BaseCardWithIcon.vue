<template>
    <div class='wrapper-base-ai-nevoie-de-analiza-card'>
        <div class="icon-frame" v-bind:style="{ 'background-color': hexColor }">
            <slot name="icon" />
        </div>
        <slot name="heading" />
        <div class="slot-text"><slot name="text" /></div>
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
        margin-bottom: 3vh;
    }

    .slot-text {
        margin-top: 2vh;
        width: 80%;
    }
</style>