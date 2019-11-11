<template>
  <footer>
        <p>{{ footerText }}</p>
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
    background-color: grey;
}
</style>