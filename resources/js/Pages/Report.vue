<template>
    <layout>
        <div class="user-container">
            <div class="left">
                <h2>Users</h2>
                <div class="card mr-5" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="color: black" v-bind:class="{'bg-primary text-light': isAdminMode }" v-on:click="getAdminTimes">
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
                <h2>Log for Oct, 2016</h2>
                <div class="card">
                    <div class="card-header pt-4">
                    </div>
                    <table class="table table-borderless">
                        <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Time In</th>
                            <th scope="col">Time Out</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="time in times" :key="time.id">
                            <th scope="row">{{ time.date }}</th>
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
            isAdminMode: true
        }
    },
    methods: {
        getAdminTimes: function () {
            axios.get('/api/attendance').then(response => {
                this.isUserMode = false;
                this.isAdminMode = true;
                this.times = response.data;
            }).catch(error => {
                console.log(error)
            })
        },
        getUserTimes: function () {
            axios.get('/api/attendance/user-time').then(response => {
                this.isUserMode = true;
                this.isAdminMode = false;
                this.times = response.data;
                console.log(this.times);
            }).catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.getAdminTimes();
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
