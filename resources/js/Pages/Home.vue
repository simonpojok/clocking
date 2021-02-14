<template>
    <layout>
        <div class="main-container-content">
            <h2>{{ time }} Hrs</h2>
            <h4 class="my-3">{{ date }}</h4>
            <button class="btn btn-danger">Time Out</button>
        </div>
    </layout>
</template>
<script>
import Layout from "../Components/Layout";
export default {
    data() {
        return {
            time: window.moment().format('h:mm'),
            date: window.moment().format("ddd, D/MMM/YY")
        }
    },
    components: {Layout}
}
</script>
<style>
    .main-container-content {
        width: 40vw;
        margin: 25vh auto;
        /*background-color: #2d3748;*/
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
    }

    .main-container-content h2 {
        font-size: 5rem;
    }

    .main-container-content h4 {
        color: #848484;
    }
</style>
