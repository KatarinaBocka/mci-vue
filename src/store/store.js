import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        total: 0, // Total price for one type of product
    },
    mutations: {
        SET_PRODUCTS (state, products) {
            state.products = products
        },
        ADD_TO_CART: (state, product) => {

            state.total += product.quantity

            const record = state.cart.find(p => p.name === product.name)

            if(!record) {
                state.cart.push({
                    name: product.name,
                    image: product.img_url,
                    price: product.price,
                    quantity: product.quantity,
                    total: product.totalPrice,
                    editing: false
                })
            } else {
                record.quantity = record.quantity + product.quantity;
            }

            
        }
    },
    actions: {
        loadProducts({ commit }) {
            axios.get('http://api.clothes-shop.devbox21.com/')
                .then(res => {
                    let products = res.data
                    commit('SET_PRODUCTS', products)
                })
                .catch(error => { console.log(error) })
        },
        addToCart (context, product) {
            context.commit('addToCart', product)
        }
    },
    

});