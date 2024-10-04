<template>
            <Error v-show="store.warn"  @tryclose="cloesError" :title="store.Message" :link="store.link"/>

  <div class="parent">
    <div class="login">
      <div class="wraper">
        <h2>تسجيل الدخول</h2>
        <input
          type="emailInput"
          placeholder="*ادخل عنوان بريدك الالكتروني"
          v-model="loginData.email.value"
          ref="emailInput"
        />
        <p class="error forgetpass" v-if="store.userNotFound">
          تاكد من عنوان بريدك الالكتروني
        </p>
        <input
          ref="passwordInput"
          type="password"
          placeholder="*ادخل كلمة المرور"
          v-model="loginData.password.value"
        />
        <p class="error forgetpass" v-if="store.incorrectPass">
          تاكد من كلمة المرور الخاصة بك
        </p>

        <router-link  class="forgetpass router-link" :to="{name: 'changePass'}">ِ هل نسيت كلمة المرور؟</router-link >
        <button @click="dispathchLoginAction">تسجيل دخول</button>
        <p class="or">او</p>
        <router-link :to="{ name: 'register' }" class="router-link">
          افتح حساب جديد الان</router-link
        >
      </div>
    </div>
    <div class="logo">
      <img
        src="/src/assets/WhatsApp_Image_2024-02-21_at_10.02.13_890990b8-removebg-preview.png"
        alt=""
      />
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import { authStore } from "../../sotre.js/authentication/authSotre.js";
import { useRouter } from "vue-router";

import Error from "../UI/Error.vue";

const router = useRouter();
const store = authStore();

const loginData = reactive({
  email: {
    value: "",
    errorMessage: false,
  },
  password: {
    value: "",
    errorMessage: false,
  },
});
// ref to access the html elemnt
const emailInput = ref();
const passwordInput = ref();
//

const userNotFound = computed(() => {
  return store.userNotFound;
});
const incorrectPass = computed(() => {
  return store.incorrectPass;
});

//t


const emialvaladition = () => {

  if (userNotFound.value) {
    loginData.email.errorMessage = true;
    emailInput.value.classList.add("error");
  }

  if (incorrectPass.value) {
    
    loginData.password.errorMessage = true;
    passwordInput.value.classList.add("error");
  }
};
  const dispathchLoginAction = async () => {
  
    const login = {
      email:loginData.email.value,
      password:loginData.password.value,
    };
   await store.login(login);
   emialvaladition();


  if (store.isAuth) {
    
    router.replace("/Connect.Com");
  }
};
const cloesError = () =>{
   store.warn=false;
   store.Message=null;
   registerData.email.errorMessage = true;
}
</script>



<style scoped>
.parent {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #e5fcfb;
}

.login {
  background-color: rgb(255, 255, 255);

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-basis: 100;
  flex-shrink: 0;
}
.login .wraper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(255, 255, 255);
  flex-basis: 500px;
  height: 65%;
}
.wraper h2 {
  margin: 1rem;
  font-size: 50px;
  color: rgb(13, 159, 207);
}
.wraper input {
  height: 80px;
  width: 100%;
  border-color: rgb(13, 159, 207) rgb(17, 81, 231);
  margin: 0.2rem;
  border-radius: 25px;
  font-size: 20px;
}
.wraper input::placeholder {
  color: rgb(49, 51, 57);
  font-size: 20px;
  font-weight: 200;
  float: right;
  margin-right: 5px;
  margin-top:8px ;
  color: rgb(64, 64, 64);
}
.wraper .error {
  color: rgb(186, 16, 50);

  border-color: red red red red;
}
.wraper input:focus::placeholder {
  position: relative;
  bottom: 20px;
  font-size: 15px;

  color: black;
}
.wraper .forgetpass {
  align-self: flex-start;
  position: relative;
  right: 10px;
}
.wraper .or {
  margin: 1rem;
  font-weight: 800;
}
.router-link {
  color: rgb(13, 159, 207);
  font-weight: 800;
}
a {
  text-decoration: none;
}
.wraper button {
  background-color: var(--btn-color);
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border-color: white;
  cursor: pointer;
  color: #e5fcfb;
  font-size: large;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.logo img {
  max-width: 400px;
  max-height: 300px;
}
@media (max-width: 768px) {
  .logo {
    display: none;
  }
}
</style>