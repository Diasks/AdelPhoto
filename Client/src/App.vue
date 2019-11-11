<template>
  <div id="app">
    <my-header></my-header>
    <my-firstpage></my-firstpage>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Firstpage from './components/Firstpage';
import Footer from './components/Footer';
export default {
  name: 'app',
  components: {
    'my-header': Header,
    'my-firstpage': Firstpage,
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
  height: 400px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
