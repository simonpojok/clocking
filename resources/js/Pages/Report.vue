<template>
    <layout>
        <div class="user-container">
            <div class="left">
                <h2>Users</h2>
                <div class="card mr-5" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="color: black"
                            v-bind:class="{'bg-primary text-light': isAdminMode }"
                            v-if="user.is_admin"
                            v-on:click="getAdminTimes">
                            <h3>Admin</h3>
                            <p>info@gmail.com</p>
                        </li>
                        <li class="list-group-item" style="color: black" v-bind:class="{'bg-primary text-light': isUserMode }" v-on:click="getUserTimes">
                            <h3>Trail Support</h3>
                            <p>support@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <h2>Log for {{ date }}</h2>
                <div class="card">
                    <div class="card-header pt-4">
                    </div>
                    <table class="table table-borderless">
                        <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col" v-if="isAdminMode">User ID</th>
                            <th scope="col">Time In</th>
                            <th scope="col">Time Out</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="time in times" :key="time.id">
                            <th scope="row">{{ time.date }}</th>
                            <th scope="row" v-if="isAdminMode">
                                <router-link v-bind:to="getFullRoute(time.user_id)">{{ time.user_id }}</router-link>
                            </th>
                            <td>{{ time.time_in }}</td>
                            <td>{{ time.time_out }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
import Layout from "../Components/Layout";

export default {
    components: {Layout},
    data: function () {
        return {
            times: [],
            isUserMode: false,
            isAdminMode: true,
            date: window.moment().format("ddd, D/MMM/YY"),
            user: {
                name: '',
                email: '',
                is_admin: false
            }
        }
    },
    methods: {
        getAdminTimes: function () {
            axios.get('/api/attendance', {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.isUserMode = false;
                this.isAdminMode = true;
                this.times = response.data;
            }).catch(error => {
                console.log(error)
            })
        },
        getUserTimes: function () {
            axios.get('/api/attendance/user-time', {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.isUserMode = true;
                this.isAdminMode = false;
                this.times = response.data;
                console.log(this.times);
            }).catch(error => {
                console.log(error);
            })
        },
        getCurrentUser: function () {
            axios.get('/api/users/me', {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.user = response.data.user;
            }).catch(error => {
                console.log(error)
            })
        },
        getFullRoute: function (id) {
            return "/user/" + id;
        }
    },
    mounted() {
        if(this.user.is_admin) {
            this.getAdminTimes();
        } else {
            this.getUserTimes();
        }
    },
    created() {
        this.getCurrentUser();
    }
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
    height: 100%;
}

.right {
    width: 80%;
    height: 100%;
}

table td, table th {
    border-top: none !important;
}
</style>
