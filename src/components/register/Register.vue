<template>
          <Error v-show="store.warn"  @tryclose="cloesError" :title="store.Message" :link="store.link"/>
  <div class="parent">
    
    <div class="register"> 
      <div class="wrapernotstrap">
        <form @submit.prevent="dispathchLoginAction">
          <h2>انشاء حساب جديد</h2>
          <div class="inputField">
            <input
              type="text"
              placeholder="الاسم الاول"
              v-model="registerData.firstName.value"
              ref="firstNameInput"
            />
            <input
              type="text"
              placeholder="الاسم الاخير"
              v-model="registerData.lastName.value"
              ref="lastNameInput"
            />
          </div>
          <div class="inputField">
            <input
              type="email"
              placeholder="*ادخل عنوان بريدك الالكتروني"
              v-model="registerData.email.value"
              ref="emailInput"
            />
            <input
              type="text"
              placeholder= '*ادخل كلمة المرور'
              v-model="registerData.password.value"
              ref="passwordInput"
            />
            <p v-if="registerData.password.errorMessage">يجب ان تحتوي كلمة المررو ع حرف صغير وكبير ورقم وعلامة</p>
          </div>
          <div class="inputField">
            <input
              type="tel"
              :placeholder="registerData.phone.errorMessage ? 'رقم الهاتف غير صحيح' :'ادخل رقم الهاتف'"
              v-model="registerData.phone.value"
              ref="phoneInput"
            />
          
          </div>
          <div class="inputField">
            <select
              id="gender"
              v-model="registerData.gender.value"
              ref="genderInput"
            >
              <option value="" disabled selected hidden>اختر الجنس</option>
              <option value="ذكر" id="male">ذكر</option>
              <option value="انثي" id="female">انثي</option>
            </select>
          </div>
          <div class="inputField">
            <select
              id="goverment"
              v-model="registerData.government.value"
              ref="goverInput"
            >
              <option value="" disabled selected hidden>المحافظة</option>
              <option
                v-for="item in egyptGovernorates"
                :key="item.id"
                :value="item"
                id="male"
              >
                {{ item }}
              </option>
            </select>
            <select
              id="city"
              v-model="registerData.city.value"
              ref="cityInput"
            >
              <option value="" disabled selected hidden>المدينة</option>
              <option
                v-for="item in egyptCities[`${registerData.government.value}`]"
                :key="item.id"
                :value="item"
                id="male"
              >
                {{ item }}
              </option>
            </select>
            
          </div>
          <div class="inputField">
            <input
              type="text"
              placeholder="الشارع"
              v-model="registerData.street.value"
            
            />
          
          </div>
          <button>انشاء حساب</button>
          <p class="or">او</p>
          <router-link :to="{ name: 'Login' }" class="router-link"
            >سجل دخولك الان</router-link
          >
        </form>
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
import { useRouter } from "vue-router";
const router = useRouter();
import { reactive, computed, ref } from "vue";
import { authStore } from "../../sotre.js/authentication/authSotre.js";
import Error from "../UI/Error.vue";
const store = authStore();

const egyptGovernorates = store.egyptGovernorates;
const egyptCities = store.egyptCities;

const registerData = reactive({
  firstName: { value: "", errorMessage: false },
  lastName: { value: "", errorMessage: false },
  email: { value: "", errorMessage: false },
  password: { value: "", errorMessage: false },
  phone: { value: "", errorMessage: false },
  gender: { value: "", errorMessage: false },
  government: { value: "", errorMessage: false },
  city: { value: "", errorMessage: false },
  street: { value: "", errorMessage: false },
});

const isValidfirstName = computed(() => {
  return registerData.firstName.value != "";
});
const isValidlastName = computed(() => {
  return registerData.lastName.value != "";
});
const isValidEmail = computed(() => {
  return registerData.email.value.includes("@");
});
const isValidpass = computed(() => {
  const password = registerData.password.value;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
 
  return hasUpperCase && hasLowerCase && hasNumber && hasSymbol ;
});
const isValidGender = computed(() => {
  return registerData.gender.value != "";
});
const isValidGovernment = computed(() => {
  return registerData.government.value != "";
});
const isValidCity = computed(() => {
  return registerData.city.value != "";
});
const isValidPhone = computed(() => {
  return registerData.phone.value.length === 11;
});
const fullName = computed(() => {
  return registerData.firstName.value + " " + registerData.lastName.value;
});
const userNmae =computed (()=>{
  return registerData.firstName.value + registerData.lastName.value;
})


