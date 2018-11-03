<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-title class="headline" >
      <router-link to="/"> <span class="white--text font-weight-light headline">Tech</span><span class="secondary--text font-weight-black headline">Blog</span></router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-if="checkSignIn()"
      flat
      dark
      href="/blogger"
      large
    >
      <v-icon size="15px">fas fa-plus</v-icon>
      <span class="ml-2">Create</span>
    </v-btn>
    <v-btn
      href="/blog"
      flat
      large
    >
      <v-icon size="15px">fas fa-pen</v-icon>
      <span class="ml-2">Blog</span>
    </v-btn>
    <v-btn
      v-if="!checkSignIn()"
      dark
      color="secondary"
      href="/login"
    >
      <span class="mr-2">Login / Signup</span>
    </v-btn>
    <v-btn
      v-if="checkSignIn()"
      dark
      color="secondary"
      @click="logout"
    >
      <v-icon size="15px">fas fa-sign-in-alt</v-icon>
      <span class="ml-2">Logout</span>
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
}

</style>
