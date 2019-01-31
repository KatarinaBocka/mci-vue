<template>
  <header>
      <div class="header-top">
        <ul class="header-top-left">
        
          <li class="lang hidden-xs"><img src="../assets/images/Flag_Netherlands.jpg" alt="flag"><a href="nl">NL</a></li>
          <!-- <li><a href="en">EN</a></li> -->
          <li class="account hidden-xs"><a href="login">login</a>/<a href="singup">sign up</a></li>

             <!-- Mobile Menu Start -->
            <div class="mobile-menu hidden-lg hidden-md hidden-sm nav-link">
                <div id="nav-icon3" v-bind:class="{ open: openMobileMenu }" @click="openMobileMenu = !openMobileMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div><!-- Mobile Menu End -->

        </ul>
        <h1 class="logo">every.day.counts</h1>
        <ul class="header-top-right">
          <li class="hidden-xs"><a href="wishlist"><i class="fas fa-heart"></i><span>0</span></a></li>
          <li><a href="cart"><i class="fas fa-shopping-bag"></i><span>2</span></a></li>
        </ul>
      </div>

      <div class="header-bottom">
          <nav>
            <ul class="hidden-xs">
                <li><a href="home"><i class="fas fa-home"></i></a></li>
                <li><a href="women">Women</a></li>
                <li><a href="men">Men</a></li>
                <li><a href="experience">Experience</a></li>
            </ul>
            <li class="location hidden-sm hidden-md hidden-lg"><i class="fas fa-map-marker-alt"></i>stores</li>
            <form action="#" class="search">
              <button class="search-btn"><i class="fas fa-search"></i></button>
              <input class="search-input" type="text" placeholder="search">
            </form>
          </nav>
      </div>
     
  </header>
</template>

<script>
export default {
  name: 'Header',
  
}
</script>

<style scoped lang="scss">

header {
    height: 110px;
    padding: 25px 5%;
}

.header-top, .header-top ul,
.header-bottom, .header-bottom ul {
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
            img { padding-right: 5px; }
        }
        .account a { padding: 0 5px; }
    }
    .header-top-right {
        justify-content: flex-end;
        li { padding-left: 40px; }
    }
    li a {
        color: #052d46;
        text-decoration: none;
        span { padding-left: 5px; }
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
        i { padding-right: 5px; }
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
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
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
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
}
#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
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
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.3rem;
        text-align: left;
         color: #052d46;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        font-size: 1.3rem;
        text-align: left;
         color: #052d46;
    }
    :-ms-input-placeholder { /* IE 10+ */
        font-size: 1.5rem;
        text-align: left;
         color: #052d46;
    }
    :-moz-placeholder { /* Firefox 18- */
        font-size: 1.5rem;
        text-align: left;
         color: #052d46;
    }
    .header-top { border-bottom: 1px solid #dddad6; }
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
