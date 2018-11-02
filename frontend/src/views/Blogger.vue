<template>
  <h1>This is Blogger page</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  created () {
    if (!this.isAuthenticated()) {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