// termparly fn will be improved later
const registerValidtion = () => {
  if (!isValidfirstName.value) {
    registerData.firstName.errorMessage = true;
    firstNameInput.value.classList.add("error");
  }
  if (!isValidlastName.value) {
    registerData.lastName.errorMessage = true;
    lastNameInput.value.classList.add("error");
  }
  if (!isValidEmail.value) {
    console.log(!isValidEmail.value)
    registerData.email.errorMessage = true;
    emailInput.value.classList.add("error");
  }
  if (!isValidpass.value) {
    registerData.password.errorMessage = true;
    passwordInput.value.classList.add("error");
  }
  if (!isValidGender.value) {
    registerData.gender.errorMessage = true;
    genderInput.value.classList.add("error");
  }
  if (!isValidGovernment.value) {
    registerData.gender.errorMessage = true;
    goverInput.value.classList.add("error");
  }
  if (!isValidCity.value) {
    registerData.city.errorMessage = true;
    cityInput.value.classList.add("error");
  }
  if (!isValidPhone.value) {
    registerData.phone.errorMessage = true;
    phoneInput.value.classList.add("error");
  }
};

const dispathchLoginAction = async () => {

  registerValidtion();
  if (
    isValidpass.value &&
    isValidEmail.value &&
    isValidlastName.value &&
    isValidfirstName.value &&
    isValidGender &&
    isValidGovernment &&
    isValidCity && 
    isValidPhone
  ) {
    const signupData = {
      name: fullName.value,
      email: registerData.email.value,
      password: registerData.password.value,
      phone:registerData.phone.value,
      gender: registerData.gender.value === 'ذكر' ? 1 : 2,
      state:registerData.government.value,
      city:registerData.city.value,
      
      street:registerData.street.value
    };
   
    await  store.signup(signupData);
   
  }
 
 
};
const cloesError = () =>{
   store.warn=false;
   store.Message=null;
   registerData.email.errorMessage = true;
}
// element refs
const firstNameInput = ref();
const lastNameInput = ref();
const emailInput = ref();
const passwordInput = ref();
const genderInput = ref();
const goverInput = ref();
const cityInput = ref();
const phoneInput=ref();
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

.register {
  background-color: rgb(255, 255, 255);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-basis: 150;
  flex-shrink: 0;
}
.register .wrapernotstrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.wrapernotstrap form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  flex-basis: 550px;
  flex: 1;
}
.wrapernotstrap form button {
  background-color: var(--btn-color);
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border-color: white;
  cursor: pointer;
  color: #e5fcfb;
  font-size: large;
}
.wrapernotstrap h2 {
  font-size: 50px;
  color: rgb(13, 159, 207);
}
.wrapernotstrap .inputField {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  
  position: relative;
}
.wrapernotstrap .inputField p{
  position:absolute;
  right: 267px;
  top: 60px;
  font-size:12px ;
  color: rgb(249, 0, 0);
  font-weight: lighter;
 
  
 
}
.wrapernotstrap .inputField input,
select {
  width: 100%;
  height: 50px;
  border-color: rgb(13, 159, 207) rgb(17, 81, 231);
  margin: 0.7rem;
  border-radius: 25px;

 
}

.wrapernotstrap .inputField select {
  font-size: 20px;
  padding: 10px;
}


.wrapernotstrap input::placeholder {
  color: rgb(49, 51, 57);
  font-size: 20px;
  font-weight: 200;
  float: right;
  margin-right: 10px;
  color: rgb(64, 64, 64);
  
  
}
.wrapernotstrap .inputField .error {
  color: rgb(186, 16, 50);
  border-radius: 25px;
  border-color: red red red red;
}
.wrapernotstrap input:focus::placeholder {
  position: relative;
  bottom: 15px;
  font-size: 15px;

  color: black;
}

.wrapernotstrap .or {
  margin: 1rem;
  font-weight: 800;
}
.router-link {
  color: var(--btn-color);
  font-weight: 800;
}
a {
  text-decoration: none;
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
@media (max-width: 425px) {
  .form {
    margin-top:1rem ;
  }
}
</style>