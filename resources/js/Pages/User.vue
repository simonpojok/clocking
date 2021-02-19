<template>
    <layout>
        <div class="user-container">
            <div class="left"></div>
            <div class="right"></div>
        </div>
    </layout>
</template>
<script>
import Layout from "../Components/Layout";
export default {
    components: {Layout}
}
</script>
<style>
    .user-container {
        background-color: #2d3748;
        display: flex;
        flex-direction: row;
        align-content: space-between;
        width: 100%;
        height: 90vh;
        padding: 5%;
    }

    .left {
        background-color: #18ba9a;
        width: 20%;
        height: 100%;
    }

    .right {
        background-color: #ba3818;
        width: 80%;
        height: 100%;
    }
</style>
