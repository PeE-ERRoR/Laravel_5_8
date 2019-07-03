/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
import VueRouter  from 'vue-router';
import axios  from 'axios';
import VueAxios from 'vue-axios'
import routes from './routes.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Home from './components/Home.vue'
import App from './views/App.vue'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.use(Vuetify, {
  iconfont: 'md'
})
const router = new VueRouter({routes});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('template-component', require('./views/App.vue').default);
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('login', require('./views/Login.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 export const eventBus = new Vue({
   methods: {
     changAge(age) {
       this.$emit('ageWasEditd', age);
     }
   }
 });

const app = new Vue({
    render: h => h(App),
    el: '#app',
    router
});
