<template>
    <section id="wrapper-the-home-view-documents-and-legislation-section" class="flex">
        <article id="documents-card" class="base-card">
            <h2>Documente</h2>
        </article>

        <article id="legislation-card" class="base-card">
            <h2>Legislație</h2>
        </article>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHomeViewDocumentsAndLegislationSections extends Vue {
       
    }
</script>

<style lang='scss'>
    .base-card {
        height: 75vh;
        width: 35%;
        background-color: $base-light-blue;
        margin: 0px 3vw;
    }
</style>