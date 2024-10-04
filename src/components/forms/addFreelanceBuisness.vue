<template>
  <div class="addBuinss">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center form">
        <div class="col-md-8">
          <form id="regForm">
            <h1 id="register">احجز لك مكانا علي الانترنت</h1>
            <div class="all-steps" id="all-steps">
              <span class="step"
                ><font-awesome-icon :icon="['fas', 'kitchen-set']"
              /></span>

              <span class="step"
                ><font-awesome-icon icon="fa fa-phone"></font-awesome-icon
              ></span>
              <span class="step"
                ><font-awesome-icon icon="fa fa-location"></font-awesome-icon
              ></span>
              <span class="step"
                ><font-awesome-icon icon="fa fa-briefcase"></font-awesome-icon
              ></span>
              <span class="step"
                ><font-awesome-icon :icon="['fas', 'closed-captioning']"
              /></span>

              <span class="step next-round done"
                ><font-awesome-icon icon="fa fa-shop"></font-awesome-icon
              ></span>
            </div>
        <form  @submit.prevent="submitForm">
            <div v-show="current === 5" class="tab">
              <h6>اسم النشاط التجاري الخاص بك</h6>
            
              <p>
                <input
                  placeholder=". . ."
                  name="fname"
                  v-model="Bussins.name"
                  required
                  @focus="toNull(Bussins, 'name')"
                />
              </p>
            </div>
            <div v-show="current === 4" class="tab">
              <h6>ادخل تخصصك</h6>
              <p>
                <input
                  placeholder=". . ."
                  name="dd"
                  v-model="Bussins.profession"
                  @focus="toNull(Bussins, 'profession')"
                  required
                />
              </p>
            </div>
            <div v-show="current === 3" class="tab">
              <h6>اكتب نبذة مختصرة عن نشاطك التجاري</h6>
              <p>
                <input
                  placeholder=". . ."
                  name="dd"
                  v-model="Bussins.decsription"
                  @focus="toNull(Bussins, 'decsription')"
                  required
                />
              </p>
            </div>

            <div v-show="current === 2" class="tab">
              <h6>اختار محفاظتك</h6>
              <p>
                <input
                  placeholder=". . ."
                  name="email"
                  v-model="Bussins.state"
                  @focus="toNull(Bussins, 'state')"
                  required
                />
              </p>
            </div>
            <div v-show="current === 2" class="tab">
              <h6>اختر المدينة</h6>
              <p>
                <input
                  placeholder=". . ."
                  v-model="Bussins.city"
                  required
                  @focus="toNull(Bussins, 'city')"
                />
              </p>
            </div>

            <div v-show="current === 2" class="tab">
              <h6>اختر اسم الشارع</h6>
              <p>
                <input
                  placeholder=". . ."
                  v-model="Bussins.street"
                  required
                  @focus="toNull(Bussins, 'street')"
                />
              </p>
            </div>

            <div v-show="current === 1" class="tab">
              <h6>ادخل رقم الهاتف</h6>
              <p>
                <input
                  placeholder=". . ."
                  required
                  type="tel"
                  v-model="Bussins.phone"
                  @focus="toNull(Bussins, 'phone')"
                />
              </p>
            </div>

            <div v-show="current === 0" class="tab">
              <h6>ادخل بعض الخدمات الذي يقدمها النشاط الخاص بك (اختياري)</h6>
              <p>
                <input placeholder=". . ." required v-model="skill1" />
                <input placeholder=". . ." required v-model="skill2" />
                <input placeholder=". . ."  required   v-model="skill3"  />
              </p>
              <p class="router-link">لماذا هذا الاختيار</p>
            </div>
            <div v-show="current === -1" class="tab thanks" id="text-message">
              <img
                src="https://i.imgur.com/O18mJ1K.png"
                width="100"
                class="mb-4"
              />
              <h3>شكرا لك هذا يساعدنا في تحسين خدماتنا</h3>
              <button 
              
                class="btn btn-primary"
            
                >التالي</button
              >
          
            </div>
          </form>
            <div style="overflow: auto" id="nextprevious">
              <div style="float: right">
                <button
                  v-if="current >= 0"
                  type="button"
                  class="btn next"
                  id="prevBtn"
                  @click="move(1)"
                >
                  <i class="fa fa-angle-double-left">{{
                    current > 0 ? "⏭️" : "انشاء نشاط"
                  }}</i>
                </button>

                <button type="button" id="" class="btn back" @click="move(-1)">
                  <i class="fa fa-angle-double-right"></i>⏮️
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { addBussins } from "@/sotre.js/bussins/addBussins";
import { activeBussins } from "@/sotre.js/bussins/activeBussins";
import router from "@/router";
const token = localStorage.getItem("token");
const store = addBussins();
const current = ref(5);
const next = ref(4);
const back = ref(6);
const skill1 =ref()
const skill2 =ref()
const skill3 =ref()
const bussinsId=activeBussins();
const Bussins = reactive({
  name: ". . .",
  profession: ". . .",
  decsription: ". . .",
  phone: ". . .",
  state: ". . .",
  city: ". . .",
  street: ". . .",
});
const isVlidName = computed(() => {
  return Bussins.name.trim() != "" && Bussins.name != ". . .";
});
const isVlidprofession = computed(() => {
  return Bussins.profession.trim() != "" && Bussins.profession != ". . .";
});
const isVliddecsription = computed(() => {
  return Bussins.decsription.trim() != "" && Bussins.decsription != ". . .";
});
const isVlidphone = computed(() => {
  return Bussins.phone.trim() != "" && Bussins.phone != ". . .";
});
const isVlidstate = computed(() => {
  return Bussins.state.trim() != "" && Bussins.state != ". . .";
});
const isVlidcity = computed(() => {
  return Bussins.city.trim() != "" && Bussins.city != ". . .";
});
const isVlistreet = computed(() => {
  return Bussins.street.trim() != "" && Bussins.street != ". . .";
});
const formIsvalid = () => {
  if (current.value === 5) return isVlidName.value;
  else if (current.value === 4) return isVlidprofession.value;
  else if (current.value === 3) return isVliddecsription.value;
  else if (current.value === 2)
    return isVlidstate.value && isVlidcity.value && isVlistreet.value;
  else if (current.value === 1) return isVlidphone.value;
  else return true;
};
const toNull = (obj, proeprty) => {

  obj[proeprty] = "";
};
const move = (val) => {
  const valid = formIsvalid();
  const step = document.querySelectorAll(".step");

  for (let i = 0; i < 1; i++) {
    if (val > 0) {
      if (!valid) {
        step[current.value].classList.remove("done");
        step[current.value].classList.add("error");
        return;
      }
      step[current.value].classList.add("done");
      if (next.value >= 0) {
        step[next.value].classList.add("next-round");
      }
      next.value--;
      current.value--;
      back.value--;
    } else if (val < 0) {
      step[back.value].classList.remove("done");
      if (current.value >= 0) {
        step[current.value].classList.remove("next-round");
      }
      next.value++;
      current.value++;
      back.value++;
    }
  }
};

