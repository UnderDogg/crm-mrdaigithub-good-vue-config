import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    oneself: {},
    menus: null,
    advisories: null,
    channels: null,
    doctors: null,
    diseases: null
  },
  mutations: {
    getOneself (state, oneself) {
      state.oneself = oneself
    },
    getMenu (state, menus) {
      state.menus = menus
    },
    getAdvisories (state, advisories) {
      state.advisories = advisories
    },
    getChannels (state, channels) {
      state.channels = channels
    },
    getDoctors (state, doctors) {
      state.doctors = doctors
    },
    getDiseases (state, diseases) {
      state.diseases = diseases
    }
  },
  actions: {
    getOneself ({commit}) {
      axios.get('/users/0')
        .then(res => {
          commit('getOneself', res.user)
        })
    },
    getMenu ({commit}) {
      axios.get('/menus')
        .then(res => {
          commit('getMenu', res.menuses)
        })
    },
    getAdvisories ({commit}) {
      axios.get('/management/advisories')
        .then(res => {
          commit('getAdvisories', res.advisories)
        })
    },
    getChannels ({commit}) {
      axios.get('/management/channels')
        .then(res => {
          commit('getChannels', res.channels)
        })
    },
    getDoctors ({commit}) {
      axios.get('/management/doctors')
        .then(res => {
          commit('getDoctors', res.doctors)
        })
    },
    getDiseases ({commit}) {
      axios.get('/management/diseases')
        .then(res => {
          commit('getDiseases', res.diseases)
        })
    }
  }
})

export default store
