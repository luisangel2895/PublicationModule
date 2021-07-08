import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    accountSelected: null,
    campaigns: [],
    campaignSelected: null,
    socialNetworks: [],
    showFacebook: true,
    showTwitter: true,
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
    getAccountSelected: state => {
      return state.accountSelected
    },
    getCampaignSelected: state => {
      return state.campaignSelected
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
    GET_ACCOUNTS (state, payload) {
      const accountList = payload.map((brand) => {
        const obj = {}
        obj.value = brand.idMarca
        obj.text = brand.dscMarca
        return obj
      })
      accountList.unshift({ value: null, text: 'Please select an Account', disabled: true })
      state.accounts = accountList
    },
    UPDATE_ACCOUNT_SELECTED (state, payload) {
      state.accountSelected = payload
    },
    UPDATE_CAMPAIGNS (state, payload) {
      const campaignList = payload.map((campaign) => {
        const obj = {}
        obj.value = campaign.idCampania
        obj.text = campaign.nomCampania
        return obj
      })
      campaignList.unshift({ value: null, text: 'Please select an Campaign', disabled: true })
      state.campaigns = campaignList
    },
    SET_CAMPAIGNS (state, payload) {
      state.campaigns = payload
    },
    UPDATE_CAMPAIGN_SELECTED (state, payload) {
      state.campaignSelected = payload
    },
    UPDATE_SOCIAL_NETWORKS (state, payload) {
      const socialNetworkList = payload.map((socialNetwork) => {
        const obj = {}
        obj.key = socialNetwork.idCuentaRedSocial
        obj.network = socialNetwork.M_RED_SOCIAL.nomRedSocial.toLowerCase()
        obj.idNetwork = socialNetwork.M_RED_SOCIAL.idRedSocial
        obj.name = socialNetwork.nomUsuarioRedsocial
        obj.url_profile = 'https://picsum.photos/50/50?random=1'
        return obj
      })
      state.socialNetworks = socialNetworkList
    },
    SET_SOCIAL_NETWORKS (state, payload) {
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
      axios.get('https://zrswh3t7yb.execute-api.us-east-1.amazonaws.com/dev/v1/Publish/cliente/7')
        .then((response) => {
          context.commit('GET_ACCOUNTS', response.data)
          console.log('Usuario traido exitosamente', response.data)
        })
        .catch((error) => {
          console.log(`Fallo traer al usuario error: ${error}`)
        })
    },
    asyncCampaigns (context, payload) {
      axios.get(`https://zrswh3t7yb.execute-api.us-east-1.amazonaws.com/dev/v1/Publish/campania/${payload}`)
        .then((response) => {
          context.commit('UPDATE_CAMPAIGNS', response.data)
          console.log('Campanas traidas exitosamente', response.data)
        })
        .catch((error) => {
          console.log(`Fallo traer las campanas error: ${error}`)
        })
    },
    asyncNetworks (context, payload) {
      axios.get(`https://zrswh3t7yb.execute-api.us-east-1.amazonaws.com/dev/v1/Publish/account/${payload}`)
        .then((response) => {
          context.commit('UPDATE_SOCIAL_NETWORKS', response.data)
          context.commit('OFF_LOADER_NETWORKS')
          console.log('Social Networks traidas exitosamente', response.data)
        })
        .catch((error) => {
          console.log(`Fallo traer las campanas error: ${error}`)
        })
    }
  },
  modules: {
  }
})
