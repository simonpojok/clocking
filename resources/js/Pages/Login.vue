<template>
    <div class="form-container">
        <div  class="card" style="width: 40%;">
            <h2 class="ml-auto mr-auto mb-5">Sign In</h2>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="submit" class="btn">Login to Clocking</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {

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
