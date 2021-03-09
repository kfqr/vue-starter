<template>

  <v-app id="app">

    <v-app-bar app hide-on-scroll prominent absolute>
      <v-spacer/>
      <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/pdf">PDF</router-link>
      </div>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <h1>This is DEFAULT layout</h1>
        <router-view/>
      </v-container>
    </v-main>

    <v-footer app>
      &copy;&nbsp;{{ appName }}
    </v-footer>

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
</style>
