<template>
  <div class="cart">
    <h2>Товары в корзине:</h2>
    <div class="cart-header">
      <router-link class="prevPage" to="/">Назад</router-link>
      <router-link class="cartButton" to="/order" v-show="store.state.realCart.length > 0" @click="store.commit('orderCreate')">Оформить заказ</router-link>
    </div>
    <div v-show="store.state.realCart.length === 0">
      <h2 class="msg">{ На данный момент товары в корзине отсутствуют! ]</h2>
    </div>
    <div class="item" v-for="(item, index) in store.state.realCart" :key="item.id">
      <p>Название: {{ item.name }}</p>
      <p>Описание: {{ item.description }}</p>
      <p>Цена: {{ item.price }}</p>
      <div class="quantityItem">
        <button @click="store.commit('removeFromCart', item)" :disabled="item.quantity === 1">-</button>
        <p>Количество: {{ item.quantity }}</p>
        <button @click="store.commit('addToCart', item)">+</button>
      </div>
      <button class="deleteButton" @click="store.commit('delFromCart', item)">Удалить товар</button>
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
}

</script>

<style scoped>
.cart-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px
}
.cart{
  display: flex;
  flex-direction: column;
}
.msg{
  margin-top: 100px;
}
.item{
  flex: 0 1 100%;
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
}
.item:not(:last-child){
  margin-bottom: 10px;
}
.cartButton{
  font-size: 18px;
  color: aliceblue;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: #42b983;
  display: flex;
  width: 160px;
  height: 50px;
  border-radius: 5px;
}
.quantityItem{
  margin: 0 auto;
  width: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.deleteButton{
  margin-bottom: 10px;
  color: #c9d8e5;
  border-radius: 7px;
  border: 0;
  font-size: 15px;
  width: 120px;
  height: 50px;
  background-color: #ff2c2c;
}
</style>