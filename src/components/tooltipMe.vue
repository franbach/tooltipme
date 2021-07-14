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
          delay: null,
          timeOutWaitUser: null,
          timeOutDelayProp: null
        }
      }
    },
    mounted() {
      // Waits for child's elements to be loaded
      // and then grabs the html element
      this.$nextTick(function() {
        this.tooltip.element = this.$el.querySelector('[tooltipme]');
        this.tooltip.hover = this.tooltip.element.getAttribute('hover');
        this.tooltip.delay = parseInt(this.tooltip.element.getAttribute('delay'));
      })

      // Receives the event from the tooltip-me-content with the
      // message if its paused or not meaning that the user
      // might be interactig with the tooltip 
      this.emitter.on("tooltipme-interaction", (event) => {
        this.closeMe(event);
      })
    },
    methods: {
      showMe() {
        setTimeout(() => { 
          this.resetTimers();
          this.show();
        }, this.tooltip.delay);
      },
      
      closeMe(e) {
        if (e == 'paused') {
          // If the event message comes with the value 'paused' then
          // we clear any setTimeout to prevent closing if there's any
          // timing function in place
          this.resetTimers();
        } else if (e == 'close') {
          // If the event message is 'close' means that the user was 
          // interacting with the tooltip but had leaved. 
          // So it closes at the delay time provided in the props.
          this._timeOutDelayProp();
        } else {
          if (this.tooltip.hover == 'false') {
            // If the developer set hover to 'false' then there will
            // be no interaction with the tooltip.
            this._timeOutDelayProp();
          } else {
            // If the developer set hover to 'true' then it waits up to 2s
            // for user interaction otherwise tooltip is closed.
            this._timeOutWaitUser();
          }
        }
      },

      _timeOutDelayProp() {
        this.timeOutDelayProp = setTimeout(() => { 
          this.hide()
        }, this.tooltip.delay );
      },

      _timeOutWaitUser() {
        this.timeOutWaitUser = setTimeout(() => { 
          this.hide()
        }, 2000 );
      },

      resetTimers() {
        clearTimeout(this.timeOutDelayProp);
        clearTimeout(this.timeOutWaitUser);
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