<template>
  <v-container class="single-post">
    <v-flex xs8 offset-xs2>
      <h2 class="text-xs-center display-3 mt-4 mb-5"> Hi there, {{ me().username }}!</h2>
    </v-flex>
    <v-flex class="mt-5" xs6 offset-xs3>
      <v-form v-model="valid">
        <v-text-field
          class="mt-4"
          v-model="post.title"
          :rules="titleRules"
          :counter="10"
          hint="Enter post title"
          label="title"
          required
        ></v-text-field>
        <v-textarea
          class="mt-4"
          name="input-7-1"
          v-model="post.text"
          label="Description"
          required
          hint="Enter post description"
        ></v-textarea>
        <v-flex xs12 class="make-flex" justify-end>
          <v-btn
            class="mt-4"
            color="orange"
            dark
          >
            <span class="mr-2">Create Post</span>
          </v-btn>
        </v-flex>
      </v-form>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      valid: false,
      title: '',
      titleRules: [
        v => !!v || 'Name is required',
        v => v.length <= 100 || 'Name must be less than 10 characters'
      ],
      post: {
        title: '',
        text: ''
      }
    }
  },
  methods: {
    ...mapGetters([
      'isAuthenticated',
      'me'
    ]),
    ...mapActions([
      'ME'
    ])
  },
  created () {
    if (!this.isAuthenticated()) {
      this.$router.push({ name: 'login' })
    } else {
      this.ME()
    }
  }
}
</script>

<style scoped>
  .single-post {
    padding-top: 64px;
  }
</style>
