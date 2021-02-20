<template>
    <div class="form-group pt-0">
        <h1>Hello</h1>
        <label v-bind:for="id" class="col-sm-2 col-form-label pt-0">{{ label}}:</label>
        <input v-model="value" v-bind:type="type" class="form-control"
               v-bind:class="{'is-invalid': errors.name != null && errors.length > 0}" v-bind:id="id" v-bind:placeholder="placeholder">
        <small class="text-danger form-text" v-for="error in errors">
            {{ error }}
        </small>
    </div>
</template>
<script>
export default {
    props:{
        type: String,
        label: String,
        id: String,
        errors: Object,
        placeholder: String,
        value: String
    },
}
</script>
