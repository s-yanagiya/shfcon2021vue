<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>トーナメント</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav/>

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import SideNav from './components/SideNav'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    SideNav
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
        this.fetchAddresses()
        user.getIdToken(true).then(function(idToken) {
          console.log("bbb");
          console.log(idToken);
          localStorage.setItem('jwt', idToken);
        }).catch(function(error) {
          console.log(error);
        });
        if (this.$router.currentRoute.name === 'home') {
          this.$router.push({ name: 'addresses' }, () => {})
        }
      } else {
        this.deleteLoginUser()
        localStorage.removeItem('jwt');
        this.$router.push({ name: 'home' }, () => {})
      }
      // firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
      // // Send token to your backend via HTTPS
      // // ...
      // console.log("aaa");
      // console.log(idToken);
      // });
    })
    
  },
  data: () => ({
    
  }),
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser', 'fetchAddresses'])
  }
};
</script>