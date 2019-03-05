<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <main class="app">
        <header class="header">
          <h1> JUGANDO CON APIS EN VUE</h1>
        </header>
        <nav class="nav">
          <v-toolbar>
            <v-toolbar-items>
              <v-btn flat>Home</v-btn>
              <v-btn flat>Buscador Personajes Marvel</v-btn>
              <v-btn flat>About</v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </nav>
        <section class="section">
          <router-view></router-view>
        </section>
      </main>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
    font-size: 1rem;
}

html,
body {
  height: 100%;
  padding: 0 !important;
}

.app {
  min-height: 100%;
  display: grid;
  grid-template-rows: 15% 7% 1fr;
}
div /deep/ .v-toolbar__content {
  padding: 0 !important;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
}
.nav {
  background-color: green;
}
.section {
  padding: 10px;
  background-color: black;
}
</style>
