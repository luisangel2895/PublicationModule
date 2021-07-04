<template>
  <b-row class="row-item-network" @click="selectNetwork" :class="{'row-selected' : selected}">
    <b-col cols="1" class="col-container-checkbox">
        <b-form-checkbox
        v-model="status"
        name="checkbox"
        value="selected"
        unchecked-value="noSelected"
      >
      </b-form-checkbox>
    </b-col>
    <b-col cols="2" class="cols-container" id="col-images">
        <b-img rounded="circle" alt="Network Image" :src="network.url_profile" width="40px"></b-img>
        <b-icon-facebook v-if="network.network == 'facebook'" class="icon-social-network"></b-icon-facebook>
        <b-icon-twitter v-if="network.network == 'twitter'" class="icon-social-network"></b-icon-twitter>
    </b-col>
    <b-col cols="9" class="col-container-text">{{ network.name }}</b-col>
  </b-row>
</template>
<script>
// import { mapGetters } from 'vuex'

export default {

  name: 'ItemNetwork',
  props: ['network'],
  data () {
    return {
      status: 'noSelected',
      selected: null
    }
  },
  methods: {
    selectNetwork () {
      if (!this.selected) {
        this.selected = true
        this.status = 'selected'
        this.$store.commit('SELECT_SOCIAL_NETWORK', this.network)
      } else {
        this.selected = false
        this.status = 'noSelected'
        this.$store.commit('UNSELECT_SOCIAL_NETWORK', this.network)
      }
    }
  }
}
</script>
<style scoped>
.cols-container{
  padding: 0px;
}
.col-container-checkbox{
  padding-top: 7px;
}
.col-container-text{
  padding-top: 10px;
  padding-left: 15px;
  font-size: 14px;
  color:#a2acc4
}
.icon-social-network{
  position: relative;
  top: -18px;
  left: 27px;
  font-size: 20px;
}
.row-item-network{
  background-color:#273444;
  cursor: pointer;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
.row-selected {
  color: #00a5ff;
}
#col-images{
 padding-left: 7px;
}
</style>
