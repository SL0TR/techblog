<template>
  <v-container grid-list-md text-xs-center>
    <v-layout>
      <v-flex>
        <h1 class="mb-5">Blog</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4 v-for="(post, i) in blogs" :key="i">
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ post.title }}</h3>
              <p class="mt-5"> {{ post.text }} </p>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Read</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  data () {
    return {
      blogs: ''
    }
  },
  methods: {
    getData () {
      axios.get('http://localhost:4000/api/posts')
        .then(res => {
          let { data } = res
          this.blogs = data
          console.log(this.blogs)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
