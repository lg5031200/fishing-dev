<template>
  <v-app-bar app clipped-right flat height="84" class="white" id="app-bar">
    <div class="d-flex align-center ml-4">
      <v-img
        alt="fish Logo"
        class="shrink mr-4 animate__animated animate__bounceInRight animate__delay-0.5s"
        src="../assets/logo.png"
        width="60"
      />

      <h2 class="animate__animated animate__bounceInRight animate__delay-0.5s">
        魚 の 圖 鑑
      </h2>
    </div>

    <v-spacer></v-spacer>

    <v-responsive max-width="300" style="margin-right: 80px">
      <v-text-field
        flat
        dense
        rounded
        hide-details
        solo-inverted
        clearable
        @click:clear="clearSearchTerm"
        prepend-icon="mdi-magnify"
        label="Search"
        v-model="searchTerm"
        @keydown.enter="searchFishByTerm"
      ></v-text-field>
    </v-responsive>

    <v-btn class="mr-4" color="primary" text> 關於我們 </v-btn>

    <v-btn class="mr-4" color="primary" text> 註冊 </v-btn>

    <!-- <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar v-bind="attrs" v-on="on">
          <v-icon size="36" color="primary"> mdi-account-circle </v-icon>
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
    </v-menu> -->
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
          text: '個人資訊',
        },
        {
          text: '登出',
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
