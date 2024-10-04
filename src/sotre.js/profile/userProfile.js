import { defineStore } from "pinia";
import { activeUser } from "./activeUser";
export const UserProfile = defineStore("userProfile", {
  state: () => ({
    Pic: null,
  }),
  getters: {
    profilePic(state) {
      return state.profilePic;
    },
  },
  actions: {
    async sendProfilePic(payload) {
      const token = localStorage.getItem("token");
     
      let formData = new FormData();
      formData.append("file", payload);
      try {
        const response = fetch(
          "https://connectegy.runasp.net/Account/Update-customer-picture",
          {
            method: "PUT",
            headers: {
              Accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
     
      } catch (error) {
        throw error;
      }
    },
    async getProfilePic() {
      const user=activeUser()
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "https://connectegy.runasp.net/Account/get-customer-picture",

          {
            method: "GET",
            headers: {
              accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const error = "user profile went wrong";
          throw error;
        }
        
        const imageUrl = await response.text();
        user.image =imageUrl;
        await user.userData();
    

       
       
      } catch (error) {
        throw error;
      }
    },
  },
});