//  if(formData.value.name.trim()!='' && formData.value.description.trim() !='' &&formData.value.phoneNumber.length ===11&&formData.value.location.trim() !=''){
const submitForm = async () => {
  
  const CreateBussins = {
    name: Bussins.name,
    profession: Bussins.profession,
    description: Bussins.decsription,
    phone: Bussins.phone,
    state: Bussins.state,
    city: Bussins.city,
    street: Bussins.street,
    skills: [skill1.value,skill2.value,skill3.value],
  };
  console.log(CreateBussins)
  
  await store.addBussins(CreateBussins);
  await bussinsId.bussinsData();
  router.push({name:'bussinsPage' ,params:{id:bussinsId.bussinsId}})
};
</script>

<style scoped>
.addBuinss {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/15528.jpg");
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}
.container {
  width: 100%;
  height: 100vh;
  width: 100%;
  height: 100vh;
  border-radius: 20px;
}
.form {
  width: 100%;
  height: 100%;
}
#regForm {
  /* background-color: #b1bdbc; */
  margin: 0px auto;
  font-family: Raleway;
  padding: 40px;
  border-radius: 10px;
  margin: auto;
  max-width: 1000px;
}

#register {
  color: var(--primarycolor);
  font-weight: bolder;
}

h1 {
  text-align: center;
}

input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  border: 2px solid #0fa6d4;
}

.tab input:focus {
  border: 1px solid var(--primarycolor) !important;
  outline: none;
  border: 2px solid #0fa6d4;
}

input.invalid {
  border: 1px solid #e03a0666;
}

.tab {
  display: inline;
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
h6 {
  color: #161402;
  font-size: 1.8rem;
  font-weight: bolder;
}
button {
  color: #ffffff;
  border: none;
  border-radius: 50%;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}
.next {
  background-color: var(--primarycolor);
}
.back {
  background-color: var(--secondarycolor);
}
button:hover {
  opacity: 0.8;
}

button:focus {
  outline: none !important;
}

.all-steps {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}

.step {
  height: 50px;
  width: 50px;
  margin: 0 2px;
  background-color: var(--secondarycolor);
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: var(--primarycolor);
  opacity: 0.5;
  font-size: 1.3;
}
.done {
  background-color: var(--primarycolor) !important ;
  color: var(--secondarycolor);
  opacity: 1;
}
.next-round {
  background-color: #aaaaaa;
}
.error {
  background-color: red;
}
.step.active {
  opacity: 1;
}

.step.finish {
  color: #fff;
  background: var(--primarycolor);
  opacity: 1;
}

.all-steps {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #f2b872;
  border-radius: 50px;
}
.router-link {
  margin-top: 10px;
  text-decoration: none;
  color: red;
}
.thanks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  animation: slide-up 0.5s ease;
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
</style>
