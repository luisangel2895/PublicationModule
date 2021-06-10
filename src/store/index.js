// import { reject } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line import/first
import fakeData from '../fakeData.js'

export default new Vuex.Store({
  state: {
    number: 3,
    user: {
      accounts: []
    },
    accountSelected: null,
    campaigns: [],
    campaignSelected: '',
    socialNetworks: [],
    showFacebook: true,
    showTwitter: true,
    changeAccount: 0,
    socialNetworksSelected: [],
    newPost: {
      text: null,
      hashtag: null,
      link: null,
      url_img: null
    },
    loaderNetworks: false,
    submitPushed: false
  },
  getters: {
    getUser: state => {
      return state.user
    },
    getAccountsList: state => {
      const accountList = state.user.accounts.map((account) => {
        return account.account_name
      })
      accountList.unshift({ value: null, text: 'Please select an Account', disabled: true })
      return accountList
    },
    getAccountSelected: state => {
      return state.accountSelected
    },
    getCampaigns: state => {
      return state.campaigns
    },
    getCampaignSelected: state => {
      return state.campaignSelected
    },
    getSocialNetworks: state => {
      return state.socialNetworks
    },
    getListFacebook: state => {
      return state.socialNetworks.filter((network) => {
        return network.network === 'facebook'
      })
    },
    getListTwitter: state => {
      return state.socialNetworks.filter((network) => {
        return network.network === 'twitter'
      })
    },
    getTextNewPost: state => {
      return state.newPost.text
    },
    getHashtagNewPost: state => {
      return state.newPost.hashtag
    },
    getLinkNewPost: state => {
      return state.newPost.link
    },
    getUrlImage: state => {
      return state.newPost.url_img
    },
    getChangeAccount: state => {
      return state.changeAccount
    },
    getSocialNetworksSelected: state => {
      return state.socialNetworksSelected
    },
    getLoaderNetworks: state => {
      return state.loaderNetworks
    },
    getSubmitPushed: state => {
      return state.submitPushed
    }
  },
  mutations: {
    BRING_USER (state, payload) {
      state.user = payload
    },
    UPDATE_ACCOUNT_SELECTED (state, payload) {
      state.accountSelected = payload
    },
    UPDATE_CAMPAIGNS (state, payload) {
      state.campaigns = payload
    },
    UPDATE_CAMPAIGN_SELECTED (state, payload) {
      state.campaignSelected = payload
      state.existedList = false
    },
    UPDATE_SOCIAL_NETWORKS (state, payload) {
      state.socialNetworks = payload
    },
    SHOW_SECTION_NETWORK (state, payload) {
      if (payload === 'all') {
        state.showFacebook = true
        state.showTwitter = true
      } else if (payload === 'facebook') {
        state.showFacebook = true
        state.showTwitter = false
      } else if (payload === 'twitter') {
        state.showFacebook = false
        state.showTwitter = true
      }
    },
    UPDATE_TEXT_NEW_POST (state, payload) {
      state.newPost.text = payload
    },
    UPDATE_HASHTAG_NEW_POST (state, payload) {
      state.newPost.hashtag = payload
    },
    UPDATE_LINK_NEW_POST (state, payload) {
      state.newPost.link = payload
    },
    UPDATE_URL_IMAGE (state, payload) {
      state.newPost.url_img = payload
    },
    CLEAN_CHECKBOXES (state) {
      state.changeAccount += 1
    },
    SELECT_SOCIAL_NETWORK (state, payload) {
      state.socialNetworksSelected.push(payload)
    },
    UNSELECT_SOCIAL_NETWORK (state, payload) {
      const newListSelected = state.socialNetworksSelected.filter((netwokSelected) => {
        return netwokSelected.key !== payload.key
      })
      state.socialNetworksSelected = newListSelected
    },
    CLEAN_LIST_SELECTED (state) {
      state.socialNetworksSelected = []
    },
    START_LOADER_NETWORKS (state) {
      state.loaderNetworks = true
    },
    OFF_LOADER_NETWORKS (state) {
      state.loaderNetworks = false
    },
    PUSH_SUBMIT_BUTTON (state) {
      state.submitPushed = true
    }
  },
  actions: {
    asyncUser (context) {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('BRING_USER', fakeData())
          resolve()
        }, 1000)
      })
      promise.then(() => {
        console.log('usuario obtenido OK ...')
      })
    },
    asyncCampaigns (context, payload) {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const accountSelected = context.state.user.accounts.find((account) => {
            return account.account_name === payload
          })
          const campaigns = accountSelected.campaigns
          context.commit('UPDATE_CAMPAIGNS', campaigns)
          resolve()
        }, 1500)
      })
      promise.then(() => {
        console.log('campaigns obtenidas OK ...')
      }).catch(() => {
        console.log('ups algo paso!')
      })
    },
    asyncNetworks (context, payload) {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const accountSelected = context.state.user.accounts.find((account) => {
            return account.account_name === payload
          })
          const socialNetworks = accountSelected.social_networks
          context.commit('UPDATE_SOCIAL_NETWORKS', socialNetworks)
          resolve()
        }, 2500)
      })
      promise.then(() => {
        console.log('social networks obtenidos OK')
        context.commit('OFF_LOADER_NETWORKS')
      }).catch(() => {
        console.log('ups algo paso!')
      })
    }
  },
  modules: {
  }
})
