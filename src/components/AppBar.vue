<template>
    <v-app-bar app dark>
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
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "AppBar",
})
</script>