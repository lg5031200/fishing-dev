<template>
  <div id="app-layout">
    <app-header />
    <app-left-drawer />
    <app-right-drawer />
    <app-page />
  </div>
</template>
<script>
import AppPage from '../layout/AppPage';
import AppHeader from '../layout/AppHeader';
import AppLeftDrawer from '../layout/AppLeftDrawer';
import AppRightDrawer from '../layout/AppRightDrawer';

export default {
  props: ['headerType'],
  components: {
    'app-page': AppPage,
    'app-header': AppHeader,
    'app-left-drawer': AppLeftDrawer,
    'app-right-drawer': AppRightDrawer,
  },
};
</script>
<style lang="scss">
#app-layout {
  flex: 1;
  overflow: hidden;
}
</style>
