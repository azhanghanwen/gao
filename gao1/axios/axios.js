import axios from 'axios';
import Vue from 'vue';
var Axios = {
	install: function(v){
		v.prototype.$http = axios;
	}
}
Vue.use(Axios);
export default Axios;