import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

const firebase = initializeApp({
  apiKey: "AIzaSyCKl-O-szbECXb4qFcEMAHB-tJDvxEoE5o",
  authDomain: "ivysaur-5f933.firebaseapp.com",
  projectId: "ivysaur-5f933",
  storageBucket: "ivysaur-5f933.appspot.com",
  messagingSenderId: "967266709319",
  appId: "1:967266709319:web:3b7eb250e5dcfba4e32662",
  measurementId: "G-QLXDP6KRQE"
})
const auth = getAuth(firebase)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
