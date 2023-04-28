<template>
    <div id="container">
    <router-link to="/Oq">
        <div class="temas">
            <p>O que é?</p>
            
        </div>
    </router-link>
    <router-link to="/Vant">
        <div class="temas">
            <p>Vantagens x Desvantagens</p>
        </div>
    </router-link>
    <router-link to="/Rec">
        <div class="temas">
        <p>Recomendações</p>
        </div>
    </router-link>
    <router-link to="/Dicas">
        <div class="temas">
        <p>Dicas</p>
        </div>
    </router-link>
    <router-link to="/Desc">
        <div class="temas">
        <p>Destaques</p>
        </div>
    </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #container{
        margin-top: 20px; 
    }
    .temas{
        width: 250px;
        min-height: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: auto;
        margin-bottom: 15px;
        background-color: rgba(240, 232, 232, 0.775);
        border: rgb(141, 141, 141) solid 2px;
        border-radius: 20px;
        padding: 5px 10px;
        transition: .5s;
        
    }
    #container a{
        color: #ffffff;
        font-weight: bold;
        text-decoration: none;
        margin: auto;
        font-size: 20px;
    }
    .temas p{
        margin: auto;
    }
    .temas:hover{
        background-color: rgb(255, 255, 255);
        color: black;
        border: black solid 2px;
    }
    
</style>