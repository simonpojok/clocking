<template>
    <div class="card dialog-card">
        <div class="card-body">
            <div class="model-header">
                <h2>Add User</h2>
                <i class="fas fa-times"></i>
            </div>
            <hr style="margin-right: -20px; margin-left: -20px;">
            <form>
                <div class="form-group">
                    <label for="name" class="col-sm-2 col-form-label">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Full Name">
                </div>
                <div class="form-group">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email">
                </div>

                <div class="form-group">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="radio-container ml-3">
                    <div class="form-check mr-5">
                        <input class="form-check-input" type="radio" name="admin" id="admin" value="admin">
                        <label class="form-check-label" for="admin">Admin</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="admin" id="user" value="user" checked>
                        <label class="form-check-label" for="user">User</label>
                    </div>
                </div>

                <hr style="margin-right: -20px; margin-left: -20px;">

                <div class="form-group row mt-2 button-container">
                    <button type="submit" class="btn btn-default mr-5">Cancel</button>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            dialog: false
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
