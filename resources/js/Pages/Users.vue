<template>
    <layout>
        <div class="users-page-container mr-5 ml-5 pl-5 pr-5 mt-3">
            <div class="users-header">
                <h2>Users</h2>
                <button class="btn"><i class="fas fa-plus mr-3"></i>Add User</button>
            </div>
            <table class="table mt-2">
                <thead class="bg-primary text-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>

            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
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
