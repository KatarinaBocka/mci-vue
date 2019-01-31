<template>
 


        <section class="recom-sec">
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
        </section>
       
</template>

<script>

export default {
  name: 'Main',
  components: {
      
  }
  
}
</script>

<style scoped lang="scss">


/* ---------- RECOMMENDED SECTION ---------- */
.recom-sec {
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

/* ---------- MEDIA QUERY ---------- */

@media (max-width: 991px) and (min-width: 468px) {
    .recom-sec .container {
        grid-template-rows: repeat(2, 205px);
        grid-template-columns: repeat(2, 1fr);
    }
    
}
@media (max-width: 468px) {
    .recom-sec .container {
        grid-template-rows: repeat(4, 205px);
        grid-template-columns: 205px;
        width: 205px;
    }
     
}


</style>
