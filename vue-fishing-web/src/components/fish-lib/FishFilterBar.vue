<template>
  <div id="fish-filter">
    <div class="filter-box">
      <h4 class="mr-4">篩選器</h4>
      <v-select
        v-model="fishTags.water.selected"
        :items="fishTags.water.items"
        multiple
        dense
        solo
        hide-details
        class="mr-2"
        placeholder="水質"
        width="100"
      >
        <template v-slot:selection="{ item, index }">
          <v-chip color="primary" outlined small v-if="index <= 1">
            <span>{{ item }}</span>
          </v-chip>
          <span v-if="index > 1" class="grey--text caption">
            (+{{ fishTags.water.selected.length - 1 }} others)
          </span>
        </template>
      </v-select>

      <v-select
        v-model="fishTags.body.selected"
        :items="fishTags.body.items"
        multiple
        dense
        solo
        hide-details
        class="mr-2"
        placeholder="體型"
      >
        <template v-slot:selection="{ item, index }">
          <v-chip
            class="pink"
            text-color="pink"
            outlined
            small
            v-if="index <= 1"
          >
            <span>{{ item }}</span>
          </v-chip>
          <span v-if="index > 1" class="grey--text caption">
            (+{{ fishTags.body.selected.length - 1 }} others)
          </span>
        </template>
      </v-select>

      <v-select
        v-model="fishTags.food.selected"
        :items="fishTags.food.items"
        multiple
        dense
        solo
        hide-details
        class="mr-2"
        placeholder="獵食喜好"
      >
        <template v-slot:selection="{ item, index }">
          <v-chip
            class="cyan"
            text-color="cyan"
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
  padding: 12px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  .filter-box {
    max-width: 960px;
    min-width: 960px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    .v-input {
      width: 90px;
    }
  }
}
</style>
