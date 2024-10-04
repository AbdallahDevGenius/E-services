import { defineStore } from "pinia";
import { errorMessages } from "vue/compiler-sfc";
export const changePass = defineStore("changePass", {
  state: () => ({
    email: null,
    otpNumber: null,
    token: null,
    operationNum: 0,
    error: false,
    done: false,
  }),
  getters: () => {},
  actions: {
    async sendEmail(email) {
      console.log(email);
      this.email = email;
      try {
        const response = await fetch(
          `https://connectegy.runasp.net/api/Account/ForgotPassword?Email=${email}`,
          {
            method: "POST",
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          const error = "emailnot found";
          this.error = true;
          throw error;
        } else if (response.ok) {
          this.operationNum++;
        }
      } catch (error) {
        throw error;
      }
    },
    async sendOtp(otpNum) {
      let otp = otpNum.toString();
      console.log(typeof otp);
      this.otpNumber = otpNum;
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          "https://connectegy.runasp.net/api/Account/VerifyOTP",
          {
            method: "POST",
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              email: this.email,
              otp: otp,
            }),
          }
        );
        if (!response.ok) {
          this.error = true;
          throw error;
        } else if (response.ok) {
          const data = await response.text();
          this.token = data;
          this.operationNum++;
        }
      } catch (Error) {
        const error = `some thing went wrong${response.status}${Error}`;
        throw error;
      }
    },
    async updatePass(pass, confirmpass) {
        if(pass!=confirmpass){
            this.error=true;
            throw 'no mathch error'
        }
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "https://connectegy.runasp.net/api/Account/ResetPassword",
          {
            method: "POST",
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              email: this.email,
              token: this.token,
              newPassword: pass,
              confirmPassword: confirmpass,
            }),
          }
        );
        if (response.ok) {
            this.done = true;
            this.operationNum=0
          }
      } catch (Error) {
        const error = `some thing went wrong${response.status}${Error}`;
        throw error;
      }
    
    },
  },
});
