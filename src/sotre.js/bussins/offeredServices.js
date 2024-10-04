import { defineStore } from "pinia";
import { activeBussins } from "./activeBussins";

export const offeredServices = defineStore("offeredServices", {
  state: () => ({
   offeredServices:[]
  }),
  getters: {
G_offeredServices: (state) =>state.offeredServices
  },
  actions: {
    async getOfferdServices (pageIndex,bussinsId){
      this.offeredServices=[]
      //  const bussins =activeBussins();
      //  await bussins.bussinsData()
       
     
      try {
        const token =localStorage.getItem("token")
        const response = await fetch(`https://connectegy.runasp.net/api/Freelancer/get-offered-services/${bussinsId}?pageIndex=${pageIndex}&pageSize=3`,{
         method: "GET",
          headers:{
            'accept': '*/*',
            'Authorization' :`Bearer ${token}`
          }

        })
        if (!response.ok){
          const error = response.message || "falid to get offered serviese"
          throw error
        }
        
        const data = await response.json();
        
       console.log('offerdservicse')
     
      
       for(let item =0; item <data.length;item++){
         const array ={
           name:data[item].name,
           price:data[item].price,
           description:data[item].description,
           image:`https://connectegy.runasp.net${data[item].image}`

         }
         this.offeredServices.push(array)
        
       }
  
        
      
      }
      catch(error){
        throw error
      }

   }
  },
});

