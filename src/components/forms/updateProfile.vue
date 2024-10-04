<template>
  <div class="updateProfile">
    <div class="container">
      <form @submit.prevent="submitForm" class="p-4 rounded shadow">
        <h2 class="mb-4">تعديل البيانات الشخصية</h2>
        <div class="mb-3">
          <label for="inputName" class="form-label">الاسم</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            v-model="formData.name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="inputPhone" class="form-label">رقم الهاتف</label>
          <input
            type="tel"
            class="form-control"
            id="inputEmail"
            v-model="formData.phoneNumber"
            required
          />
        </div>
        <div class="mb-3">
          <label for="inputStata" class="form-label">المحافظة</label>
          <input
            type="text"
            class="form-control"
            id="inputStata"
            v-model="formData.state"
            required
          />
        </div>
        <div class="mb-3">
          <label for="inputCity" class="form-label">المدينة</label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            v-model="formData.city"
            required
          />
        </div>
        <div class="mb-3">
          <label for="inputAddress" class="form-label">الشارع</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            v-model="formData.street"
            required
          />
        </div>
        <div class="router-link">
          <router-link
            :to="{ name: 'customerWithId', params: { id: userName } }"
            class="btn btn-primary"
            @click="submitForm"
            >حفظ</router-link
          >
          <router-link
            :to="{ name: 'changePass'}"
            class="btn btn-danger"
            >تغيير كلمة المرور</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { activeUser } from "../../sotre.js/profile/activeUser.js";


const user = activeUser();
const userName = localStorage.getItem("userName")||'hg';

const formData = reactive({
  name: user.userName,
  phoneNumber: null,
  state: user.userState,
  city: user.userCity,
  street: user.userStreet,
});
const submitForm = () => {
  console.log(formData)
  user.updateProfile(formData);
};
onMounted(async () => {
  const user = activeUser();
 
  await user.userData();

 
});
</script>

<style scoped>

/* Add custom styles and animations here */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(32, 31, 31);
  font-size: 1.3rem;
}

form {
  min-width: 600px;
  animation: slide-up 0.5s ease;
  background-color: aliceblue;
}
.router-link {
  display: flex;
  justify-content: space-between;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 590px){
  form{
    min-width: 00px;
   
  }
}
</style>
