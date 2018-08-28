import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store.js'
import App from './App.vue'

Vue.use(Vuetify)
Vue.use(Vuelidate)

// GET latest release info for update check
// axios.get(store.state.config.urls.latest)
// .then(response => { 
// 					const avail = response.data.name
// 					const current = store.state.config.appVersion
// 					store.state.config.updateAvail = (avail.length > 0 && avail !== current) ? true : false
// 					store.state.config.updatePrompt = store.state.config.updateAvail
// 					store.state.config.updateVersion = avail
// 				  }
// )
// .catch(response => { /* release call failed, just proceed */ }
// )

// render app
const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

window.Alteryx.Gui = {

	SetConfiguration: j => {

		  // ensure that arrays stay arrays...
		  const ensureArray = (field) => {
		    return typeof field == 'string' || (typeof field == 'object' && typeof field.length == 'undefined') ? [field] : typeof field == 'undefined' ? [] : field
		  }
		// update Vuex store with Alteryx Designer XML config, if exists
		store.state.ui = j.Configuration.Configuration || store.state.ui
		store.state.ui.rootFields = ensureArray(store.state.ui.rootFields)
		window.Alteryx.JsEvent(JSON.stringify({Event: 'SetConfiguration'}))

	},
	GetConfiguration: () => {

		// set the loaded version so we'll be able to notify if update loaded
		store.state.ui.version = store.state.config.appVersion

		// give Vuex store to the Alteryx Designer XML config
		window.Alteryx.JsEvent(JSON.stringify({
			Event: 'GetConfiguration',
			Configuration: {
				Configuration: store.state.ui,
				Annotation: store.state.config.appTitle
			}
		}))
	}

}