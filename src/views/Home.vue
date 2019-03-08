<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-btn color="primary">Success</v-btn>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data  () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
