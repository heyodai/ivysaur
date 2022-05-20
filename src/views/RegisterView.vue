<template>
    <div id="register-content-wrapper">
        <router-link to="/">
            <v-btn color="primary" rounded>
                <v-icon>mdi-arrow-left-thin</v-icon> Back
            </v-btn>
        </router-link>

        <h1>Create an Account</h1>
        <p>...or did you mean to <router-link to="/login">login</router-link>?</p>

        <v-form>
            <v-text-field 
                v-model="email" 
                label="E-mail" 
                required 
                prepend-icon="mdi-email">
            </v-text-field>

            <v-text-field 
                v-model="password" 
                label="Password" 
                required 
                type="password"
                prepend-icon="mdi-form-textbox-password">
            </v-text-field>

            <v-btn @click="register" color="primary" rounded>Register</v-btn>
        </v-form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default Vue.extend({
    name: "RegistrationPage",
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        register() {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    console.log("Successful registration!")
                    console.log(userCredential.user)
                    this.$router.push('/')
                })
                .catch((error) => {
                    console.log(error.code)
                    console.log(error.message)
                })
        },
    },
})
</script>

<style scoped>
#register-content-wrapper {
    margin: 1em auto;
    width: 50%;
}
</style>
