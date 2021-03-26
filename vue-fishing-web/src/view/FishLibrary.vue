<template>
  <v-container fluid id="fish-lib">
    <v-row dense>
      <v-col
        v-for="(card, index) in fishCards"
        :key="index"
        :cols="card.flex"
        class="pa-4"
      >
        <v-img contain :src="card.src" class="align-end fish-img">
          <div class="fish-title">{{ card.title }}</div>
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
          title: '五彩吊',
          src: require('../assets/1.png'),
          flex: 4,
        },
        {
          title: '石美人',
          src: require('../assets/2.png'),
          flex: 4,
        },
        {
          title: '薄荷仙',
          src: require('../assets/3.png'),
          flex: 4,
        },
        {
          title: '麒麟神仙',
          src: require('../assets/4.png'),
          flex: 4,
        },
        {
          title: '十一间仙',
          src: require('../assets/5.png'),
          flex: 4,
        },
        {
          title: '火焰仙',
          src: require('../assets/6.png'),
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
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .fish-img {
    height: 200px;
    width: 200px;
    border-radius: 20%;
    animation: scale-up-center 0.5s;
    background-image: radial-gradient(
      ellipse,
      rgba(31, 124, 211, 0.1) 45%,
      transparent 70%
    );
  }
  .fish-title {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 25px;
  }
}
</style>
