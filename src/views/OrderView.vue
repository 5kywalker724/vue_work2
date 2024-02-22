<template>
  <div class="orders">
    <h2>Оформленные заказы:</h2>
    <div class="order-header">
      <router-link class="prevPage" to="/">Назад</router-link>
    </div>
    <div v-show="store.state.orders.length === 0">
      <h2 class="msg">{ На данный момент у вас нет заказов! ]</h2>
    </div>
    <div class="order" v-for="order in store.state.orders" :key="order.id">
      <div class="product" v-for="product in order" :key="product.id">
        <p><b>{{ product.name }}</b></p>
        <p><b>Описание:</b> {{ product.description }}</p>
        <p><b>Количество:</b> {{ product.quantity }}</p>
        <p><b>Цена:</b> {{ product.price * product.quantity }}</p>
      </div>
      <p>--------------------------------------------------------------------------------------------</p>
      <p><b>Цена заказа:</b></p>
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
.orders{
  display: flex;
  flex-direction: column;
}
.order-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.order{
  border: 1px solid black;
  border-radius: 5px;
  flex: 0 1 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 1em;
  margin-bottom: 40px;
}
.product{
  border: 1px solid black;
  border-radius: 5px;
  width: 350px;
  display: flex;
  flex-direction: column;
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
.msg{
  margin-top: 100px;
}
</style>