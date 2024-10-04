<template>
  <div class="container container-fluid">
    <button
    :disabled="pageIndex === 0"
    @click.prevent="previousPage"
    class="btn pg-btn  p-1 fs-1"
    >السابق</button
  >
  
    <div
      v-for="service in useOfferedServices.G_offeredServices"
      :key="service.id"
      :class="['wrapper','px-5',{animated:isAnimted}]"
    >
      <img :src="service.image" class="banner-image" alt="" />

      <h3 class="bg-secandray">{{ service.name }}</h3>
      <p class="">{{service.description}}</p>
      <div class="button-wrapper">
        <button class="btn outline">{{ service.price }}</button>
        <button  @click.prevent="sendRequest(service.name,service.price,service.description)" class="btn fill">اطلب الخدمة</button>
      
    </div>
  </div>
  <div v-if="useOfferedServices.G_offeredServices.length===0" class="mx-5 text-warning"><h1>  لا يوجد خدمات ف الوقت الحالي  </h1></div>
  <button class="btn  pg-btn p-1 fs-1" @click="nextPage">التالي</button>

  </div>
 
</template>
<script setup>
import { offeredServices } from "@/sotre.js/bussins/offeredServices";
import { ref, onBeforeMount, onMounted } from "vue";
import { useRoute } from "vue-router";

const props =defineProps(['BussinsID']);
const isAnimted=ref(false)
const useOfferedServices = offeredServices();
const route=useRoute()
const pageIndex = ref(0);

const nextPage = async () => {
  isAnimted.value=!isAnimted.value;
  ++pageIndex.value;
 
 setTimeout( async()=>{
  await useOfferedServices.getOfferdServices(pageIndex.value,route.params.id);
  isAnimted.value=!isAnimted.value;
 },2600)
  
};
const previousPage = async () => {
  --pageIndex.value;

  await useOfferedServices.getOfferdServices(pageIndex.value,route.params.id);
};
const sendRequest=async(name,price,description)=>{
  const id=localStorage.getItem('bussinsId')
  
  const token =localStorage.getItem('token');
  
  const request =await fetch(`https://localhost:7165/api/Account/send-service-request?freelancerId=${id}`,{
    method:'POST',
    headers:{
    accept: '*/*',
    Authorization:`Bearer ${token}`, 
    'Content-Type': 'application/json'
   },
   body:JSON.stringify({
    name: name,
   price: price,
   description: description
   })
  
  }
  )
  console.log(request);
}
onMounted(async () => {

  const useOfferedServices = offeredServices();

  await useOfferedServices.getOfferdServices(0,route.params.id); 
  
  
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");

.container {
  
  border-radius: 12px;
  border: 1px solid var(--gray);
  padding: 10px;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  flex-basis: 500px;
  flex-grow:1 ;
 flex-shrink: 1;
  text-align: center;
  min-height: 500px;
  overflow: hidden;
  
}

.wrapper {
  
 
  margin-top:25px ;
  /* animation: pagination 2s ease-in  0s 1 normal forwards ; */
  animation: paginationS 3s;
 
  width: 25%;
  
}
.wrapper img {
  object-fit: cover;
  width:100% ;
  height: 250px;
 transition: transform 2s ease-in-out;
}
.wrapper :hover{
  transform: scale(1.1);
}
.animated{
  animation: pagination 3s ease-in  0s 1 alternate ;
  background-color: rgb(250, 251, 251);
}

.banner-image {
  background-size: cover;
  height: 25%;
  width: 25%;
  border-radius: 12px;
  border: 1px solid var(--gray);
}

h3 {
  font-family: "Righteous", sans-serif;
  color: rgba(0, 0, 0, 0.98);
  text-transform: uppercase;
  font-size: 1.5rem;
  
  word-wrap: break-word;
  
  
}

p {
  color: #737272;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 0.8rem;
  width: 70px;
  
 
  
  
}

.button-wrapper {
  margin-top: 12px;
}

.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  color: rgba(0, 212, 255, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.6);
  transition: all 0.3s ease;
}

.outline:hover {
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  background-color: var(--gray);
}

.fill {
  background: rgba(0, 212, 255, 0.9);
  color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all 0.3s ease;
}

.fill:hover {
  transform: scale(1.125);
  border-color:var(--gray);
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  transition: all 0.3s ease;
  
}
@media (max-width: 768px) {
  .container{
    
    overflow: scroll;
   display: inline;
   
      padding: 1px;
    width: 100%;
    height: 1000px;
  }
.wrapper{
  width: 100%;
}
.wrapper img{
  width: 100%;
} 

}
@keyframes pagination {
  from{ transform: translateX(0px)}
  to{transform: translateX(1800px)}
  /* from{ transform: translateX(100px)}
  to{transform: translateX(0px)} */
}
@keyframes paginationS {
  from{ transform: translateX(-1500px); opacity: 0.0;}
  to{transform: translateX(0px);opacity: 1;}
  /* from{ transform: translateX(100px)}
  to{transform: translateX(0px)} */
}
</style>
