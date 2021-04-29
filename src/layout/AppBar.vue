<template>
  <v-app-bar app clipped-right flat height="84" class="white" id="app-bar">
    <div class="d-flex align-center">
      <v-img
        alt="fish Logo"
        class="shrink mr-4 animate__animated animate__bounceInRight animate__delay-0.5s"
        src="../assets/logo.png"
        width="50"
      />
      <h3
        class="animate__animated animate__bounceInRight animate__delay-0.5s d-none d-sm-flex"
      >
        魚 の 圖 鑑
      </h3>
    </div>

    <v-spacer></v-spacer>

    <v-responsive max-width="200" class="mr-4">
      <v-text-field
        flat
        dense
        rounded
        hide-details
        solo-inverted
        clearable
        @click:clear="clearSearchTerm"
        prepend-inner-icon="mdi-magnify"
        placeholder="Search Fish"
        v-model="searchTerm"
        @keydown.enter="searchFishByTerm"
      ></v-text-field>
    </v-responsive>

    <div class="d-none d-sm-none d-sm-flex">
      <v-btn class="mr-4 " color="primary" text>關於我們</v-btn>
      <v-btn class="mr-4" color="primary" text> 註冊 </v-btn>
    </div>

    <div class="my-2 d-flex d-sm-none">
      <v-menu
        :nudge-width="100"
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on">
            <v-icon size="24">mdi-menu</v-icon>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item
            v-for="menuItem in menuItems"
            :key="menuItem.text"
            @click="clickMenu(menuItem)"
          >
            <v-list-item-title>{{ menuItem.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      searchTerm: null,
      menuItems: [
        {
          text: '關於我們',
        },
        {
          text: '註冊',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['SET_FISH_TERM']),
    searchFishByTerm() {
      this.SET_FISH_TERM(this.searchTerm);
    },
    clearSearchTerm() {
      this.SET_FISH_TERM(null);
    },
  },
};
</script>
<style lang="scss">
#app-bar {
}
</style>
