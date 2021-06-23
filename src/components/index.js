import tooltipMe from './tooltipMe.vue'
import tooltipMeContent from './tooltipMeContent.vue'

export default {
  install: (app, options) => {
    if (!options) { options = {} }
    app.component('tooltip-me', tooltipMe)
    app.component('tooltip-me-content', tooltipMeContent)
  }
}