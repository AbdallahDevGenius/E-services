<template>
<BaseCard :title="title" />

</template>
<script setup>
import { ref } from "vue";
import BaseCard from '@/components/UI/BaseCard.vue';
const title =" لا يوجد حجوزات سابقة "
const skills =ref(['HTML','CSS','BOOTSTRAP'])


</script>
<style scoped>
.bggray{
    background-color: #fbfafa;
    border-radius: 15px; 
}
p{
    margin-top:10px ;
    font-weight: 800;
}
</style>