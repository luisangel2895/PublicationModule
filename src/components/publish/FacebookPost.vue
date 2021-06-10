<template>
    <b-container class="facebook-post-visor">
        <b-row class="row-face">
            <b-col cols="2"><b-img rounded="circle" alt="Circle image" :src="network.url_profile" width="40px" style="margin-left:5px"></b-img></b-col>
            <b-col cols="8" class="account-data-face">
                <div class="account-face-name">{{ network.name }}</div>
                <div class="account-face-time">1min . <b-icon-globe style="font-size:12px;"></b-icon-globe></div>
            </b-col>
            <b-col cols="2" style="font-size:20px; padding-left:60px"><b-icon-three-dots></b-icon-three-dots></b-col>
        </b-row>

        <b-row class="row-face text-face">{{getTextNewPost}}</b-row>
        <b-row class="row-face"><a :href="getLinkNewPost" class="link-face">{{getLinkNewPost}}</a></b-row>
        <b-row class="row-face" v-if="getUrlImage"><b-img alt="Image Post" :src="getUrlImage" class="img-face" @error="failImage"></b-img></b-row>
        <b-row class="row-face" style="text-align: center; font-weight: 600; color: #606770"><hr>
          <b-col><b-icon-hand-thumbs-up></b-icon-hand-thumbs-up><span style="padding-left:7px">Me gusta</span></b-col>
          <b-col><b-icon-chat-square></b-icon-chat-square><span style="padding-left:7px">Comentar</span></b-col>
          <b-col><b-icon-share></b-icon-share><span style="padding-left:7px">Compartir</span></b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FacebookPost',
  props: ['network'],
  computed: {
    ...mapGetters(['getTextNewPost', 'getHashtagNewPost', 'getLinkNewPost', 'getUrlImage'])
  },
  methods: {
    failImage () {
      this.$store.commit('UPDATE_URL_IMAGE', 'http://172.30.207.129:8080/images/image-error.png')
    }
  }
}
</script>
<style scoped>
.facebook-post-visor{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  padding: 0px;
  border: #dfdfdf solid 1px;
  border-radius: 10px;
  padding: 20px 0px;
  margin-bottom: 10px;
}
.row-face{
  padding: 0px;
  width: 100%;
  margin: 0px;
}
.account-data-face{
  margin-left: -27px;
}
.account-face-name{
  font-size: 15px;
  line-height: 19.9995px;
  font-weight: 600;
}
.account-face-time{
  font-size: 13px;
  line-height: 16px;
}
.text-face{
  font-size: 15px;
  padding:7px 16px 16px 16px;
  line-height: 19.9995px;
}
.link-face{
  text-decoration: none;
  color: #1876f2;
  margin: -10px 0px 10px 0px;
}
.link-face:hover{
  text-decoration-line: underline;
}
.img-face{
  padding: 0px;
}
</style>
