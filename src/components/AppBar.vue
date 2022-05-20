<template>
    <v-app-bar app dark color="primary">
      <v-icon left> mdi-sprout </v-icon>
      <v-toolbar-title>
        Ivysaur
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon @click="sign_out">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAuth } from "firebase/auth"

export default Vue.extend({
    name: "AppBar",
    methods: {
    sign_out() {
      const auth = getAuth()
      auth.signOut()
      this.$router.push('/')
    },
  },
})
</script>