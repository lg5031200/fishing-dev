<template>
  <v-container fluid id="fish-lib">
    <v-row dense>
      <v-col v-for="(card, index) in fishCards" :key="index" :cols="card.flex">
        <v-img
          :src="card.src"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="180px"
          width="200px"
          style="border-radius: 20px"
        >
          <v-card-title v-text="card.title"></v-card-title>
        </v-img>
      </v-col>
    </v-row>
    <fish-dialog
      :dialog="fishDialog"
      :fishData="currentCard"
      @close-dialog="fishDialog = false"
    ></fish-dialog>
  </v-container>
</template>
<script>
import FishDialog from '../components/fish-lib/FishDialog';

export default {
  components: {
    'fish-dialog': FishDialog,
  },
  data() {
    return {
      fishDialog: false,
      currentCard: null,
      fishCards: [
        {
          title: 'fish 1',
          src: require('../assets/1.jpeg'),
          flex: 4,
        },
        {
          title: 'fish 2',
          src: require('../assets/2.jpeg'),
          flex: 4,
        },
        {
          title: 'fish 3',
          src: require('../assets/3.jpeg'),
          flex: 4,
        },
        {
          title: 'fish 4',
          src: require('../assets/4.jpeg'),
          flex: 4,
        },
        {
          title: 'fish 5',
          src: require('../assets/5.jpeg'),
          flex: 4,
        },
        {
          title: 'fish 6',
          src: require('../assets/6.jpeg'),
          flex: 4,
        },
      ],
    };
  },
  methods: {
    openFishDialog(fishData) {
      this.fishDialog = true;
      this.currentCard = fishData;
    },
  },
};
</script>
<style lang="scss">
#fish-lib {
  padding: 24px;
  max-width: 960px;
  .v-card__actions {
    height: 50px;
  }
}
</style>
