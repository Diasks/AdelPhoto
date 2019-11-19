<template>
  <header>
    <b-navbar navbar-toggleable-sm type="dark" variant="bg-transparent">
      <b-navbar-brand href="#">   <img src="../assets/logo.png"></b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item router-link to="/" class="styledText">Hem</b-nav-item>
        <b-nav-item router-link to="/Om" class="styledText">Om</b-nav-item>
        <b-nav-item router-link to="/Portfolio" class="styledText">Portfolio</b-nav-item>
        <b-nav-item router-link to="Kontakt" class="styledText">Kontakt</b-nav-item>
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
    margin-right: 30px;
    border: 1px solid pink;
  }

  .styledText {
    text-shadow: 2px 1px 2px #424239, 0 0 2em black, 0 0 0.5em black;
    margin: 5px;
    transition: transform .2s; /* Animation */
    font-size: 14px;
       font-family: 'Montserrat', sans-serif; 
  }
  
   .styledText:hover {
  transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
</style>