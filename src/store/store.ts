
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
     isOverlayMenuOpen: false
  },
  mutations: {
     openOverlayMenu(state) {
        state.isOverlayMenuOpen = true;
     },
     closeOverlayMenu(state) {
        state.isOverlayMenuOpen = false;
     }
  }
})
