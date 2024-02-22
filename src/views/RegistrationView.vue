<template>
  <div class="form-header">
    <router-link class="prevPage" to="/">Назад</router-link>
  </div>
  <form @submit.prevent="store.commit('registration')">
    <label>ФИО: </label>
    <input type="text" required v-model="store.state.fio">
    <label>Эл. почта: </label>
    <input type="email" required v-model="store.state.email">
    <label>Пароль: </label>
    <input type="password" required v-model="store.state.password">
    <input type="submit" value="Регистрация">
  </form>
</template>

<script>
import store from "@/store";

export default {
  computed: {
    store() {
      return store
    }
  },
}
</script>

<style scoped>
form{
  flex-direction: column;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
  display: flex;
}
input{
  font-size: 18px;
  height: 25px;
}
input:not(:last-child){
  margin-bottom: 20px;
}
input[type=submit]{
  cursor: pointer;
  color: aliceblue;
  border-radius: 8px;
  border: none;
  background-color: #42b983;
  width: 150px;
  height: 40px;
  margin: 0 auto;
}
.prevPage{
  font-size: 18px;
  color: aliceblue;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: #42b983;
  display: flex;
  width: 160px;
  height: 45px;
  border-radius: 5px;
}
</style>