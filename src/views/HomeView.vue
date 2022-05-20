<template>
    <div id="home-content-wrapper">
        <h1>Welcome to Ivysaur! <v-icon> mdi-sprout </v-icon>
        </h1>
        <p>A workout app for the Ivysaur lifting program.</p>
        <span id="home-btn-wrapper">
            <router-link to="/login"><v-btn color="primary" rounded>Login</v-btn></router-link>
            <router-link to="/register"><v-btn color="primary" rounded>Register</v-btn></router-link>
        </span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default Vue.extend({
    name: "HomePage",
    created() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) { // logged in
                this.$router.push('/program')
            }
        })
    },
})
</script>

<style scoped>
    #home-btn-wrapper > a {
        margin: 0.5em;
    }
</style>
