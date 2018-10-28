<template>
  <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{ !signupBtn ? 'Login Form' : 'Signup Form' }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="user.username"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"  v-model="user.password"></v-text-field>
                  <v-text-field v-if="signupBtn" id="re-password" prepend-icon="lock" name="re-password" label="Re Enter Password" type="password"  v-model="user.rePassword"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="getData()"> {{ !signupBtn ? 'Login' : 'Signup' }}</v-btn>
              </v-card-actions>
              <v-alert
                  v-model="signup"
                  dismissible
                  type="success"
                >
                  Signup Succesful!
                </v-alert>
                <v-alert
                  v-model="signupBtn"
                  dismissible
                  type="warning"
                >
                  There's no such user, Sign up please!
                </v-alert>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
        rePassword: ''
      },
      signup: false,
      signupBtn: false
    }
  },
  methods: {
    getData () {
      axios.post('http://localhost:4000/api/users', this.user)
        .then(res => {
          const token = localStorage.getItem('token')
          let { data } = res
          localStorage.setItem('token', (data.token || token))
          if (data.token) {
            this.signup = true
          }
        })
        .catch(err => {
          console.log(err)
          this.user.username = ''
          this.user.password = ''
          this.user.rePassword = ''
          this.signupBtn = true
        })
    }
  }
}
</script>
