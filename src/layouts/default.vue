<template>
  <v-app id="app">
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'default',
  data() {
    return {
      appName: process.env.VUE_APP_APP_NAME
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

 #app .theme--light.v-application {
  background: #ffffff80;
}

 #app .theme--dark.v-application {
  background: #00000080;
}

.page-bg {
  height: 100vh;
  width: 100vw;
  background-image: url('../asset/img/bg.jpg');
  background-origin: content-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
