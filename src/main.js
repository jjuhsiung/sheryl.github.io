import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Profile from './components/Profile.vue'
import Home from './components/Home.vue'
import Resume from '@/components/Resume';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const routes = [
  { path: '/Profile', component: Profile },
  { path: '/', component: Home },
  { path: '/Home', component: Home },
  { path: '/Resume', component: Resume }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
