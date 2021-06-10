<template>
    <div id="link-container">
      <div style="padding-bottom:10px">Add a Link:</div>
        <b-form-input
          id="input-link"
          type="text"
          placeholder="https://www.anytech.com"
          v-model="link"
        ></b-form-input>
    </div>
</template>
<script>
export default {
  name: 'AddHashtag',
  data () {
    return {
      link: ''
    }
  },
  watch: {
    link (newValue, oldValue) {
      this.$store.commit('UPDATE_LINK_NEW_POST', newValue)
    }
  }
}
</script>
<style scoped>
#link-container{
  color: #2c3852;
  font-weight: bold;
  font-size: 14px !important;
  margin-top: 20px;
}
#input-link{
  padding: 15px;
  color: #2c3852;
  font-size: 14px;
  border-radius: 3px;
  background-color: #dfdfdf;
}
</style>
