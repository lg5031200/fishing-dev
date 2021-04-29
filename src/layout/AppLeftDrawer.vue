<template>
  <v-navigation-drawer id="app-drawer" v-model="mainDrawer" app width="220">
    <v-navigation-drawer
      v-model="mainDrawer"
      absolute
      color="grey lighten-3"
      mini-variant
    >
      <v-icon
        class="d-block text-center mx-auto mt-4 "
        size="36"
        v-for="item in drawerItems"
        :key="item.title"
        @click="expandItemList(item)"
        color="grey darken-2"
        >{{ item.icon }}</v-icon
      >

      <v-divider class="mx-3 my-5"></v-divider>
    </v-navigation-drawer>

    <v-sheet
      color="grey lighten-5"
      height="72"
      width="100%"
      class="pt-5 text-h6"
      ><span class="pl-14 ml-4">{{ currentDrawerItem.title }}</span></v-sheet
    >

    <v-list class="pl-14" shaped>
      <v-list-item
        v-for="children in currentDrawerItem.children"
        :key="children.title"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ children.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapActions, mapState } from 'vuex';

import drawers from '../utils/drawers';

export default {
  data() {
    return {
      mainDrawer: true,
      currentDrawerItem: null,
    };
  },
  mounted() {
    this.expandItemList(drawers[0]);
  },
  methods: {
    ...mapActions(['TOGGLE_DRAWER']),
    expandItemList(drawerItem) {
      this.currentDrawerItem = drawerItem;
    },
  },
  computed: {
    ...mapState(['drawer']),
    DRAWER_STATE: {
      get() {
        return this.$store.getters.DRAWER_STATE;
      },
      set(newValue) {
        if (newValue === this.$store.getters.DRAWER_STATE) return;
        this.TOGGLE_DRAWER();
      },
    },
    drawerItems() {
      return drawers;
    },
  },
};
</script>
<style lang="scss">
#app-drawer {
}
</style>
