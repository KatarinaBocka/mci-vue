<template>
   <footer>
       <!-- Footer Top -->
       <div class="footer-top">
           <div class="container">
               <!-- Footer col 1 -->
               <div class="footer-col footer-col-1">
                   <nav>
                       <ul>
                           <li><a href="#">help</a></li>
                           <li><a href="#">about us</a></li>
                           <li><a href="#">privacy policy</a></li>
                           <li><a href="#">terms & conditions</a></li>
                       </ul>
                   </nav>
               </div><!-- End Footer col 1 -->

                <!-- Footer col 2 -->
                <div class="footer-col footer-col-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tempore?</p>
                    <input type="text" placeholder="your email address">
                    <ul>
                        <li><a href="#">women <i class="fas fa-angle-right"></i></a></li>
                        <li><a href="#">men <i class="fas fa-angle-right"></i></a></li>
                        <li><a href="#">booth <i class="fas fa-angle-right"></i></a></li>
                    </ul>
                </div><!-- End Footer col 2 -->
                
                <!-- Footer col 3 -->
                <div class="footer-col footer-col-3">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>33G King's Rd, London</p>
                    <p>+44 20 7730 6787</p>
                    <a href="#">more information</a>
                </div><!-- End Footer col 3 -->
           </div><!-- .container -->
       </div><!-- End Footer Top -->

       <div class="footer-bootom">
           <div class="container">
               <div class="col-left">
                   <p>copyright 2014</p>
               </div>
               <div class="col-right">
                   <ul>
                       <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                       <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                       <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                       <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                       <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                       <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                   </ul>
               </div>
           </div>
       </div>
   </footer>
</template>

<script>
export default {
  name: 'Footer',
  
}
</script>

<style scoped lang="scss">
footer {
    border-top: 1px solid #dddad6;
}
/* ----- Footer top ----- */
.footer-top {
    padding: 40px 40px 0;
    .container {
        margin: 0 auto;
        display: grid;
        grid-template-rows: 220px;
        grid-template-columns: repeat(3, 1fr);
        .footer-col-1 nav {
            text-align: left;
            ul li {
                padding-bottom: 15px;
                a {
                    text-decoration: none;
                    color: #002d47;
                    font-size: 13px;
                    font-weight: 600;
                }
            }
        }
        .footer-col-2 {
            p {
                text-align: left;
                font-size: 13px;
                line-height: 20px;
                padding-bottom: 20px;
            }
            input {
                width: 96%;
                height: 40px;
                padding-left: 10px;
                margin-bottom: 20px;
            }
            ul {
                margin: 0 auto;
                display: grid;
                grid-template-rows: 45px;
                grid-template-columns: repeat(3, 1fr);
                grid-row-gap: 0;
                grid-column-gap: 5px;
                li {
                    background: #002d47;
                    padding: 13px;
                    a {
                        color: #fff;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-size: 13px;
                    }
                }
            } 
        }
        .footer-col-3 {
            i {
                font-size: 33px;
                color: #002d47;
                padding-bottom: 20px;
            }
            p {
                font-size: 13px;
                line-height: 20px;
            }
            a {
                text-transform: uppercase;
                font-size: 13px;
                font-weight: 600;
                color: #002d47;
                text-decoration: none;
                letter-spacing: 1px;
                line-height: 42px;
            }
        }
    }
}
/* ----- End Footer Top ----- */

/* ----- Footer Bootom ----- */
.footer-bootom {
    background: #002d47;
    padding: 0 20px;
    .container {
        margin: 0 auto;
        display: grid;
        grid-template-rows: 40px;
        grid-template-columns: repeat(2, 1fr);
        .col-left {
            color: #fff;
            text-align: left;
            
            p { 
                padding: 10px 15px;
                font-size: 13px
            }
        }
        .col-right ul {
            text-align: right;
            li {
                display: inline-block;
                padding: 10px 15px;
                a { color: #ffff; }
            }
        } 
    }
}
/* ----- End Footer Bootom ----- */

/* ---------- MEDIA QUERY ---------- */

@media (min-width: 1200px) {

}
@media (max-width: 1199px) and (min-width: 992px) {
 
}
@media (max-width: 992px) and (min-width: 768px) {
    .footer-top .container .footer-col-2 ul li a {
        font-size: 9px;
    }
}
@media (max-width: 768px) and (min-width: 0px) {
   .footer-col-1, .footer-col-3 {
       display: none;
   }
   .footer-top .container {
       grid-template-columns: repeat(1, 1fr);
   }
   .footer-top .container .footer-col-2 input {
       width: 98%;
   }
    
}
@media (max-width: 768px) {
     .footer-top .container .footer-col-2 input {
       width: 96%;
   }
     
}
@media (max-width: 570px) {
    .footer-bootom .container[data-v-40ab164b] {
        margin: 0 auto;
        display: grid;
        grid-template-rows: repeat(2, 40px);
        grid-template-columns: repeat(1, 1fr);
    }   
    .footer-bootom .container .col-left {
        grid-row-start: 2;
        text-align: center;
    }
    .footer-bootom .container .col-right ul {
        text-align: center;
    }
}



</style>
