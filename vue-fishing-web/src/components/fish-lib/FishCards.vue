<template>
  <v-container id="fish-cards">
    <v-row dense justify="center" v-if="fishCards.length > 0">
      <v-col v-for="(card, index) in fishCards" :key="index" cols="auto">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            class="fish-card"
            :elevation="hover ? 5 : 0"
            :class="{ 'on-hover': hover }"
            @click="selectedFish(card)"
          >
            <v-img
              contain
              :src="source(card.imageSrc)"
              class="align-end fish-img"
            >
              <div class="fish-title">{{ card.zh_name }}</div>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row v-else class="text-center">
      <v-col>無搜尋結果</v-col>
    </v-row>
    <fish-dialog
      v-if="fishContentDialog"
      :selectedFishData="selectedFishData"
      :dialog="fishContentDialog"
      @close-dialog="fishContentDialog = false"
    />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import FishDialog from './FishDialog';
import { FISHES } from '../../constants/query';

export default {
  props: ['fishFilterParams'],
  components: {
    'fish-dialog': FishDialog,
  },
  apollo: {
    fishes: {
      query: FISHES,
      variables() {
        const param = {};

        if (this.fishFilterParams.length !== 0) {
          Object.assign(param, { category: this.fishFilterParams });
        }
        if (this.fishTerm) {
          Object.assign(param, { zh_name: this.fishTerm });
        }

        return {
          param,
        };
      },
      result({ data, loading }) {
        if (Object.values(data).length !== 0 && !loading) {
          this.fishCards = data.fishes;
          // this.fishCards.push(...data.fishes);
        }
      },
    },
  },
  data() {
    return {
      fishCards: [],
      fishContentDialog: false,
      selectedFishData: null,
    };
  },
  computed: {
    ...mapGetters({
      fishTerm: 'getFishTerm',
    }),
  },
  methods: {
    source(imageNum) {
      return require(`../../assets/${imageNum}.png`);
    },
    selectedFish(fish) {
      this.selectedFishData = fish;
      this.fishContentDialog = true;
    },
  },
};
</script>
<style lang="scss">
#fish-cards {
  max-width: 960px;
  padding: 0;
  // overflow: scroll;
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
  .fish-card {
    margin: 2px;
    border-radius: 5%;
    .fish-img {
      height: 250px;
      width: 250px;
      animation: scale-up-center 0.5s;
      background: #f0f0f0;
    }
    .fish-title {
      display: flex;
      flex-direction: row-reverse;
      margin-right: 25px;
      margin-bottom: 10px;
    }
  }
  .v-card {
    transition: opacity 0.7s ease-in-out;
    cursor: pointer;
  }
  .v-card:not(.on-hover) {
    opacity: 0.8;
  }
}
</style>
