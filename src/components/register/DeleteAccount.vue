<template>
    <div class="container">
    <form class="p-4 rounded shadow">
        <h2 class="mb-4">تعديل البيانات الشخصية</h2>
        <div class="mb-3">
          <label for="inputName" class="form-label">الاسم</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
           
            required
          />
        </div>
       </form>
    </div>
</template>
<style scoped>
form {
  min-width: 600px;
  animation: slide-up 0.5s ease;
  background-color: aliceblue;
}
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
 </style>