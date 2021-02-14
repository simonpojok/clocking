<template>
    <div class="form-container">
        <div  class="card" >
            <h2 class="ml-auto mr-auto mb-5">Sign In</h2>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" v-model="email" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group mt-3">
                    <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
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
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();
            if(this.password.length > 0) {
                axios.post('api/account/login', {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    if(response.status === 250) {
                        let user = response.data.data.user;
                        let token = response.data.access_token;
                        let is_admin = user.role === 'admin';
                        console.log(token);

                        localStorage.setItem('user', JSON.stringify(user));
                        localStorage.setItem('jwt', token);

                        if(localStorage.getItem('jwt') != null) {
                            this.$emit('loggedIn');
                            if(this.$route.params.nextUrl != null) {
                                this.$router.push(this.$route.nextUrl);
                            } else {
                                if(is_admin) {
                                    this.$router.push('dashboard');
                                } else {
                                    this.$router.push('home')
                                }
                            }
                        }
                    } else if (response.status === 259) {

                    }
                }).catch(error => {
                    console.log(error);
                })
            }
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
