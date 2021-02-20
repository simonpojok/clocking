<template>
    <div>
        <ul>
            <li class="ml-5 pt-2 mb-2">
                <h4 class="header home-link" @click="load_home">Clocking</h4>
                <p class="company-name">{{ user.email }} [ {{ user.role }} ]</p>
            <li>
            <li style="float:right" class="mr-5 pr-5">
            <a id="logout" v-on:click="logout">Logout</a></li>
            <li style="float:right" v-if="user.is_admin">
                <router-link to="/users">Users</router-link>
            </li>
            <li style="float:right">
                <router-link to="/report">Report</router-link>
            </li>
        </ul>
        <slot />
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            user: {
                name: '',
                email: '',
                is_admin: false
            }
        }
    },
    methods: {
        logout: function () {
            localStorage.clear();
            this.$router.push('/').then(response => {
                console.log("Route ", response);
            }).catch(error => {
                console.log(error, " Route");
            })
        },
        getCurrentUser: function () {
            axios.get('/api/users/me', {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.user = response.data.user;
            }).catch(error => {
                if(error.response.status === 403) {
                    console.log("Forbidden")
                } else if (error.response.status === 401) {
                    localStorage.clear();
                    this.$router.push('home');
                }
            })
        },
        load_home: function () {
            this.$router.push('/home')
        }
    },
    created() {
        this.getCurrentUser();
    }
}
</script>
<style>
.header {
    margin: 0;
    padding: 0;
}

.company-name {
    margin: 0;
    padding: 0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #18bb9b;
}

li {
    float: left;
    color: white;
    /*border-right: 1px solid #bbb;*/
}

li:last-child {
    border-right: none;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #18bb9b;
    text-decoration: none;
    color: white;
}

/*.active {*/
/*    background-color: #4CAF50;*/
/*}*/
#logout {
    cursor: pointer;
}

.home-link {
    cursor: pointer;
}
</style>
