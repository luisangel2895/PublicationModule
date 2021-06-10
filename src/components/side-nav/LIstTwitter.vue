<template>
  <b-container class="container-list">
    <item-network v-for="(network, key) in getListTwitter" :key="key" :network="network"></item-network>
  </b-container>
</template>
<script>
import ItemNetwork from './ItemNetwork.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ListTwitter',
  components: {
    ItemNetwork
  },
  computed: {
    ...mapGetters(['getListTwitter'])
  }
}
</script>
<style scoped>
.container-list{
  padding: 0px;
}
</style>
