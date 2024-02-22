import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: [],
    realCart: [],
    orders: [],
    fio: '',
    email: '',
    password: '',
    user_token: null
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
    addToCart(state, product){
      let item = product;
      item = {...item, quantity: 1};
      if(state.realCart.length > 0){
        let bool = state.realCart.some(i => i.id === item.id);
        if(bool){
          let itemIndex = state.realCart.findIndex(el => el.id === item.id);
          state.realCart[itemIndex]['quantity'] += 1;
        }
        else{
          state.realCart.push(item);
        }
      }
      else{
        state.realCart.push(item);
      }
    },
    removeFromCart(state, product){
      if(state.realCart.length > 0){
        let bool = state.realCart.some(i => i.id === product.id);

        if(bool){
          let index = state.realCart.findIndex(el => el.id === product.id);
          if(state.realCart[index]['quantity'] !== 0){
            state.realCart[index]['quantity'] -= 1;
          }
        }

      }
    },
    delFromCart(state, product){
      let indexCart = state.realCart.indexOf(product);
      state.realCart.splice(indexCart, 1);
    },
    orderCreate(state){
      let newOrders = state.realCart.map(item => ({...item}));
      state.orders.push(newOrders);
      state.realCart.splice(0, state.realCart.length);
      console.log(state.orders);
    },
    async registration(state) {

      let userInfo = {
        fio: state.fio,
        email: state.email,
        password: state.password
      }

      const data = await axios.post('https://jurapro.bhuser.ru/api-shop/signup', userInfo)
          .then(function (response) {
            console.log(response);
            state.user_token = response.data.data.user_token;
            localStorage.token = state.user_token;
          })
          .catch(error => {
            console.log(error)
          })
      console.log(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
