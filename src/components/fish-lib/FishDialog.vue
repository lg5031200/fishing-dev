<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    @click:outside="closeDialog"
    @keydown.esc="closeDialog"
  >
    <v-card class="pa-4">
      <v-row>
        <v-col class="d-flex flex-column align-center">
          <v-img
            contain
            width="200"
            :src="source(selectedFishData.imageSrc)"
          ></v-img>
        </v-col>
        <v-col>
          <v-card-title class="text-h5">
            <span>{{ selectedFishData.zh_name }}</span>
          </v-card-title>

          <v-chip
            v-for="(category, index) in selectedFishData.category"
            :key="index"
            color="#2196F3"
            class="ml-4"
            outlined
            small
            >{{ fishCategoryTempForamt[category] }}
          </v-chip>

          <v-card-subtitle v-text="selectedFishData.en_name"></v-card-subtitle>

          <v-card-text style="line-height: 2">{{
            selectedFishData.introduction
          }}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ['dialog', 'selectedFishData'],
  data() {
    return {
      fishCategoryTempForamt: {
        SEA_WATER: '深海',
        FRESH_WATER: '淡水',
        BIG: '大型',
        MEDIUM: '中型',
        SMALL: '小型',
        OMNIVORE: '雜食性',
        MEAT: '食肉性',
        HERBIVOROUS: '草食性',
      },
    };
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
    source(imageNum) {
      return require(`../../assets/${imageNum}.png`);
    },
  },
};
</script>
<style lang="scss">
.hide-text {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
