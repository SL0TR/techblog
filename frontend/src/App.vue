<template>
  <v-app>
    <v-content>
      <component :is="layout">
        <router-view/>
      </component>
    </v-content>
  </v-app>
</template>

<script>
const defaultLayout = 'default'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>
