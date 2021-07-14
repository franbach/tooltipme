<template>
  <div :tooltipme="`tooltip-me_${this.settings.name}`" @mouseenter="pauseMe()" @mouseleave="hideMe()" 
    :style="cssProps" 
    :hover="this.settings.hover" 
    :delay="this.settings.delay" 
    class="tooltip-me tooltip-me-position tooltip-me-off">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tooltipMeContent',
    props: {
      options: Object
    },
    data() {
      return {
        settings: {
          name: 'default',
          color: '#ccc',
          position: 'top',
          move: '50',
          offset: '12',
          shift: '50',
          travel: '10',
          delay: '300',
          speed: '700',
          hover: false,
          arrow: true
        }
      }
    },
    methods: {
      pauseMe() {
        this.emitter.emit("tooltipme-interaction", 'paused');
      },
      hideMe() {
        this.emitter.emit("tooltipme-interaction", 'close');
      }
    },
    computed: {
      cssProps() {
        // Ensures that user options are merged with the defaults
        // settings in case of the user not assinging all of them.
        Object.assign(this.settings, this.options);
        if (this.settings.position == 'top') {
          return {
            '--top': '',
            '--right': '',
            '--left': this.settings.move + '%',
            '--bottom': '100%',
            '--offset': `0px 0px ${this.settings.offset + "px"} 0px`,
            '--translate': `translate(-${this.settings.shift}%)`,
            '--baseColor': this.settings.color,
            '--colorT': this.settings.arrow ? this.settings.color : 'transparent',
            '--colorR': 'transparent',
            '--colorB': 'transparent',
            '--colorL': 'transparent',
            '--arrowT': '100%',
            '--arrowR': '',
            '--arrowB': '',
            '--arrowL': this.settings.shift + '%',
            '--translateArrow': 'translate(-50%)',
            '--animation_hide': 'top-hide',
            '--animation_show': 'top-show',
            '--travel': this.settings.travel + '%',
            '--hover': this.settings.hover ? 'auto' : 'none',
            '--speed': this.settings.speed + 'ms'
          }
        }
        if (this.settings.position == 'right') {
          return {
            '--top': this.settings.move + '%',
            '--right': '',
            '--left': '100%',
            '--bottom': '',
            '--offset': `0px 0px 0px ${this.settings.offset + "px"}`,
            '--translate': `translate(0, -${this.settings.shift}%)`,
            '--baseColor': this.settings.color,
            '--colorT': 'transparent',
            '--colorR': this.settings.arrow ? this.settings.color : 'transparent',
            '--colorB': 'transparent',
            '--colorL': 'transparent',
            '--arrowT': this.settings.shift + '%',
            '--arrowR': '100%',
            '--arrowB': '',
            '--arrowL': '',
            '--translateArrow': 'translate(0, -50%)',
            '--animation_hide': 'right-hide',
            '--animation_show': 'right-show',
            '--travel': this.settings.travel + '%',
            '--hover': this.settings.hover ? 'auto' : 'none',
            '--speed': this.settings.speed + 'ms'
          }
        }
        if (this.settings.position == 'bottom') {
          return {
            '--top': '100%',
            '--right': '',
            '--left': this.settings.move + '%',
            '--bottom': '',
            '--offset': `${this.settings.offset + "px"} 0px 0px 0px`,
            '--translate': `translate(-${this.settings.shift}%)`,
            '--baseColor': this.settings.color,
            '--colorT': 'transparent',
            '--colorR': 'transparent',
            '--colorB': this.settings.arrow ? this.settings.color : 'transparent',
            '--colorL': 'transparent',
            '--arrowT': '',
            '--arrowR': '',
            '--arrowB': '100%',
            '--arrowL': this.settings.shift + '%',
            '--translateArrow': 'translate(-50%)',
            '--animation_hide': 'bottom-hide',
            '--animation_show': 'bottom-show',
            '--travel': this.settings.travel + '%',
            '--hover': this.settings.hover ? 'auto' : 'none',
            '--speed': this.settings.speed + 'ms'
          }
        }
        if (this.settings.position == 'left') {
          return {
            '--top': this.settings.move + '%',
            '--right': '100%',
            '--left': '',
            '--bottom': '',
            '--offset': `0px ${this.settings.offset + "px"} 0px 0px`,
            '--translate': `translate(0, -${this.settings.shift}%)`,
            '--baseColor': this.settings.color,
            '--colorT': 'transparent',
            '--colorR': 'transparent',
            '--colorB': 'transparent',
            '--colorL': this.settings.arrow ? this.settings.color : 'transparent',
            '--arrowT': this.settings.shift + '%',
            '--arrowR': '',
            '--arrowB': '',
            '--arrowL': '100%',
            '--translateArrow': 'translate(0, -50%)',
            '--animation_hide': 'left-hide',
            '--animation_show': 'left-show',
            '--travel': this.settings.travel + '%',
            '--hover': this.settings.hover ? 'auto' : 'none',
            '--speed': this.settings.speed + 'ms'
          }
        }
        return true;
      }
    },
  }
