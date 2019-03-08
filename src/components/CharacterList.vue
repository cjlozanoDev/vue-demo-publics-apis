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
.characters-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.character-list__item {
    width: calc(33.33333% - 20px);
    margin: 0 20px 20px 0;
}
</style>
