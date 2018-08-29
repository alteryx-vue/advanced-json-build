import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		config: {
			appTitle: 'JSON Construct',
			appVersion: 'v0.0.1',
			urls: {
				display: 'github.com/alteryx-vue/json-construct',
				latest: 'https://api.github.com/repos/alteryx-vue/json-construct/releases/latest',
				update: 'https://github.com/alteryx-vue/installers/raw/master/json-construct.yxi',
				getUpdate: 'https://raw.githubusercontent.com/alteryx-vue/installers/master/json-construct.yxi',
				release: 'https://github.com/alteryx-vue/json-construct/releases/tag'
			},
			updateAvail: false,
			updatePrompt: false,
			moreInfo: false,
			updateVersion: 'v?',
			icon: 'icon.png',
			page: 0,
			pages: [
			  { id: 0, name: 'Construction Mode', label: 'Mode', icon: 'warning', oppo: 1 },
			  { id: 1, name: 'Options', label: 'Options', icon: 'settings', oppo: 0},
			],
			modeOptions: [
				{ id: 0, label: 'Per record Objects', value: 'objects', disabled: false},
				{ id: 1, label: 'Array of Objects', value: 'array', disabled: false},
		        { id: 2, label: 'Object of Arrays', value: 'object', disabled: false}
			],
			inputFields: []
		},
		ui: {
			mode: 'objects',
			rootFields: [],
			preserveFields: false,
			version: '',
			stopCheck: false
		}
	},
	mutations: {
	  updateMode (state, v) {
	  	state.ui.mode = v
	  },
	  updateInputFields (state, v) {
	    state.config.inputFields = v
	  },
	  updatePage (state, v) {
	  	state.config.page = v
	  },
	  updateOutputFields (state, v) {
	    state.config.outputFields = v
	  },
	  dismissUpdate (state) {
	  	state.config.updatePrompt = false
	  },
	  updateMoreInfo (state, v) {
	  	state.config.moreInfo = v
	  },
	  updateVersion (state) {
	  	state.ui.version = state.config.appVersion
	  }
	}
})