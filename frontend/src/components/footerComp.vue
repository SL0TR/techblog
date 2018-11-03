<template>
  <v-footer
    dark
    height="auto"
    absolute
    :class="{ removeAbs: changeFooter }"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title>
        <strong class="subheading">&copy; 2018 TechBlog</strong>

        <v-spacer></v-spacer>

        <v-btn
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px"></v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      blog: false
    }
  },
  computed: {
    changeFooter () {
      return this.$route.name === 'blog'
    }
  }
}
</script>

<style scoped>
  .removeAbs {
    position: relative;
  }
</style>
