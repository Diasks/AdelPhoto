<template>
  <div id="app">
    <my-header></my-header>
      <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    'my-header': Header,
    'my-footer': Footer
  },
  data() {
    return {
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  max-width: 100%; 
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-image: url('./assets/kapsel.jpg');
  height: 520px;
  background-size: 100% 130%;
  background-repeat: no-repeat;
}
</style>
