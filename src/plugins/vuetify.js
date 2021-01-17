import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { es },
      current: 'es',
  },
  theme: {
    themes: {
      light: {
        
        primary: '#4890A8',
        secondary: '#373A42',
        comple: '#4869DB',

        compuestoA: '#4890A8',
        compuestoB: '#4869DB',
        compuestoC: '#373A42',
        compuestoD: '#B38F7A',
        compuestoE: '#DB6848',

        accent: '#82B1FF',
        error: '#FF5252',
        info: '#4BA3C7',
        success: '#24CBBC',
        warning: '#FFC107',

        while: '#FFFFFF',
        black: '#292929',
        black: '#292929',
        
      },
    },
  },
});
