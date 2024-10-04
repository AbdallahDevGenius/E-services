<template>
  <div class="wrap">
    <Error title="نم تغيير كلمة المرور بنجاح برجاء تسجيل الدخول" link @tryclose="goToLogin" v-if="pass.done" />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div
          class="col-md-6"
          style="
            border: 2px solid rgba(0, 123, 255, 0.5);
            border-radius: 10px;
            padding: 20px;
            margin-top: 50px;
          "
        >
          <h2 class="text-center mb-3" style="color: #333">
            اعادة تعيين كلمة المرور
          </h2>
          <form @submit.prevent>
            <div class="form-group" v-if="pass.operationNum === 0">
              <label for="email" style="color: #333"
                >عنوان البريد الالكترونى :</label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                required
              />
              <p v-if="pass.error">   فشل ارسال رمز التاكيد تاكد من عنوان بريدك الالكتروني واتصالك بالانترنت</p>
              <div class="text-center py-0">
                <button
                  @click.prevent="sendMail(email)"
                  class="btn btn-primary"
                >
                  ارسال
                </button>
              </div>
            </div>

            <div class="form-group" v-if="pass.operationNum === 1">
              <label for="email" style="color: #333"> ادخل رمز التاكيد :</label>
              <input
                type="number"
                class="form-control"
                id="email"
                v-model="otpNum"
                required
              />
              <div class="btn text-center py-0">
                <p v-if="pass.error">رمز التاكيد غير صحيح</p>

                <button
                  @click.prevent="sendotp(otpNum)"
                  class="btn btn-primary"
                >
                  ارسال
                </button>
              </div>
            </div>
            <div class="form-group" v-if="pass.operationNum === 2">
              <label for="email" style="color: #333">
                ادخل كلمة المرور الجديدة :</label
              >
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="newPass"
                required
              />
              <label for="email" style="color: #333">
                تاكيد كلمة المرور :</label
              >
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="confirmPass"
                @change="checkEqyakity($event, newPass, confirmPass)"
                ref="confirmInput"
                required
              />
              <p v-if="pass.error">كملتي المرور غير متطابقتين</p>

              <div class="text-center py-3">
                <button
                  @click.prevent="updatePass(newPass, confirmPass)"
                  class="btn btn-primary"
                >
                  ارسال
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
import { changePass } from "@/sotre.js/authentication/changePass.js";
import { onBeforeMount, ref } from "vue";
import Error from "../UI/Error.vue";
import router from "@/router";
const pass = changePass();
const email = ref();
const otpNum = ref();
const newPass = ref();
const confirmPass = ref();
const confirmInput = ref(null);
const sendMail = async (email) => {
  console.log(email);
  await pass.sendEmail(email);
};
const sendotp = async (otpNum) => {
  console.log(otpNum);
  await pass.sendOtp(otpNum);
};
const updatePass = async (a, b) => {
 
    await pass.updatePass(a, b);
  
};
const goToLogin = async () => {
  await router.push({ name: "Login" });

  localStorage.clear();
};
const checkEqyakity = ( password, confirmpass) => {
  if(password!=confirmpass){
  pass.error=true
  }
  else pass.error =false
};
onBeforeMount(() => {
pass.done=false
});
</script>
<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/15528.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}
.form-group {
  background-color: aliceblue;
  margin-bottom: 20px;
}
.form-group input {
  border-color: rgba(0, 123, 255, 0.5);
}
.btn {
  border-color: rgba(0, 123, 255, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}
p {
  color: red;
}
</style>
