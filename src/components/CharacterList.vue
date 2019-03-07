<template>
  <div class="characters-list">
    <div
        class="character-list__item"
        v-for="character in charactersList" :key="character.name">
        <CharacterItem :character="character"></CharacterItem>
    </div>
  </div>
</template>

<script>
import CharacterItem from '../components/CharacterItem'
export default {
  name: 'charactersList',
  components: {
    CharacterItem
  },
  data () {
    return {
      msg: 'Listado de personajes'
    }
  },
  props: {
    charactersList: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
