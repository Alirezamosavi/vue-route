/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'

Vue.use(VueRouter);




const routes = [
    { path: '/', component: require('./components/index.vue').default },
    { path: '/el', component: require('./components/ExampleComponent.vue').default },
    { path: '/App', component: require('./components/App.vue').default }
]

const router = new VueRouter({
    
    routes: routes,    // this is const routes
    mode: 'history'        //  To get rid of the hash, we can use the router's history mode, which leverages the history.
  })


const app = new Vue({
    el: '#app',
    router     //  this is that const router
});