</script>

<style lang="css">
  /* Base */
  .tooltip-me {
    position: absolute;
    z-index: 999;
    background-color: var(--baseColor);
    pointer-events: var(--hover);
  }

  /* Arrow */
  .tooltip-me::after {
    content: ' ';
    width: 0px;
    height: 0px;
    border-top: 10px solid var(--colorT);
    border-left: 10px solid var(--colorL);
    border-bottom:10px solid var(--colorB);
    border-right: 10px solid var(--colorR);
    position: absolute;
    top: var(--arrowT);
    right: var(--arrowR);
    bottom: var(--arrowB);
    left: var(--arrowL);
    transform: var(--translateArrow);
  }

  /* Positioning */
  .tooltip-me-position {
    top: var(--top);
    left: var(--left);
    right: var(--right);
    bottom: var(--bottom);
    margin: var(--offset);
    transform: var(--translate);
  }

  /* Animation Control */
  .tooltip-me-off {
    visibility: hidden;
  }
  .tooltip-me-hide {
    animation: var(--animation_hide);
    animation-duration: var(--speed);
    pointer-events: none;
  }
  .tooltip-me-show {
    animation: var(--animation_show);
    animation-duration: var(--speed);
  }

  /* Animation for Top */
  @keyframes top-show {
    0% {
      visibility: hidden;
      opacity: 0;
      bottom: calc(var(--bottom) - var(--travel));
      pointer-events: none;
    }
    100% { 
      visibility: visible;
      opacity: 1;
      bottom: var(--bottom);
      pointer-events: var(--hover);
    }
  }

  @keyframes top-hide {
    0% { 
      visibility: visible;
      opacity: 1;
      bottom: var(--bottom);
    }
    100% { 
      visibility: hidden;
      opacity: 0;
      bottom: calc(var(--bottom) - var(--travel));
    }
  }

  /* Animation for Bottom */
  @keyframes bottom-show {
    0% { 
      visibility: hidden;
      opacity: 0;
      top: calc(var(--top) - var(--travel));
      pointer-events: none;
    }
    100% { 
      visibility: visible;
      opacity: 1;
      top: var(--top);
      pointer-events: var(--hover);
    }
  }

  @keyframes bottom-hide {
    0% { 
      visibility: visible;
      opacity: 1;
      top: var(--top);
    }
    100% { 
      visibility: hidden;
      opacity: 0;
      top: calc(var(--top) - var(--travel));
    }
  }

  /* Animation for Left */
  @keyframes left-show {
    0% { 
      visibility: hidden;
      opacity: 0;
      right: calc(var(--right) - var(--travel));
      pointer-events: none;
    }
    100% { 
      visibility: visible;
      opacity: 1;
      right: var(--right);
      pointer-events: var(--hover);
    }
  }

  @keyframes left-hide {
    0% { 
      visibility: visible;
      opacity: 1;
      right: var(--right);
    }
    100% { 
      visibility: hidden;
      opacity: 0;
      right: calc(var(--right) - var(--travel));
    }
  }

  /* Animation for Right */
  @keyframes right-show {
    0% { 
      visibility: hidden;
      opacity: 0;
      left: calc(var(--left) - var(--travel));
      pointer-events: none;
    }
    100% { 
      visibility: visible;
      opacity: 1;
      left: var(--left);
      pointer-events: var(--hover);
    }
  }

  @keyframes right-hide {
    0% { 
      visibility: visible;
      opacity: 1;
      left: var(--left);
    }
    100% { 
      visibility: hidden;
      opacity: 0;
      left: calc(var(--left) - var(--travel));
    }
  }
</style>