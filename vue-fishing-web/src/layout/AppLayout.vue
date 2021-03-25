<template>
  <div id="app-layout">
    <app-bar />
    <app-left-drawer />
    <app-right-drawer />

    <app-page />

    <v-footer app color="transparent" height="72" inset>
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field>
    </v-footer>
  </div>
</template>

<script>
import AppPage from '../layout/AppPage';
import AppBar from '../layout/AppBar';
import AppLeftDrawer from '../layout/AppLeftDrawer';
import AppRightDrawer from '../layout/AppRightDrawer';

export default {
  components: {
    'app-page': AppPage,
    'app-bar': AppBar,
    'app-left-drawer': AppLeftDrawer,
    'app-right-drawer': AppRightDrawer,
  },
};
</script>

<style lang="scss">
#app-layout {
  flex: 1;
  overflow: hidden;
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
