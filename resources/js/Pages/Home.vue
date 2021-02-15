<template>
    <layout>
        <div class="main-container-content">
            <h2>{{ nowTime }} Hrs</h2>
            <h4 class="my-3">{{ date }}</h4>
            <button class="btn" @click="time_in">Time In</button>
        </div>
    </layout>
</template>
<script>
import Layout from "../Components/Layout";
export default {
    created() {
        this.nowTimes();
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
            nowTime: 0
        }
    },
    methods: {
        time_in: function () {
            let user = JSON.parse(localStorage.getItem('user'));
            axios.post('/attendance/time-in', {
                user_id: user.id
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        },
        // timer function
        nowTimes(){
            this.nowTime = window.moment().format('h:mm');
            this.date = window.moment().format("ddd, D/MMM/YY");
            setInterval(this.nowTimes,1000);
        },
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
        background-color: #18ba9a;
        color: white;
        font-weight: bold;
    }
</style>
