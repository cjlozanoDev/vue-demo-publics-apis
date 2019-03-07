<template>
  <div class="characters-item">
    <div>
        {{ character.name }}
    </div>
  </div>
</template>

<script>
import CharacterItem from '../components/CharacterItem'
export default {
  name: 'characterItem',
  components: {
    CharacterItem
  },
  data () {
    return {
      msg: 'Character Item'
    }
  },
  props: {
    character: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
