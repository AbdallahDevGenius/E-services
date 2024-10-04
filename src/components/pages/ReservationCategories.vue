<template>
  <div class="parent">
    <TheHeader />
    <img src="../../../images/15.jpg" class="col-12" height="450px" alt="" />

    <div
      class="categ container d-lg-flex  justify-content-between mt-5 col-12"
    >
      <router-link to="/hotelReservations" class="col-lg-4 col-md-12">
        <div class="col-lg-12 d-flex flex-column align-items-center">
          <img
            src="../../../images/hotel.jpg"
            height="200px"
            class="col-lg-11 col-md-10 rounded-4"
            alt=""
          />
          <h3>فندق</h3>
        </div>
      </router-link>

      <router-link to="/doctor" class="col-lg-4 col-md-12">
        <div class="col-lg-12 d-flex flex-column align-items-center">
          <img
            src="../../../images/doctor.jpg"
            height="200px"
            class="col-lg-11 col-md-10 rounded-4"
            alt=""
          />
          <h3>دكتور</h3>
        </div>
      </router-link>

      <router-link to="/wedding-hall" class="col-lg-4 col-md-12">
        <div class="col-lg-12 d-flex flex-column align-items-center">
          <img
            src="../../../images/wedding.jpg"
            height="200px"
            class="col-lg-11 col-md-10 rounded-4"
            alt=""
          />
          <h3>قاعة افراح</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.categ a {
  text-decoration: none;
  color: #212529;
}
/* @media (max-width: 768px) {
  .categ {
    flex-direction: column;
  }
} */
</style>
<script setup>
import TheHeader from "../layout/TheHeader.vue";
import TheFooter from "../layout/TheFooter.vue";
</script>
