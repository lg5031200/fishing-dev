<template>
  <div id="app-layout">
    <app-bar />
    <!-- <app-left-drawer /> -->
    <!-- <app-right-drawer /> -->

    <app-page />
  </div>
</template>

<script>
import AppPage from '../layout/AppPage';
import AppBar from '../layout/AppBar';
// import AppLeftDrawer from '../layout/AppLeftDrawer';
// import AppRightDrawer from '../layout/AppRightDrawer';

export default {
  components: {
    'app-page': AppPage,
    'app-bar': AppBar,
    // 'app-left-drawer': AppLeftDrawer,
    // 'app-right-drawer': AppRightDrawer,
  },
};
</script>

<style lang="scss">
#app-layout {
  flex: 1;
  overflow: hidden;
}
</style>
