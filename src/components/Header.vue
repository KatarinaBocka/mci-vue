<template>
  <header>

    <Cart :isCardOpen.sync="isCardOpen" @resetIsCartOpen="isCardOpen = $event" />

    <div class="header-top">
      <ul class="header-top-left">
        <li class="lang hidden-xs">
          <img src="../assets/images/Flag_Netherlands.jpg" alt="flag">
          <a href="nl">NL</a>
        </li>
        <li class="account hidden-xs">
          <a href="login">login</a>/
          <a href="singup">sign up</a>
        </li>

        <!-- Mobile Menu Start -->
        <div class="mobile-menu hidden-lg hidden-md hidden-sm nav-link" v-bind:class="{ open: openMobileMenu }" @click="openMobileMenu = !openMobileMenu">
          <div id="nav-icon3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div id="mySidenav" class="sidenav">
              <a href="#" class="closebtn" onclick="closeNav()">&times;</a>
              <div @click.stop class="mob-navigation">
                <i class="fas fa-search mob-search-icon"></i>
                <input class="mob-search" type="text">
                <a href="#">home</a>
                <a href="#"  @click="isDropdownOpenWomen = !isDropdownOpenWomen">women 
                  <i v-if="!isDropdownOpenWomen" class="fas fa-angle-down"></i>
                  <i v-else class="fas fa-angle-up"></i></a>
                  <ul class="mob-dropdown" v-show="isDropdownOpenWomen">
                    <li><a href="#">all clothing</a></li>
                    <li><a href="#">accessories</a></li>
                    <li><a href="#">basic</a></li>
                    <li><a href="#">dresses</a></li>
                    <li><a href="#">jackets</a></li>
                    <li><a href="#">jeans</a></li>
                    <li><a href="#">pants</a></li>
                    <li><a href="#">shirts</a></li>
                    <li><a href="#">skirts</a></li>
                    <li><a href="#">sweaters</a></li>
                  </ul>
                <a href="#" @click="isDropdownOpenMen = !isDropdownOpenMen">men 
                  <i v-if="!isDropdownOpenMen" class="fas fa-angle-down"></i>
                  <i v-else class="fas fa-angle-up"></i></a>
                  <ul class="mob-dropdown" v-show="isDropdownOpenMen">
                    <li><a href="#">all clothing</a></li>
                    <li><a href="#">accessories</a></li>
                    <li><a href="#">basic</a></li>
                    <li><a href="#">dresses</a></li>
                    <li><a href="#">jackets</a></li>
                    <li><a href="#">jeans</a></li>
                    <li><a href="#">pants</a></li>
                    <li><a href="#">shirts</a></li>
                    <li><a href="#">skirts</a></li>
                    <li><a href="#">sweaters</a></li>
                  </ul>
                <a href="#">experience</a>
                <a href="#"><i class="fas fa-user-alt"></i>login / sign up</a>
                <a href="#"><img src="../assets/images/Flag_Netherlands.jpg" alt="flag">Nederland</a>
                <a href="#"><i class="fas fa-heart"></i> wishlist</a>
                <a href="#">help</a>
                <a href="#">about us</a>
                <a href="#">privacy policy</a>
                <a href="#">terms & conditions</a>
              </div>
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
          <li @mouseover="isMegamenuOpenWomen = true" @mouseleave="isMegamenuOpenWomen = false">
            <a href="women">Women</a>
            <div class="megamenu" v-if="isMegamenuOpenWomen">
              <ul class="again">
                <div class="arrow"></div>
                <li class="single-menu col-20">
                  <span>featured</span>
                  <a href="#" cass="category">new arrivals</a>
                  <a href="#" cass="category">best selers</a>
                  <a href="#" cass="category">sale</a>
                </li>

                <li class="single-menu col-20">
                  <span>categories</span>
                  <a href="#" cass="category">all clothing</a>
                  <a href="#" cass="category">accessories</a>
                  <a href="#" cass="category">basics</a>
                  <a href="#" cass="category">dresses</a>
                  <a href="#" cass="category">jackets</a>
                  <a href="#" cass="category">jeans</a>
                </li>

                <li class="single-menu col-20">
                  <span>categories</span>
                  <a href="#" cass="category">jeans</a>
                  <a href="#" cass="category">pants</a>
                  <a href="#" cass="category">shirts</a>
                  <a href="#" cass="category">skirts</a>
                  <a href="#" cass="category">sweaters</a>
                  <a href="#" cass="category">tops</a>
                </li>

                <li class="single-menu col-20">
                  <span>lookbooks</span>
                  <a href="#" cass="category">summer 2014</a>
                  <a href="#" cass="category">spring 2014</a>
                </li>

                <li class="single-menu col-40 sale">
                  <a href="#" cass="category sale">
                    <h2>Sale</h2>
                    <h4>20% discount</h4>
                  </a>
                </li>
              </ul>
            </div>
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
import Cart from './Cart';
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  components: {
    Cart
  },
  data: function() {
    return {
      openMobileMenu: false,
      isCardOpen: false,
      beforeEditCache: '',
      isMegamenuOpenWomen: false,
      isDropdownOpenWomen: false,
      isDropdownOpenMen: false,

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
      let delivery = 20; // For test...

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
    dropdownOpen() {
      this.isDropdownOpen = !this.isDropdownOpen;
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
      position: relative;
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
      &:focus {
        outline: none;
      }
    }
    .search-btn {
      position: absolute;
      right: 50px;
      top: 3px;
      border: none;
      background: none;
      &:focus {
        outline: none;
      }
    }
  }
}

