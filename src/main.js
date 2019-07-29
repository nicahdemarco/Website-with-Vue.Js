import Vue from 'vue'
import App from './App.vue'
import './assets/CSS/styles.css'
import './assets/CSS/bootstrap.css'


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')