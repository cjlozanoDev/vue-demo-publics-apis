<template>
  <div class="form-seach">
    <v-form ref="form">
        <v-text-field
            v-model="nameCharacter"
            label="Busca tu personaje">
            <template slot="append">
                <v-icon>search</v-icon>
            </template>
        </v-text-field>
        <v-btn
            color="primary"
            @click="searchCharacter">
            Buscar personaje
        </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nameCharacter: ''
    }
  },
  methods: {
    searchCharacter () {
      this.$emit('searchCharacter', this.nameCharacter)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