/* ---------- Mobile Menu ---------- */

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.2s;
  .mob-navigation {
    width: 80%;
    height: 100%;
    border-right: 1px solid #dddad6;
    text-align: left;
    .mob-search-icon {
        position: absolute;
        top: 7px;
        left: 20px;
        color: #002d47;
    }
    .fa-user-alt { margin-right: 15px; }
    a img { margin-right: 9px; }
    .fa-heart { margin-right: 12px; }
  }
  .mob-search {
    width: 85%;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #dddad6;
    background: #fcfbf9;
    padding: 8px 0 8px 15%;
    &:focus {
      outline: none;
    }
  }
  a {
    border-bottom: 1px solid #dddad6;
    font-size: .9rem;
    padding: 8px 8px 8px 20px;
    text-decoration: none;
    color: #002d47;
    display: block;
    transition: 0.3s;
    position: relative;
    .fa-angle-up, 
    .fa-angle-down {
      position: absolute;
      right: 10px;
    }
  }
  .mob-dropdown {
    display: block;
    background: #fff;
  }
  
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  border-bottom: none;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.open {
  .sidenav {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #fcfbf9;
  overflow-x: hidden;
  transition: 0.2s; 
}
}

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

/* ---------- MEGA MENU --------- */
.megamenu {
  .again {
      opacity: 1; // treba 0
      margin-top: 25px;
      -webkit-transition: all 0.5s ease 0s;
      transition: all 0.5s ease 0s;
      visibility: visible; // treba hidden
      background: #fff none repeat scroll 0 0;
      padding: 20px;
      top: 100%;
      left: -430px;
      width: 1100px;
      text-align: left;
      border-top: 1px solid #dddad6;
      position: absolute;
      z-index: 10;
      .arrow {
        position: absolute;
        z-index: 900;
        top: 0;
        right: 54%;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        &:before {
          border: 11px solid transparent;
          border-bottom-color: #dddad6;
          position: absolute;
          bottom: 100%;
          right: 40px;
          content: '';
        }
        &:after {
          border: 9px solid transparent;
          border-bottom-color: #fff;
          position: absolute;
          bottom: 100%;
          right: 42px;
          content: '';
        }
      }
      .single-menu {
        display: inline-block;
        a {
          display: block;
          line-height: 25px;
          font-size: 14px;
          &:hover {
            opacity: 0.7;
          }
        }
        span {
          font-size: 1.1rem;
          line-height: 50px;
        }
      }
      .col-20 {
        width: 20%;
      }
      .col-40 {
        width: 40%;
      }
      .single-menu.sale {
        background-image: url("../assets/images/shop-men1.jpg");
        background-size: cover;
        background-position-y: center;
        height: 160px;
        margin-top: 35px;
        position: relative;
        a {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          color: #fff;
          letter-spacing: 1px;
          text-align: center;
          h2 { 
            font-size: 3rem;
            padding-bottom: 10px;
          }
          h4 { 
            font-size: 1rem;
          }
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
  .megamenu .again {
    width: 900px;
    left: -340px;

  }
}
@media (max-width: 991px) and (min-width: 768px) {
  .hidden-sm {
    display: none !important;
  }
  .megamenu .again {
    width: 700px;
    left: -250px;

  }
  .megamenu .again .single-menu.sale a h2 {
    font-size: 2rem;
    padding-bottom: 5px;
  }
  .megamenu .again .single-menu.sale a h4 {
    font-size: .8rem;
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
      left: 8px;
    }
    .search-input {
      padding: 5px 20px;
      width: 75%;
      text-align: left;
    }
  }
  .megamenu .again {
    display: none;
  }
}
@media (max-width: 400px) {
  .header-bottom nav .search .search-input {
    width: 85px;
  }
  .header-top .logo[data-v-61dd7a3d] {
    font-size: 1.1rem;
  } 
}
</style>
