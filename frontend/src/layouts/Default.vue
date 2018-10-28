<template>
  <v-content>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <router-link to="/">TechBlog</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="info"
        href="/login"
      >
        <span class="mr-2">Login / Signup</span>
      </v-btn>
    </v-toolbar>
    <div class="div">
      <router-view/>
    </div>
  </v-content>
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
