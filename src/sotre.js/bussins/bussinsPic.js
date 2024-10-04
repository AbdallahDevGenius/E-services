import { defineStore } from "pinia";
import { activeBussins } from "./activeBussins";

export const BussinsProfile = defineStore("bussinsProfile", {
  state: () => ({
    bussinsPic: null,
    activeBussins:activeBussins()
  }),
  getters: {},
  actions: {
    async sendbussinsPic(payload) {
      const token = localStorage.getItem("token");
     
      let formData = new FormData();
      formData.append("file", payload);
      try {
        const response = fetch(
          "https://connectegy.runasp.net/Freelancer/Update-freelancer-picture",
          {
            method: "PUT",
            headers: {
              Accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
        console.log(response);
      } catch (error) {
        throw error;
      }
    },
    async getbussinsPic() {
     
      const token = localStorage.getItem("token");
     
      try {
       

        const response = await fetch(
          "https://connectegy.runasp.net/api/Freelancer/get-freelancer-picture",

          {
            method: "GET",
            headers: {
              accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          
          const error ='some thing went wrong'
          throw error
        }
        const imageUrl = await response.text();
        console.log('getpic')
         this.activeBussins.image=imageUrl
          console.log(this.activeBussins.image)
      
      } catch (error) {
        throw error;
      }
    },
  },
});
