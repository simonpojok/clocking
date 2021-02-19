<template>
    <layout>
        <div class="users-page-container mr-5 ml-5 pl-5 pr-5 mt-3">
            <div class="users-header">
                <h2>Users</h2>
                <button class="btn btn-add"><i class="fas fa-plus mr-3"></i>Add User</button>
            </div>
            <table class="table mt-2">
                <thead class="bg-primary text-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Created</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">
                    <th scope="row">{{ user.id }}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>{{ formatDate(new Date(user.created_at)) }}</td>
                    <td><button class="btn btn-danger" v-on:click="deleteUser(user.id)">Delete</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </layout>
</template>
<script>
import Layout from "../Components/Layout";
// moment().format('YYYY-MM-DD');
export default {
    components: {Layout},
    data: function () {
        return {
            users: []
        }
    },
    methods: {
        getUsers: function () {
            axios.get('/api/users').then(response => {
                this.users = response.data;
                console.log(this.users);
            }).catch(error => {
                console.log(error);
            })
        },

        deleteUser: function (id) {
            axios.delete('/api/users/' + id).then(response => {
                this.getUsers();
            }).catch(error => {
                console.log(error);
            })
        },

        formatDate: function (date) {
            const strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const d = date.getDate();
            const m = strArray[date.getMonth()];
            const y = date.getFullYear();
            return '' + (d <= 9 ? '0' + d : d) + ' / ' + m + ' / ' + y;
        }
    },
    mounted() {
        this.getUsers();
    }
}
</script>
<style>
    .users-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .btn-add {
        background-color: #18ba9a;
        outline: none;
        color: whitesmoke;
    }
</style>
