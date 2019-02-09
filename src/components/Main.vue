<template>
  <main>
        <Carousel />

        <!-- Shop Links -->
        <section class="shop-links">
            <div class="container">
                <div class="shop-link shop-women"><a href="#">Shop Women</a></div>
                <div class="shop-link shop-men"><a href="#">Shop Men</a></div>
            </div>
        </section>
        
        <!-- End Shop Links -->

        <!-- Delivery section -->
        <section class="delivery-sec">
             <h1>free delivery & returno on UK orders</h1>
            <div class="container">
                <div class="blog-box blog-box-1"></div>
                <div class="blog-box blog-box-2">
                    <h2>Today - Love dresses</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo voluptatum, nulla voluptate at quia?</p> 
                    <a href="#"><span>Read more</span><i class="fas fa-angle-right"></i></a>
                </div>
                <div class="blog-box blog-box-3"></div>
                <div class="blog-box blog-box-4">
                    <h2>The everyday bag</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo voluptatum, nulla voluptate at quia?</p> 
                    <a href="#"><span>Read more</span><i class="fas fa-angle-right"></i></a>
                </div>
            </div>
        </section>
        <!-- End Delivery section -->

        <Product />

        <!-- Recomendent Shop section -->
        <!-- <section class="recom-sec">
             <h1>Recommended for you</h1>
            <div class="container">
                <div class="shop-box shop-box-1">
                    <img src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="">
                    <h3>Suede Shoes - 300$</h3>
                    <a href="#">Add to cart</a>
                </div>
                <div class="shop-box shop-box-2">
                    <img src="https://images.pexels.com/photos/1744651/pexels-photo-1744651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                    <h3>Suede Shoes - 300$</h3>
                    <a href="#">Add to cart</a>
                </div>
                <div class="shop-box shop-box-3">
                    <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                    <h3>Suede Shoes - 300$</h3>
                    <a href="#">Add to cart</a>
                </div>
                <div class="shop-box shop-box-4">
                    <img src="https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                    <h3>Suede Shoes - 300$</h3>
                    <a href="#">Add to cart</a>
                </div>
            </div>
        </section> -->
        <!-- End Recomendent Shop section -->


  </main>
</template>

<script>
import Carousel from '../components/Carousel';
import Product from '../components/Product';

export default {
  name: 'Main',
  components: {
      Carousel,
      Product
  }
  
}
</script>

<style scoped lang="scss">
main {
    margin-bottom: 90px;
}
.shop-links .container {
    margin: 0 auto;
    display: grid;
    grid-template-rows: 500px;
    grid-template-columns: repeat(2, 1fr);
    .shop-women {
        background: url('../assets/images/women-shop1.jpg');
    }
    .shop-men {
        background: url('../assets/images/shop-men1.jpg');
    }
    .shop-link {
        position: relative;
        background-size: cover;
        background-position: center;
        a {
            position:absolute; 
            top:50%; 
            left:50%; 
            transform:translate(-50%, -50%); 
            width:50%;
            font-size: 3.125em;
            color: #fff;
            text-decoration: none;
        }
    }
    
}

.delivery-sec {
    h1 {
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 1.6rem;
    }
    .container {
        margin: 0 auto;
        display: grid;
        grid-template-rows: 250px;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 25px;
        .blog-box {
            text-align: left;
            padding: 40px 20px;
            h2 {
                font-size: 18px;
                line-height: 50px;
                font-weight: lighter;
            }
            p {
                font-size: 13px;
                line-height: 18px;
                font-weight: normal;
                padding-bottom: 25px;
            }
            a {
                text-decoration: none;
                text-transform: uppercase;
                font-size: 13px;
                color: #002d47;
                font-weight: normal;
                 span { padding: 0 10px; }
            }
            &-1 {
                background-image: url("https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
                background-position: center;
                background-size: cover;
            }
            &-3 {
                background: url("https://images.pexels.com/photos/1270015/pexels-photo-1270015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
                    background-position: center;
                background-size: cover;
            }
        }
    }
}

/* ---------- MEDIA QUERY ---------- */

@media (max-width: 1199px) and (min-width: 992px) {
    .shop-links .container .shop-link a {
        font-size: 2.125rem;
    }
}
@media (max-width: 991px) and (min-width: 468px) {
    .shop-links .container {
        grid-template-rows: 300px;
    }
    .delivery-sec .container {
        grid-template-rows: repeat(2, 250px);
        grid-template-columns: repeat(2, 1fr);
    }
    .shop-links .container .shop-link a {
        font-size: 1.2rem;
    }
    
}
@media (max-width: 468px) {
    .shop-links .container {
        grid-template-rows: 170px;
    }
    .delivery-sec .container {
        grid-template-rows: repeat(4, 250px);
        grid-template-columns: 100%;
    }
    .delivery-sec h1 {
        font-size: 1.1rem;
    }
    .shop-links .container .shop-link a {
        font-size: .9rem;
    }
}


</style>
