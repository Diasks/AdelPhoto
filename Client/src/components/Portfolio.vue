<template>
  <div>
    <b-card-group deck style="margin: 20px; text-align: right; justify-content: center;">
      <router-link to="/Fineart">
        <b-card 
          style="max-width: 20rem; height: 200px;  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.8), 0 24px 80px 0 rgba(0, 0, 0, 0.19);"
          title="Fine Art" class="backgroundImgOne">
        </b-card> 
      </router-link>
      <router-link to="/City">
        <b-card
          style="max-width: 20rem; height: 200px;  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.8), 0 24px 80px 0 rgba(0, 0, 0, 0.19);"
          title="Landskap" class="backgroundImgTwo"> 
        </b-card>
      </router-link>
    </b-card-group>
    <b-card-group deck style="margin: 20px; text-align: right; justify-content: center;">
      <router-link to="/Macro">
        <b-card
          style="max-width: 20rem; height: 200px;  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.8), 0 24px 80px 0 rgba(0, 0, 0, 0.19); "
          title="Macro" class="backgroundImgThree">
        </b-card>
      </router-link>
      <router-link to="Event">
        <b-card
          style="max-width: 20rem; height: 200px;  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.8), 0 24px 80px 0 rgba(0, 0, 0, 0.19);"
          title="Evenemang" class="backgroundImgFour"> 
        </b-card>
      </router-link>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'Portfolio'
}
</script>

<style>
.backgroundImgOne {
  background-image: url('../assets/coffee.jpg');
  background-size: cover;
  font-family: 'Montserrat';
  border: none;
  color: grey;
  text-shadow: white 1px 1px 5px;
  width: 250px;
  transition: transform .2s; /* Animation */
}

.backgroundImgOne:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.backgroundImgTwo {
  font-family: 'Montserrat';
  background-image: url('../assets/city.jpg');
  background-size: cover;
  font-family: 'Montserrat';
  color: darkgrey;
  border: none;
  width: 250px;
  text-shadow: black 1px 1px 5px;
  transition: transform .2s; /* Animation */
}

.backgroundImgTwo:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.backgroundImgThree {
  background-image: url('../assets/mackro.jpg');
  background-size: cover;
  font-family: 'Montserrat';
  border: none;
  width: 250px;
  text-shadow: black 1px 1px 5px;
  color: darkgrey;
  transition: transform .2s; /* Animation */
}

.backgroundImgThree:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.backgroundImgFour {
  background-image: url('../assets/events.jpg');
  background-size: cover;
  font-family: 'Montserrat';
  border: none;
  color: darkgrey;
  width: 250px;
  text-shadow: white 1px 1px 5px;
  transition: transform .2s; /* Animation */
}

.backgroundImgFour:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}
</style>