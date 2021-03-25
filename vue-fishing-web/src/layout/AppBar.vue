<template>
  <v-app-bar app clipped-right flat height="72" dark class="grey darken-3">
    <div class="d-flex align-center ml-4">
      <v-img
        alt="fish Logo"
        class="shrink mr-4"
        src="../assets/fish-logo.jpg"
        width="40"
        style="border-radius: 10px"
      />

      <h1>Fish Lib</h1>
    </div>

    <v-spacer></v-spacer>

    <v-responsive max-width="156" class="mr-4">
      <v-text-field
        flat
        dense
        rounded
        hide-details
        solo-inverted
        prepend-icon="mdi-magnify"
      ></v-text-field>
    </v-responsive>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar v-bind="attrs" v-on="on">
          <v-icon dark size="36">
            mdi-account-circle
          </v-icon>
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
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
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
};
</script>
