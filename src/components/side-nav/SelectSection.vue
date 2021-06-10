<template>
    <b-container id="container">
      <span id="text-select">Select</span>
      <div class="box-section"><span class="content-box-section">ISC Addons</span></div>
      <div class="box-section"><span class="content-box-section">ISC Post</span></div>
      <div class="box-section"><span class="content-box-section">Associate Old Post</span></div>
      <div class="box-section"><span class="content-box-section" @click="$bvModal.show('modal-image')">Upload Image</span></div>

      <b-modal id="modal-image" hide-header hide-footer>
        <modal-image></modal-image>
      </b-modal>
    </b-container>
</template>
<script>
import ModalImage from './ModalImage.vue'

export default {
  name: 'SelectSection',
  components: {
    ModalImage
  }
}
</script>
<style scoped>
#container{
    padding-top: 20px;
    padding-bottom: 7px;
}
.box-section{
  padding: 7px 15px 9px;
  border-radius: 3px;
  background-color: #222d3a;
  margin-bottom: 1px;
  cursor: pointer;
}
.content-box-section{
  font-size: 14px;
  color: #a2acc4;
  font-weight: bold;
}
#text-select{
  font-size: 14px;
  font-weight: bold;
  line-height: 2;
}
</style>
