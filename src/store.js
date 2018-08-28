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
			  { id: 0, name: 'Construction Mode', icon: 'warning' },
			  { id: 1, name: 'Options', icon: 'settings' },
			],
			modeOptions: [
				{ id: 0, label: 'Single Array', value: 'oneArray'},
		        { id: 1, label: 'Single Object', value: 'oneObject'},
		        { id: 2, label: 'Per record Arrays', value: 'manyArrays'},
		        { id: 3, label: 'Per record Objects', value: 'manyObjects'}
			],
			inputFields: []
		},
		ui: {
			mode: 'oneArray',
			rootFields: [],
			preserveFields: false,
			version: '',
			stopCheck: false
		}
	},
	mutations: {
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