import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state: {
        products: [
            {
                name: "Men's suede shoes",
                price: 300,
                image_url: "https://i.ibb.co/hyVRdQ7/suede-shoe.jpg",
            },
            {
                name: "Fashion stuff",
                price: 150,
                image_url: "https://i.ibb.co/9r9m0zZ/accessories.jpg",
            },
            {
                name: "Longboard look",
                price: 850,
                image_url: "https://i.ibb.co/qmRKv5D/longboard.jpg",
            },
            {
                name: "Classic neck tie",
                price: 350,
                image_url: "https://i.ibb.co/9v8zW0z/mens-tie.jpg",
            }
        ]
    },
    actions: {
        loadProducts({commit}) {
            axios.get('http://api.clothes-shop.devbox21.com/')
                .then(res => {
                    console.log(res)
                    let products = res
                })
                .catch(error => { console.log(error) })
        }
    },
    // mutations: {
    //     SET_PRODUCTS (state, products)
    // }
});