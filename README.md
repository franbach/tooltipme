# TooltipMe
## _A simlple and easy to use tooltip for Vue 3_
#### Made 100% with Vue!

- Made entirely with Vue 3
- A bit of vanilla Javascript
- and sprinkles off CSS

## Installation

Make sure you are working with Vue3 [VueJS 3](https://v3.vuejs.org/)

```sh
npm install tooltip-me
```

## Usage

In your main.js file
```
import TooltipMe from 'tooltip-me'
app.use(TooltipMe)
```

In your Vue component
```
<tooltip-me>
  ...
  <!-- Any html here that will serve to trigger the tooltip -->
  <i class="las la-exclamation-circle"></i>
  ...
  <tooltip-me-content name="tooltip-name" position="bottom" color="#c3c3c3" offset="12" travel="3" class="any css class here that shapes the tooltip body">
    ...
    <!-- You can put any kind of html code here, including async code. -->
    <p>It is just another div</p>
    ...
  </tooltip-me-content>
<tooltip-me>
```

### Configuration
* **[name]** put any name you want for the tooltip
* **[position]** there are four. (top, bottom, right, left)
* **[color]** chose a base color for the tooltip. Accepts HEX and RGBA
* **[offset]** the distance from the trigger object(HTML tag)
* **[shift]** move the body tooltip relative to the arrow. Up or dow, left or right depending of the tooltip position. Values from 0 to 100. Default is 50(middle). This attribute is optional.
* **[travel]** the distance that the tooltip travels. Values from 0 to 100. Default is 10. This attribute is optional.
* #### [Check example!](https://codesandbox.io/s/ylfpv?file=/src/App.vue)

## License

[MIT](./LICENSE) © franbach