<template>
    <div>
        <add-user-model @close="handleClose" v-if="show_dialog" v-bind:class="{'block': show_dialog }"/>
        <confirmation-dialog @deleteUser="deleteUser" v-if="show_delete" @cancelDelete="cancelDelete"/>
        <layout v-bind:class="{'unblock': !show_dialog}" id="boday">
            <div class="users-page-container mr-5 ml-5 pl-5 pr-5 mt-3">
                <div class="users-header">
                    <h2>Users</h2>
                    <button class="btn btn-add" v-on:click="addUser"><i class="fas fa-plus mr-3"></i>Add User</button>
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
                    <tr v-for="(user, index) in users">
                        <th scope="row">{{ index + 1}}</th>
                        <td>
                            <router-link v-bind:to="getFullRoute(user.id)">{{ user.name }}</router-link>
                        </td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.role }}</td>
                        <td>{{ formatDate(new Date(user.created_at)) }}</td>
                        <td><button class="btn btn-danger" v-on:click="showDeleteUser(user.id)">Delete</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </layout>
    </div>
</template>
<script>
import Layout from "../Components/Layout";
import AddUserModel from "../Components/AddUserModel";
import Vue from "vue";
import ConfirmationDialog from "../Components/ConfirmationDialog";
// moment().format('YYYY-MM-DD');
export default {
    components: {ConfirmationDialog, AddUserModel, Layout},
    data: function () {
        return {
            users: [],
            show_dialog: false,
            show_delete: false,
            user_id: 0
        }
    },
    methods: {
        getUsers: function () {
            axios.get('/api/users', {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.users = response.data;
            }).catch(error => {
                console.log(error.response)
            })
        },

        deleteUser: function (id) {
            axios.delete('/api/users/' + this.user_id, {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.getUsers();
            }).catch(error => {
                console.log(error);
            })
            this.show_delete = true;
        },

        showDeleteUser: function (id) {
            this.show_delete = true;
            this.user_id = id;
        },

        cancelDelete: function () {
            this.show_delete = false;
        },

        formatDate: function (date) {
            const strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const d = date.getDate();
            const m = strArray[date.getMonth()];
            const y = date.getFullYear();
            return '' + (d <= 9 ? '0' + d : d) + ' / ' + m + ' / ' + y;
        },
        addUser: function () {
            this.show_dialog = true;
            // let element = document.querySelector('#boday');
        },
        handleClose: function () {
            this.show_dialog = false;
            this.getUsers();
        },
        getFullRoute: function (id) {
            return "/user/" + id;
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
