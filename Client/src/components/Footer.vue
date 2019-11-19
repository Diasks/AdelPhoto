<template>
  <footer>
    <b-navbar navbar-toggleable-sm type="dark" variant="bg-transparent" class="text">
      <b-navbar-nav>
        <b-nav-item a href="https://www.facebook.com/HillyHoney">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }" class="zoom"/>
        </b-nav-item>          
        <b-nav-item a href=" https://www.instagram.com/theresiedegosson/">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="zoom" /> 
        </b-nav-item>
        <b-nav-item a href="https://se.linkedin.com/in/theresie-gosson-15311610a">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" class="zoom" />
        </b-nav-item>
        <b-nav-item>&copy; 2019</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </footer>
</template>

<script>
  export default{
    data() {
      return {
        footerText: 'Copyright anno 2019'
      }
    }
  }
</script>

<style>
  footer {
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .text {
     text-shadow: 2px 1px 2px #424239, 0 0 2em black, 0 0 0.5em black;
    margin: 5px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif; 
  }

  .zoom {
    transition: transform .2s; /* Animation */
    color: lightgrey;
  }
  .zoom:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
</style>

