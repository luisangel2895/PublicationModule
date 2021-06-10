<template>
  <div>
      <b-form-textarea
      id="insert-text"
      placeholder="Insert Text ..."
      rows="16"
      no-resize
      v-model="text"
      maxLength="700"
    ></b-form-textarea>
    <div class="counter-letters">
      <span style="padding-left:30px; padding-right:30px;" class="icon-face-count"><b-icon-facebook style="margin-right:5px"></b-icon-facebook> {{caractersFacebook}}</span>
      <span class="icon-twitter-count"><b-icon-twitter style="margin-right:5px"></b-icon-twitter> {{caractersTwitter}}</span>
    </div>
    <div class="error" v-if="!$v.text.required && getSubmitPushed" id="error-text">Text of post is required</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'AddText',
  data () {
    return {
      text: '',
      caractersTwitter: 140,
      caractersFacebook: 700
    }
  },
  computed: {
    ...mapGetters(['getSubmitPushed'])
  },
  watch: {
    text (newValue, oldValue) {
      this.$store.commit('UPDATE_TEXT_NEW_POST', newValue)
      this.caractersFacebook = 700 - newValue.length
      this.caractersTwitter = 140 - newValue.length
      if (this.caractersTwitter < 0) {
        const $iconFace = document.querySelector('.icon-twitter-count')
        $iconFace.style.color = '#ef9a9a'
      } else {
        const $iconFace = document.querySelector('.icon-twitter-count')
        $iconFace.style.color = '#a2acc4'
      }
      if (this.caractersFacebook < 0) {
        const $iconFace = document.querySelector('.icon-face-count')
        $iconFace.style.color = '#ef9a9a'
      } else {
        const $iconFace = document.querySelector('.icon-face-count')
        $iconFace.style.color = '#a2acc4'
      }
    }
  },
  validations: {
    text: { required }
  }
}
</script>
<style scoped>
#insert-text{
  padding: 30px 30px;
  border-radius: 6px;
  background-color: #ffffff;
  color: #2c3852;
  font-size: 14px;
}
#insert-text:focus{
  outline: none;
  color: #2c3852;
  font-size: 14px;
}
.counter-letters{
  position:absolute;
  margin-top: -40px;
  color: #a2acc4;
}
#error-text{
  color: #ef9a9a;
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
}
</style>
