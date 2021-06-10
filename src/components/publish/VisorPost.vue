<template>
    <b-container class="visor-container">
      <b-container class="container-spans">
        <span class="span-icon"><b-icon-facebook class="icon-controller-visor" id="icon-face-posts-controller" @click="showFacebookPosts"></b-icon-facebook></span>
        <span class="span-icon"><b-icon-twitter class="icon-controller-visor" id="icon-twitter-posts-controller" @click="showTwitterPosts"></b-icon-twitter></span>
      </b-container>
      <b-container class="container-overflow">
        <visor-facebook v-if="showFacebook"></visor-facebook>
        <visor-twitter v-if="showTwitter"></visor-twitter>
      </b-container>
    </b-container>
</template>
<script>
import VisorFacebook from './VisorFacebook.vue'
import VisorTwitter from './VisorTwitter.vue'

export default {
  name: 'VisorPost',
  components: {
    VisorFacebook,
    VisorTwitter
  },
  data () {
    return {
      showFacebook: true,
      showTwitter: false
    }
  },
  methods: {
    showFacebookPosts () {
      this.showFacebook = true
      this.showTwitter = false
      const $iconFace = document.querySelector('#icon-face-posts-controller')
      $iconFace.style.color = '#3b5998'
      const $iconTwitter = document.querySelector('#icon-twitter-posts-controller')
      $iconTwitter.style.color = '#a2acc4'
    },
    showTwitterPosts () {
      this.showFacebook = false
      this.showTwitter = true
      const $iconFace = document.querySelector('#icon-face-posts-controller')
      $iconFace.style.color = '#a2acc4'
      const $iconTwitter = document.querySelector('#icon-twitter-posts-controller')
      $iconTwitter.style.color = '#00acee'
    }
  }
}
</script>
<style scoped>
.visor-container{
  padding: 0px;
  background-color: white;
  border: #dfdfdf solid 1px;
  width: 100%;
  height: 700px;
  border-radius: 10px;
}
.container-overflow{
  width: 100%;
  height: 650px;
  overflow: auto;
  padding: 0px;
}
.container-overflow::-webkit-scrollbar {
    -webkit-appearance: none;
}
.container-overflow::-webkit-scrollbar:vertical {
    width:7px;
}
.container-overflow::-webkit-scrollbar:horizontal {
    height:7px;
}
.container-overflow::-webkit-scrollbar-button:increment,.container-overflow::-webkit-scrollbar-button {
    display: none;
}
.container-overflow::-webkit-scrollbar-thumb {
    background-color: #a0a0a0;
    border-radius: 5px;
}
.container-spans{
  height: 50px;
  text-align: center;
  padding-top: 14px;
  border-bottom: #dfdfdf solid 1px;
}
.span-icon{
  padding: 10px;
}
.icon-controller-visor{
  color: #a2acc4;
  font-size: 22px;
}
</style>
