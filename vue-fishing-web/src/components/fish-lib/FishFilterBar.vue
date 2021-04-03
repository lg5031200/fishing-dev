<template>
  <div id="fish-filter">
    <div class="filter-box">
      <h4 class="filter-title border-box mr-2">篩選器</h4>
      <div class="border-box mr-4">
        <v-select
          dense
          multiple
          hide-details
          placeholder="水域"
          v-model="fishTags.water.selected"
          :items="fishTags.water.items"
          :menu-props="{ bottom: true, offsetY: true }"
        >
          <template v-slot:selection="{ item, index }">
            <v-chip color="#2196F3" outlined small v-if="index <= 1">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index > 1" class="grey--text caption">
              (+{{ fishTags.water.selected.length - 2 }} others)
            </span>
          </template>
        </v-select>
      </div>
      <div class="border-box mr-2">
        <v-select
          dense
          multiple
          hide-details
          placeholder="體型"
          v-model="fishTags.body.selected"
          :items="fishTags.body.items"
          :menu-props="{ bottom: true, offsetY: true }"
        >
          <template v-slot:selection="{ item, index }">
            <v-chip
              color="#1976D2"
              text-color="#1976D2"
              outlined
              small
              v-if="index <= 1"
            >
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index > 1" class="grey--text caption">
              (+{{ fishTags.body.selected.length - 2 }} others)
            </span>
          </template>
        </v-select>
      </div>
      <div class="border-box mr-2">
        <v-select
          dense
          multiple
          hide-details
          placeholder="獵食喜好"
          v-model="fishTags.food.selected"
          :items="fishTags.food.items"
          :menu-props="{ bottom: true, offsetY: true }"
        >
          <template v-slot:selection="{ item, index }">
            <v-chip
              color="#2962FF"
              text-color="#2962FF"
              outlined
              small
              v-if="index <= 1"
            >
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index > 1" class="grey--text caption">
              (+{{ fishTags.food.selected.length - 2 }} others)
            </span>
          </template>
        </v-select>
      </div>
      <v-btn icon @click="reset()" class="ml-4 primary--text">
        <v-icon size="24">mdi-restart</v-icon></v-btn
      >
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";

export default {
  apollo: {
    fishes: {
      query: gql`
        {
          fishes {
            id
            zh_name
            en_name
            category
            introduction
            habitat
            imageSrc
          }
        }
      `,
      result({ data, loading }) {
        if (Object.values(data).length !== 0 && !loading) {
          this.fishCards = data.fishes;
        }
      },
    },
  },
  data() {
    return {
      fishCards: [],
      fishTags: {
        water: {
          items: ["深海", "淡水"],
          selected: [],
        },
        body: {
          items: ["大型", "小型", "中型"],
          selected: [],
        },
        food: {
          items: ["雜食性", "食肉性", "草食性"],
          selected: [],
        },
      },
    };
  },
  methods: {
    reset() {
      this.fishTags.food.selected = [];
      this.fishTags.body.selected = [];
      this.fishTags.water.selected = [];
    },
    source(imageNum) {
      return require(`../../assets/${imageNum}.png`);
    },
  },
};
</script>
<style lang="scss">
#fish-filter {
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  .filter-box {
    max-width: 960px;
    min-width: 960px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    .filter-title {
      max-width: 80px;
    }
    .border-box {
      width: 100%;
      height: 50px;
      padding: 12px;
      display: flex;
      align-items: center;
      border-right: 1px solid #dbdbdb;
      .v-input__slot:before {
        border: unset;
      }
    }
  }
}
</style>
