<template>
    <div class="cart" v-show="isCardOpen">
      <i @click="closeCardModal" class="fas fa-times"></i>
      <div class="container product-container" v-for="(cartItem, index) in cart" :key="`${index + 2}`">
        <div class="cart-col cart-col-left">
          <h3>Product</h3>
          <img src="https://i.ibb.co/qmRKv5D/longboard.jpgg" alt>
          <div class="wrapp-cart-item">
            <h3>{{cartItem.name}}</h3>
            <div>
              <a href="#" @click="editItem(cartItem)">Edit</a>
              <a href="#" @click="removeItem(index)">Remove</a>
            </div>
          </div>
        </div>
        <div class="cart-col cart-col-right">
          <div class="qty-price-product">
            <h3>Quantity</h3>

            <h3 v-if="!cartItem.editing" @dblclick="editItem(cartItem)">{{cartItem.quantity}}</h3>
            <input v-else class="editQuantity" type="text" v-model="cartItem.quantity" @blur="doneEditItem(cartItem)" @keyup.enter="doneEditItem(cartItem)" @keyup.esc="cancelEditItem(cartItem)" v-focus>

          </div>
          <div class="qty-price-product">
            <h3>Price</h3>
            <h3>{{cartItem.price * cartItem.quantity}} $</h3>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="cart-col cart-col-left">
          <p class="vaucher">have a vaucher code?</p>
          <input type="text" placeholder="fill in your code">
        </div>

        <div class="cart-col cart-col-right">
          <ul>
            <li>Subtotal
              <span>$ {{ totalCost }}</span>
            </li>
            <li>Indication delivery cost
              <span>$ 20</span>
            </li>
            <li>
              <h3>Order total</h3>
              <span>
                <h3>$ {{ totalCostDelivery }}</h3>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="container container-bottom">
        <div class="cart-col cart-col-left">
          <p>Order shipped within 1 business day</p>
          <p>30-day return guarantee</p>
        </div>
        <div class="payment cart-col cart-col-right">
          We accept:
          <img src="../assets/images/pay-method.jpg" alt>
          <a href="#" class="check-btn">Secure Checkout
            <i class="fas fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div class="arrow"></div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
    name: 'Cart',
    props: {
        isCardOpen: {
            type: Boolean
        }
    },
    data: function() {
    return {
      beforeEditCache: '',
    };
  },
  directives: {
      focus: {
          inserted: function(el) {
              el.focus();
          }
      }
  },
  computed: {
    ...mapState(["cart"]),
    // Total cost for all product in cart
    totalCost() {
      return this.cart.reduce((accum, product) => {
        return accum + product.price * product.quantity;
      }, 0);
    },
    // Total cost for all product in cart + delivery
    totalCostDelivery() {
      let delivery = 20; // For Now...

      return (
        this.cart.reduce((accum, product) => {
          return accum + product.price * product.quantity;
        }, 0) + delivery
      );
    }
  },

  methods: {
    // showCardModal: function() {
    //   this.isCardOpen = false;
    // },
    closeCardModal: function() {
      this.isCardOpen = !this.isCardOpen;
      this.$emit('resetIsCartOpen', this.isCardOpen);
    },
    removeItem(index) {
      this.cart.splice(index, 1)
    },
    editItem(cartItem) {
        this.beforeEditCache = cartItem.quantity;
        cartItem.editing = true;
    },
    doneEditItem(cartItem) {
        if(cartItem.quantity.trim().length == 0 || cartItem.quantity < 0) {
          cartItem.quantity = this.beforeEditCache
        }
        cartItem.editing = false;
    },
    cancelEditItem(cartItem) {
        cartItem.editing = false;
        cartItem.quantity = this.beforeEditCache;
    }
  }
};

</script>

<style lang="scss" scope>
.cart {
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #dddad6;
  .product-container {
    border-bottom: 1px solid #dddad6;
    padding: 20px 0;
  }
  .fa-times {
    position: absolute;
    right: 15px;
    top: 10px;
  }
  .container {
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    .cart-col-left {
      text-align: left;
    }
    .cart-col-right {
      text-align: right;
      .qty-price-product {
        display: inline-block;
        text-align: center;
        width: 100px;
        font-size: 0.9rem;
        .editQuantity {
          width: 40px;
          padding-left: 32px;
          &:focus {
             border-top: none;
             border-left: none;
             border-right: none;
             border-bottom:1px solid #dddad6;
          }
        }
      }
      ul {
        margin-top: 20px;
        li {
          font-size: 0.9rem;
          padding-bottom: 10px;
          span {
            width: 250px;
            display: inline-block;
          }
          h3 {
            display: inline-block;
            font-size: 1.1rem;
          }
        }
      }
    }
    .img {
      display: inline-block;
      height: 75px;
    }
    .wrapp-cart-item {
      vertical-align: top;
      padding-top: 10px;
      padding-left: 15px;
      display: inline-block;
      h3 {
        padding-bottom: 10px;
      }
      a {
        font-size: 0.8rem;
        margin-right: 30px;
        color: #a8a8a8;
      }
    }
    .cart-col {
      h3 {
        font-size: 0.9rem;
        padding-bottom: 15px;
      }
      img {
        max-height: 75px;
      }
      &:nth-child(3),
      &:nth-child(4) {
        border-top: 1px solid #dddad6;
        border-bottom: 1px solid #dddad6;
      }
      input {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #dddad6;
        outline: none;
      }
      p {
        font-size: 0.8rem;
        margin-bottom: 10px;
      }
      .vaucher {
        margin-top: 20px;
      }
    }
    .payment {
      font-size: 0.8rem;
      margin-top: 20px;
      img {
        vertical-align: middle;
        margin: 0 20px;
      }
      a {
        background: #002d47;
        color: #fff;
        padding: 20px 35px;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
  }
  .arrow {
    position: absolute;
    z-index: 900;
    bottom: 0;
    right: 70px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    &:before {
        border: 8px solid transparent;
        border-bottom-color: #dddad6;
        position: absolute;
        bottom: 100%;
        right: 40px;
        content: '';
    }
    &:after {
        border: 6px solid transparent;
        border-bottom-color: #fff;
        position: absolute;
        bottom: 100%;
        right: 42px;
        content: '';
    }
  }
}

/* ---------- MEDIA QUERY ---------- */

@media (max-width: 991px) and (min-width: 768px) {
    .cart .container .payment a {
        padding: 15px 25px;
    }
}

@media (max-width: 767px) {
    .cart .container-bottom {
        grid-template-columns: repeat(1, 1fr);
    }
    .cart .container .payment a {
        padding: 15px 25px;
        .fa-angle-right {
            display: none
        }
    }
}

@media (max-width: 740px) {
    .cart .container-bottom {
        grid-template-columns: repeat(1, 1fr);
    }
    .cart .container .payment a {
        padding: 15px 25px;
        .fa-angle-right {
            display: none
        }
    }
    .cart .container .wrapp-cart-item {
        padding-left: 0;
    }
    .cart .container .cart-col img {
        margin-right: 15px;
    }
}

</style>
