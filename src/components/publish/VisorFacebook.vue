<template>
  <b-container class="facebook-posts-container">
    <facebook-post v-for="(facebookAccount, key) in facebookAccountsSelected" :key="key" :network="facebookAccount"></facebook-post>
    <div v-if="!facebookAccountsSelected.length" class="post-face-default">No facebook accounts selected</div>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import FacebookPost from './FacebookPost.vue'

export default {
  name: 'VisorFacebook',
  components: {
    FacebookPost
  },
  computed: {
    ...mapGetters(['getSocialNetworksSelected']),
    facebookAccountsSelected () {
      return this.getSocialNetworksSelected.filter((networkSelected) => {
        return networkSelected.network === 'facebook'
      })
    }
  }
}
</script>
<style scoped>
.facebook-posts-container{
  width: 100%;
  padding: 20px 25px;
}
.post-face-default{
  text-align: center;
  margin-top: 50%;
  color: rgb(91, 112, 131)
}
</style>
