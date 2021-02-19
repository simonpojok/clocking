<template>
    <layout>
        <div class="users-page-container mr-5 ml-5 pl-5 pr-5 mt-3">
            <div class="users-header">
                <h2>Users</h2>
                <button class="btn"><i class="fas fa-plus mr-3"></i>Add User</button>
            </div>
            <div class="users-body">

            </div>
        </div>
    </layout>
</template>
<script>
import Layout from "../Components/Layout";

export default {
    components: {Layout},
}
</script>
<style>
    .users-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .btn {
        background-color: #18ba9a;
        outline: none;
        color: whitesmoke;
    }
</style>
