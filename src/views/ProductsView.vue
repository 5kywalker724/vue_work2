<template>
  <div class="products">
    <nav>
      <p class="nav-links" v-show="store.state.user_token === null">
        <router-link to="/registration">Регистрация</router-link>
      </p>
      <p class="nav-links" v-show="store.state.user_token === null">
        <router-link to="/login">Войти в аккаунт</router-link>
      </p>
      <p class="nav-links" v-show="store.state.user_token !== null">
        <router-link to="/cart">Корзина</router-link>
      </p>
      <p class="nav-links" v-show="store.state.user_token !== null">
        <router-link to="/order">Оформленные заказы</router-link>
      </p>
      <p class="nav-links" v-show="store.state.user_token !== null">
        <a href="#" @click="store.commit('logout')">Выйти из аккаунта</a>
      </p>
    </nav>
    <div class="product-list">
      <div class="product" v-for="(product, index) in store.state.products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Цена: {{ product.price }}</p>
        <button @click="store.commit('addToCart', product)">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  computed: {
    store() {
      return store
    }
  },
  mounted(){
    if (localStorage.token !== undefined && localStorage.token !== null) {
      store.state.user_token = localStorage.token;
    }
    this.$store.commit('fetchProducts');
  }
}
</script>


<style scoped>
.products{
  max-width: 1200px;
  margin: 0 auto;
}
nav{
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.nav-links{
  background-color: #42b983;
  width: 20%;
  height: 40px;
  border-radius: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-links *{
  text-decoration: none;
  color: aliceblue;
}
.product-list{
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product{
  border: 1px solid black;
  border-radius: 5px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.product button{
  width: 200px;
  height: 40px;
  margin-bottom: 30px;
}
</style>