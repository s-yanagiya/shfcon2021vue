import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import "@mdi/font/css/materialdesignicons.css";


Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiK_NjopMtbD0jORqZoU3JBSbdbYYIr5Q",
  authDomain: "my-address-pj-70aa5.firebaseapp.com",
  projectId: "my-address-pj-70aa5",
  storageBucket: "my-address-pj-70aa5.appspot.com",
  messagingSenderId: "784291391230",
  appId: "1:784291391230:web:22c19a293c46bd5eab67af",
  measurementId: "G-0GYB20HHTD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
