<template>
  <v-layout class="homepage" align-center justify-center row>
    <v-flex xs6>
      <h1 class="center text-xs-center display-4 pa-4">Tech<span class="font-weight-bold">Blog</span> </h1>
      <p class="display-1 pa-4">A blog where people post tech related posts. You can sign up and start adding your post very easily.</p>
    </v-flex>
    <v-flex xs6>
      <img class="typing-art" src="../../public/img/type.svg" alt="typing svg">
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

  .typing-art {
    height: 400px;
    width: 100%;
    margin: 0 auto;
  }

</style>
