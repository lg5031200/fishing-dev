<template>
  <v-navigation-drawer
    id="app-drawer"
    app
    clipped
    v-model="DRAWER_STATE"
    :width="sidebarWidth"
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.smAndDown"
    :class="{ 'drawer-mini': !DRAWER_STATE }"
  >
    <v-list nav dense>
      <v-list-item
        link
        :key="item.title"
        v-model="item.model"
        v-for="item in drawerItems"
        append-icon=""
      >
        <v-list-item-icon>
          <v-icon>{{ mdiPuzzle }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex';
import { mdiPuzzle } from '@mdi/js';

import leftDrawers from '../utils/drawer';

export default {
  data() {
    return {
      mdiPuzzle,
      sidebarWidth: 240,
    };
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
      console.log(leftDrawers);
      return leftDrawers;
    },
  },
};
</script>
<style lang="scss">
#app-drawer {
  top: 64px !important;
  height: calc(100vh - 64px) !important;

  .v-list-item__icon,
  .v-list-item__action {
    margin-right: 16px;
  }

  .drawer-content-menu {
    .v-list-group__items {
      .v-list-item {
        padding-left: 64px;
      }
      .v-list-item--active {
        color: black !important;
      }
    }
  }

  .v-navigation-drawer__content {
    display: flex;
    position: relative;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 36px;
      border: none;
    }
  }
  .v-list {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .v-list-item {
    flex: none;
  }
  .v-list-item:not(.v-list-item--active) {
    .v-icon {
      color: grey;
    }
  }
  .v-list-item--active {
    .v-list-item__content {
      .v-list-item__title {
        color: grey !important;
      }
    }
  }

  &.drawer-mini {
    .v-list {
      div,
      a {
        &.v-list-item {
          color: grey;
          transition: 300ms all;
          padding-left: 32 / 4;
        }
      }
    }
  }
  .v-list {
    div,
    a {
      &.v-list-item {
        padding-left: 32;
      }
      a.v-list-item {
        padding-left: 32 * 2;
      }
    }
  }

  .subheader {
    color: grey;
    transition: 300ms all;
  }
}
</style>
