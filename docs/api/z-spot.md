---
sidebarDepth: 2
---

# z-spot

## Description
<img :src="$withBase('/z-spot.png')" style="clear: right; margin-top: 20px; float:right" width="250px"/>

By default this component allows to zoom-in to a new view. In other words is a zoomable component to go to another view. Inside a `z-spot` you can nest other [z-spot](#z-spot). Currently, `z-list` is not available for `z-spot`  

### Zoom-in to a new view 
By default, `z-spot` is made to perform a zoom transition to another view. You need to use the property `to-view` indicating the name of the view you want to go. Also, is it possible to pass params that work with or without vue-router.

If you want to point a view to go, simply use `to-view` as `string` with the view name (it is not case sensitive). In case, you need to pass some params it is necesary to use an `object` in `to-view` as follows:

```js
to-view: "{ 
	name: 'device', 
	params: { 
		key: value,
		key: value
	}
}"
```

Then in the target view, you can retrieve the params using `$zircle.getParams()`

### Positioning
`z-spot` is positionated according its parent component (a `z-view`or a `z-spot`). Having that in mind, you need to use two properties: `angle` and `distance`.

To precise an `angle` put any value between 0 and 360 degrees (also, could be a negative degree). See the diagram provided.

<img :src="$withBase('/angles.png')" style="margin-top: 20px; display: block; margin-left: auto; margin-right: auto; width: 50%;"/>

The `distance`  is a numeric value that represent the percentage of distance from the parent component. By default the `z-spot` has the 100% of distance. That it means that the center of the `z-spot` is placed exactly in the tangent of the parent component. 

### Modifying the size
By default the diameter of the `z-spot` is `medium`. To change it, simply use the property `size` with any of the following values: 
- `xxl`, 
- `xl`, 
- `l` or `large`, 
- `m` or `medium`, 
- `s` or `small`, 
- `xs`, 
- `xxs`

### z-spot as button
This component can mutate its default behaviour to run as `button`. To enabled it set the property `button` as `true`.

In addition, you should add a [vue event](https://vuejs.org/v2/guide/events.html) when `button` is pressed.

### z-spot as knob

As happens with `button`, `z-spot`  can be a `knob`. As its name suggests this component displays an interactive circular progress bar with a circular handler. Usefull to create controls like volume, dimmers, etc.

To enabled it set the property `knob` as `true` and optionally provide its initial value using the property `qty`. By default the `z-knob` has a range of 0-100 and show the current value in its label. 

```html
<z-spot
	knob
	qty:"56" >
</z-spot>
```

You may need to customize the knob values: range values, unit displayed and where to show the current value. In that case, you can pass an `object`.

Here you have to pay atention at [v-bind.sync](#) which is a vue property that allows us to pass and object using two-ways communication.

As [Vue indicates](https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier) you can't use `v-bind.sync` with a literal object, such as `v-bind.sync=”{ qty: 24, unit: '˚C', min: 18, max: 32 }”`, you need to use an object data.

```html
<z-spot
	knob
	v-bind.sync: "temperature" >
</z-spot>
```

```js
vm.temperature = {qty: 24, unit: '˚C', min: 18, max: 32}
```

### Organize your content
As happens with `z-view`, in a `z-spot` you can place different kind of contents. However media is not available.

#### slot.default
Tipically, the content you put inside a `z-spot` will be catched by a default Vue slot. In case the content is larger than the view container, it will be hidden. 

#### slot.extension
This slot allows to nest other **zircle ui** components. If you want to add just one element add the slot name in the element. In case you need to add more elementes, you can create a wrap element with the slot name.

#### property imagePath
In case you want to add an image background `z-view` offers two options: the **`slot.image`** or the property **`imagePath`**.

#### property.label
Finally, it is possible to add a label to `z-spot` that could be positionated in the top, left, right or botton of the `z-spot`. When you use the property **`label`** the default position is the bottom of the `z-spot`. 

#### property.labelPos
If you want put the label in a different place, use the property **`labelPos`** with your prefered value: 'top', 'left', 'bottom', 'right'


### Content layers

OYou can see a diagram that shows how the content is placed. The `slot.image` is on the bottom, then the `slot.default`, and the `slot.extension`. 

<img :src="$withBase('/z-spot-layers.png')" style="margin-top: 20px; display: block; margin-left: auto; margin-right: auto; width: 50%;"/>

### Slider
`z-spot` has a child component named `z-slider` that allow to show a circular progress bar around its perimeter. You need to set `true` the property `slider` and use the property `progress` with a value. 

### Caveats
- Currently, `z-spot` doesn't have `slot.media` so is not possible to add rich media (however you can put rich media using `slot.default`). 

- Also, if the content is larger than the `z-spot` container, it won't be scrollable. 

- Finally, you can't nest a `z-list` component inside a `z-spot`.

- The idea behind `z-spot` is that it should be a component to perform a transition to another view that by design doesn't have any of the above caveats. Having said that, all this limitations may be overcome in further releases.

::: tip
`z-spot` is the viewport of the next view. So, when you design a view and include a `z-spot` maybe is good to provide some hints of what it will see next. 
:::

## Usage

```html
<z-spot
  :angle="45"
  :distance="140"
  size="large"
  to-view="bar">
</z-spot>
```

## Props

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `toView` | String, Object | undefined | False | This works as a link. When refered to a view (e.g: 'home') it zooms to home's view. If the view is not found a '404 view' will be generated.
| `distance` | Number | 100 | False | Is the distance from the center of the `z-view`. 100 means 100%.
| `angle` | Number | 0 | False | Is the angle of the `z-scale`. Accepts any number value positive or negative (ej: 345, -567)
| `size` | String | small | False | Represent the diameter of the `z-scale`component. Values: 'large', 'medium', 'small', 'extrasmall'
| `imagePath` | String | primary | False | Use this mixin to provide a path to an image.
| `label` | String | primary | False | This mixin provides a label which is situated at the bottom of the view. 
| `knob` | Boolean | False | No | When it is `true` a range knob is shown.
| `slider` | Boolean | False | No | When it is `true` a circular slider is shown.
| `progress` | Number | 0 | No | progress works when range or slider are enabled and gives them the initial value

## Slots

| Slot | Description
| :--- | :--- |
| `default` | Default Vue Slot. It is used to put any kind of content such as text, icons, etc. 
| `extension` | It is used when you nest other `<z-spot>` components.
