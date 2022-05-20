import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

/**
 * @see https://color.adobe.com/Closeup-shot-of-a-hard-soap-with-bubbles-and-beautiful-color-textures-color-theme-20060976
 */
export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#02735E',
            secondary: '#034159',
            accent: '#0CF25D',
          },
        },
      },
});
