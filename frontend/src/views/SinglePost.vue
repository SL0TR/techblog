<template>
  <v-container grid-list-md text-xs-center class="single-post center-container make-flex">
    <v-layout row wrap class="ma-0" style="flex: initial;">
      <v-flex xs8 offset-xs2>
        <v-card class="pa-4">
          <v-card-title primary-title>
            <v-flex xs12>
              <h2 class="mb-0 display-2">{{ this.$route.params.blog.title }}</h2>
              <hr class="mt-4 mb-4">
              <p class="mt-3 body-2">{{ this.$route.params.blog.text }} </p>
            </v-flex>
          </v-card-title>
          <v-card-actions >
            <v-flex row justify-center align-center>
              <!-- <p class="subheading"> <strong>Author:</strong> {{ this.$route.params.blog.author.username }}</p> -->
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      blog: null
    }
  },
  methods: {
  },
  created () {
    if (this.$route.params.blog) {
      console.log(this.$route.params.blog)
    } else {
      this.$router.push({ name: 'blog' })
    }
  }
}
</script>

<style scoped>
  .single-post {
    /* height: 100%; */
  }
</style>
