// store.js
import { createStore } from 'vuex'
import firebase from '../firebase/firebase'

const store = createStore({
  state: {
    positions: [],
  },
  mutations: {
    setPositions(state, positions) {
      state.positions = positions
    },
  },
  actions: {
    async fetchPositions({ commit }) {
      const positionsRef = firebase.database().ref('esp32/json/Position')
      positionsRef.on('value', (snapshot) => {
        const positions = snapshot.val()
        commit('setPositions', positions)
      })
    },
  },
})

export default store
