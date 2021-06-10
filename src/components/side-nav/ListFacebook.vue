<template>
  <b-container class="container-list">
    <item-network v-for="(network, key) in getListFacebook" :key="key" :network="network"></item-network>
  </b-container>
</template>
<script>
import ItemNetwork from './ItemNetwork.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ListFacebook',
  components: {
    ItemNetwork
  },
  computed: {
    ...mapGetters(['getListFacebook'])
  }
}
</script>
<style scoped>
.container-list{
  padding: 0px;
}
</style>
