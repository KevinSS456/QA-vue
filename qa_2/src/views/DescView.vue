<template>
    <Assunto :Desc= true />
</template>
<script>
import Assunto from '@/components/Assunto.vue';
export default {
    name: 'DescView',
    components:{
        Assunto
    }
}
</script>