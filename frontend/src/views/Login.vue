<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title> {{ isSignUp ? 'Sign Up' : 'Login' }} </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="far fa-user" name="username" label="Username" type="text" v-model="user.username"></v-text-field>
              <v-text-field id="password" prepend-icon="fas fa-unlock-alt" name="password" label="Password" type="password"  v-model="user.password"></v-text-field>
              <v-text-field v-if="isSignUp" id="re-password" prepend-icon="fas fa-unlock-alt" name="re-password" label="Re Enter Password" type="password"  v-model="user.rePassword" :error="user.password === user.rePassword ? false : true"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="pb-3">
            <v-btn v-if="!isSignUp" dark color="secondary" @click="isSignUp = true"> <v-icon size="15px">fas fa-user-plus</v-icon><span class="ml-2">Sign Up</span></v-btn>
            <v-btn v-if="isSignUp" color="primary" @click="isSignUp = false"><v-icon size="15px">fas fa-arrow-left</v-icon><span class="ml-2">Back</span></v-btn>
            <v-spacer/>
            <v-btn v-if="!isSignUp" color="primary" @click="signIn()"><span class="mr-2">Sign In</span><v-icon size="15px">fas fa-sign-in-alt</v-icon> </v-btn>
            <v-btn v-if="isSignUp" dark color="secondary" @click="signUp()"> <v-icon size="15px">fas fa-user-plus</v-icon><span class="ml-2">Sign Up</span></v-btn>

          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
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
        color="accent"
        flat
        @click="snackbar.state = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isSignUp: false,
      user: {
        username: null,
        password: null,
        rePassword: null
      },
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
    ...mapActions([
      'LOGIN',
      'LOGOUT',
      'SIGNUP'
    ]),
    async signIn () {
      try {
        await this.LOGIN(this.user)
        this.$router.push({ name: 'blogger' })
      } catch (err) {
        this.snackbar.text = 'Login error!'
        this.snackbar.state = true
      }
    },
    async signUp () {
      if (this.user.username && this.user.password && this.user.rePassword && this.user.password === this.user.rePassword) {
        try {
          await this.SIGNUP(this.user)
          this.$router.push({ name: 'blogger' })
        } catch (err) {
          console.log(err)
          this.snackbar.text = 'Authentication error!!'
          this.snackbar.state = true
        }
      } else {
        this.snackbar.text = 'Fill up the form properly!'
        this.snackbar.state = true
      }
    }
  }
}
</script>
