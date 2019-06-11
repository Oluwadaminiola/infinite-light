import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bootstrap from './assets/js/bootstrap';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(bootstrap);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
