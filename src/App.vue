<template>
  <tooltip-me>
    <img alt="Vue logo" src="./assets/logo.png">
    <tooltip-me-content name="tooltipme" position="left" color="#c3c3c3" offset="24" class="tooltip-me-test">
      <p>TooltipMe</p>
    </tooltip-me-content>
  </tooltip-me>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
.tooltip-me-test {
  width: 100px;
  padding: 10px;
  border-radius: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>