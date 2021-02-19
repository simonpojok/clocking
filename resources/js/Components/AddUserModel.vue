<template>
    <div class="card dialog-card">
        <div class="card-body">
            <div class="model-header">
                <h2>Add User</h2>
                <i class="fas fa-times" v-on:click="closeDialog"></i>
            </div>
            <hr style="margin-right: -20px; margin-left: -20px;">
            <form>
                <div class="form-group">
                    <label for="name" class="col-sm-2 col-form-label">Name:</label>
                    <input v-model="name" type="text" class="form-control" id="name" placeholder="Full Name">
                </div>
                <div class="form-group">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <input  v-model="email" type="email" class="form-control" id="email" placeholder="Email">
                </div>

                <div class="form-group">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
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
                    <button class="btn btn-default mr-5" type="button" v-on:click="closeDialog">Cancel</button>
                    <button class="btn btn-add" type="submit" v-on:click="handleSubmit"><i class="fas fa-plus mr-3"></i>Add User</button>
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
            role: 'user'
        }
    },
    methods: {
        handleSubmit: function (even) {
            even.preventDefault();
            axios.post('/api/account/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                role: this.role
            }).then(response => {
                console.log(response, "==>")
            }).catch(error => {
                console.log(error.error, "-->");
            })
        },
        closeDialog: function () {
            this.$emit('close');
        },
        setUserIsAdmin: function () {
            this.user.role = 'admin';
        },
        setUserIsUser: function () {
            this.user.role = 'user';
        }
    }
}
</script>
<style>
    .dialog-card {
        width: 40%;
        position: fixed;
        top: 15%;
        left: 30%;
        right: 30%;
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
</style>
