
<template>
    <article class="wrapper-base-card" >
        <slot name="icon" />
        <h3><slot name="heading" /></h3>
        <img src="../assets/images/break-line.svg" alt="" class="break-line">
        <p><slot name="text" /></p>
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
    .wrapper-base-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 18vw;
        height: 45vh;
        border: 1px solid $base-white;   
        border-radius: 4px;    
        box-sizing: border-box;
        padding: 1.5rem; 
    }

    h3, p {
        text-align: center; 
    }

    h3 {
        margin-top: 3vh;
        font-size: 1.8rem;
        font-weight: 400;
        color: #99F3FB;
        letter-spacing: 0.22rem
        
        // letter-spacing: 0.6rem;
        // font-size: 2.05rem;
        // font-weight: 400;
        // color: #0311D8;
        // // margin-top: 8vh;
        // margin-bottom: 6vh;

        // @media all and (max-width: 480px) {
        //     letter-spacing: 0.4rem;
        //     font-size: 1.1rem;
        //     text-align: center;
        // }
    }

    p {
        margin-top: 3vh;
        color: white;
        font-size: 0.8rem !important;
        line-height: 3vh !important;
        font-weight: 100;
    }

    .break-line {
        margin-top: 2vh;
    }

    @media all and (max-width: 480px) {
        .wrapper-base-card {
            width: 99%;
            height: 33vh;
            padding: 0.5rem; 
        }

        h3 {
            font-size: 0.75rem;
        }

        p {
            font-size: 0.48rem !important;
            line-height: 2vh !important;
        }

        .break-line {
            width: 10vw;
        }
    }
</style>