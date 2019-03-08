<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <main class="app">
        <header class="header">
          <h1> JUGANDO CON APIS EN VUE</h1>
        </header>
        <nav class="nav">
          <v-toolbar color="primaryLight" height="48px">
            <v-toolbar-items>
              <v-btn flat to='/'>Home</v-btn>
              <v-btn flat to='/search-characters'>Buscador Personajes Marvel</v-btn>
              <v-btn flat to='/about'>About</v-btn>
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
.app {
  min-height: 100%;
  display: grid;
  grid-template-rows: 100px 48px 1fr;
}
div /deep/ .v-toolbar__content {
  padding: 0 !important;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  box-shadow: 0px 2px 4px #00000070;
}
.nav {

}
.section {
  padding: 20px;
}
</style>
