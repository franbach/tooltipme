# TooltipMe

[![Vue 3.x](https://img.shields.io/badge/Vue-3.x-blueviolet.svg)](https://v3.vuejs.org/guide/introduction.html)
[![npm](https://img.shields.io/npm/v/tooltip-me)](https://www.npmjs.com/package/tooltip-me)
[![npm](https://img.shields.io/npm/dm/tooltip-me)](https://www.npmjs.com/package/tooltip-me)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/franbach/tooltipme/blob/master/LICENSE.md)

## _A simple and easy to use tooltip for Vue 3_
#### Made 100% with Vue!

- Made entirely with Vue 3
- A bit of vanilla Javascript
- and sprinkles off CSS

## Installation

Make sure you are working with [VueJS 3](https://v3.vuejs.org/)

```sh
npm install tooltip-me
```

## Usage

In your main.js file
```js
import TooltipMe from 'tooltip-me'
app.use(TooltipMe)
```

So then you can use like this...
```vue
<template>
  <!-- 
    use '<tooltip-me>' to wrap the html element you want to be
    the tooltip trigger
  -->
  <tooltip-me>
    <!-- element that will trigger the tooltip -->
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- 
      This is the tooltip itself. It wont be visible as long 
      the user don't hover the triggering element.
      In this example we are returning a data object 'myOptions' 
      as our tooltip options. 
    -->
    <tooltip-me-content :options="myOptions" class="tooltip-me-test">
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
        offset: 24,
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
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
}
</style>
```

# Options available

#### `name {String}`
name your tooltip

**Default**: `'default'`

#### `color {String}`
tooltip color. Hex or Rgba string

**Default**: `'#ccc'`

#### `position {String}`
4 positions available: top, right, bottom, left

**Default**: `'top'`

#### `offset {String or Integer}`
the distance from the html element

**Default**: `12`

#### `shift {String or Integer}`
move the body tooltip relative to the arrow. Up or dow, left or right

**Default**: `50`

#### `move {String or Integer}`
move the whole tooltip including arrow relative to the trigger element. Up or dow, left or right

**Default**: `50`

#### `travel {String or Integer}`
the distance that the tooltip travels

**Default**: `3`

#### `delay {String or Integer}`
its the amount of time the tooltip waits to show and hide in ms.

**Default**: `300`

#### `speed {String or Integer}`
speed in which the tooltip appears after the delay

**Default**: `700`

#### `hover {Boolean}`
it prevents the tooltip from closing if the user is hovering it

**Default**: `false`

#### `arrow {Boolean}`
make the tooltip arrow visible or not

**Default**: `true`

* #### [Check example!](https://codesandbox.io/s/ylfpv?file=/src/App.vue)

## License

[MIT](./LICENSE.md) © franbach