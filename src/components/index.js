import tooltipMe from './tooltipMe.vue'
import tooltipMeContent from './tooltipMeContent.vue'
import mitt from 'mitt';

export default {
  install: (app, options) => {
    if (!options) { options = {} }
    app.component('tooltip-me', tooltipMe)
    app.component('tooltip-me-content', tooltipMeContent)

    app.config.globalProperties.tipmitter = mitt();
  }
}