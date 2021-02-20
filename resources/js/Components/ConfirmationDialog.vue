<template>
    <div class="dialog-card-delete card">
        <p class="p-3">Please confirm you wish to delete this user ?</p>
        <div class="card-footer btn-container">
            <button class="btn mr-3" v-on:click="deleteUser">OK</button>
            <button class="btn" v-on:click="cancelDelete">Cancel</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        deleteUser: function () {
            this.$emit('deleteUser')
        },
        cancelDelete: function () {
            this.$emit('cancelDelete')
        }
    }
}
</script>
<style>
.dialog-card-delete {
    width: 30%;
    position: fixed;
    margin: auto;
    top: 30%;
    left: 35%;
    /*background-color: #2d3748;*/
    /*height: 100px;*/
}
.btn-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
</style>
