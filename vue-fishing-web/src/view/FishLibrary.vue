<template>
  <div id="fish-lib">
    <fish-filter-bar />
    <fish-cards class="mt-4"></fish-cards>
  </div>
</template>
<script>
import FishFilterBar from "../components/fish-lib/FishFilterBar";
import fishCards from "../components/fish-lib/FishCards";

export default {
  components: {
    "fish-cards": fishCards,
    "fish-filter-bar": FishFilterBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
#fish-lib {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
