<template>
  <v-container fluid id="fish-cards">
    <v-row dense no-gutters>
      <v-col
        v-for="(card, index) in fishCards"
        :key="index"
        cols="3"
        class="pa-4"
      >
        <v-img contain :src="source(card.imageSrc)" class="align-end fish-img">
          <div class="fish-title">{{ card.zh_name }}</div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import gql from 'graphql-tag';

export default {
  props: ['fishFilterParams'],
  apollo: {
    fishes: {
      query: gql`
        query fishes($param: SearchFish) {
          fishes(param: $param) {
            id
            zh_name
            category
            imageSrc
          }
        }
      `,
      variables() {
        const param = {};

        if (this.fishFilterParams.length !== 0) {
          Object.assign(param, { category: this.fishFilterParams });
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
    };
  },
  methods: {
    source(imageNum) {
      return require(`../../assets/${imageNum}.png`);
    },
  },
};
</script>
<style lang="scss">
#fish-cards {
  max-width: 960px;
  padding: 0;
  .col-3 {
    padding: 4px !important;
  }
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
    height: 240px;
    width: 240px;
    animation: scale-up-center 0.5s;
    // background-image: radial-gradient(
    //   ellipse,
    //   rgba(31, 124, 211, 0.1) 45%,
    //   transparent 70%
    // );
    background: #f0f0f0;
    border-radius: 5%;
  }
  .fish-title {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 25px;
    margin-bottom: 10px;
  }
}
</style>
