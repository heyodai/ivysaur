<template>
    <div id="home-content-wrapper">
        <h1>Welcome to Ivysaur! <v-icon> mdi-sprout </v-icon>
        </h1>
        <p>A workout app for the Ivysaur lifting program.</p>
        <span id="home-btn-wrapper">
            <v-btn color="primary" rounded>Login</v-btn>
            <v-btn color="primary" rounded>Register</v-btn>
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
    #home-content-wrapper {
        margin: 1em auto;
        width: 50%;
    }
    #home-btn-wrapper {
        text-align: center;
    }
    #home-btn-wrapper > button {
        margin: 0.5em;
    }
</style>
