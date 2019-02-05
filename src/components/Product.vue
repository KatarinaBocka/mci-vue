<template>
    <section class="products">
         <h1>Recommended for you</h1>
        <div class="container">
            <div class="shop-box shop-box-1" v-for="(product, index) in products" :key="`${index}`">
                <img :src="product.image_url" :alt="product.name">
                <h3>{{ product.name }} - {{ product.price }}$</h3>
                <a :href="'/product/' + index" @click.prevent="OpenModal(index)">Add to cart</a>

                <!-- Add Modal Component -->
                <Modal v-if="showModal" @click="$emit('close', 'addToCart')" @close="showModal = false" :class="{ open: showModal}" class="modal-window"  :product="products[ind]"  />

            </div>
        </div>
    </section>    
</template>

<script>

import Modal from "./Modal";
import { mapState } from 'vuex';

export default {
  name: 'Main',
  components: {
      Modal
  },
  data () {
    return {
        showModal: false,
        ind: 1,
    }
  },
  mounted() {
      this.$store.dispatch('loadProducts');
  },
  computed: {
      ...mapState([
          'products',
          'cart'
      ]),
  },
   methods: {
      OpenModal(index) {
        this.ind = index;
		this.showModal = true;
      },
      addToCart(product) {
            this.cart.push(product)
        }
    }
}

</script>

<style scoped lang="scss">


/* ---------- PRODUCT SECTION ---------- */
.products {
    h2 {

    }
    .container {
        margin: 0 auto;
        display: grid;
        grid-template-rows: 205px;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 25px;
        grid-column-gap: 60px;
        grid-row-gap: 60px;
        .shop-box {
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
}


/* ---------- PRODUCT MODAL ---------- */
.modal-window {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
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
//   &:target {
//     opacity: 1;
//     pointer-events: auto;
//   }
  &>div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
    color: #333333;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
    color: #333333;
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

@media (max-width: 991px) and (min-width: 468px) {
    .products .container {
        grid-template-rows: repeat(2, 205px);
        grid-template-columns: repeat(2, 1fr);
    }
    
}
@media (max-width: 468px) {
    .products .container {
        grid-template-rows: repeat(4, 205px);
        grid-template-columns: 205px;
        width: 205px;
    }
     
}


</style>
