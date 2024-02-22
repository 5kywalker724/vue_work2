import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: [],
  },
  getters: {
  },
  mutations: {
    async fetchProducts(state){
      const {data} = await axios.get('https://jurapro.bhuser.ru/api-shop/products')
          .then(response => state.products = response.data)
          .catch(error =>{console.log(error)})
      state.products = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
