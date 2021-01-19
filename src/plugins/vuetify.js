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
        
 

        primary: '#143E5E',
        secondary: '#101591',
        comple: '#787BC4',

        compuestoA: '#143E5E',
        compuestoB: '#101591',
        compuestoC: '#252459',
        compuestoD: '#6B4C31',
        compuestoE: '#913910',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#4BA3C7',
        success: '#24CBBC',
        warning: '#807126',
        blackWhile:"#FFFFFF",
        while: '#FFFFFF',
        black: '#292929',
        
      },
      dark: {
        
        primary: '#0060BF',
        secondary: '#1E18F2',
        comple: '#787BC4',

        compuestoA: '#0060BF',
        compuestoB: '#1E18F2',
        compuestoC: '#787BC4',
        compuestoD: '#C77D32',
        compuestoE: '#F26618',

        accent: '#82B1FF',
        error: '#FF5252',
        info: '#4BA3C7',
        success: '#24CBBC',
        warning: '#FFD400',
        blackWhile:"#292929",
        while: '#FFFFFF',
        black: '#292929',
        
      },
    },
  },
});
