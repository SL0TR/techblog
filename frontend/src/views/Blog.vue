<template>
  <v-container grid-list-md text-xs-center class="blog center-container">
    <h2 class="mb-5 display-3">The Blog</h2>
    <v-layout row wrap class="ma-0" style="flex: initial;">
      <loader-comp v-if="this.blogLoad()"/>
      <v-flex xs4 v-for="(post, i) in this.blogs()" :key="i" transition="slide-x-transition">
        <v-card class="blog-cards">
          <v-card-title primary-title>
            <h2 class="headline mb-0">{{ post.title }}</h2>
            <p class="mt-3"> {{ post.text }} </p>
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
import loaderComp from '../components/loaderComp'

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
  },
  components: {
    loaderComp
  }
}
</script>

<style scoped>
  .blog {
    display: flex;
    margin: 0 auto;
    height: auto;
    padding-top: 164px;
  }

  .blog-cards {
    max-height: 200px;
  }

  .blog-cards p,
  .blog-cards h2 {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.2em;
    white-space: nowrap;
    text-align: start;
  }

  .v-footer {
    position: static !important;
  }

</style>
