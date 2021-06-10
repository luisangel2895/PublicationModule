<template>
     <b-container class="twitter-post-visor">
        <b-row class="row-twitter">
            <b-col cols="2" class="col-twitter-logo"><b-img rounded="circle" alt="Circle image" :src="network.url_profile" width="48px"></b-img></b-col>
            <b-col cols="10" class="col-twitter-account">
                <b-row class="row-twitter" style="font-size:15px">
                    <b-col cols="10" class="col-twitter" style="padding-left:0px">
                      <span style="font-weight: 700;">{{ network.name }}</span>
                      <span style="color: rgb(91, 112, 131)"> @{{ network.name | usernameTwitter}} . 1min</span></b-col>
                    <b-col cols="2" class="col-twitter" style="text-align: right; color: rgb(91, 112, 131)"><b-icon-three-dots></b-icon-three-dots></b-col>
                </b-row>
                <b-row class="row-twitter" style="font-size:15px;line-height:20px">{{ getTextNewPost }}</b-row>
                <b-row class="row-twitter row-hashtag">#{{ getHashtagNewPost }}</b-row>
                <b-row class="row-twitter"><a :href="getLinkNewPost" style="padding:0px" class="link-twitter">{{getLinkNewPost}}</a></b-row>
                <b-row class="row-twitter" v-if="getUrlImage"><b-img alt="Image Post" class="image-post" :src="getUrlImage" style="padding:0px; border-radius:15px" @error="failImage"></b-img></b-row>
                <b-row class="row-twitter" style="margin-top:10px;font-size:15px; color: rgb(91, 112, 131);">
                  <b-col><b-icon-chat></b-icon-chat></b-col>
                  <b-col><b-icon-arrow-down-up></b-icon-arrow-down-up></b-col>
                  <b-col><b-icon-shield></b-icon-shield></b-col>
                  <b-col><b-icon-box-arrow-up></b-icon-box-arrow-up></b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TwitterPost',
  props: ['network'],
  computed: {
    ...mapGetters(['getTextNewPost', 'getHashtagNewPost', 'getLinkNewPost', 'getUrlImage'])
  },
  filters: {
    usernameTwitter (accountName) {
      const userName = accountName.split(' ').join('')
      return userName
    }
  },
  methods: {
    failImage () {
      this.$store.commit('UPDATE_URL_IMAGE', 'http://172.30.207.129:8080/images/image-error.png')
    }
  }
}
</script>
<style scoped>
.twitter-post-visor{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  padding: 0px;
  border: #dfdfdf solid 1px;
  border-radius: 10px;
  padding: 20px 0px;
  margin-bottom: 10px;
}
.row-twitter{
  padding: 0px;
  width: 100%;
  margin: 0px;
}
.col-twitter-logo{
  padding: 0px 0px 0px 20px;
}
.col-twitter-account{
  padding: 0px 20px 0px 0px;
}
.row-hashtag{
 font-size:15px;
 color: rgb(27, 149, 224)
}
.row-hashtag:hover{
  text-decoration-line: underline;
}
.link-twitter{
  text-decoration: none;
  font-size:15px;
  color: rgb(27, 149, 224);
  margin-bottom: 10px;
}
.link-twitter:hover{
  text-decoration-line: underline;
}
</style>
