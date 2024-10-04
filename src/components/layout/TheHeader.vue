<template>
  <nav class="navbar navbar-expand bg-primary-lg navbar-dark">
    <div class="container-fluid">
      <!-- Logo --><router-link to="/">
        <img
          src="../../assets/WhatsApp_Image_2024-02-21_at_10.02.13_890990b8-removebg-preview.png"
          alt=""
          class="logo"
        />
      </router-link>
      <!-- Toggle button for small screens -->

      <!-- Navbar links -->
      <div class="" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <!-- Four links in the middle -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">الرئيسية</router-link>
          </li>

          <li class="nav-item">
            <router-link
              :to="{ name: 'freelansers', params: { id: Id } }"
              class="nav-link"
              >مقدمي الخدمات
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Left side links -->

      <div>
        <ul class="navbar-nav">
          <!-- Login Link -->
          <li class="nav-item" v-show="isAuth">
            <button class="nav-link" @click="chagneverticalNavVisibilty">
              <div class="imgpic">
                <img
                  :src="'https://localhost:7165' + active.profirleImg"
                  v-if="active.profirleImg !== '/Images/default/avatar'"
                />

                <img src="../../assets/15528.jpg" v-else />
              </div>
            </button>
          </li>

          <li class="nav-item" v-show="!isAuth">
            <router-link :to="{ name: 'Login' }" class="nav-link"
              >تسجيل الدخول</router-link
            >
          </li>

          <li class="nav-item" v-show="!isAuth">
            <router-link :to="{ name: 'register' }" class="nav-link"
              >انشاء حساب</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav>
    <div class="verticalNav" :style="{ display: verticalNav }">
      <ul>
        <router-link
          :to="{ name: 'customerWithId', params: { userName: userName } }"
          class="router-link"
          ><p class="px-1">
            <font-awesome-icon icon="fa-solid fa-user" class="px-1" />
          </p>
          <li>حسابي</li>
        </router-link>
        <router-link
          v-if="hasBussins"
          :to="{ name: 'bussinsPage', params: { id: Id } }"
          class="router-link"
          ><p class="px-1">
            <font-awesome-icon icon="fa-solid fa-money-check" class="px-1" />
          </p>
          <li>نشاطي التجاري</li>
        </router-link>
        <router-link
          :to="{ name: 'updateProfile', params: { userName: userName } }"
          class="router-link"
          ><p class="px-1">
            <font-awesome-icon icon="fa-solid fa-gears" class="px-1" />
          </p>
          <li>الاعدادات</li>
        </router-link>

        <router-link
          :to="{ name: 'Login' }"
          @click="logout"
          class="router-link"
        >
          <p class="px-1">
            <font-awesome-icon
              icon="fa-solid fa-right-from-bracket"
              class="px-1"
            />
          </p>
          <li>تسجيل خروج</li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";


import { authStore } from "../../sotre.js/authentication/authSotre.js";
import { activeUser } from "@/sotre.js/profile/activeUser.js";
import { activeBussins } from "@/sotre.js/bussins/activeBussins.js";
const active = activeUser();
const store = authStore();
const hasBussins = ref(false);
const pic = ref(null);
const bussins = activeBussins();
const verticalNav = ref("none");
const isAuth = localStorage.getItem("token");
const userName = ref("null");
const Id = ref("null");
const token = localStorage.getItem("token");

const chagneverticalNavVisibilty = () => {
  verticalNav.value = verticalNav.value === "inline" ? "none" : "inline";
};
const logout = async () => {
  await store.logout();
};
const userRoles = async () => {
  const response = await fetch(
    "https://connectegy.runasp.net/api/Account/user-roles",
    {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  const roles = await response.json();
 
  hasBussins.value = roles.includes("Freelancer");
};

onBeforeMount(async () => {
  await userRoles();

  await bussins.bussinsData();

  Id.value = bussins.bussinsId;
 

  await active.decode(token);
});
onMounted(async () => {
  await active.userData();
  const username = active.userName;
  userName.value = username;

  const profilePic = localStorage.getItem("pic");
  pic.value = profilePic;
});
</script>

<style scoped>
.navbar {
  height: 70px;
}
.verticalNav {
  position: absolute;
  width: 200px;
  z-index: 100;
  left: 10px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
}

.verticalNav ul {
  display: flex;
  justify-content: flex-end;
  padding: 0;
  flex-direction: column;
  list-style: none;
  width: 100%;
}
.router-link {
  display: flex;
  font-size: 1.1rem;
  color: rgb(71, 67, 67);
  width: 100%;
  margin: 3px;
  text-decoration: none;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}
.router-link:hover {
  background-color: #f2f2f2;
  width: 100%;
}
.nav-item .nav-link {
  font-size: 1.1rem; /* تكبير حجم الروابط */
  margin-right: 1rem; /* توسيع المسافات بين الروابط */
  color: aliceblue;
  color: darkblue;
}
.navbar-nav .nav-item:hover {
  background-color: var(--primarycolor);
  border-radius: 8px;
  transform: scale(1.1);
  /* Change to your desired background color */
}
.imgpic {
  overflow: hidden;
}
.imgpic img {
  border-radius: 50%;
  max-width: 40px;
  max-height: 40px;
}

.logo {
  width: 90px;
  height: 40px;
}
</style>
