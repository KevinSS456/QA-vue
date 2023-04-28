<template>
    
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
