<template>
  <b-container class="twitter-posts-container">
    <twitter-post v-for="(twitterAccount, key) in twitterAccountsSelected" :key="key" :network="twitterAccount"></twitter-post>
    <div v-if="!twitterAccountsSelected.length" class="post-twitter-default">No twitter accounts selected</div>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import TwitterPost from './TwitterPost.vue'

export default {
  name: 'VisorTwitter',
  components: {
    TwitterPost
  },
  computed: {
    ...mapGetters(['getSocialNetworksSelected']),
    twitterAccountsSelected () {
      return this.getSocialNetworksSelected.filter((networkSelected) => {
        return networkSelected.network === 'twitter'
      })
    }
  }
}
</script>
<style scoped>
.twitter-posts-container{
  width: 100%;
  padding: 20px 25px;
}
.post-twitter-default{
  text-align: center;
  margin-top: 50%;
  color: rgb(91, 112, 131)
}
</style>
