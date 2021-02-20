<template>
    <div class="form-container">
        <div  class="card" >
            <h2 class="ml-auto mr-auto mb-5">Sign In</h2>
            <form>
                <div class="form-group">
                    <label for="email" class="">Email</label>
                    <input  v-model="user.email" type="email" class="form-control" v-bind:class="{'is-invalid': errors.email != null && errors.email.length > 0}" id="email" placeholder="Email">
                    <small class="text-danger form-text" v-for="error in errors.email">
                        {{ error }}
                    </small>
                </div>
                <div class="form-group">
                    <label for="password" class="">Password</label>
                    <input v-model="user.password" type="password" class="form-control" v-bind:class="{'is-invalid': errors.password != null && errors.password.length > 0}" id="password" placeholder="Password">
                    <small class="text-danger form-text" v-for="error in errors.password">
                        {{ error }}
                    </small>
                </div>
                <button type="submit"  @click="handleSubmit" class="btn">Login to Clocking</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            errors: {
                email: [],
                password: [],
            },
            user: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();
            axios.post('api/account/login', this.user).then(response => {
                console.log(response);
                let user = response.data.data.user;
                let token = response.data.access_token;
                let is_admin = user.role === 'admin';
                user.is_admin = is_admin;
                console.log(token);

                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('jwt', token);

                if(localStorage.getItem('jwt') != null) {
                    this.$emit('loggedIn');
                    if(this.$route.params.nextUrl != null) {
                        this.$router.push(this.$route.nextUrl);
                    } else {
                        // if(is_admin) {
                        //     this.$router.push('dashboard');
                        // } else {
                        //     this.$router.push('home')
                        // }
                        this.$router.push('home');
                    }
                }
            }).catch(error => {
                this.errors = error.response.data.errors;
                console.log(this.errors);
                if(error.response.status === 403) {
                    console.log("Forbidden")
                } else if (error.response.status === 401) {

                }
            })
        }
    }

}
</script>
<style scoped>
    .form-container {
        display: flex;
        flex-direction: column;
        position: fixed;
        justify-content: center;
        align-content: center;
        justify-items: center;
        align-items: center;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .card {
        padding: 2.5%;
        background-color: #ebeff0;
        width: 90%;
    }

    button {
        background-color: #18bb9b;
        color: white;
        width: 150px;
        align-self: flex-end;
    }

    form {
        display: flex;
        flex-direction: column;
    }

</style>
