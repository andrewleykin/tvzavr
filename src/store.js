import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    appId: 'b41c7381e483857da652f07f00645fb2568d03cef2a5c8a3d57e967f2cd1dbf3',
    photos: [],
    totalPhotos: 0,
    perPage: 8,
    currentPage: 1
  },
  getters: {
    photos (state) {
      return state.photos
    },
    settings (state) {
      return {
        totalPhotos: state.totalPhotos,
        perPage: state.perPage,
        currentPage: state.currentPage
      }
    }
  },
  mutations: {
    addSettings (state, amount) {
      state.photos = amount.data
      state.totalPhotos = amount.totalPhotos
      state.currentPage = amount.page
    }
  },
  actions: {
    fetchPhotos ({ commit , state }, page) {
      let options = {
        params: {
          client_id: state.appId,
          page: page.page,
          per_page: state.perPage
        }
      }

      Vue.http.get('https://api.unsplash.com/photos', options).then(function (response) {
        commit('addSettings', {
          data: response.data,
          totalPhotos: parseInt(response.headers.get('x-total')),
          page: page.page
        })
      }, console.log)
    }
  }
})
