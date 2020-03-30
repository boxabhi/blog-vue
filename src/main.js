import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './assets/css/aos.css';
import './assets/css/bootstrap-datepicker.css';

import './assets/css/jquery.fancybox.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/mediaelementplayer.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/style.css';
import './assets/css/ui.css';


import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
new Vue({
  router,
  store,
  PulseLoader,
  render: h => h(App)
}).$mount('#app')
