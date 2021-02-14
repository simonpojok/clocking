<template>
    <div>
        <ul>
            <li class="ml-5 pl-5 mt-2 mb-2">
                <h4 class="header">Clocking</h4>
                <p class="company-name">info@tailanalytics.com [admin]</p>
            <li>
            <li style="float:right" class="mr-5 pr-5"><a href="#about">Logout</a></li>
            <li style="float:right"><a href="#about">Users</a></li>
            <li style="float:right"><a href="#about">Report</a></li>
        </ul>
    </div>
</template>
<script>
export default {}
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
</style>
