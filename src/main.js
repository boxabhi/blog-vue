import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
Vue.config.productionTip = false

import './assets/css/aos.css';
import './assets/css/bootstrap-datepicker.css';
import './assets/css/bootstrap.min.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/mediaelementplayer.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/style.css';
import './assets/css/ui.css';




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
