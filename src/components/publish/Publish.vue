<template>
    <b-col cols="9" id="container">
        <div id="title-container">Publish</div>
        <b-container id="container-inner">
            <b-row>
                <b-col cols="5">
                    <add-text></add-text>
                    <add-hashtag></add-hashtag>
                    <add-link></add-link>
                </b-col>
                <b-col cols="6"><visor-post></visor-post></b-col>
                <b-col cols="1">
                    <button type="submit" class="button-submit">Publish</button>
                </b-col>
            </b-row>
        </b-container>
    </b-col>
</template>
<script>
import AddText from './AddText'
import AddHashtag from './AddHashtag'
import AddLink from './AddLink'
import VisorPost from './VisorPost'

export default {
  name: 'Publish',
  components: {
    AddText,
    AddHashtag,
    AddLink,
    VisorPost
  }
}
</script>
<style scoped>
#container{
    margin: 0px;
    padding:0px;
    background-color: #F3F4F7;
}
#title-container{
    padding: 20px;
    font-size: 18px;
    color: #2c3852;
    font-weight:bold;
    width: 100%;
    margin: 0px;
    background-color: white;
    box-shadow: 0px 2px 3.9px 0.1px rgba(39, 52, 68, 0.15);
}
#container-inner{
    width: 80%;
    padding-top: 50px;
    margin-top:0px;
    margin-left: 6%;
}
.button-submit{
  margin-top: 648px;
  color: white;
  width: 110px;
  height: 50px;
  background-color: #00a5ff;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 3.9px 0.1px rgba(39, 52, 68, 0.15);
}
.button-submit:hover{
  background-color: #0195e4;
}
</style>
