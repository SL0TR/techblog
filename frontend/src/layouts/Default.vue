<template>
  <v-container fluid>
    <main-nav/>
    <v-container fluid>
      <router-view/>
    </v-container>
    <footer-comp/>
  </v-container>
</template>

<script>
import mainNav from '../components/mainNav'
import footerComp from '../components/footerComp'

export default {
  name: 'LayoutDefault',
  components: {
    mainNav,
    footerComp
  }
}
</script>

<style>
.container {
  padding: 0;
  background-color: #ff7700;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  height: 100%;
}

.container::before {
  content: "";
  background-image: url('../../public/img/website-background-png.png');
  position: absolute;
  background-attachment: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: .04;
}

.center-container {
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100%;
}

.make-flex {
  display: flex;
}
</style>
