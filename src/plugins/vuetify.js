import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

// see icons on https://materialdesignicons.com/
import {mdiPig} from "@mdi/js";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    // Vuetify will use SVG icons
    // https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/services/icons/presets/mdi-svg.ts
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    values: {
      pig: mdiPig, // add custom icon to $vuetify
    }
  },
  theme: {
      options: {
        customProperties: true,
        sassOptions:{ gutters: 24 }
      },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
    lang: {
      locales: { ru },
      current: 'ru',
    },
});
