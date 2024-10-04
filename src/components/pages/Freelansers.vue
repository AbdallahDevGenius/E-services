<template>
  <TheHeader />

  <div class="container-fluid">
    <div class="wrapper">
      <searchFuncanality @search="search"/>

      <div class="talents">
        <div class="talent  container d-felx my-2"  v-for="account in accounts" :key="account.id">
          <div class="img">
            <img :src="'https://localhost:7165' + account.image" alt="" class="py-1"/>
          </div>
          <div class="talentDetail d-flex flex-column align-items-start p-4">
            <h5>{{ account.name }}</h5>
            <h3>{{ account.profession }}</h3>
            <h4>{{ account.city }}{{ account.state }}</h4>
            <p>el iarkjf dgfdgfdsfaf</p>
            <router-link :to="{name:'bussinsPage',params:{id:account.id}}"  class="btn align-self-center bg-warning my-4">عرض الملف الشخصي</router-link>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<script setup>
import searchFuncanality from "../bussins/searchFuncanality.vue";
import { onBeforeMount, ref } from "vue";
import TheHeader from "../layout/TheHeader.vue";
import { useRoute } from "vue-router";
const accounts = ref();
const token = localStorage.getItem("token");
const id = ref();

const search = async (keyWord = null) => {
  
  let searchword = null;
  if (keyWord) {
    searchword = `search=${keyWord}&`;
  } else searchword = "";
  const url = `https://localhost:7165/api/Freelancer/filter-freelancers?${searchword}pageIndex=1&pageSize=9`;
  console.log(url);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  accounts.value = data;
 
};

onBeforeMount(async () => {
  search();
  const route = useRoute();
  id.value = route.params.id;
  
});
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container-fluid {
 

  color: rgb(162, 202, 18);

  height: 100vh;
 
}

.wrapper {
  background-color: rgb(207, 140, 213);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;

}

.talents {
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: cadetblue;
}
.talent {
  width: 50%;
  height: 35%;
  background-color: rgb(255, 252, 252);
  margin: 5px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  color: rgb(16, 15, 15);
}
.talentcont{
  background-color: rgb(27, 121, 204);
}
.img {
  height: 100%;
  width: 70px;
}
.img img {
  width: 60px;
  border-radius: 50%;
}
.talentDetail {
  display: flex;
  flex-grow: 1;
}
@media (max-width: 1024px) {
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .talent{
    height: 50%;
  }
}
</style>
