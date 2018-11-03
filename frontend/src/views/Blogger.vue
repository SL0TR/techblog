<template>
  <v-container class="blogger">
    <v-flex xs8 offset-xs2>
      <h2 class="text-xs-center display-3 mt-4 mb-5"> Hi there, {{ me() !== null ? me().username : 'loading' }}!</h2>
    </v-flex>
    <v-flex class="mt-5" xs6 offset-xs3>
      <v-form v-model="valid">
        <v-text-field
          class="mt-4"
          v-model="post.title"
          :rules="titleRules"
          hint="Enter post title"
          label="title"
          required
        ></v-text-field>
        <!-- <v-text-field
          class="mt-4"
          v-model="post.categories[0].name"
          :rules="titleRules"
          hint="Enter the categories"
          label="Category"
          required
        ></v-text-field> -->
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
            @click="submitPost"
          >
            <span class="mr-2">Create Post</span>
          </v-btn>
        </v-flex>
      </v-form>
    </v-flex>
    <v-snackbar
      v-model="snackbar.state"
      :bottom="snackbar.y === 'bottom'"
      :left="snackbar.x === 'left'"
      :timeout="snackbar.timeout"
      :top="snackbar.y === 'top'"
      :vertical="snackbar.mode === 'vertical'"
    >
      {{ snackbar.text }}
      <v-btn
        color="orange"
        flat
        @click="snackbar.state = false"
      >
        Close
      </v-btn>
    </v-snackbar>
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
        v => !!v || 'Name is required'
      ],
      post: {
        title: null,
        text: null
      },
      user: null,
      snackbar: {
        state: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 3000,
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
      'ME',
      'POST',
      'LOGOUT'
    ]),
    async submitPost () {
      if (this.post.title && this.post.text) {
        try {
          await this.POST(this.post)
          console.log('submitted!')
        } catch (err) {
          console.log(err)
          this.snackbar.text = 'Authentication error!!'
          this.snackbar.state = true
          this.LOGOUT()
          this.$router.push({ name: 'login' })
        }
      } else {
        this.snackbar.text = 'Fill up the fields properly!'
        this.snackbar.state = true
      }
    }
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
  .blogger {
    padding-top: 164px;
  }
</style>
