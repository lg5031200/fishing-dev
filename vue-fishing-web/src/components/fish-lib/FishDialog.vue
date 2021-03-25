<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="800"
    persistent
  >
    <template>
      <v-card>
        <v-toolbar color="primary" dark>我不知道我叫啥魚</v-toolbar>
        <v-card-text>
          <div class="text-h6 pa-12">我是一篇長長的介紹文</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn class="primary lighten-1" @click="closeDialog">不看了</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  props: ['dialog'],
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
  },
};
</script>
