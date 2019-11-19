<template>
  <div>
    <div>
      <h1 class="contactMe">KONTAKT</h1>
        <div class="divText">
          <a href="tel:+46855050000" class="iconSpace"> <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'phone-square' }" class="zoom" /></a>
          0736723176
        </div>
        <div class="divText">
          <a href="mailto:name@email.com" class="iconSpace"><font-awesome-icon :icon="{ prefix: 'fa', iconName: 'envelope-square' }" class="zoom" /></a>
          diana.skshipek@hotmail.com
        </div>
    </div>
    <b-form class="formular">
      <p class="divText">För förfrågan eller beställning av bilder använd gärna formuläret nedan:</p>
      <label class="sr-only" for="inline-form-input-name">Name</label>
      <b-input
        id="inline-form-input-name"
        class="formularInput"
        placeholder="Namn..">
      </b-input>
      <label class="sr-only" for="inline-form-input-email">Email</label>
      <b-input
        id="inline-form-input-email"
        class="formularInput"
        placeholder="Email..">
      </b-input>
      <label class="sr-only" for="inline-form-input-email">Message</label>
      <b-form-textarea id="inline-form-input-text" class="formularInput" placeholder="Skriv ditt meddelande här.."></b-form-textarea>
      <b-button variant="bg-transparent" class="sendButton">Skicka</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style>
.formular {
  width: 30%;
  margin-left: 5px;
  margin-top: 50px;
}

.formularInput {
  width: 100%;
  background-color: transparent;
  border: 1px solid black;
  margin: 5px;
  color: white;
  box-shadow: inset 0 0 10px grey;
  font-size: 15px;
  font-family: 'Montserrat'; 
  font-style: normal;
}

.formularInput::placeholder {
  color: grey;
}

.sendButton {
  border: 1px solid black;
  width: 25%;
  border-radius: 10px;
  box-shadow: inset 0 0 10px grey;
  color: grey;
  font-family: 'Montserrat'; 
  font-style: normal;
  margin: 5px;
}

.divText {
  margin-left: 5px;
  font-size: 17px;
  font-family: 'Montserrat'; 
}

.contactMe {
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 30px;
}

.iconSpace {
  margin-right: 5px;
}
</style>