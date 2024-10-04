<template>
  <div class="container">
    <form class="contact-form">
      <div class="form-group">
        <label for="name">الاسم</label>
        <input type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">البريد الإلكتروني</label>
        <input type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="message">الرسالة</label>
        <textarea id="message" required></textarea>
      </div>
      <button type="submit">إرسال</button>
    </form>
    <div class="side-img">
      <img src="../../assets/cu[2].jpg" alt="side-img" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.side-img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.side-img img {
  max-width: 100%;
  height: auto;
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  display: block;
  font-size: large;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  padding: 10px 15px;
  border: none;
  background-color: #4c77af;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;
  font-size: 1rem;
}

button:hover {
  background-color: #364494;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}

@media (max-width: 767px) {
  .contact-form {
    max-width: 100%;
    padding: 15px;
  }

  label {
    font-size: medium;
  }

  input,
  textarea {
    font-size: 0.9rem;
  }

  button {
    font-size: 0.9rem;
  }
}
</style>