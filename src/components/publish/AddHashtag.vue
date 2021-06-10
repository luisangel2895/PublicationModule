<template>
    <div id="hashtag-container">
      <div style="padding-bottom:10px">Hashtag:</div>
        <b-form-input
          id="input-hashtag"
          type="text"
          placeholder="ISC"
          v-model="hashtag"
        ></b-form-input>
    </div>
</template>
<script>
export default {
  name: 'AddHashtag',
  data () {
    return {
      hashtag: ''
    }
  },
  watch: {
    hashtag (newValue, oldValue) {
      this.$store.commit('UPDATE_HASHTAG_NEW_POST', newValue)
    }
  }
}
</script>
<style scoped>
#hashtag-container{
  color: #2c3852;
  font-weight: bold;
  font-size: 14px !important;
  margin-top: 20px;
}
#input-hashtag{
  padding: 15px;
  color: #2c3852;
  font-size: 14px;
  border-radius: 3px;
  background-color: #dfdfdf;
}
</style>
