<template>
    <b-container>
        <div style="text-align: center; font-size:17px; font-weight:bold; margin:10px">Upload Image</div>
        <div style="font-size:15px; margin-bottom:10px">Enter the image link:</div>
        <div style="margin-bottom:20px">
            <b-form-input
            id="input-image"
            v-model="url_image"
            placeholder="Url Image"
            ></b-form-input>
        </div>
        <div style="text-align:center;">
            <button type="button" class="button-upload" @click="upload">Upload <b-icon-box-arrow-up></b-icon-box-arrow-up></button>
        </div>
    </b-container>
</template>
<script>
export default {
  name: 'ModalImage',
  data () {
    return {
      url_image: null
    }
  },
  methods: {
    upload () {
      this.$store.commit('UPDATE_URL_IMAGE', this.url_image)
      this.$bvModal.hide('modal-image')
    }
  }
}
</script>
<style scoped>
.button-upload{
  color: white;
  padding:10px;
  background-color: #00a5ff;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 3.9px 0.1px rgba(39, 52, 68, 0.15);
}
.button-upload:hover{
  background-color: #0195e4;
}
</style>
