<template>
  <div class="tooltip-me-root" @mouseenter="showMe" @mouseleave="closeMe">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tooltipMe',
    props: {
      name: String,
    },
    data() {
      return {
        tooltip: {
          element: null,
          hover: null,
          delay: null
        }
      }
    },
    mounted() {
      // Waits for child's elements to be loaded
      // and then grabs the html element
      this.$nextTick(function() {
        this.tooltip.element = this.$el.querySelector('[tooltipme]');
        this.tooltip.hover = this.tooltip.element.getAttribute('hover');
        this.tooltip.delay = this.tooltip.element.getAttribute('delay');
      })
    },
    methods: {
      showMe() {
        this.sleep(this.tooltip.delay).then(() => { this.show() });
      },

      closeMe() {
        this.sleep(this.tooltip.delay).then(() => { this.hide(); });
      },

      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },

      show() {
        this.tooltip.element.classList.remove("tooltip-me-off");
        this.tooltip.element.classList.remove("tooltip-me-hide");
        this.tooltip.element.classList.add("tooltip-me-show");
      },

      hide() {
        this.tooltip.element.classList.remove("tooltip-me-show");
        this.tooltip.element.classList.add("tooltip-me-hide");
        this.tooltip.element.classList.add("tooltip-me-off");
      }

    }
  }
</script>

<style lang="css">
  .tooltip-me-root {
    position: relative;
    display: inline-block;
    cursor: default;
  }
</style>