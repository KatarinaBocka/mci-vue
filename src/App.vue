<template>
  <div id="app">
      <Header />
      <Main />
      <Footer />
   
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">

$text-color-dark: #052d46;

#app {
  font-family: 'Maven Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
}
</style>
