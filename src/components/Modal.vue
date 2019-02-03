<template>
    <div  id="open-modal" class="modal-window"  @click="$emit('close')">
        <div @click.stop>
            <!-- <a href="#" @click="$emit('close')" title="Close" class="modal-close">Close</a> -->
            <h1>Add To Cart</h1>
            <img :src="product.image_url" alt="">
            <h3>Fashion Stuf - 150$</h3>
            <h3>Quantity</h3>
            <input type="text">
            <h2>Total Price: 300$</h2>
            <h3><a href="#">Add To Cart</a></h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Modal',
    components: {
      
    },
    props: {
        product: {
            type: Object
        },
    },
    data () {
        return {
            // showModal: false,
        }
    },
    methods: {
      OpenModal(product) {
        console.log("modal")
        this.showModal = !this.showModal;
      },
        closeProductModal() {
            this.$emit('closeQuickViewModal');
        },
    }
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
//   &:target {
//     opacity: 1;
//     pointer-events: auto;
//   }
  &>div {
    width: 400px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
    color: #333333;
    z-index: 99999;
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



</style>
