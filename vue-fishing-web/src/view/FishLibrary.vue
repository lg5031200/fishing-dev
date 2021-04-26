<template>
  <div id="fish-lib">
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
  overflow: hidden;
}
</style>
