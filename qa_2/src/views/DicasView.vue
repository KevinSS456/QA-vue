<template>
    <Assunto :Dica= true />
</template>
<script>
import Assunto from '@/components/Assunto.vue';
export default {
    name: 'DicasView',
    components:{
        Assunto
    }
}
</script>