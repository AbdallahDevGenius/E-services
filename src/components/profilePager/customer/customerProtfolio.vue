<template>
  <div class="container">
    <BaseCard :title="title" v-if="!services" />

    <table class="table my-3" v-if="services">
      <thead>
        <tr>
          <th scope="col">#</th>
          <!-- Counter column -->
          <th scope="col">الخدمة</th>
          <th scope="col">السعر</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in services" :key="item.id">
          <th scope="row">{{ serviceNum }}</th>
          <!-- Counter value -->
          <td>{{ item.service }}</td>
          <td>{{ item.price }} جنيه</td>
        </tr>

        <!-- Add more rows as needed -->
      </tbody>
    </table>

    <addService :formVisibilty="formVisibilty" @closeForm="closeForm" />
    <div class="container d-flex justify-content-center my-4">
      <button type="button" class="btn btn-primary" @click.prevent="showForm">
        اضافة خدمة
      </button>
    </div>
  </div>
</template>
<script setup>
import BaseCard from "@/components/UI/BaseCard.vue";
import addService from "@/components/forms/addService.vue";
import { reactive, ref } from "vue";
const title = "لا يوجد خدمات لعرضها";
const serviceNum=ref(1)
const formVisibilty = ref("none");
const services = reactive([ 
{
    service: "عمل شبابيك اوضة النوم الوميتال",
    price: 5000,
  },
]);
const showForm = () => {
  formVisibilty.value = "flex";
};
const closeForm = () => {
  formVisibilty.value = "none";
};
</script>
<style scoped></style>
