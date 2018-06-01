
import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		textList:''
	},
	mutations:{
		changTextList(state,list){
			state.textList = list;
		}
	}
	
})



