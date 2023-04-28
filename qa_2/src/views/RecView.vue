<template>
    <Assunto :Rece= true />
</template>
<script>
import Assunto from '@/components/Assunto.vue';
export default {
    name: 'RecView',
    components:{
        Assunto
    }
}
</script>