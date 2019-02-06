<template>
  <header>
    <div class="cart" v-show="isCardOpen">
      <i @click="closeCardModal" class="fas fa-times"></i>
      <div class="container" v-for="(cartItem, index) in cart" :key="`${index + 2}`">
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
            <input v-else type="text" v-model="cartItem.quantity" @blur="doneEditItem(cartItem)" @keyup.enter="doneEditItem(cartItem)" @keyup.esc="cancelEditItem(cartItem)" v-focus>

           <!-- <h3>{{cartItem.quantity}}</h3> -->
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
      <div class="container">
        <div class="cart-col cart-col-left">
          <p>Order shipped within 1 business day</p>
          <p>30-day return guarantee</p>
        </div>
        <div class="payment cart-col cart-col-right">
          We accept:
          <img src="../assets/images/pay-method.jpg" alt>
          <a href="#">Secure Checkout
            <i class="fas fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="header-top">
      <ul class="header-top-left">
        <li class="lang hidden-xs">
          <img src="../assets/images/Flag_Netherlands.jpg" alt="flag">
          <a href="nl">NL</a>
        </li>
        <!-- <li><a href="en">EN</a></li> -->
        <li class="account hidden-xs">
          <a href="login">login</a>/
          <a href="singup">sign up</a>
        </li>

        <!-- Mobile Menu Start -->
        <div class="mobile-menu hidden-lg hidden-md hidden-sm nav-link">
          <div id="nav-icon3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <!-- Mobile Menu End -->
      </ul>
      <h1 class="logo">every.day.counts</h1>
      <ul class="header-top-right">
        <li class="hidden-xs">
          <a href="wishlist">
            <i class="fas fa-heart"></i>
            <span>0</span>
          </a>
        </li>
        <li>
          <a href="#cart" @click="showCardModal()">
            <i class="fas fa-shopping-bag"></i>
            <span>{{this.$store.state.total}}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="header-bottom">
      <nav>
        <ul class="hidden-xs">
          <li>
            <a href="home">
              <i class="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a href="women">Women</a>
          </li>
          <li>
            <a href="men">Men</a>
          </li>
          <li>
            <a href="experience">Experience</a>
          </li>
        </ul>
        <li class="location hidden-sm hidden-md hidden-lg">
          <i class="fas fa-map-marker-alt"></i>stores
        </li>
        <form action="#" class="search">
          <button class="search-btn">
            <i class="fas fa-search"></i>
          </button>
          <input class="search-input" type="text" placeholder="search">
        </form>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  data: function() {
    return {
      isCardOpen: false,
      beforeEditCache: ''
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
    showCardModal: function() {
      this.isCardOpen = true;
    },
    closeCardModal: function() {
      this.isCardOpen = false;
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

<style scoped lang="scss">
header {
  padding: 25px 5%;
}

.header-top,
.header-top ul,
.header-bottom,
.header-bottom ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.header-top {
  align-items: center;
  padding-bottom: 12px;
  .header-top-left {
    justify-content: flex-start;
    .lang {
      padding-right: 40px;
      img {
        padding-right: 5px;
      }
    }
    .account a {
      padding: 0 5px;
    }
  }
  .header-top-right {
    justify-content: flex-end;
    li {
      padding-left: 40px;
    }
  }
  li a {
    color: #052d46;
    text-decoration: none;
    span {
      padding-left: 5px;
    }
  }
  .logo {
    font-size: 2.125rem;
  }
}

.header-bottom nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
  ul {
    width: 53%;
    justify-content: unset;
    li {
      padding: 0 20px;
      a {
        color: #052d46;
        text-decoration: none;
        text-transform: lowercase;
      }
    }
  }
  .location {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    font-size: 1.3rem;
    border-right: 1px solid #dddad6;
    i {
      padding-right: 5px;
    }
  }
  .search {
    position: relative;
    .search-input {
      border: none;
      text-align: right;
    }
    .search-btn {
      position: absolute;
      right: 50px;
      top: 3px;
      border: none;
      background: none;
    }
  }
}

/* ---------- Mobile Menu ---------- */
#nav-icon3 {
  width: 20px;
  height: 17px;
  position: relative;
  margin: 10px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #052d46;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
}
#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 6px;
}

#nav-icon3 span:nth-child(4) {
  top: 12px;
}

#nav-icon3.open span:nth-child(1) {
  top: 6px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.cart {
  padding-top: 20px;
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
}

/* ---------- MEDIA QUERY ---------- */
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}
@media (max-width: 1199px) and (min-width: 992px) {
  .hidden-md {
    display: none !important;
  }
}
@media (max-width: 991px) and (min-width: 768px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
  .header-top .logo {
    font-size: 1.5rem;
  }
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-size: 1.3rem;
    text-align: left;
    color: #052d46;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-size: 1.3rem;
    text-align: left;
    color: #052d46;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-size: 1.5rem;
    text-align: left;
    color: #052d46;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-size: 1.5rem;
    text-align: left;
    color: #052d46;
  }
  .header-top {
    border-bottom: 1px solid #dddad6;
  }
  .header-bottom nav .search {
    width: 50%;
    .search-btn {
      right: inherit;
    }
    .search-input {
      padding: 5px 20px;
    }
  }
}
</style>
