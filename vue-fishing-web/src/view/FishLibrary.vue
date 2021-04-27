<template>
  <div id="fish-lib">
    <div>
      <v-img
        height="250"
        :lazy-src="imgSource"
        :src="imgSource"
        class="sea-img"
      />
    </div>
    <fish-filter-bar @fish-filter-params="saveFilterParams" />
    <fish-cards class="mt-4" :fishFilterParams="fishFilterParams"></fish-cards>
  </div>
</template>
<script>
import FishFilterBar from '../components/fish-lib/FishFilterBar';
import fishCards from '../components/fish-lib/FishCards';

export default {
  components: {
    'fish-cards': fishCards,
    'fish-filter-bar': FishFilterBar,
  },
  data() {
    return {
      fishFilterParams: [],
      imgSource:
        'https://images.unsplash.com/photo-1596273214323-a8486cce7c9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    };
  },
  methods: {
    saveFilterParams(params) {
      this.fishFilterParams = params;
    },
  },
};
</script>
<style lang="scss">
#fish-lib {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px !important;
  // overflow: hidden;
}
</style>
