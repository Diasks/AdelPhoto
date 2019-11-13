<template>
  <footer>
    <b-navbar navbar-toggleable-sm type="light" variant="bg-transparent">
      <b-navbar-nav>
        <b-nav-item a href="https://www.facebook.com/HillyHoney">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }"/>
        </b-nav-item>          
        <b-nav-item a href="https://www.facebook.com/HillyHoney">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" /> 
        </b-nav-item>
        <b-nav-item a href="https://se.linkedin.com/in/theresie-gosson-15311610a">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
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
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
}
</style>

