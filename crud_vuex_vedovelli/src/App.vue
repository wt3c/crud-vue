<template>
  <div id="app">
    <img src="./assets/logo.png">

    <h4>{{user}}</h4>

    <cc-users> </cc-users>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import CcUsers from "./components/users/main";
import { setTimeout } from "timers";

export default {
  name: "App",

   mounted() {
    const payload = {
      name: "Welington",
      email: "wcarlos3@gmail.com",
      level: "deus"
    };
    setTimeout(() => {
      this.$store.commit("CHANGE_USER", payload);
    }, 2000);
  },

  components: {
    CcUsers
  },

  computed: {
    user() {
      const { name, email } = this.$store.state.user;

      return `O usuario logado é ${name} e possui o email ${email} `;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
