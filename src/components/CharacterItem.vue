<template>
  <div class="characters-item">
    <div>
        <v-card>
            <v-img
            :src="character.image"
            aspect-ratio="1.8"
            ></v-img>

            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{character.name}}</h3>
                <div> {{character.description}} </div>
            </div>
            </v-card-title>
        </v-card>
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
