<template>
  <v-main id="app-page">
    <div id="page-layout">
      <div id="page-content">
        <router-view />
      </div>
    </div>
  </v-main>
</template>
<script>
export default {};
</script>
<style lang="scss">
#app-page {
  height: 100%;
  background-color: #fff;
  padding-top: 84px !important;
}
#page-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#page-content {
  flex: 1;
  display: flex;
  overflow: scroll;
  flex-direction: column;
}
</style>
