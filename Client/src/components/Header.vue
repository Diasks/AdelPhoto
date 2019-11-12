<template>
  <header>
    <b-navbar navbar-toggleable-sm type="dark" variant="bg-transparent">
      <b-navbar-brand href="#">   <img src="../assets/logo.png"></b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item router-link to="/">Hem</b-nav-item>
        <b-nav-item router-link to="/Om">Om</b-nav-item>
        <b-nav-item router-link to="/Portfolio">Portfolio</b-nav-item>
        <b-nav-item router-link to="Kontakt">Kontakt</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        title: 'AdelPhoto'
      }
    }
  }
</script>

<style>
  img {
    width: 50px; 
  }
</style>