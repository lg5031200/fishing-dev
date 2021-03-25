<template>
  <v-container fluid id="fish-lib">
    <v-row dense>
      <v-col v-for="(card, index) in fishCards" :key="index" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="180px"
          >
          </v-img>

          <v-card-actions>
            <v-card-title v-text="card.title"></v-card-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      title: 'FISH HOME',
      fishCards: [
        {
          title: 'Cute 1',
          src: require('../assets/1.jpeg'),
          flex: 4,
        },
        {
          title: 'Cute 2',
          src: require('../assets/2.jpeg'),
          flex: 4,
        },
        {
          title: 'Cute 3',
          src: require('../assets/3.jpeg'),
          flex: 4,
        },
        {
          title: 'Cute 4',
          src: require('../assets/4.jpeg'),
          flex: 4,
        },
        {
          title: 'Cute 5',
          src: require('../assets/5.jpeg'),
          flex: 4,
        },
        {
          title: 'Cute 6',
          src: require('../assets/6.jpeg'),
          flex: 4,
        },
        {
          title: 'Cute 6',
          src: require('../assets/6.jpeg'),
          flex: 4,
        },
        {
          title: 'Cute 6',
          src: require('../assets/6.jpeg'),
          flex: 4,
        },
        {
          title: 'Cute 6',
          src: require('../assets/6.jpeg'),
          flex: 4,
        },
        {
          title: 'Cute 6',
          src: require('../assets/6.jpeg'),
          flex: 4,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
#fish-lib {
  padding: 24px;
  .v-card__actions {
    height: 50px;
  }
}
</style>
