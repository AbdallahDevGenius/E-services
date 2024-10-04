<template>
 <div class="body">
   <header class="title">
   <h1> تنبيه </h1>  
  </header>
   <div class="message">
    <h2>{{ title }}</h2>
    <button @click="handelError" v-if="!link"> اغلاق</button>
    <button @click="confirmEmail" v-else-if="link"> تاكيد</button>

   </div>
 </div>
 
</template>
<script setup>
import router from '@/router';
import { defineEmits } from 'vue';
import { defineProps } from 'vue';

const emit =defineEmits(['tryclose'])
const props =defineProps(['title','link'])
const handelError =() =>{
 
  emit('tryclose')
}
const confirmEmail =()=>{
  router.push({name:'Login'})   ;
  emit('tryclose')
}


</script>
<style scoped>

.body{
  position: fixed;
  top: 40vh;
  right: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primarycolor);
  width: 100%;
  height: 100px;
  color: aliceblue;
}
.message{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top:10px;
background-color: rgb(249, 241, 230);
  height: 100px;

}
 button{
  background-color: rgb(207, 208, 208);
  color: rgb(19, 18, 18);
  width: 50px;
  font-size: large;
  font-weight: bold;
  border-radius: 10px;
  border-color:rgb(246, 246, 246) ;
 }
 button:hover{
  transform: scale(1.1);
 }

@media (max-width: 490px) {
  .body {
   position: absolute;
   
   right: 80px;
    
  }
}
</style>