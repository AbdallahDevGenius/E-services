<template>
  <TheHeader />

  <div class="container-fluid bg-primary parent">
    <div class="img-container position-relative">
      <img src="../../assets/6238505.jpg" class="" alt="..." />
    </div>
    <div class="title position-absolute text-uppercase">
      <h2>ارتقي الان الي السوق</h2>
      <h3>العالمية</h3>
      <router-link :to="{ name: 'hotel-reservations' }" class="btn">
        تواصل معنا</router-link
      >
    </div>
   
  </div>
   <div class="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d6efd"
          fill-opacity="1"
          d="M0,32L40,80C80,128,160,224,240,266.7C320,309,400,299,480,288C560,277,640,267,720,234.7C800,203,880,149,960,133.3C1040,117,1120,139,1200,138.7C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
        
      </svg>
     
    </div>
  
    <hr>
    <AboutConnect />
    <!-- <TheFooter/> -->
</template>
<script setup>
import AboutConnect from "../pages/AboutConnect.vue"
import TheHeader from "../layout/TheHeader.vue";

// import TheFooter from "../layout/TheFooter.vue";


</script>
<style scoped>
.parent {
  position: relative;
 height: 90vh;
 
}
.img-container {
  z-index: 8;
  position: absolute;
  width: 50%;

  right: 50%;
}
.img-container img {
  width: 100%;
  height: 85vh;
  object-fit: fill;
  border-radius: 30% 60%;
}
.title {
  position: absolute;
  bottom: 25%;
  left: 50%;
  right: 10%;
  color: rgb(255, 255, 255);
  z-index: 1;
}
.btn {
  color: var(--primarycolor);
  margin: 20px;
  background-color: white;
}
.btn:hover {
  background-color: var(--primarycolor);
  color: white;
}
.wave{
  position: absolute;
  background-color: rgb(255, 255, 255);
  top: 70px;
  width: 100%;
  z-index: 0;
}

.container::after {
  content: "";
 
  width: 100px;
  height: 100px;
}

h2 {
  font-size: 4rem;
}
h3 {
  animation: animate 10s linear infinite;
  color: rgb(17, 188, 245);
  font-size: 4rem;
  /* -webkit-box-reflect: below 5px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgb(250, 244, 244))); */
}
@keyframes animate {
  0.0%,
  18.0%,
  20.0%,
  50.1%,
  60.1%,
  65.0%,
  80.1%,
  90.0%,
  92.1%,
  100.0% {
    color: #0d6efd;
    text-shadow: none;
  }
  18.0%,
  20.1%,
  30%,
  50%,
  60.1%,
  65%,
  80.1%,
  92.1%,
  100.0% {
    color: rgb(255, 255, 255);
    text-shadow: 0 0 10px rgb(255, 255, 255), 0 0 20px rgb(255, 255, 255),
      0 0 40px rgb(255, 255, 255), 0 0 80px rgb(255, 255, 255),
      0 0 100px rgb(255, 255, 255);
  }
}

@media (max-width: 700px) {
  .slider img {
    height: 250px;
  }
}
</style>

