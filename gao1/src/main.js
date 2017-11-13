import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import app from './app.vue';
import Vuex from 'vuex';
import routes from '../routes/routes.config.js';
import store from '../vuex/vuexs.js';

var router = new VueRouter({
	routes: routes
})
new Vue({
	el: '.wrap',
	router:router,
	store:store,
	render: create=>create(app)
})
if (module.hot){
	module.hot.accept();
}
