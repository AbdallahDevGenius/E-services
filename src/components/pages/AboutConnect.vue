<template>
  <div class="aboutParent">
    <div
      class="container content d-flex justify-content-center align-items-center"
    >
      <div class="description">
        <h1>
          قم بانشاء حساب ثم تسجيل دخول الي كونكت لكي تتمنك من الاستفادة من
          خداماتنا
        </h1>
        <p>
          استخدم البيانات الاتية لتسجل الدخول [الاسم-رفم الهاتف - البريج
          الالكتروني]
        </p>
      </div>

      <img src="../../assets/Screenshot 2024-06-17 040722.png" alt="" />
    </div>
    <div
      class="container content d-flex justify-content-center align-items-center"
    >
      <img src="../../assets/Screenshot 2024-06-17 040651.png" alt="" />
      <div class="description mx-2">
        <h1>
        انشي النشاط التجاري الخاص بك واحجز لك مكان ع الانترنت 
        </h1>
        <p>
          استخدم البيانات الاتية لتسجل الدخول [الاسم-رفم الهاتف - البريج
          الالكتروني]
        </p>
      </div>
    </div>
    <div
      class="container content d-flex justify-content-center align-items-center"
    >
      <div class="description">
        <h1>
          قم بانشاء حساب ثم تسجيل دخول الي كونكت لكي تتمنك من الاستفادة من
          خداماتنا
        </h1>
        <p>
          استخدم البيانات الاتية لتسجل الدخول [الاسم-رفم الهاتف - البريج
          الالكتروني]
        </p>
      </div>

      <img src="../../assets/Screenshot 2024-06-17 040722.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.aboutParent {
  z-index: 1;
  position: relative;
  background-color: rgb(255, 255, 255);
}
.content {
  align-self: flex-end;
  overflow: hidden;
  color:  rgb(13, 159, 207);
 
}
.content::before {
  content: "كيف تحقق اقصي استفادة من كونكت";
  position: absolute;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  padding-right: 10px;
  width: 100%;
  height: 50px;
  background-color:#0d6efd;
  top: -0px;
  z-index: -1;
}

.content img {
  width: 50%;
  align-self: flex-start;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  height: 400px;
  margin: 15px;
}

@media (max-width: 768px) {
  .content::before {
    top: -40px;
    font-size: 1.5rem;
  }
}
</style>
