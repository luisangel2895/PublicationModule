<template>
    <b-container id="container">
        <controller-publish></controller-publish>
        <div class="lds-facebook" v-if="loaderNetworks"><div></div><div></div><div></div></div>
        <div class="error" v-if="!$v.numberSocialNetworkSelected.required && getSubmitPushed" id="error-accounts-selected">
           Must select at least 1 social network
        </div>
        <b-container id="container-social-network" v-if="!loaderNetworks">
          <list-facebook v-show="showFacebook"></list-facebook>
          <list-twitter v-show="showTwitter"></list-twitter>
        </b-container>
    </b-container>
</template>
<script>
import ControllerPublish from './ControllerPublish.vue'
import ListFacebook from './ListFacebook.vue'
import ListTwitter from './LIstTwitter.vue'
import { mapState, mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'WherePublish',
  components: {
    ListFacebook,
    ControllerPublish,
    ListTwitter
  },
  computed: {
    ...mapGetters(['getSubmitPushed']),
    ...mapState(['showFacebook', 'showTwitter', 'loaderNetworks', 'campaignSelected', 'socialNetworksSelected']),
    numberSocialNetworkSelected () {
      if (this.socialNetworksSelected.length) {
        return true
      } else {
        return null
      }
    }
  },
  validations: {
    numberSocialNetworkSelected: { required }
  }
}
</script>
<style scoped>
#container{
    margin-top: 20px;
    width: 87%;
    padding-top: 20px;
    padding-bottom: 7px;
    padding: 0px;
}
#container-social-network{
  width: 100%;
  height: 190px;
  background-color: #273444;
  overflow: auto;
  margin-top: 10px;
  padding: 0px;

}
#container-social-network::-webkit-scrollbar {
    -webkit-appearance: none;
}
#container-social-network::-webkit-scrollbar:vertical {
    width:4px;
}
#container-social-network::-webkit-scrollbar-button:increment,#container-social-network::-webkit-scrollbar-button {
    display: none;
}
#container-social-network::-webkit-scrollbar-thumb {
    background-color: #5d6b88;
    border-radius: 5px;
}

/* loader styles */
.lds-facebook {
  display: inline-block;
  position: relative;
  margin-left: 120px;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

#error-accounts-selected{
  color: #ef9a9a;
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
}
</style>
