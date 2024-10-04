<template>
  <TheHeader />
  <div class="bussins container-fluid" id="services">
    <div class="">
      <div class="cover">
        <!-- <img :src="'https://localhost:7165' + G_bussinsById.bussinsImage" alt="" class="cover-photo" /> -->
              <img class="cover-photo" :src="'https://localhost:7165'+G_bussinsById.bussinsImage" v-if="G_bussinsById.bussinsImage !=='/Images/default/avatar'"/>

        <img class="cover-photo" src="../../assets/15528.jpg" v-else  />  
        <label for="imgFile" v-if="isAdmin"></label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          @change="handelImgSrc($event)"
          id="imgFile"
          hidden
        />
      </div>
      
      <div class="bussins">
        <div class="bussins-detail">
          <h3>اسم النشاط :{{ G_bussinsById.bussinsName }}</h3>
          <h3>نوع النشاط :    {{ G_bussinsById.bussinsProfession }}</h3>
        </div>
        <div class="title">
          <BaseCard title="نبذة عن المحبة" />

          <p>
            {{ G_bussinsById.bussinsDesc }}
          </p>
        </div>
        <div class="bussins-services">
          <BaseCard title="الخدمات" class="my-5" />
          <div class="services d-flex">
            <pagination :BussinsID="route.params.id"/> 
          </div>
          <addService :formVisibilty="formVisibilty" @closeForm="closeForm" />
          <div class="container d-flex justify-content-center my-4">
            <button v-if="isAdmin"
              type="button"
              class="btn btn-primary"
              @click.prevent="showForm"
            >
              اضافة خدمة
            </button>
            
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";
import pagination from "../bussins/pagination.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
import TheHeader from "../layout/TheHeader.vue";
import addService from "@/components/forms/addService.vue";
import { activeBussins } from "@/sotre.js/bussins/activeBussins.js";
import {BussinsProfile} from '../../sotre.js/bussins/bussinsPic'
import { useRoute } from "vue-router";
const bussins =BussinsProfile();
const route =useRoute();
const formVisibilty = ref("none");
const bussinsId=ref();
const G_bussinsById=activeBussins();
const isAdmin=computed (()=>{
  return bussinsId.value ===route.params.id
})
const showForm = () => {
  
  formVisibilty.value = "flex";
};
const closeForm = () => {
  formVisibilty.value = "none";
};

const handelImgSrc = async (event) => {
  const file = event.target.files[0];
 await bussins.sendbussinsPic(file);
 setTimeout(async function(){
  await bussins.getbussinsPic();
 },2000)
 
 

};
onBeforeMount(async()=>{
 const route =useRoute();
 console.log(route.params.id)
 await G_bussinsById.bussinsData();
 bussinsId.value =G_bussinsById.bussinsId
  await G_bussinsById.bussinsDataById(route.params.id)
   await bussins.getbussinsPic();
})
</script>

<style scoped>
.bussins {
  background-color: rgba(227, 227, 235, 0);
}
.title {
  border-radius: 10px;
  width: 100%;
  height: 200px;
  background-color: gainsboro;
}
.title p {
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  color: rgb(0, 0, 2);
}
.bussins-detail {
  color: gray;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
}
.cover {
  width: 100%;
}
.cover-photo {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  object-fit: fill;
}

.cover-photo:hover {
  content: "Click to Change";
  position: relative;
  border-radius: px;
  filter: blur(0.5px) drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}
label {
  cursor: pointer;
  width: 80%;
  height: 400px;
  transition: opacity 0.3s ease;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  border-radius: 50px;
  left: 10%;
  right: 10%;
  opacity: 0;
}
label:hover {
  opacity: 1;
}
</style>
