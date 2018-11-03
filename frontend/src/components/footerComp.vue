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
        <strong class="subheading">&copy; 2018 <v-btn color="accent" flat href="https://sl0tr.github.io/">Mohaimin Islam</v-btn></strong>
        <v-spacer></v-spacer>
        <v-btn
          class="mx-3"
          v-for="(social, i) in socialLinks"
          :key="i"
          icon
          :href="social.url"
        >
          <v-icon size="24px">{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      blog: false,
      socialLinks: [
        {
          icon: 'fab fa-github-square',
          url: 'https://github.com/SL0TR'
        },
        {
          icon: 'fab fa-facebook',
          url: 'https://www.facebook.com/Mohaiminislam17'
        },
        {
          icon: 'fab fa-linkedin',
          url: 'https://www.linkedin.com/in/mohaimin-islam/'
        },
        {
          icon: 'fab fa-google-plus-square',
          url: 'https://plus.google.com/102535643689453338746'
        },
        {
          icon: 'fab fa-codepen',
          url: 'https://codepen.io/SL0TR'
        }
      ]
    }
  },
  computed: {
    changeFooter () {
      return this.$route.name === 'blog' && this.$route.name === 'single-post'
    }
  }
}
</script>

<style scoped>
  .removeAbs {
    position: relative;
  }
</style>
