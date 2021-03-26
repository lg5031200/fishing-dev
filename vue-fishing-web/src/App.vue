<template lang="html">
  <v-app id="app" dark>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  user-select: none;
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
