<template>
  <header>
    <b-navbar navbar-toggleable-sm navbar-trans navbar-inverse>
        <b-navbar-brand href="#">{{ title }}</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item href="#">Hem</b-nav-item>
            <b-nav-item href="#">Om</b-nav-item>
            <b-nav-item href="#">Portfolio</b-nav-item>
            <b-nav-item href="#">Kontakt</b-nav-item>
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
</style>