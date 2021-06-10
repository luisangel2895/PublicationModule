<template>
    <b-row class="controller-container">
        <b-col cols="7" class="text-where">Where to publish </b-col>
        <b-col cols="2" @click="chooseAll()" class="icon-controller" :class="{'selected-icon' : allSelected}">All</b-col>
        <b-col cols="2" @click="chooseFacebook()" class="icon-controller" :class="{'selected-icon' : facebooksSelected}"><b-icon-facebook></b-icon-facebook></b-col>
        <b-col cols="1" @click="chooseTwitter()" class="icon-controller" :class="{'selected-icon' : twitterSelected}"><b-icon-twitter></b-icon-twitter></b-col>
    </b-row>
</template>
<script>

export default {
  name: 'ControllerPublish',
  data () {
    return {
      allSelected: true,
      facebooksSelected: false,
      twitterSelected: false
    }
  },
  methods: {
    chooseAll () {
      this.allSelected = true
      this.facebooksSelected = false
      this.twitterSelected = false
      this.$store.commit('SHOW_SECTION_NETWORK', 'all')
    },
    chooseFacebook () {
      this.allSelected = false
      this.facebooksSelected = true
      this.twitterSelected = false
      this.$store.commit('SHOW_SECTION_NETWORK', 'facebook')
    },
    chooseTwitter () {
      this.allSelected = false
      this.facebooksSelected = false
      this.twitterSelected = true
      this.$store.commit('SHOW_SECTION_NETWORK', 'twitter')
    }
  }
}
</script>
<style scoped>
.icon-controller{
  color:#A2ACC4;
  cursor: pointer;
  padding-left: 0px;
  font-size: 14px;
}
.selected-icon{
  color: #00a5ff;
}
.text-where{
  font-size: 14px;
  font-weight: bold;
}
.controller-container{
  margin-bottom: 20px;
}
</style>
