<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/image-nav.png" width="100%">
    <b-container fluid>
        <b-form @submit.prevent="onSubmit">
          <b-row>
            <side-nav class="container-general-side-nav"></side-nav>
            <publish class="container-general-publish"></publish>
          </b-row>
        </b-form>
    </b-container>
  </div>
</template>

<script>
import SideNav from './components/side-nav/SideNav'
import Publish from './components/publish/Publish.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    SideNav,
    Publish
  },
  computed: {
    ...mapState(['accountSelected', 'campaignSelected', 'socialNetworksSelected', 'newPost'])
  },
  mounted () {
    const heightTotal = screen.height - 143
    const heightNav = 60.28
    const heightContainers = heightTotal - heightNav
    console.log(heightContainers)
    const containerNav = document.querySelector('.container-general-side-nav')
    containerNav.style.height = heightContainers + 'px'
    const containerPublish = document.querySelector('.container-general-publish')
    containerPublish.style.height = heightContainers + 'px'
  },
  methods: {
    onSubmit () {
      const arrayIdSocialNetworks = this.socialNetworksSelected.map((network) => {
        return network.key
      })
      this.$store.commit('PUSH_SUBMIT_BUTTON')
      console.log(' ---------- DATA FOR NEW POST ----------')
      console.log('ID Account Selected: ', this.accountSelected)
      console.log('ID Campaign Selected: ', this.campaignSelected)
      console.log('IDS Social Networks Selected: ', arrayIdSocialNetworks)
      console.log('Objeto del Nuevo Post: ', this.newPost)
    }
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400&display=swap');
@font-face {
  font-family: "Segoe";
  src: local("Segoe-normal"),
   url(./fonts/SegoeNormal.ttf) format("truetype");
}
@font-face {
  font-family: "SegoeSemiBold";
  src: local("Segoe-bold"),
   url(./fonts/SegoeSemibold.ttf) format("truetype");
} */
#app {
  font-family: 'Oxygen', sans-serif;
}
.container-general-side-nav{
  padding: 0px;
  margin: 0px;
}
.container-general-publish{
  margin: 0px;
  padding: 0px;
}
</style>
