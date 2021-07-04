<template>
    <b-col cols="3" id="side-nav-container">
       <b-container id="conainer-inner-sidenav">
           <select-account></select-account>
           <select-campaign></select-campaign>
           <select-section></select-section>
           <where-publish></where-publish>
       </b-container>
    </b-col>
</template>
<script>
import SelectAccount from './SelectAccount'
import SelectCampaign from './SelectCampaign'
import WherePublish from './WherePublish'
import SelectSection from './SelectSection'

export default {
  name: 'SideNav',
  components: {
    SelectAccount,
    SelectCampaign,
    WherePublish,
    SelectSection
  },
  created () {
    this.$store.dispatch('asyncUser')
  }
}
</script>
<style scoped>
#side-nav-container{
    background-color: #222D3A;
    color: white;
    margin: 0px;
    padding: 20px 30px 20px;
}
#conainer-inner-sidenav{
    background-color: #273444;
    height: 700px;
}
</style>
