<template>
    <layout>
        <div class="form-container mt-5">
            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="message.available">
                {{ message.message }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true" @click="message.available = false">&times;</span>
                </button>
            </div>
            <h2 class="mb-3">Edit User</h2>
            <form method="post" v-on:submit="handleSubmit">
                <div class="form-group pt-0">
                    <label for="name" class="col-sm-2 col-form-label pt-0">Name:</label>
                    <input v-model="user.name" type="text" class="form-control"
                           v-bind:class="{'is-invalid': errors.name != null && errors.name.length > 0}" id="name" placeholder="Full Name">
                    <small class="text-danger form-text" v-for="error in errors.name">
                        {{ error }}
                    </small>
                </div>
                <div class="form-group">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <input  v-model="user.email" type="email" class="form-control" v-bind:class="{'is-invalid': errors.email != null && errors.email.length > 0}" id="email" placeholder="Email">
                    <small class="text-danger form-text" v-for="error in errors.email">
                        {{ error }}
                    </small>
                </div>

                <div class="form-group">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <input v-model="user.password" type="password" class="form-control" v-bind:class="{'is-invalid': errors.password != null && errors.password.length > 0}" id="password" placeholder="Password">
                    <small class="text-danger form-text" v-for="error in errors.password">
                        {{ error }}
                    </small>
                </div>
                <div class="radio-container ml-3">
                    <div class="form-check mr-5">
                        <input class="form-check-input" type="radio" name="admin" id="admin"
                               v-bind:checked="user.role === 'admin'"
                               value="admin" v-on:click="setUserIsAdmin">
                        <label class="form-check-label" for="admin">Admin</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="admin" id="user" value="user" v-bind:checked="user.role === 'user'" v-on:click="setUserIsUser">
                        <label class="form-check-label" for="user">User</label>
                    </div>
                </div>

                <div class="form-group mt-3">
                    <button class="btn btn-add" type="submit">Save User</button>
                </div>
            </form>
        </div>
    </layout>
</template>
<script>
import Layout from "../Components/Layout";
export default {
    components: {Layout},
    data: function () {
        return {
            id: 0,
            errors: {
                name: [],
                email: [],
                password: [],
                role: []
            },
            user: {
                id: 0,
                email: '',
                name: '',
                password: '',
                role: '',
            },
            message: {
                available: false,
                message: "User account successfully Edited"
            }
        }
    },
    methods: {
        getUser: function () {
            axios.get('/api/users/' + this.id, {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.user = response.data;
            }).catch(error => {
                console.log(error);
            });
        },
        handleSubmit: function (event) {
            event.preventDefault();
            this.errors =  { name: [], email: [], password: [], role: [] };
            axios.put('/api/users/' + this.id, this.user, {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.getUser();
                this.message.available = true;
            }).catch(error => {
                // console.log(error.response.data.errors);
                this.errors = error.response.data.errors;
                console.log(this.errors);
            })
        },
        setUserIsAdmin: function () {
            this.user.role = 'admin';
        },
        setUserIsUser: function () {
            this.user.role = 'user';
        },
    },
    mounted() {
    },
    created() {
        this.id = this.$route.params.id;
        this.getUser();
    }
}
</script>
<style>
    .form-container {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .radio-container {
        display: flex;
        flex-direction: row;
    }

    .btn-add {
        background-color: #18ba9a;
        color: white;
    }
</style>
