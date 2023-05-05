<template>
    <h1>Q<span>uadrante-</span>2</h1>
    <Container />
</template>
<script>
import Container from './components/Container.vue';
export default {
   components:{Container}
}
</script>

<style>
  *{
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }
  html, body {
    height: 100%;
  }
  
  body{
    background: linear-gradient(20deg, rgba(24, 23, 24, 0.653) 0%, rgba(1,1,1,1) 2%, rgb(51, 119, 255) 85%);
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
</style>
<style scoped>
  h1{
    font-family: Arial, sans-serif;
    font-size: 4em;
    margin-top: 0;
    color: white;
    text-shadow: 3px 1px black;
    padding: 0.5em;
    border-radius: 5px;
    text-align: center;
  }
  span{
    display: none;
  }
</style>
