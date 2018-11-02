<template>
  <v-toolbar app >
    <v-toolbar-title class="headline" >
      <router-link to="/">TechBlog</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      color="orange"
      href="/blog"
    >
      <span class="mr-2">Blog</span>
    </v-btn>
    <v-btn
      v-if="!checkSignIn()"
      dark
      color="orange"
      href="/login"
    >
      <span class="mr-2">Login / Signup</span>
    </v-btn>
    <v-btn
      v-if="checkSignIn()"
      dark
      color="orange"
      @click="logout"
    >
      <span class="mr-2">Logout</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapGetters([
      'isAuthenticated'
    ]),
    ...mapActions([
      'LOGOUT'
    ]),
    logout () {
      this.LOGOUT()
      this.$router.push({ name: 'login' })
    }
  },
  computed: {
    checkSignIn () {
      return this.isAuthenticated
    }
  }
}
</script>

<style scoped>
.headline a {
  text-decoration: none;
  color: #2e2e2e;
}

</style>
