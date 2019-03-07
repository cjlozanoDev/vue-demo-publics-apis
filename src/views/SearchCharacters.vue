<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-btn color="primary">Success</v-btn>

  </div>
</template>

<script>
export default {
  name: 'Search Character',
  data () {
    return {
      msg: 'Buscador de personajes Marvel'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
