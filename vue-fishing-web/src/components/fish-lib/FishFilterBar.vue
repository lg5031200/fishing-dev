<template>
  <div id="fish-filter">
    <div class="filter-box">
      <div class="border-box mr-2" style="border-left: 1px solid #dbdbdb;">
        <!-- <v-select
          dense
          multiple
          hide-details
          item-text="name"
          item-value="value"
          placeholder="水域"
          v-model="fishTags.water.selected"
          :items="fishTags.water.items"
          :menu-props="{ bottom: true, offsetY: true }"
          @change="setFishFilterParams"
        >
          <template v-slot:selection="{ item, index }">
            <v-chip color="#2196F3" outlined small v-if="index <= 1">
              <span>{{ item.name }}</span>
            </v-chip>
            <span v-if="index > 1" class="grey--text caption">
              (+{{ fishTags.water.selected.length - 2 }} others)
            </span>
          </template>
        </v-select> -->
        <v-select
          dense
          hide-details
          item-text="name"
          item-value="value"
          placeholder="水域"
          v-model="fishTags.water.selected"
          :items="fishTags.water.items"
          :menu-props="{ bottom: true, offsetY: true }"
          @change="setFishFilterParams"
        >
        </v-select>
      </div>
      <div class="border-box mr-2">
        <!-- <v-select
          dense
          multiple
          hide-details
          item-text="name"
          item-value="value"
          placeholder="體型"
          v-model="fishTags.body.selected"
          :items="fishTags.body.items"
          :menu-props="{ bottom: true, offsetY: true }"
          @change="setFishFilterParams"
        >
          <template v-slot:selection="{ item, index }">
            <v-chip
              color="#1976D2"
              text-color="#1976D2"
              outlined
              small
              v-if="index <= 1"
            >
              <span>{{ item.name }}</span>
            </v-chip>
            <span v-if="index > 1" class="grey--text caption">
              (+{{ fishTags.body.selected.length - 2 }} others)
            </span>
          </template>
        </v-select> -->
        <v-select
          dense
          hide-details
          item-text="name"
          item-value="value"
          placeholder="體型"
          v-model="fishTags.body.selected"
          :items="fishTags.body.items"
          :menu-props="{ bottom: true, offsetY: true }"
          @change="setFishFilterParams"
        >
        </v-select>
      </div>
      <div class="border-box mr-2">
        <!-- <v-select
          dense
          multiple
          hide-details
          item-text="name"
          item-value="value"
          placeholder="獵食喜好"
          v-model="fishTags.food.selected"
          :items="fishTags.food.items"
          :menu-props="{ bottom: true, offsetY: true }"
          @change="setFishFilterParams"
        >
          <template v-slot:selection="{ item, index }">
            <v-chip
              color="#2962FF"
              text-color="#2962FF"
              outlined
              small
              v-if="index <= 1"
            >
              <span>{{ item.name }}</span>
            </v-chip>
            <span v-if="index > 1" class="grey--text caption">
              (+{{ fishTags.food.selected.length - 2 }} others)
            </span>
          </template>
        </v-select> -->
        <v-select
          dense
          hide-details
          item-text="name"
          item-value="value"
          placeholder="獵食"
          v-model="fishTags.food.selected"
          :items="fishTags.food.items"
          :menu-props="{ bottom: true, offsetY: true }"
          @change="setFishFilterParams"
        >
        </v-select>
      </div>
      <v-btn
        text
        @click="resetFilters()"
        class="primary--text"
        :disabled="!hasFilters"
      >
        重置
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fishTags: {
        water: {
          items: [
            {
              name: '深海',
              value: 'SEA_WATER',
            },
            {
              name: '淡水',
              value: 'FRESH_WATER',
            },
          ],
          selected: '',
        },
        body: {
          items: [
            {
              name: '大型',
              value: 'BIG',
            },
            {
              name: '中型',
              value: 'MEDIUM',
            },
            {
              name: '小型',
              value: 'SMALL',
            },
          ],
          selected: '',
        },
        food: {
          items: [
            {
              name: '雜食性',
              value: 'OMNIVORE',
            },
            {
              name: '食肉性',
              value: 'MEAT',
            },
            {
              name: '草食性',
              value: 'HERBIVOROUS',
            },
          ],
          selected: '',
        },
      },
      selectedFishCategories: [],
    };
  },
  computed: {
    hasFilters() {
      const selectedTags = Object.values(this.fishTags).filter(
        (tag) => tag.selected
      );
      return selectedTags.length > 0 ? true : false;
    },
  },
  methods: {
    emitFishFilterParams(params) {
      this.$emit('fish-filter-params', params);
    },
    setFishFilterParams() {
      this.selectedFishCategories = [
        this.fishTags.water.selected,
        this.fishTags.body.selected,
        this.fishTags.food.selected,
      ];

      const newArray = this.selectedFishCategories.filter((tag) => tag);

      this.emitFishFilterParams(newArray);
    },
    resetFilters() {
      for (const filter of Object.values(this.fishTags)) {
        filter.selected = '';
      }
      this.emitFishFilterParams([]);
    },
  },
};
</script>
<style lang="scss">
#fish-filter {
  --black_border: 1px solid #dbdbdb;
  border-top: var(--black_border);
  border-bottom: var(--black_border);
  .filter-box {
    max-width: 960px;
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
      border-right: var(--black_border);
      .v-select__selections input {
        font-size: 16px;
      }
      .v-input__slot:before {
        border: unset;
      }
    }
  }
}
</style>
