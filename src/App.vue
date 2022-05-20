<template>
  <v-app>
    <app-bar v-if="showAppBar"/>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppBar from './components/AppBar.vue'

export default Vue.extend({
  components: { AppBar },
  name: 'App',

  data: () => ({
    //
  }),

  computed: {
    showAppBar() {
      const no_show = ['home', 'register', 'login']
      const page: any = this.$route.name
      return !no_show.includes(page)
    }
  },
});
</script>
