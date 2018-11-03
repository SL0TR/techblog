<template>
  <v-layout class="homepage" align-center justify-center row>
    <v-flex xs6>
      <h1 class="center text-xs-center display-4 pa-4 primary--text">Tech<span class="font-weight-bold secondary--text">Blog</span> </h1>
      <p class="display-1 pa-5">A blog for technology enthusiastic people. You can sign up and start adding your post very fast and easily.</p>
    </v-flex>
    <v-flex xs6 class="header-img">
      <img class="typing-art mb-5" src="../../public/img/type.svg" alt="typing svg">
      <img class="typing-art2" src="../../public/img/text-editor.svg" alt="typing-art 2">
      <img class="typing-art3" src="../../public/img/pic-svg.svg" alt="typing-art 2">
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .homepage {
    margin: 0;
    width: 100%;
    padding: 0 10rem;
    height: 100%;
  }

  .header-img {
    position: relative;
  }

  .typing-art {
    height: 400px;
    width: 100%;
    margin: 0 auto;
    z-index: 10;
    position: relative;
  }

  .typing-art2 {
    position: absolute;
    top: 10%;
    left: 5%;
    opacity: .8;
    height: 200px;
    width: 200px;
    z-index: 15;
  }

  .typing-art3 {
    position: absolute;
    top: -20%;
    right: 20%;
    height: 200px;
    width: 200px;
    z-index: 2;
    opacity: .6;
  }

</style>
