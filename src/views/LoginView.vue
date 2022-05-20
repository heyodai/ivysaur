<template>
    <div id="login-content-wrapper">
        <router-link to="/">
            <v-btn color="primary" rounded>
                <v-icon>mdi-arrow-left-thin</v-icon> Back
            </v-btn>
        </router-link>

        <h1>Login to Your Account</h1>
        <p>...or did you mean to <router-link to="/register">register</router-link>?</p>

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

            <v-btn @click="login" color="primary" rounded>Login</v-btn>
        </v-form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default Vue.extend({
    name: "LoginPage",
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        login() {
            const auth = getAuth()
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    console.log("Successful sign in!")
                    console.log(userCredential.user)
                    this.$router.push('/')
                })
                .catch((error) => {
                    switch (error.code) {
                        case 'auth/invalid-email':
                            console.log('Invalid email')
                            break
                        case 'auth/user-not-found':
                            console.log('No account with that email was found')
                            break
                        case 'auth/wrong-password':
                            console.log('Incorrect password')
                            break
                        default:
                            console.log('Email or password was incorrect')
                            break
                    }
                })
        },
    },
})
</script>
