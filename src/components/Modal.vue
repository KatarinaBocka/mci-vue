<template>
    <div  id="open-modal" class="modal-window"  @click="$emit('close')">
        <div @click.stop>
            <h1>Add To Cart</h1> 
            <img :src="product.image_url" alt="">
            <div class="wrapp-info">
                <h3 class="basic-info">{{ product.name }} - {{ product.price }}$</h3>
           
            <div class="inline-el">
                <h3 class="qty-product">Quantity: </h3>
                <input type="text" v-on:keyup.enter="calculatePrice(product), addToCart(product), $emit('close')" @blur="calculatePrice(product)" v-model="quantity">
            </div>
            <h2 class="total-price">Total Price: {{ totalPrice }}$</h2>
            <a @click.prevent="addToCart(product), $emit('close')" class="add-to-cart" href="#">Add To Cart</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    name: 'Modal',
    props: {
        product: {
            type: Object
        },
    },
    data () {
        return {
            quantity: 0,
            totalPrice: 0, // For one type of product
            editing: false
        }
    },
    methods: {
        OpenModal(product) {
            this.showModal = !this.showModal;
        },
        ...mapMutations([
            'ADD_TO_CART'
        ]),
        addToCart: function (product) {
            this.product.quantity = parseInt(this.quantity);
            this.product.totalPrice = this.totalPrice;


            this.ADD_TO_CART(this.product)

            console.log(this.$store.state.cart)
            
        },
        // Calculate price for one type of product
        calculatePrice(product) {
            this.totalPrice = this.quantity * this.product.price
        },
    },
}

</script>

<style scoped lang="scss">


/* ---------- PRODUCT MODAL ---------- */
.modal-window {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;

  &>div {
    width: 290px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 0;;
    background: #ffffff;
    color: #333333;
    z-index: 99999;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 1.5rem;
    margin: 0 0 15px;
    color: #333333;
  }
  img {
      height: 205px;
      width: 205px;
      object-fit: conver;
  }
  .wrapp-info {
        width: 205px;
        margin: 0 auto;
        
  }
  .basic-info {
      text-align: left;
      font-size: 1rem;
      line-height: 3;
  }
  .inline-el {
        text-align: left;
        padding-bottom: 30px;
  }
  .qty-product {
      display: inline-block;
      font-size: 1rem;
      text-align: left;
  }
  input {
      width: 60px;
      margin-left: 15px;
      border: 1px solid #000;
      padding: 3px 0;
  }
  .total-price {
      font-size: 1.1rem;
      text-align: right;
  }
  .add-to-cart {
        text-align: right;
        display: block;
        margin-top: 70px;
        color: #000;
  }
}
.modal-window.open {
    opacity: 1 !important;
    pointer-events: auto;
}
.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  &:hover {
    color: #000;
  }
}




/* ---------- MEDIA QUERY ---------- */



</style>
