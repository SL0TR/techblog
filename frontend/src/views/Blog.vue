<template>
  <v-container grid-list-md text-xs-center class="blog center-container">
    <h2 class="mb-5 display-3">The Blog</h2>
    <v-layout row wrap class="ma-0" style="flex: initial;">
      <h2 v-if="this.blogLoad()">Loading</h2>
      <v-flex xs4 v-for="(post, i) in this.blogs()" :key="i">
        <v-card class="blog-cards">
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{ post.title }}</h2>
              <p class="mt-3"> {{ post.text.substr(0, 150) }} </p>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange" @click="singleBlog(post)">Read</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapGetters([
      'blogs',
      'blogLoad'
    ]),
    ...mapActions([
      'BLOGS'
    ]),
    singleBlog (data) {
      this.$router.push({ name: 'single-post', params: { blog: data } })
    }
  },
  created () {
    this.BLOGS()
    console.log('hello')
  }
}
</script>

<style scoped>
  .blog {
    display: flex;
    margin: 0 auto;
  }

  .blog-cards {
    max-height: 200px;
  }

</style>
