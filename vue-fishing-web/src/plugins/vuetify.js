import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg',
  },
  theme: {
    themes: {
      light: {
        primary: colors.teal,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
