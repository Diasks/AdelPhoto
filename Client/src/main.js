import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Firstpage from './components/Firstpage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Fineart from './components/Fineart';
import City from './components/City';
import Macro from './components/Macro';
import Event from './components/Event';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhoneSquare, faEnvelopeSquare, faFacebookSquare, faInstagram, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: [
    { path: '/', component: Firstpage },
    { path: '/om', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/Fineart', component: Fineart },
    { path: '/City', component: City },
    { path: '/Macro', component: Macro },
    { path: '/Event', component: Event },
    // eslint-disable-next-line no-irregular-whitespace
    { path: '/kontakt', component: Contact }
  ],
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
