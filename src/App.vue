<template>
  <tooltip-me>
    <img alt="Vue logo" src="./assets/logo.png">
    <tooltip-me-content :options="myOptions" class="tooltip-me-test">
      <p>TooltipMe</p>
    </tooltip-me-content>
  </tooltip-me>
  <tooltip-me>
    <img alt="Vue logo" src="./assets/logo.png">
    <tooltip-me-content :options="myOptions" class="tooltip-me-test">
      <p>TooltipMe</p>
    </tooltip-me-content>
  </tooltip-me>
  <tooltip-me>
    <img alt="Vue logo" src="./assets/logo.png">
    <tooltip-me-content :options="myOptions" class="tooltip-me-test">
      <p>TooltipMe</p>
    </tooltip-me-content>
  </tooltip-me>
  <tooltip-me>
    <img alt="Vue logo" src="./assets/logo.png">
    <tooltip-me-content :options="myOptions2" class="tooltip-me-test">
      <p>TooltipMe</p>
    </tooltip-me-content>
  </tooltip-me>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      myOptions: {
        color: '#44b785',
        position: 'bottom',
        offset: 50,
        travel: 3,
        delay: 500,
        speed: 300,
        hover: false,
        arrow: true
      },
      myOptions2: {
        color: '#44b785',
        position: 'bottom',
        offset: 50,
        travel: 3,
        delay: 500,
        speed: 300,
        hover: true,
        arrow: true
      }
    }
  }
}
</script>

<style>
.tooltip-me-test {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #33465a;
  width: 200px;
  height: 50px;
  border-radius: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
}
</style>