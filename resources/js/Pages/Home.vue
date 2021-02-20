<template>
    <layout>
        <div class="main-container-content">
            <h2>{{ nowTime }} Hrs</h2>
            <h4 class="my-3">{{ date }}</h4>
            <div>
                <button class="btn time" @click="time_in_user" v-if="!times.time_in">Time In</button>
                <button class="btn bg-danger" @click="time_out_user" v-if="!times.time_out && times.time_in">Time Out</button>
            </div>
        </div>
    </layout>
</template>
<script>
import Layout from "../Components/Layout";

export default {
    created() {
        this.nowTimes();
        this.getUserStatus()
    },
    // Mount completion
    mounted(){
        this.nowTimes();
    },
    data() {
        return {
            time: window.moment().format('h:mm'),
            date: window.moment().format("ddd, D/MMM/YY"),
            value_time: 0,
            nowTime: 0,
            times: {
                time_in: false,
                time_out: false
            }
        }
    },
    methods: {
        get_status: function () {
            let user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
            user.is_timed_in = true;
            return true
        },
        get_label: function () {
            return this.get_status() ? 'Time In' : 'Time Out'
        },
        time_in: function () {
            let user = JSON.parse(localStorage.getItem('user'));
            if(this.get_status()) {
                axios.post('api/times/time-out', {
                    user_id: user.id
                }).then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })
            } else {
                axios.post('api/times/time-in', {
                    user_id: user.id
                }).then(response => {
                    if(response.status === 250) {
                        console.log(response);
                    }
                }).catch(error => {
                    console.log(error);
                })
            }
        },
        // timer function
        nowTimes(){
            this.nowTime = window.moment().format('HH:mm');
            this.date = window.moment().format("ddd, D/MMM/YY");
            setInterval(this.nowTimes,1000);
        },
        time_in_user() {
            axios.post('api/times/time-in', {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.times = response.data.times;
                // console.log(response);
            }).catch(error => {
                console.log(error.response);
            })
        },

        time_out_user: function () {
            axios.post('api/times/time-out', {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.times = response.data.times;
                console.log(response.data);
            }).catch(error => {
                console.log(error.response);
            })
        },

        getUserStatus: function () {
            axios.get('api/users/status', {
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
            }).then(response => {
                this.times = response.data.times;
            }).catch(error => {
                console.log(error.response);
            })
        },
        formatTime: function () {
            const date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }
    },
    components: {Layout}
}
</script>
<style>
    .main-container-content {
        width: 40vw;
        margin: 25vh auto;
        /*background-color: #2d3748;*/
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
    }

    .main-container-content h2 {
        font-size: 5rem;
    }

    .main-container-content h4 {
        color: #848484;
    }

    .btn {
        color: white;
        font-weight: bold;
    }

    .timed-in {
        background-color: #ba3818;
    }

    .time {
        background-color: #18ba9a;
    }
</style>
