<template>
    <b-container id="container">
      <div id="text-campaign">Select your Campaign</div>
      <span v-show="false">{{getAccountSelected}}</span>
      <b-form-select id="input-campaign" v-model="campaign" :options="campaigns"></b-form-select>
      <div class="error" v-if="!$v.campaign.required && getSubmitPushed" id="error-campaign">Campaign is required</div>
    </b-container>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'SelectCampaign',
  data () {
    return {
      campaign: null
    }
  },
  computed: {
    ...mapGetters(['getAccountSelected', 'getCampaignsList', 'getSubmitPushed']),
    ...mapState(['campaigns', 'campaignSelected', 'accountSelected'])
  },
  watch: {
    accountSelected () {
      this.campaign = null
    }
  },
  updated () {
    this.$store.commit('UPDATE_CAMPAIGN_SELECTED', this.campaign)
    this.$store.commit('SET_SOCIAL_NETWORKS', [])
    this.$store.commit('CLEAN_LIST_SELECTED')

    if (this.campaignSelected) {
      this.$store.commit('START_LOADER_NETWORKS')
      this.$store.dispatch('asyncNetworks', this.campaign)
    }

    this.$nextTick(function () {
      const $select = document.querySelector('#input-campaign')
      const $options = $select.childNodes
      $options.forEach(option => {
        option.style.fontSize = '14px'
        option.style.fontWeight = 'bold'
      })
    })
  },
  validations: {
    campaign: { required }
  }
}
</script>
<style scoped>
#container{
    width: 100%;
    padding-top: 20px;
    padding-bottom: 7px;
}
#text-campaign{
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
}
#input-campaign{
  width: 100%;
  font-size: 14px;
  background-color: #222d3a;
  color: #a2acc4;
  font-weight: bold;
  padding: 5px 15px 7px;
  border: none;
  outline: none;
  display: block;
}
#input-campaign:focus{
  border: none;
  outline: none;
}
#error-campaign{
  color: #ef9a9a;
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
}
</style>
