<template>
  <v-toolbar app >
    <v-toolbar-title class="headline" >
      <router-link to="/">TechBlog</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href="/blog"
    >
      <span class="mr-2">Blog</span>
    </v-btn>
    <v-btn
      outline
      href="/login"
    >
      <span class="mr-2">Login / Signup</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.headline a {
  text-decoration: none;
  color: #2e2e2e;
}

</style>
