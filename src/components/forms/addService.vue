<template>
  <div class="container-fluid" :style="{ display: formVisibilty }">
    <img src="../../assets/15528.jpg" alt="" width="200" height="300">
    <form action="" class="row justify-content-center">
     
      <div class="col-md-10 d-flex flex-column justify-content-center align-items-center from-inputs">
        <!-- Adjust column width as needed -->
      
        <div class="input-field">
          <label for="">اسم الخدمة</label>
        <input
          type="text"
          class="form-control field"
          v-model="service.name"
          accept="image/png, image/jpeg, image/jpg"
        />
      </div>
      <div class="input-field">
        <label for="">نبذة  مختصرة عن الخدمة</label>

        <input
          type="text"
          class="form-control field"
          v-model="service.description"
          accept="image/png, image/jpeg, image/jpg"
        />
      </div>
      <div class="input-field">
        <label for=""> سعر الخدمة</label>

        <input
          type="number"
          class="form-control field"
          v-model="service.price"
          accept="image/png, image/jpeg, image/jpg"
        />
      </div>
      <div class="input-field  d-flex justify-content-center image-label">
        <label for="img" class="btn btn-primary"> ارفق صورة</label>

        <input
          type="file"
          class="form-control field img"
          @change="handelImgSrc($event)"
          id="img"
          accept="image/png, image/jpeg, image/jpg"
        
          hidden
        />
      </div>
     
      </div>
    </form>
    <button class="btn delete-btn" @click.prevent="addServices">✅</button>
    <button class="btn delete-btn" @click.prevent="deleteFrom">❌</button>
   
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { addBussins } from "@/sotre.js/bussins/addBussins";
import { offeredServices } from "@/sotre.js/bussins/offeredServices";
const bussins =addBussins();
const props = defineProps(["formVisibilty"]);
const emit = defineEmits("closeForm");
const services=offeredServices();
import { useRoute } from "vue-router";
const inputVal = ref();
const route =useRoute();
const service =reactive({
  name:null,
  price:null,
  description:null,
  IsAvailable:true,
  ImageUrl:null,
})

 const addServices = async()=>{
   await bussins.addServices(service)
  service.name = "";
  service.description='';
  service.price='';
  service.ImageUrl=null;
  
  console.log(route.params.id)
  await services.getOfferdServices(0,route.params.id)
  emit("closeForm");
 
      

 }

const handelImgSrc = (event) => {
  const file = event.target.files[0];
      
      console.log(file)
   service.ImageUrl=file
     
};
const deleteFrom = () => {
  service.name = "";
  service.description='';
  service.price='';
  service.ImageUrl=null;
  emit("closeForm");
};

</script>
<style scoped>
.container-fluid {
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15); 
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #f2f2f2;
  
}
label {
  font-size: 16px;
  font-weight: 500;
}
.input-field{
  width: 100%;
}
.field {
  height: 50px;
 
  font-size: larger;
}
form {
  width: 100%;
}
.delete-btn {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.container-fluid:hover .delete-btn {
  opacity: 1;
}
.image-label label{
   align-self: cneter;
   justify-self: center;
   cursor: pointer;
}
</style>
