<template>
    <div class="card dialog-card">
        <div class="card-body">
            <div class="model-header">
                <h2 class="m-1 p-1">Add User</h2>
                <i class="fas fa-times" v-on:click="closeDialog"></i>
            </div>
            <hr style="margin-right: -20px; margin-left: -20px;">
            <form method="post" v-on:submit="handleSubmit">
                <div class="form-group pt-0">
                    <label for="name" class="col-sm-2 col-form-label pt-0">Name:</label>
                    <input v-model="name" type="text" class="form-control"
                           v-bind:class="{'is-invalid': errors.name != null && errors.name.length > 0}" id="name" placeholder="Full Name">
                    <small class="text-danger form-text" v-for="error in errors.name">
                        {{ error }}
                    </small>
                </div>
                <div class="form-group">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <input  v-model="email" type="email" class="form-control" v-bind:class="{'is-invalid': errors.email != null && errors.email.length > 0}" id="email" placeholder="Email">
                    <small class="text-danger form-text" v-for="error in errors.email">
                        {{ error }}
                    </small>
                </div>

                <div class="form-group">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" v-bind:class="{'is-invalid': errors.password != null && errors.password.length > 0}" id="password" placeholder="Password">
                    <small class="text-danger form-text" v-for="error in errors.password">
                        {{ error }}
                    </small>
                </div>
                <div class="radio-container ml-3">
                    <div class="form-check mr-5">
                        <input class="form-check-input" type="radio" name="admin" id="admin" value="admin" v-on:click="setUserIsAdmin">
                        <label class="form-check-label" for="admin">Admin</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="admin" id="user" value="user" checked v-on:click="setUserIsUser">
                        <label class="form-check-label" for="user">User</label>
                    </div>
                </div>

                <hr style="margin-right: -20px; margin-left: -20px;">

                <div class="form-group row mt-2 button-container">
                    <button class="btn btn-default mr-5 button-default" type="button" v-on:click="closeDialog">Cancel</button>
                    <button class="btn btn-add" type="submit"><i class="fas fa-plus mr-3"></i>Add User</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            dialog: false,
            email: '',
            name: '',
            password: '',
            role: 'user',
            errors: {
                name: [],
                email: [],
                password: [],
                role: []
            }
        }
    },
    methods: {
        handleSubmit: function (even) {
            even.preventDefault();
            this.errors =  { name: [], email: [], password: [], role: [] };
            axios.post('/api/account/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                role: this.role
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                console.log(response);
                this.closeDialog();
            }).catch(error => {
                if(error.response.status === 403) {
                    console.log("Forbidden")
                } else if (error.response.status === 401) {
                    localStorage.clear();
                    this.$router.push('/');
                }
                this.errors = error.response.data.errors;
            })
        },
        closeDialog: function () {
            this.$emit('close');
        },
        setUserIsAdmin: function () {
            this.role = 'admin';
        },
        setUserIsUser: function () {
            this.role = 'user';
        },
    }
}
</script>
<style>
    .dialog-card {
        width: 60%;
        position: fixed;
        top: 5%;
        left: 20%;
        right: 20%;
        /*bottom: 20%;*/
    }
    .model-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .radio-container {
        display: flex;
        flex-direction: row;
    }

    .button-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
    }

    .button-default {
        color: white;
        background-color: #2d3748;
    }
</style>
