<template>
    <b-container id="container">
      <div id="text-account">Select your Account</div>
      <b-form-select id="input-account" v-model="accountSelected" :options="getAccountsList"></b-form-select>
      <div class="error" v-if="!$v.accountSelected.required && getSubmitPushed" id="error-account">Account is required</div>
    </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'SelectAccount',
  data () {
    return {
      accountSelected: null
    }
  },
  computed: {
    ...mapGetters(['getAccountsList', 'getSubmitPushed'])
  },
  updated () {
    if (this.accountSelected) {
      this.$store.commit('START_LOADER_NETWORKS')
    }
    this.$store.commit('UPDATE_ACCOUNT_SELECTED', this.accountSelected)
    this.$store.commit('CLEAN_CHECKBOXES')

    this.$nextTick(function () {
      const $select = document.querySelector('#input-account')
      const $options = $select.childNodes
      $options.forEach(option => {
        option.style.fontSize = '14px'
        option.style.fontWeight = 'bold'
      })
    })
  },
  validations: {
    accountSelected: { required }
  }
}
</script>
<style scoped>
#container{
    width: 100%;
    padding-top: 20px;
    padding-bottom: 7px;
}
#text-account{
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
}
#input-account{
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
#input-account:focus{
  border: none;
  outline: none;
}
#error-account{
  color: #ef9a9a;
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
}
</style>
