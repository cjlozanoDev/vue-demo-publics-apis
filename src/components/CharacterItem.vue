<template>
  <div class="characters-item">
    <div>
        <v-card>
            <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="1.8"
            ></v-img>

            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div> fgsdfgsdfgsdf sdf gsd gsdf gsdf gs </div>
            </div>
            </v-card-title>

            <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
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
