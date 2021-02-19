<template>
    <layout>
        <div class="user-container">
            <div class="left">
                <h2>Users</h2>
                <div class="card mr-5" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="color: black">
                            <h3>Admin</h3>
                            <p>info@gmail.com</p>
                        </li>
                        <li class="list-group-item" style="color: black">
                            <h3>Trail Support</h3>
                            <p>support@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <h2>Log for Oct, 2016</h2>
                <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
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
        /*background-color: #2d3748;*/
        display: flex;
        flex-direction: row;
        align-content: space-between;
        width: 100%;
        height: 90vh;
        padding: 5%;
    }

    .left {
        /*background-color: #18ba9a;*/
        /*width: 20%;*/
        height: 100%;
    }

    .right {
        /*background-color: #ba3818;*/
        width: 80%;
        height: 100%;
    }
</style>
