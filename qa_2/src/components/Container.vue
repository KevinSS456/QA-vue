<template>
    <div id="Container">
        <router-view />
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #Container{
        min-width: 300px;
        min-height: 400px;
        color: #e9ddcb;
        background-color: rgb(30, 68, 145);
        border: rgb(212, 207, 207) solid 2px;
        border-radius: 15px;
        flex-direction: column;
        text-align: center;
        padding: 20px 20px;
    }
    #Container a{
        font-family: 1804;
        color: #222;
        font-size: 30px;
        text-decoration: none;
    }
</style>